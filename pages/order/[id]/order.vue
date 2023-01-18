<template>
    <NuxtLayout>
        <div flex flex-col gap-8 w-full h-full>
            <!-- HEADER -->
            <Header :component="OrdersQuickAccess" />

            <!-- CONTENT -->
            <div flex flex-col gap-4>
                <!-- Heading -->
                <OrdersOrderHeading />

                <div flex gap-4 h="[calc(100vh-19rem)]">
                    <ordersOrderBasket />
                    <OrdersOrderCategories />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { OrdersQuickAccess } from '#components'
const { params } = useRoute()
const ordersStore = useOrders()

await ordersStore.fetchOrder(params.id)

if (ordersStore.getOrders.length <= 0) ordersStore.fetch()

</script>
