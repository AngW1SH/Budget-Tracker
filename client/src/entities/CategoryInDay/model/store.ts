import { defineStore } from "pinia";
import { ICategoryInDay, RootState } from "../types/types";
import { fetchCategories } from "../api/fetchData";
import { addEmptyCategoryInDay } from "../api/addEmptyCategoryInDay";
import { deleteCategory } from "../api/deleteCategory";
import { editCategoryInDay } from "../api/editCategory";

export const useCategoryInDayStore = defineStore("categoryInDay", {
  state: () => {
    return {
      categories: [
        {
          id: "1",
          category: {
            id: "b",
            name: "Food",
          },
          subcategory: "Lenta",
          value: 21.25,
          description: "",
        },
        {
          id: "2",
          category: {
            id: "a",
            name: "Gas & fuel",
          },
          value: 201.25,
          description: "",
        },
        {
          id: "3",

          category: {
            id: "c",
            name: "Food",
          },
          subcategory: "Lenta",
          value: 21.25,
          description: "",
        },
      ],
    } as RootState;
  },

  actions: {
    async getData() {
      const data = await fetchCategories();

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

    async addEmptyCategory() {
      const newCategory = await addEmptyCategoryInDay();

      this.categories = [...this.categories, newCategory];
    },
  },
});
