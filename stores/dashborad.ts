import { acceptHMRUpdate, defineStore } from "pinia";

export const useDashboard = defineStore("dashboard", {
  state: () => ({
    tabs: ["overview", "categories", "products", "prders", "users", "settings"],
    selected: "overview",
  }),
  getters: {
    getTabs: (state) => state.tabs,
    getSelected: (state) => state.selected,
  },
  actions: {
    selecteTab(tab: string) {
      this.selected = tab;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDashboard, import.meta.hot));
}
