import { Category } from "@/entities/category";
import categoryRepository from "@/repositories/category";
import categoryInMonthService from "../categoryInMonth";

const categoryServiceFactory = () => {
  return Object.freeze({
    getAll,
    add,
    edit,
    remove,
  });

  async function getAll(userId: string): Promise<Category[]> {
    const categories = (await categoryRepository.getAll(userId)) as Category[];

    return categories;
  }

  async function add(userId: string): Promise<Category> {
    return categoryRepository.add(userId);
  }

  async function edit(category: Category, userId: string): Promise<Category> {
    return categoryRepository.edit(category, userId);
  }

  async function remove(categoryId: string, userId: string) {
    const deletedCategoriesInMonth =
      await categoryInMonthService.deleteManyByCategory(categoryId, userId);
    return categoryRepository.remove(categoryId, userId);
  }
};

const categoryService = categoryServiceFactory();

export default categoryService;
