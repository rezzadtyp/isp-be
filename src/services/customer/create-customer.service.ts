import { Customer } from "@prisma/client";
import prisma from "../../prisma";

interface CreateCustomerBody
  extends Omit<Customer, "id" | "deletedAt" | "createdAt" | "updatedAt"> {}

export const createCustomerService = async (body: CreateCustomerBody) => {
  try {
    const { email, userId } = body;

    const existingEmail = await prisma.customer.findFirst({
      where: { email },
    });

    if (existingEmail) {
      throw new Error("email already in use");
    }

    const user = await prisma.user.findFirst({
      where: { id: Number(userId) },
    });

    if (!user) {
      throw new Error("user not found");
    }

    return await prisma.customer.create({
      data: {
        ...body,
        userId: Number(userId),
      },
    });
  } catch (error) {
    throw error;
  }
};
