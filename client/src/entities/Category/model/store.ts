import { defineStore } from "pinia";

export const useCategory = defineStore("category", {
  state: () => {
    return {
      categories: [],
    };
  },

  actions: {},
});
