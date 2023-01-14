import { acceptHMRUpdate, defineStore } from 'pinia'

export const useOrders = defineStore('order', {
    state: () => ({
        orders: [],
    }),
    getters: {
        getOrders: (state) => state.orders,
    },
    actions: {
        async fetch() {
            const { data, pending, error, refresh } = await useApi('orders')
            if (error.value) {
                console.log(error.value)
            }
            this.orders = data.value?.data
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useOrders, import.meta.hot));
}
