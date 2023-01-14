<template>
    <div flex flex-col gap-2 border-2 border-secondaryOp rounded-lg p-4 basis="3/12" overflow-y-scroll>
        <OrdersOrderBasketItem v-for="item in products" :product="item" :key="item" />
    </div>
</template>

<script setup>
const ordersStore = useOrders()
const products = computed(() => ordersStore.getOrder?.order_prodects)
</script>