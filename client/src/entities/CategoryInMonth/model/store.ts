import { defineStore } from "pinia";
import { ICategoryInMonth } from "../types/types";
import { fetchCategories } from "../api/fetchCategories";
import { editCategory } from "../api/editCategory";
import { deleteCategory } from "../api/deleteCategory";
import { addEmpty } from "../api/addEmpty";

export const useCategoryInMonthStore = defineStore("category-in-month", {
  state: () => {
    return {
      categories: [] as ICategoryInMonth[],
    };
  },

  actions: {
    async getData(date: Date) {
      this.categories = await fetchCategories(date);
    },

    async editCategory(edited: ICategoryInMonth) {
      editCategory(edited);
      this.categories = this.categories.map((category) =>
        category.id == edited.id ? edited : category
      );
    },

    async removeCategory(data: ICategoryInMonth) {
      deleteCategory(data);
      this.categories = this.categories.filter(
        (category) => category.id != data.id
      );
    },

    async addEmptyCategory(date: Date) {
      const newCategory = await addEmpty(date);

      this.categories = [...this.categories, newCategory];
    },
  },
});
