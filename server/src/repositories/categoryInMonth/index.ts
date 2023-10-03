import { ICategoryInMonth } from "@/entities/categoryInMonth";
import { prismaApp as prisma } from "@/db/prisma-client";

const categoryInMonthRepositoryFactory = () => {
  return Object.freeze({
    getByMonth,
    addEmpty,
    deleteById,
    edit,
  });

  async function getByMonth(
    monthId: string,
    userId: string
  ): Promise<ICategoryInMonth[]> {
    const categories = await prisma.categoryInMonth.findMany({
      where: {
        monthId: monthId,
        userId: userId,
      },
      select: {
        id: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        goal: true,
        spent: true,
        description: true,
      },
    });

    return categories;
  }

  async function addEmpty(
    monthId: string,
    userId: string
  ): Promise<ICategoryInMonth> {
    const category = await prisma.categoryInMonth.create({
      data: {
        goal: 0,
        spent: 0,
        description: "",
        monthId: monthId,
        userId: userId,
      },
      select: {
        id: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        goal: true,
        spent: true,
        description: true,
      },
    });

    return category;
  }

  async function deleteById(
    categoryInMonthId: string,
    userId: string
  ): Promise<ICategoryInMonth> {
    const deleted = await prisma.categoryInMonth.delete({
      where: {
        id: categoryInMonthId,
        userId: userId,
      },
      select: {
        id: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        goal: true,
        spent: true,
        description: true,
      },
    });

    return deleted;
  }

  async function edit(
    categoryInMonth: ICategoryInMonth,
    userId: string
  ): Promise<ICategoryInMonth> {
    const edited = await prisma.categoryInMonth.update({
      where: {
        id: categoryInMonth.id,
        userId: userId,
      },
      data: {
        ...categoryInMonth,
        category: undefined,
        categoryId: categoryInMonth.category
          ? categoryInMonth.category.id
          : undefined,
        month: undefined,
        monthId: undefined,
      },
      select: {
        id: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        goal: true,
        spent: true,
        description: true,
      },
    });

    return edited;
  }
};

const categoryInMonthRepository = categoryInMonthRepositoryFactory();

export default categoryInMonthRepository;
