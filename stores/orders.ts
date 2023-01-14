import { acceptHMRUpdate, defineStore } from 'pinia'

export const useOrders = defineStore('order', {
    state: () => ({
        orders: [],
        order: null,
    }),
    getters: {
        getOrders: (state) => state.orders,
        getOrder: (state) => state.order,
    },
    actions: {
        async fetch() {
            const { data, pending, error, refresh } = await useApi('orders')
            if (error.value) {
                console.log(error.value)
            }
            this.orders = data.value?.data
        },

        async fetchOrder(id: number) {
            const router = useRouter()
            const { data, pending, error, refresh } = await useApi(`orders/${id}`)

            if (error.value) {
                console.log(error.value)
                router.push('/tables')
            }

            this.order = data.value?.data
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useOrders, import.meta.hot));
}
