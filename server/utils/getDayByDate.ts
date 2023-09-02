import { prismaApp as prisma } from "../prisma-client";

export const getDayByDate = async (date: Date, userId: string) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);

  const day = await prisma.day.findFirst({
    where: {
      date: {
        gte: date,
        lt: nextDate,
      },
      userId: userId,
    },
  });

  return day;
};
