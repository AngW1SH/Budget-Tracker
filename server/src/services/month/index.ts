import { Month } from "@/entities/month";
import monthRepository from "@/repositories/month";
import categoryInMonthService from "../categoryInMonth";

const monthServiceFactory = () => {
  return Object.freeze({
    getByDate,
    createIfNotExists,
    edit,
  });

  async function getByDate(date: Date, userId: string): Promise<Month | null> {
    const month = await monthRepository.getByDate(date, userId);

    return month;
  }

  async function createIfNotExists(date: Date, userId: string): Promise<Month> {
    const month = await monthRepository.getByDate(date, userId);
    if (month) return month;

    const created = await monthRepository.create(date, userId);

    const categoriesInMonth = await categoryInMonthService.initialize(
      created.id,
      userId
    );

    if (!categoriesInMonth.length)
      throw new Error("No CategoriesInMonth were created");

    return created;
  }

  async function edit(month: Month, userId: string) {
    const edited = await monthRepository.edit(month, userId);
    return edited;
  }
};

const monthService = monthServiceFactory();

export default monthService;
