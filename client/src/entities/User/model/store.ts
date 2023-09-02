import { defineStore } from "pinia";
import { IUser } from "../types/types";
import { authenticate } from "../api/authenticate";
import { logoutUser } from "../api/logout";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null as IUser | null,
      loggedIn: true,
    };
  },

  actions: {
    async prepareUser() {
      const result = await authenticate();

      if (result) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }

      this.user = result;
    },

    async logout() {
      const result = await logoutUser();

      if (result == 200) {
        this.loggedIn = false;
        this.user = null;
      }

      return result;
    },
  },
});
