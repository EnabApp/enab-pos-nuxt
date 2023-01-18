<template>
    <ABtn @click="isDialogShown = true" h="70px" text-2xl text-tertiary>
        <IconSearch />
    </ABtn>

    <ADialog v-model="isDialogShown" w="24rem">
        <div flex flex-col gap-4 p-14>
            <span v-if="error" text-sm text-danger>Order not found</span>
            <AInput text-4xl v-model="orderNumber" placeholder="Order Number" />
            <div class="grid-row grid-cols-3 justify-items-stretch" gap-2>
                <ABtn v-for="index, value in 9" @click="orderNumber += index" :key="value" h="80px" text-3xl>
                    {{ index }}
                </ABtn>

                <ABtn ref="backspace" @click="orderNumber = orderNumber.slice(0, -1)" color="danger" h="80px" text-3xl>
                    <IconBackspace />
                </ABtn>

                <ABtn @click="orderNumber += 0" h="80px" text-3xl>
                    0
                </ABtn>

                <ABtn @click="click()" color="success" h="80px" text-3xl :disabled="loading">
                    <IconLoading v-if="loading" />
                    <IconSearch v-else />
                </ABtn>
            </div>
        </div>
    </ADialog>
</template>

<script setup>
const router = useRouter()
const isDialogShown = ref(false)
const orderNumber = ref('')
const loading = ref(false)
const ordersStore = useOrders()
const error = ref(false)

const click = async () => {
    loading.value = true
    const order = ordersStore.orders.find(order => order.id == orderNumber.value)
    if (!order) {
        loading.value = false
        error.value = true
        return
    }
    router.push(`/order/${orderNumber.value}/order`)
    loading.value = false
    isDialogShown.value = false
}
</script>