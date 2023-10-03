import { ITransaction, ITransactionWithDay } from "@/entities/transaction";
import { prismaApp as prisma } from "@/db/prisma-client";

const transactionRepositoryFactory = () => {
  return Object.freeze({
    getByDay,
    countByDay,
    addEmpty,
    deleteById,
    edit,
  });

  async function getByDay(
    dayId: string,
    userId: string
  ): Promise<ITransaction[]> {
    const transactions = await prisma.transaction.findMany({
      where: {
        dayId: dayId,
        userId: userId,
      },
      select: {
        id: true,
        type: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        subcategory: true,
        value: true,
        description: true,
      },
    });

    return transactions;
  }

  async function countByDay(dayId: string, userId: string): Promise<number> {
    const count = await prisma.transaction.count({
      where: {
        dayId: dayId,
        userId: userId,
      },
    });

    return count;
  }

  async function addEmpty(
    dayId: string,
    userId: string
  ): Promise<ITransaction> {
    const transaction = await prisma.transaction.create({
      data: {
        subcategory: "",
        value: 0,
        dayId: dayId,
        userId: userId,
      },
      select: {
        id: true,
        type: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        dayId: true,
        subcategory: true,
        value: true,
        description: true,
      },
    });

    return transaction;
  }

  async function deleteById(
    transactionId: string,
    userId: string
  ): Promise<ITransactionWithDay> {
    const deleted = await prisma.transaction.delete({
      where: {
        id: transactionId,
        userId: userId,
      },
      select: {
        id: true,
        type: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        day: {
          select: {
            id: true,
            date: true,
          },
        },
        dayId: true,
        subcategory: true,
        value: true,
        description: true,
      },
    });

    return deleted;
  }
  async function edit(
    transaction: ITransaction,
    userId: string
  ): Promise<ITransaction> {
    const edited = await prisma.transaction.update({
      where: {
        id: transaction.id,
        userId: userId,
      },
      data: {
        ...transaction,
        category: undefined,
        categoryId: transaction.category ? transaction.category.id : undefined,
        day: undefined,
        dayId: undefined,
      },
      select: {
        id: true,
        type: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        dayId: true,
        subcategory: true,
        value: true,
        description: true,
      },
    });

    return edited;
  }
};

const transactionRepository = transactionRepositoryFactory();

export default transactionRepository;
