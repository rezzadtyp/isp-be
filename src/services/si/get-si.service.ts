import prisma from "../../prisma";

export const getServiceInstanceService = async (id: number) => {
  try {
    const si = await prisma.serviceInstance.findFirst({
      where: { id },
    });

    if (!si) {
      throw new Error("service instance not found");
    }

    return si;
  } catch (error) {
    throw error;
  }
};
