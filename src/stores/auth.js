import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    currentUser: null,
    loading: false,
  }),
  getters: {
    isSignIn: (state) => !!state.currentUser,
  },
  actions: {},
});
