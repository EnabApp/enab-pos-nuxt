import { acceptHMRUpdate, defineStore } from "pinia";

export const useDashboard = defineStore("dashboard", {
  state: () => ({
    tabs: ["Overview", "Categories", "Products", "Orders", "Users", "Settings"],
    selected: "Overview",
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
