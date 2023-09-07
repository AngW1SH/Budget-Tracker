import { defineStore } from "pinia";
import { createMonthIfNotExists } from "../api/createMonthIfNotExists";
import { monthNames } from "@/shared/utils";

export const useMonthStore = defineStore("month", {
  state: () => {
    return {
      date: new Date(),
    };
  },

  actions: {
    setMonth(date: Date) {
      this.date = date;
    },

    async prepareDay(date: Date) {
      return await createMonthIfNotExists(date);
    },
  },

  getters: {
    formattedDate(state) {
      return monthNames[state.date.getMonth()] + state.date.getFullYear();
    },
  },
});
