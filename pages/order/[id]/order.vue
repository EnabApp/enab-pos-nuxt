<template>
    <NuxtLayout>
        <div flex flex-col gap-8 w-full h-full>
            <!-- HEADER -->
            <Header :component="OrdersQuickAccess" />

            <!-- CONTENT -->
            <div flex flex-col gap-4>
                <!-- Heading -->
                <OrdersOrderHeading />

                <div flex gap-4>
                    <div border-2 border-secondaryOp rounded-lg p-4 basis="2/6">a</div>
                    <div grid="~ cols-7" gap-4 place-items-center overflow-y="auto" basis="4/6" w="4/6">
                        <ABtn v-for="item in categories" :key="item" w-full h-full aspect-video break-all>
                            <span>{{ item.title }}</span>
                        </ABtn>

                        <!-- Generate Blank Orders -->
                        <ABtn v-for="item in blankOrders" :key="item" w-full h-full aspect-video bg-secondaryOp />
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { OrdersQuickAccess } from '#components'

const categories = [
    {
        id: 123,
        title: "عصائر",
    },
    {
        id: 124,
        title: "أكلات سريعة",
    },
    {
        id: 125,
        title: "أكلات شرقية",
    },
    {
        id: 125,
        title: "أكلات شرقية غربية شمالية",
    },
]

const blankOrders = computed(() => 42 - categories.length ? 42 - categories.length : 0)
</script>
