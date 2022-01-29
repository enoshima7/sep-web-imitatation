import { defineStore } from "pinia";

export const useConfig = defineStore("config", {
  state: () => {
    return {
      token: "",
    };
  },
  actions: {
    setToken(payload: string) {
      this.token = payload;
    },
  },
});
