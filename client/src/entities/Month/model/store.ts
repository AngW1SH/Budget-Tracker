import { defineStore } from "pinia";
import { createMonthIfNotExists } from "../api/createMonthIfNotExists";
import { monthNames } from "@/shared/utils";
import { IMonth } from "../types/types";
import { getMonthData } from "../api/getMonthData";
import { saveMonthToDB } from "../api/updateMonth";

export const useMonthStore = defineStore("month", {
  state: () => {
    return {
      date: new Date(),
      month: null as IMonth | null,
    };
  },

  actions: {
    setDate(date: Date) {
      this.date = date;
    },

    async prepareMonth(date: Date) {
      await createMonthIfNotExists(date);
      this.month = await getMonthData(date);
    },

    async updateMonth() {
      saveMonthToDB(this.month);
    },
  },

  getters: {
    formattedDate(state) {
      return monthNames[state.date.getMonth()] + " " + state.date.getFullYear();
    },
  },
});
