import { prismaApp as prisma } from "@/db/prisma-client";

const categoryRepositoryFactory = () => {
  return Object.freeze({ getAll });

  async function getAll(userId: string) {
    const categories = await prisma.category.findMany({
      where: {
        userId: userId,
      },
      select: {
        id: true,
        type: true,
        name: true,
        userId: true,
      },
    });

    return categories;
  }
};

const categoryRepository = categoryRepositoryFactory();

export default categoryRepository;
