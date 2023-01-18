import { acceptHMRUpdate, defineStore } from "pinia";

export const useProducts = defineStore("products", {
  state: () => ({
    products: [],
    name: "",
    description: "",
    isDrawerShown: false,
    createError: null as string | null,
  }),
  getters: {
    getProducts: (state) => state.products,
    getCreateError: (state) => state.createError,
  },
  actions: {
    async fetch() {
      const { data, pending, error, refresh } = await useApi("products");
      if (error.value) {
        console.log(error.value);
      }
      this.products = data.value.data;
    },

    validation(Boolean = false) {
      if (!this.name) {
        this.createError = "Name is required";
        return false;
      }
      if (!this.description) {
        this.createError = "code is required";
        return false;
      }
      return true;
    },

    async create() {
      if (!this.validation(true)) return false;
      const { data, pending, error, refresh } = await useApi(
        "products",
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
      this.isDrawerShown = false;
      this.fetch();
    },

    async remove(id: number) {
      this.products = this.products.filter((product) => product.id != id);

      const { data, pending, error, refresh } = await useApi(
        `products/${id}`,
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
  import.meta.hot.accept(acceptHMRUpdate(useProducts, import.meta.hot));
}
