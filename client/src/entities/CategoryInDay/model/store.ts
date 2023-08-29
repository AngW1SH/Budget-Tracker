import { defineStore } from "pinia";

export const useCategoryInDayStore = defineStore("categoryInDay", {
  state: () => {
    return {
      categories: [
        {
          id: "1",
          category: "Food",
          subcategory: "Lenta",
          value: 21.25,
        },
        {
          id: "2",
          category: "Gas & fuel",
          value: 201.25,
        },
        {
          id: "3",
          category: "Longass name",
          subcategory: "Lenta",
          value: 21.25,
        },
      ],
    };
  },

  actions: {},
});
