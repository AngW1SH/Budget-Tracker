import { defineStore } from "pinia";
import { fetchCategories } from "../api/fetchCategories";
import { ICategory } from "../types/types";

export const useCategoryStore = defineStore("category", {
  state: () => {
    return {
      categories: [] as ICategory[],
    };
  },

  actions: {
    async getData() {
      this.categories = await fetchCategories();
    },
    async removeCategory(category: ICategory) {},
    async editCategory(category: ICategory) {},
  },
});
