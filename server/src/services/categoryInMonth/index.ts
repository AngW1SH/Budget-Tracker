import { CategoryInMonth } from "@/entities/categoryInMonth";
import categoryInMonthRepository from "@/repositories/categoryInMonth";
import { getMonthByDate } from "@/utils/getMonthByDate";
import categoryService from "../category";

const categoryInMonthServiceFactory = () => {
  return Object.freeze({
    getByMonth,
    addEmpty,
    deleteById,
    initialize,
    edit,
    deleteManyByCategory,
  });

  async function getByMonth(
    date: Date,
    userId: string
  ): Promise<CategoryInMonth[] | undefined> {
    const month = await getMonthByDate(date, userId);

    if (!month) return;

    const categories = await categoryInMonthRepository.getByMonth(
      month.id,
      userId
    );

    return categories;
  }

  async function deleteManyByCategory(categoryId: string, userId: string) {
    return categoryInMonthRepository.deleteManyByCategory(categoryId, userId);
  }

  async function addEmpty(
    date: Date,
    userId: string
  ): Promise<CategoryInMonth | undefined> {
    const month = await getMonthByDate(date, userId);

    if (!month) return;

    const category = await categoryInMonthRepository.addEmpty(month.id, userId);

    return category;
  }

  async function deleteById(
    categoryInMonthId: string,
    userId: string
  ): Promise<CategoryInMonth> {
    const deleted = await categoryInMonthRepository.deleteById(
      categoryInMonthId,
      userId
    );
    return deleted;
  }

  async function edit(
    categoryInMonth: CategoryInMonth,
    userId: string
  ): Promise<CategoryInMonth> {
    const edited = await categoryInMonthRepository.edit(
      categoryInMonth,
      userId
    );
    return edited;
  }

  async function initialize(
    monthId: string,
    userId: string
  ): Promise<CategoryInMonth[]> {
    const categories = await categoryService.getAll(userId);

    const result = await Promise.all(
      categories.map((category) => {
        return categoryInMonthRepository.add(
          {
            category: { id: category.id, name: category.name },
            description: "",
            goal: 0,
            spent: 0,
          },
          monthId,
          userId
        );
      })
    );

    return result;
  }
};

const categoryInMonthService = categoryInMonthServiceFactory();

export default categoryInMonthService;
