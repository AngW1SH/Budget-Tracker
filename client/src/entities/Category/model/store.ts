import { defineStore } from "pinia";
import { fetchCategories } from "../api/fetchCategories";
import { ICategory } from "../types/types";
import { editCategory } from "../api/editCategory";
import { deleteCategory } from "../api/deleteCategory";
import { addEmptyCategory } from "../api/addCategory";

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
    async removeCategory(data: ICategory) {
      deleteCategory(data);
      this.categories = this.categories.filter(
        (category) => category.id != data.id
      );
    },
    async editCategory(edited: ICategory) {
      editCategory(edited);
      this.categories = this.categories.map((category) =>
        category.id == edited.id ? edited : category
      );
    },
    async addEmptyCategory() {
      const newCategory = await addEmptyCategory();

      this.categories = [...this.categories, newCategory];
    },
  },
});
