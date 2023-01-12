<template>
    <div flex flex-col justify-center items-center h="full" w="full" gap-10>
        <!-- Logo -->
        <IconEnab />

        <!-- Numpad -->
        <div w="18rem" flex flex-col gap-4>
            <AInput v-model="code" placeholder="Enter Code" />
            <div class="grid-row grid-cols-3 justify-items-stretch" gap-2>
                <ABtn v-for="index, value in 9" @click="code += index" :key="value" h="80px" text-2xl>
                    {{ index }}
                </ABtn>

                <ABtn ref="backspace" @click="code = code.slice(0, -1)" color="danger" h="80px" text-2xl>
                    <IconBackspace />
                </ABtn>

                <ABtn @click="code += 0" h="80px" text-2xl>
                    0
                </ABtn>

                <ABtn color="success" h="80px" text-2xl>
                    <IconCheck />
                </ABtn>
            </div>
        </div>

        <!-- Credits -->
        <div flex flex-col items-center text-xs>
            <a href="#">enab.app</a>
            <p>Support@enab.app</p>
            <p>07712695635</p>
            <p text="tertiary">0.0.1000</p>
        </div>
    </div>
</template>

<script setup>
const code = ref('')
const backspace = ref(null)
onLongPress(
    backspace,
    () => code.value = '',
    { modifiers: { prevent: true } }
)
</script>