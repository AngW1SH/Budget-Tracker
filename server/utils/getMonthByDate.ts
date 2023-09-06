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
  });

  return month;
};
