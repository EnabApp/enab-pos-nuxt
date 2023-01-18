import { acceptHMRUpdate, defineStore } from 'pinia'

export const useOrders = defineStore('order', {
    state: () => ({
        orders: [],
        order: null,

        calculator: 0,
    }),
    getters: {
        getOrders: (state) => state.orders,
        getOrder: (state) => state.order,
        getOrderByTableNumber: (state) => (tableNumber: any) => {
            const order = state.orders.find((order: any) => order.table_number == tableNumber)
            return order
        },
        getCalculator: (state) => state.calculator,
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

            if (!(tableNumber == null)) {
                const checkIfTableNumberExists = this.orders.find(order => order.table_number == tableNumber)
                if (checkIfTableNumberExists) return false;
            }

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
            if (!(product.id == null)) product.product_id = product.id
            const orderProduct = order?.order_products.find((orderProduct: any) => orderProduct.product_id == product.product_id)
            orderProduct.quantity++

            const { data, pending, error, refresh } = await useApi(`orders/change-product-quantity`, 'put', {
                product_id: product.product_id,
                order_id: order?.id,
                type: 'add'
            })
        },

        async decreaseProductQuantity(product: any) {
            const order = this.order
            if (!(product.id == null)) product.product_id = product.id
            const orderProduct = order?.order_products.find((orderProduct: any) => orderProduct.product_id == product.product_id)
            orderProduct.quantity--

            const { data, pending, error, refresh } = await useApi(`orders/change-product-quantity`, 'put', {
                product_id: product.product_id,
                order_id: order?.id,
            })
        },

        async removeProduct(product: any) {
            const order = this.order
            order.order_products = order?.order_products.filter((orderProduct: any) => orderProduct.product_id !== product.product_id)
            const { data, pending, error, refresh } = await useApi(`orders/remove-product`, 'delete', {
                product_id: product.product_id,
                order_id: order?.id,
            })
        },

        async transferTable(oldTableNumber: any, tableNumber: any) {
            const oldOrder = this.orders.find(order => order.table_number == oldTableNumber)
            if (!oldOrder) return false;

            const checkNewTableNumberExists = this.orders.find(order => order.table_number == tableNumber)
            if (checkNewTableNumberExists) return false;

            const { data, pending, error, refresh } = await useApi(`orders/transfer`, 'put', {
                table_number: tableNumber,
                order_id: oldOrder.id,
            })

            if (error.value) {
                console.log(error.value)
                return false;
            }

            oldOrder.table_number = tableNumber
            this.order.table_number = tableNumber

            return true;
        },
    },
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useOrders, import.meta.hot));
}
