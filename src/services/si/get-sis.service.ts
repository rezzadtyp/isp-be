import prisma from "../../prisma";

export const getServiceInstancesService = async () => {
  try {
    const sis = await prisma.serviceInstance.findMany();

    return sis;
  } catch (error) {
    throw error;
  }
};
