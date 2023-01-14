import { acceptHMRUpdate, defineStore } from 'pinia'

export const useCategories = defineStore('categories', {
    state: () => ({
        categories: [],
        selected: null,
    }),
    getters: {
        getCategories: (state) => state.categories,
        getSelected: (state) => state.selected,
    },
    actions: {
        async fetch() {
            const { data, pending, error, refresh } = await useApi('categories')
            if (error.value) {
                console.log(error.value)
            }
            this.categories = data.value.data
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCategories, import.meta.hot));
}
