<template>
    <!-- Buttons -->
    <div v-if="state" p-1 justify-center flex flex-col gap-1 w-full h-full aspect-square border border-secondaryOp rounded-lg>
        <ABtn @click="isDialogShown = true" grow>Dine-in</ABtn>
        <ABtn @click="deliveryOrder()" grow color="warning" variant="light">
            <IconLoading v-if="deliveryLoading" w-24px h-24px />
            <span v-else>Delivery</span>
        </ABtn>
        <ABtn grow @click="toggle()" variant="light" text-tertiary>
            <IconBack w-24px h-24px />
        </ABtn>
    </div>

    <!-- Blank -->
    <ABtn @click="toggle()" v-else w-full h-full aspect-square>
    </ABtn>

    <!-- Dine-in Dialog -->
    <ADialog v-model="isDialogShown" w="24rem">
        <div flex flex-col gap-4 p-14>
            <span v-if="error" text-sm text-danger>Table already in use.</span>
            <AInput text-4xl v-model="tableNumber" placeholder="Table Number" />
            <div class="grid-row grid-cols-3 justify-items-stretch" gap-2>
                <ABtn v-for="index, value in 9" @click="tableNumber += index" :key="value" h="80px" text-3xl>
                    {{ index }}
                </ABtn>

                <ABtn ref="backspace" @click="tableNumber = tableNumber.slice(0, -1)" color="danger" h="80px" text-3xl>
                    <IconBackspace />
                </ABtn>

                <ABtn @click="tableNumber += 0" h="80px" text-3xl>
                    0
                </ABtn>

                <ABtn @click="click()" color="success" h="80px" text-3xl :disabled="loading">
                    <IconLoading v-if="loading" />
                    <IconCheck v-else />
                </ABtn>
            </div>
        </div>
    </ADialog>
</template>

<script setup>
const [state, toggle] = useToggle(false)
const ordersStore = useOrders()

const isDialogShown = ref(false)
const tableNumber = ref('')
const loading = ref(false)
const error = ref(false)

const click = async () => {
    loading.value = true
    const result = await ordersStore.newOrder(tableNumber.value, 1)
    if (!result) {
        error.value = true
    }
    loading.value = false
}


const deliveryLoading = ref(false)
const deliveryOrder = async () => {
    deliveryLoading.value = true
    await ordersStore.newOrder(null, 2)
    deliveryLoading.value = false
}
</script>