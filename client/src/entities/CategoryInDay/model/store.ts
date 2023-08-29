import { defineStore } from "pinia";
import { RootState } from "../types/types";

export const useCategoryInDayStore = defineStore("categoryInDay", {
  state: () => {
    return {
      categories: [
        {
          id: "1",
          category: {
            name: "Food",
          },
          subcategory: "Lenta",
          value: 21.25,
        },
        {
          id: "2",
          category: {
            name: "Gas & fuel",
          },
          value: 201.25,
        },
        {
          id: "3",

          category: {
            name: "Food",
          },
          subcategory: "Lenta",
          value: 21.25,
        },
      ],
    } as RootState;
  },

  actions: {},
});
