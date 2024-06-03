import { ServiceInstance } from "@prisma/client";
import prisma from "../../prisma";

interface CreateServiceInstanceBody
  extends Omit<ServiceInstance, "id" | "startDate" | "deactivationDate"> {}

export const createServiceInstanceService = async (
  body: CreateServiceInstanceBody
) => {
  try {
    const { customerId, packetId, expiryDate } = body;

    const customer = await prisma.customer.findFirst({
      where: { id: Number(customerId) },
    });

    if (!customer) {
      throw new Error("customer not found");
    }

    const expired = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    return await prisma.serviceInstance.create({
      data: {
        ...body,
        customerId: Number(customerId),
        packetId: Number(packetId),
        expiryDate: expired,
      },
      include: {
        customer: true,
        packet: true,
      },
    });
  } catch (error) {
    throw error;
  }
};
