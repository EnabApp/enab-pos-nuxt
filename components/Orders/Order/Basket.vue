<template>
    <div flex flex-col gap-2 border-2 border-secondaryOp rounded-lg p-4 basis="3/12" overflow-y-scroll>
        <template v-if="products.length > 0">
            <OrdersOrderBasketItem v-for="item in products" :product="item" :key="item" />
        </template>
        <template v-else>
            <div flex flex-col gap-4 items-center justify-center h-full text-tertiary>
                <IconRestaurant w-64px h-64px />
                <span uppercase text-lg font-bold>No Items</span>
            </div>
        </template>
    </div>
</template>

<script setup>
const ordersStore = useOrders()
const products = computed(() => ordersStore.order?.order_products)
</script>