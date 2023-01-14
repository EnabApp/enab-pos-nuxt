<template>
    <NuxtLayout>
        <div flex flex-col gap-8 w-full h-full>
            <!-- HEADER -->
            <Header :component="OrdersQuickAccess" />

            <!-- CONTENT -->
            <div grid="~ cols-10" gap-4 place-items-center overflow-y="auto" pr="2">
                <!-- Generate Pending Orders -->
                <ABtn v-for="item in pendingOrders" :key="item" w-full h-full aspect-square :bg="item.delivery ? 'warningOp' : 'successOp'">
                    <div flex flex-col justify-center w-full mt-4 gap-10>
                        <span text-5xl font-bold leading-1.25rem h="20px">
                            {{ item.tableNumber }}
                        </span>
                        <div flex items-center gap-1 :text="item.delivery ? 'black' : 'white'">
                            <IconOrder />
                            <span>{{ item.id }}</span>
                        </div>
                        <!-- <span text-5xl font-bold leading-1.25rem>{{ item.tableNumber }}</span> -->
                        <!-- <span font-bold text-tertiary leading-1.25rem>{{ item.delivery ? 'Delivery' : 'Table' }}</span> -->
                    </div>
                </ABtn>

                <!-- Generate Blank Orders -->
                <ABtn v-for="item in blankOrders" :key="item" w-full h-full aspect-square bg-secondaryOp />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { OrdersQuickAccess } from '#components'

const pendingOrders = [
    {
        id: 123,
        tableNumber: 700,
        delivery: 0,
    },
    {
        id: 124,
        delivery: 1,
    },
    {
        id: 125,
        tableNumber: 10,
        delivery: 0,
    },
]

const blankOrders = computed(() => 40 - pendingOrders.length ? 40 - pendingOrders.length : 0)
</script>
