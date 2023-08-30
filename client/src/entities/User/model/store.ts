import { defineStore } from "pinia";
import { IUser } from "../types/types";
import { authenticate } from "../api/authenticate";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null as IUser | null,
      loggedIn: false,
    };
  },

  actions: {},
});
