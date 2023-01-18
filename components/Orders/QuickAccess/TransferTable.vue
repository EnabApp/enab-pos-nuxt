<template>
    <ABtn @click="isDialogShown = true" h="70px" text-2xl text-tertiary>
        Change Table
    </ABtn>

    <ADialog v-model="isDialogShown" w="24rem">
        <div flex flex-col gap-4 p-14>
            <span v-if="error" text-sm text-danger>Table already in use.</span>
            <AInput text-4xl v-model="tableNumber" placeholder="New Table" />
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
const router = useRouter()
const isDialogShown = ref(false)
const tableNumber = ref('')
const loading = ref(false)
const error = ref(false)

const ordersStore = useOrders()

const click = async () => {
    loading.value = true
    const result = await ordersStore.transferTable(ordersStore.getOrder?.table_number, tableNumber.value)
    loading.value = false
    if (!result) {
        error.value = true
        return false
    }
    isDialogShown.value = false
}
</script>