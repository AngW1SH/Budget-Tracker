import { defineStore } from "pinia";
import { ICategoryInDay, RootState } from "../types/types";
import { fetchCategories } from "../api/fetchData";
import { addEmptyCategoryInDay } from "../api/addEmptyCategoryInDay";
import { deleteCategory } from "../api/deleteCategory";
import { editCategoryInDay } from "../api/editCategory";

export const useCategoryInDayStore = defineStore("categoryInDay", {
  state: () => {
    return {
      categories: [],
    } as RootState;
  },

  actions: {
    async getData(date: Date) {
      const data = await fetchCategories(date);

      this.categories = data;
    },

    async editCategory(edited: ICategoryInDay) {
      editCategoryInDay(edited);
      this.categories = this.categories.map((category) =>
        category.id == edited.id ? edited : category
      );
    },

    async removeCategory(data: ICategoryInDay) {
      deleteCategory(data);
      this.categories = this.categories.filter(
        (category) => category.id != data.id
      );
    },

    async addEmptyCategory(date: Date) {
      const newCategory = await addEmptyCategoryInDay(date);

      this.categories = [...this.categories, newCategory];
    },
  },
});
