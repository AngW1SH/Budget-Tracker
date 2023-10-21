import { Month } from "@/entities/month";
import { prismaApp as prisma } from "@/db/prisma-client";

const monthRepositoryFactory = () => {
  return Object.freeze({
    getByDate,
    create,
    edit,
  });

  async function getByDate(date: Date, userId: string): Promise<Month | null> {
    const nextDate = new Date(date);
    date.setDate(1);
    nextDate.setMonth(nextDate.getMonth() + 1);
    nextDate.setDate(1);

    const month = await prisma.month.findFirst({
      where: {
        date: {
          gte: date,
          lt: nextDate,
        },
        userId: userId,
      },
      select: {
        id: true,
        date: true,
        goal: true,
        spent: true,
      },
    });

    return month;
  }

  async function create(date: Date, userId: string): Promise<Month> {
    const created = await prisma.month.create({
      data: {
        date: new Date(date),
        userId: userId,
      },
      select: {
        id: true,
        date: true,
        goal: true,
        spent: true,
      },
    });

    return created;
  }

  async function edit(month: Month, userId: string): Promise<Month> {
    const edited = await prisma.month.update({
      where: {
        id: month.id,
        userId: userId,
      },
      data: month,
      select: {
        id: true,
        date: true,
        goal: true,
        spent: true,
      },
    });

    return edited;
  }
};

const monthRepository = monthRepositoryFactory();

export default monthRepository;
