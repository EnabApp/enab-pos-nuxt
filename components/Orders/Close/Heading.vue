<template>
    <div flex flex-col gap-8>
        <div flex gap-4 text-tertiary>
            <div flex flex-col>
                <span text-sm font-bold>Total</span>
                <span text-warningOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ usePrice(total) }}
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Opened By</span>
                <span text-white p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ openedBy }}
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Table</span>
                <span text-white p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ order?.table_number ?? 'Delivery' }}
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Order</span>
                <span text-white p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ order?.id ?? '#' }}
                </span>
            </div>
        </div>

        <div flex gap-4 text-tertiary>
            <div flex flex-col>
                <span text-sm font-bold>Discount</span>
                <span text-dangerOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ usePrice(discount) }}
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Service</span>
                <span text-infoOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ usePrice(service) }}
                </span>
            </div>
            <div flex flex-col>
                <div flex justify-between>
                    <span text-sm font-bold>Exchange</span>
                    <span v-if="exchange <= 0" text-sm font-bold text-danger>For customer</span>
                    <span v-else text-sm font-bold text-success>For you</span>
                </div>
                <span p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px :text="exchange <= 0 ? 'dangerOp' : 'successOp'">
                    {{ usePrice(exchange) }}
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Due</span>
                <span text-successOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ usePrice(due) }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const ordersStore = useOrders()
const order = ordersStore.getOrder

const total = computed(() => order?.order_products?.reduce((acc, item) => acc + item.price * item.quantity, 0) ?? 0)

const openedBy = computed(() => order?.order_users.find((user) => user.status === 1)?.name ?? 'Unknown')

const exchange = computed(() => total.value - ordersStore.getCalculator)

const service = computed(() => 0)

const discount = computed(() => 0)

const due = computed(() => total.value + service.value - discount.value)
</script>