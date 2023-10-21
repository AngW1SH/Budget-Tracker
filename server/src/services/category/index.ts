import { Category } from "@/entities/category";
import categoryRepository from "@/repositories/category";

const categoryServiceFactory = () => {
  return Object.freeze({
    getAll,
  });

  async function getAll(userId: string): Promise<Category[]> {
    const categories = (await categoryRepository.getAll(userId)) as Category[];

    return categories;
  }
};

const categoryService = categoryServiceFactory();

export default categoryService;
