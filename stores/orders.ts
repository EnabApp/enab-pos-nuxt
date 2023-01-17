import { acceptHMRUpdate, defineStore } from 'pinia'

export const useOrders = defineStore('order', {
    state: () => ({
        orders: [],
        order: null,
    }),
    getters: {
        getOrders: (state) => state.orders,
        getOrder: (state) => state.order,
        getOrderByTableNumber: (state) => (tableNumber: number) => {
            const order = state.orders.find((order: any) => order.table_number == tableNumber)
            return order
        }
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
                return false;
            }

            this.order = data.value?.data
        },

        async newOrder(tableNumber: any = null, type: number) {
            const router = useRouter();
            const { data, pending, error, refresh } = await useApi('orders', 'post', {
                table_number: tableNumber,
                type: type
            })
            if (error.value) {
                return false;
            }

            this.order = data.value?.data
            this.orders.push(data.value?.data)
            router.push(`/order/${data.value?.data.id}/order`)
            return true;
        },


        async voidOrder(id: number) {
            const { data, pending, error, refresh } = await useApi(`orders/${id}`, 'delete')

            if (error.value) {
                console.log(error.value)
                return false;
            }

            this.orders = this.orders.filter((order: any) => order.id !== id)
            return true;
        },

        async addProduct(product: any) {
            const order = this.order
            const isProductAdded = this.checkProductInOrder(product)
            console.log(order)
            if (isProductAdded) {
                this.increaseProductQuantity(product)
                return
            }

            /* Add product */
            order?.order_products.push({
                quantity: 1,
                product_id: product.id,
                ...product
            })
            const { data, pending, error, refresh } = await useApi(`orders/add-product`, 'post', {
                product_id: product.id,
                order_id: order?.id,
            })
        },

        checkProductInOrder(product: any) {
            const order = this.order
            const orderProduct = order?.order_products.find((orderProduct: any) => orderProduct.product_id == product.id)
            return orderProduct
        },

        async increaseProductQuantity(product: any) {
            const order = this.order
            const orderProduct = order?.order_products.find((orderProduct: any) => orderProduct.product_id == product.id)
            orderProduct.quantity++

            const { data, pending, error, refresh } = await useApi(`orders/increase-quantity`, 'put', {
                product_id: product.id,
                order_id: order?.id,
            })
        },

        async decreaseProductQuantity(product: any) {
            const order = this.order
            const orderProduct = order?.order_products.find((orderProduct: any) => orderProduct.product_id == product.id)
            orderProduct.quantity--

            const { data, pending, error, refresh } = await useApi(`orders/decrease-quantity`, 'put', {
                product_id: product.id,
                order_id: order?.id,
            })
        }
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useOrders, import.meta.hot));
}
