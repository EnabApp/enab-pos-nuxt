import { acceptHMRUpdate, defineStore } from "pinia";

export const useCategories = defineStore("categories", {
  state: () => ({
    categories: [],
    selected: null,
    isDrawerShown: false,
  }),
  getters: {
    getCategories: (state) => state.categories,
    getSelected: (state) => state.selected,
  },
  actions: {
    async fetch() {
      const { data, pending, error, refresh } = await useApi("categories");
      if (error.value) {
        console.log(error.value);
      }
      this.categories = data.value.data;
    },

    async remove(id: number) {
      this.categories = this.categories.filter((category) => category.id != id);

      const { data, pending, error, refresh } = await useApi(
        `categories/${id}`,
        "DELETE"
      );
      if (error.value) {
        console.log(error.value);
      }
      // this.fetch();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategories, import.meta.hot));
}
