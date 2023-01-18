import { acceptHMRUpdate, defineStore } from "pinia";

export const useUsers = defineStore("users", {
  state: () => ({
    users: [],
    name: "",
    role: "",
    code: "",
    isDrawerShown: false,
    createError: null as string | null,
  }),
  getters: {
    getUsers: (state) => state.users,
    getCreateError: (state) => state.createError,
  },
  actions: {
    async fetch() {
      const { data, pending, error, refresh } = await useApi("users");
      if (error.value) {
        console.log(error.value);
      }
      this.users = data.value.data;
    },

    validation(Boolean = false) {
      if (!this.name) {
        this.createError = "Name is required";
        return false;
      }
      if (!this.code) {
        this.createError = "code is required";
        return false;
      }
      return true;
    },

    async create() {
      if (!this.validation(true)) return false;
      const { data, pending, error, refresh } = await useApi("Users", "POST", {
        name: this.name,
        email: this.code,
        role: this.role,
      });
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
      this.users = this.users.filter((category) => category.id != id);

      const { data, pending, error, refresh } = await useApi(
        `users/${id}`,
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
  import.meta.hot.accept(acceptHMRUpdate(useUsers, import.meta.hot));
}
