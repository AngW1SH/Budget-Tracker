import { CategoryInMonth } from "@/entities/categoryInMonth";
import { prismaApp as prisma } from "@/db/prisma-client";
import { CategoryInMonthToCreate } from "@/entities/categoryInMonth/types";

const categoryInMonthRepositoryFactory = () => {
  return Object.freeze({
    getByMonth,
    addEmpty,
    add,
    deleteById,
    findByCategoryAndMonth,
    edit,
    changeSpentBy,
  });

  async function getByMonth(
    monthId: string,
    userId: string
  ): Promise<CategoryInMonth[]> {
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

  async function add(
    categoryToCreate: CategoryInMonthToCreate,
    monthId: string,
    userId: string
  ): Promise<CategoryInMonth> {
    const { category, ...inlineData } = categoryToCreate;

    const result = await prisma.categoryInMonth.create({
      data: {
        ...inlineData,
        categoryId: category!.id,
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

    return result;
  }

  async function addEmpty(
    monthId: string,
    userId: string
  ): Promise<CategoryInMonth> {
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
  ): Promise<CategoryInMonth> {
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
    categoryInMonth: CategoryInMonth,
    userId: string
  ): Promise<CategoryInMonth> {
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
        categoryId: true,
        goal: true,
        spent: true,
        description: true,
      },
    });

    return edited;
  }

  async function findByCategoryAndMonth(
    categoryId: string,
    monthId: string
  ): Promise<CategoryInMonth | null> {
    const result = await prisma.categoryInMonth.findFirst({
      where: {
        categoryId: categoryId,
        monthId: monthId,
      },
      select: {
        id: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        categoryId: true,
        goal: true,
        spent: true,
        description: true,
      },
    });

    return result;
  }

  async function changeSpentBy(
    amount: number,
    categoryId: string,
    monthId: string,
    userId: string
  ): Promise<CategoryInMonth> {
    const previous = await prisma.categoryInMonth.findFirst({
      where: {
        categoryId: categoryId,
        monthId: monthId,
        userId: userId,
      },
      select: {
        id: true,
        spent: true,
      },
    });

    if (!previous)
      throw new Error("Could not find the corresponding CategoryInMonth row");

    if (previous.spent + amount < 0) throw new Error("Result less than 0");

    const changed = await prisma.categoryInMonth.update({
      where: {
        id: previous.id,
      },
      data: {
        spent: previous.spent + amount,
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

    return changed;
  }
};

const categoryInMonthRepository = categoryInMonthRepositoryFactory();

export default categoryInMonthRepository;
