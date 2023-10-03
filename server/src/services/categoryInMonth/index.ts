import { ICategoryInMonth } from "@/entities/categoryInMonth";
import categoryInMonthRepository from "@/repositories/categoryInMonth";
import { getMonthByDate } from "@/utils/getMonthByDate";

const categoryInMonthServiceFactory = () => {
  return Object.freeze({
    getByMonth,
    addEmpty,
    deleteById,
    edit,
  });

  async function getByMonth(
    date: Date,
    userId: string
  ): Promise<ICategoryInMonth[] | undefined> {
    const month = await getMonthByDate(date, userId);

    if (!month) return;

    const categories = await categoryInMonthRepository.getByMonth(
      month.id,
      userId
    );

    return categories;
  }

  async function addEmpty(
    date: Date,
    userId: string
  ): Promise<ICategoryInMonth | undefined> {
    const month = await getMonthByDate(date, userId);

    if (!month) return;

    const category = await categoryInMonthRepository.addEmpty(month.id, userId);

    return category;
  }

  async function deleteById(
    categoryInMonthId: string,
    userId: string
  ): Promise<ICategoryInMonth> {
    const deleted = await categoryInMonthRepository.deleteById(
      categoryInMonthId,
      userId
    );
    return deleted;
  }

  async function edit(
    categoryInMonth: ICategoryInMonth,
    userId: string
  ): Promise<ICategoryInMonth> {
    const edited = await categoryInMonthRepository.edit(
      categoryInMonth,
      userId
    );
    return edited;
  }
};

const categoryInMonthService = categoryInMonthServiceFactory();

export default categoryInMonthService;
