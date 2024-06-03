import prisma from "../../prisma";

export const getCustomersService = async () => {
  try {
    const customers = await prisma.customer.findMany();

    return customers;
  } catch (error) {
    throw error;
  }
};
