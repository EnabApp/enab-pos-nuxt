<template>
    <ABtn @click="isDialogShown = true" h="70px" text-2xl text-tertiary>
        <IconSearch />
    </ABtn>

    <ADialog v-model="isDialogShown" w="24rem">
        <div flex flex-col gap-4 p-14>
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
                    <IconSearch v-else />
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

const click = async () => {
    loading.value = true
    await new Promise(res => setTimeout(res, 1000));
    router.push(`/order/${tableNumber.value}/order`)
    loading.value = false
    isDialogShown.value = false
}
</script>