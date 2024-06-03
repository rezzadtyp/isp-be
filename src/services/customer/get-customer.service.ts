import prisma from "../../prisma";

export const getCustomerService = async (id: number) => {
  try {
    const customer = await prisma.customer.findFirst({
      where: { id },
    });

    if (!customer) {
      throw new Error(`cannot find customer with id ${id}`);
    }

    return customer;
  } catch (error) {
    throw error;
  }
};
