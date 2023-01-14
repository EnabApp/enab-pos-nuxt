<template>
    <div w="18rem" flex flex-col gap-4 border-2 border-secondaryOp rounded-lg p-4>
        <AInput text-3xl v-model="amount" placeholder="Amount" />
        <div class="grid-row grid-cols-3 justify-items-stretch" gap-2>
            <ABtn v-for="index, value in 9" @click="amount += index" :key="value" h="80px" text-3xl>
                {{ index }}
            </ABtn>

            <ABtn ref="backspace" @click="amount = amount.slice(0, -1)" color="danger" h="80px" text-3xl>
                <IconBackspace />
            </ABtn>

            <ABtn @click="amount += 0" h="80px" text-3xl>
                0
            </ABtn>

            <ABtn @click="amount += '00'" h="80px" text-3xl>
                00
            </ABtn>
        </div>
    </div>
</template>

<script setup>
const router = useRouter()
const amount = ref('')
const backspace = ref(null)
onLongPress(
    backspace,
    () => amount.value = '',
    { modifiers: { prevent: true } }
)
</script>