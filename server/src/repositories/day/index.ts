import { IDay, IDayDTO, IDayShort } from "@/entities/day";
import { prismaApp as prisma } from "@/db/prisma-client";

const dayRepositoryFactory = () => {
  return Object.freeze({
    getByDate,
    create,
    getById,
    getByDates,
    setActive,
    setInactive,
  });

  async function getByDate(
    date: Date,
    userId: string
  ): Promise<IDayDTO | null> {
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
      select: {
        id: true,
        categories: {
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
            dayId: true,
          },
        },
        userId: true,
        date: true,
        active: true,
      },
    });

    return day;
  }

  async function getById(id: string): Promise<IDayShort | null> {
    const day = await prisma.day.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        date: true,
        active: true,
      },
    });

    return day;
  }

  async function create(date: Date, userId: string): Promise<IDayDTO> {
    const created = await prisma.day.create({
      data: {
        date: date,
        userId: userId,
      },
      select: {
        id: true,
        categories: {
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
            dayId: true,
          },
        },
        userId: true,
        date: true,
        active: true,
      },
    });

    return created;
  }

  async function getByDates(
    dateStart: Date,
    dateEnd: Date,
    userId: string
  ): Promise<IDayShort[]> {
    const days = await prisma.day.findMany({
      where: {
        userId: userId,
        active: true,
        date: {
          gte: dateStart,
          lt: dateEnd,
        },
      },
      select: {
        id: true,
        date: true,
      },
    });
    return days;
  }

  async function setActive(dayId: string, userId: string): Promise<IDayShort> {
    const setDayActive = await prisma.day.update({
      where: {
        id: dayId,
        userId: userId,
      },
      data: {
        active: true,
      },
      select: {
        id: true,
        date: true,
      },
    });

    return setDayActive;
  }

  async function setInactive(
    dayId: string,
    userId: string
  ): Promise<IDayShort> {
    const setDayActive = await prisma.day.update({
      where: {
        id: dayId,
        userId: userId,
      },
      data: {
        active: false,
      },
      select: {
        id: true,
        date: true,
      },
    });

    return setDayActive;
  }
};

const dayRepository = dayRepositoryFactory();

export default dayRepository;
