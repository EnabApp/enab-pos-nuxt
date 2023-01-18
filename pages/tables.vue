<template>
    <NuxtLayout>
        <div flex flex-col gap-8 w-full h-full>
            <!-- HEADER -->
            <Header :component="TablesQuickAccess" />

            <!-- CONTENT -->
            <div grid="~ cols-10" gap-4 place-items-center overflow-y="auto" pr="2">
                <!-- Generate Pending Orders -->
                <ABtn @click="$router.push(`/order/${item.id}/order`)" v-for="item in ordersStore.getOrders" :key="item" w-full h-full aspect-square :bg="item.type == 2 ? 'warningOp' : 'successOp'">
                    <div flex flex-col justify-center w-full mt-4 gap-10>
                        <span text-5xl font-bold leading-1.25rem h="20px">
                            {{ item.table_number }}
                        </span>
                        <div flex items-center gap-1 :text="item.type == 2 ? 'black' : 'white'">
                            <IconOrder />
                            <span>{{ item.id }}</span>
                        </div>
                    </div>
                </ABtn>

                <!-- Generate Blank Orders -->
                <TablesBlankOrder v-for="item in blankOrders" :key="item" />

            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { TablesQuickAccess } from '#components'
definePageMeta({
    middleware: 'auth'
})
const auth = useAuth()
const ordersStore = useOrders()
ordersStore.fetch()

const blankOrders = computed(() => ordersStore.getOrders.length <= 40 ? 40 - ordersStore.getOrders.length : 0)
</script>
