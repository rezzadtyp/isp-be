import { Customer } from "@prisma/client";
import prisma from "../../prisma";

export const updateCustomerService = async (
  id: number,
  body: Partial<Customer>
) => {
  try {
    const { email } = body;
    const customer = await prisma.customer.findFirst({
      where: { id },
    });

    if (!customer) {
      throw new Error("Customer not found");
    }

    if (email) {
      const customerEmail = await prisma.customer.findFirst({
        where: { email: { equals: email } },
      });
      if (customerEmail) {
        throw new Error("Email already in use");
      }
    }

    const update = await prisma.customer.update({
      where: { id },
      data: { ...body },
    });

    return {
      message: "update customer data success",
      data: update,
    };
  } catch (error) {
    throw error;
  }
};
