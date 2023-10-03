import categoryRepository from "@/repositories/category";

const categoryServiceFactory = () => {
  return Object.freeze({
    getAll,
  });

  async function getAll(userId: string) {
    const categories = await categoryRepository.getAll(userId);

    return categories;
  }
};

const categoryService = categoryServiceFactory();

export default categoryService;
