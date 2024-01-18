import { prismaApp as prisma } from "@/db/prisma-client";
import { Category } from "@/entities/category";

const categoryRepositoryFactory = () => {
  return Object.freeze({ getAll, add, edit, remove });

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

  async function add(userId: string) {
    const result = await prisma.category.create({
      data: {
        name: "",
        userId: userId,
      },
    });

    return result as Category;
  }

  async function edit(category: Category, userId: string) {
    const result = await prisma.category.update({
      where: {
        id: category.id,
        userId: userId,
      },
      data: category,
    });

    return result as Category;
  }

  async function remove(categoryId: string, userId: string) {
    const result = await prisma.category.delete({
      where: {
        id: categoryId,
        userId: userId,
      },
    });

    return result as Category;
  }
};

const categoryRepository = categoryRepositoryFactory();

export default categoryRepository;
