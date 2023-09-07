import { prismaApp as prisma } from "../prisma-client";

export const getMonthByDate = async (date: Date, userId: string) => {
  const nextDate = new Date(date);
  nextDate.setMonth(nextDate.getMonth() + 1);

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
};
