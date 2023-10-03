import { IMonth } from "@/entities/month";
import monthRepository from "@/repositories/month";

const monthServiceFactory = () => {
  return Object.freeze({
    getByDate,
    createIfNotExists,
    edit,
  });

  async function getByDate(date: Date, userId: string): Promise<IMonth | null> {
    const month = await monthRepository.getByDate(date, userId);

    return month;
  }

  async function createIfNotExists(
    date: Date,
    userId: string
  ): Promise<IMonth> {
    const month = await monthRepository.getByDate(date, userId);
    if (month) return month;

    const created = await monthRepository.create(date, userId);
    return created;
  }

  async function edit(month: IMonth, userId: string) {
    const edited = await monthRepository.edit(month, userId);
    return edited;
  }
};

const monthService = monthServiceFactory();

export default monthService;
