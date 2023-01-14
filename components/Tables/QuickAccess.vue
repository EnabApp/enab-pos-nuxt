<template>
    <ABtn h="70px" text-2xl text-tertiary>
        New Order
    </ABtn>
    <ABtn h="70px" text-2xl text-tertiary>
        Delivery Order
    </ABtn>
    <ABtn h="70px" text-2xl text-tertiary>
        Void Table
    </ABtn>
    <ABtn h="70px" text-2xl text-tertiary>
        Trasnfer Table
    </ABtn>
    <ABtn @click="isSearchDialogShown = true" h="70px" text-2xl text-tertiary>
        <IconSearch />
    </ABtn>

    <ADialog v-model="isSearchDialogShown" w="24rem">
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

                <ABtn @click="search()" color="success" h="80px" text-3xl :disabled="searchLoading">
                    <IconLoading v-if="searchLoading" />
                    <IconSearch v-else />
                </ABtn>
            </div>
        </div>
    </ADialog>
</template>

            
<script setup>
// SEARCH
const isSearchDialogShown = ref(false)
const tableNumber = ref('')
const searchLoading = ref(false)

const search = async () => {
    searchLoading.value = true
    await new Promise(res => setTimeout(res, 1000));
    searchLoading.value = false
}
</script>