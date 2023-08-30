import { defineStore } from "pinia";
import { createDayIfNotExists } from "../api/createDayIfNotExists";

export const useDayStore = defineStore("day", {
  state: () => {
    return {
      date: new Date(),
    };
  },

  actions: {
    setDate(date: Date) {
      this.date = date;
    },

    async prepareDay(date: Date) {
      return await createDayIfNotExists(date);
    },
  },

  getters: {
    formattedDate(state) {
      const day = (state.date.getDate() > 9 ? "" : "0") + state.date.getDate();
      const month =
        state.date.getMonth() > 8 ? "" : "0" + (state.date.getMonth() + 1);

      return day + "." + month + "." + state.date.getFullYear();
    },
  },
});
