import { acceptHMRUpdate, defineStore } from "pinia";

export const useCategories = defineStore("categories", {
  state: () => ({
    categories: [],
    selected: null,
    name: "",
    description: "",
    isLoding: false,
    isDialogShown: false,
    isDrawerShown: false,
    createError: null as string | null,
  }),
  getters: {
    getCategories: (state) => state.categories,
    getSelected: (state) => state.selected,
    getCreateError: (state) => state.createError,
    getLodeing: (state) => state.isLoding,
  },
  actions: {
    async fetch() {
      const { data, pending, error, refresh } = await useApi("categories");
      if (error.value) {
        console.log(error.value);
      }
      this.categories = data.value.data;
    },

    validation(Boolean = false) {
      if (!this.name) {
        this.createError = "Name is required";
        return false;
      }
      if (!this.description) {
        this.createError = "Description is required";
        return false;
      }
      return true;
    },

    async create() {
      if (!this.validation(true)) return false;
      const { data, pending, error, refresh } = await useApi(
        "categories",
        "POST",
        {
          name: this.name,
          description: this.description,
        }
      );
      if (error.value) {
        this.createError = error.value;
        return;
      }
      console.log(data.value);
      this.createError = null;
      this.name = "";
      this.description = "";
      this.isDialogShown = false;
      this.fetch();
    },

    edit(item: any) {
      this.isDrawerShown = true;
      this.name = item.name;
      this.description = item.description;
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
