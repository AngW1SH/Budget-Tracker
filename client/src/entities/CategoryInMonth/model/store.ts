import { defineStore } from "pinia";
import { ICategoryInMonth } from "../types/types";

export const useCategoryInMonthStore = defineStore("category-in-month", {
  state: () => {
    return {
      categories: [] as ICategoryInMonth[],
    };
  },

  actions: {
    async getData() {
      //this.categories = await fetchCategories();
    },
  },
});
