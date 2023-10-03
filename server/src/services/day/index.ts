import { IDay, IDayDTO, IDayShort } from "@/entities/day";
import dayRepository from "@/repositories/day";

const dayServiceFactory = () => {
  return Object.freeze({
    createIfNotExists,
    getByMonth,
  });

  async function createIfNotExists(
    date: Date,
    userId: string
  ): Promise<IDayDTO> {
    const day = await dayRepository.getByDate(date, userId);
    if (day) return day;

    const created = await dayRepository.create(date, userId);
    return created;
  }

  async function getByMonth(date: Date, userId: string): Promise<IDayShort[]> {
    const firstDayOfCurrentMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    );

    const firstDayOfFollowingMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      1
    );

    const days = await dayRepository.getByDates(
      firstDayOfCurrentMonth,
      firstDayOfFollowingMonth,
      userId
    );
    return days;
  }
};

const dayService = dayServiceFactory();

export default dayService;
