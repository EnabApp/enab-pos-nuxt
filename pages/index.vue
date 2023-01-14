<template>
    <div flex flex-col justify-center items-center h="full" w="full" gap-10>
        <!-- Logo -->
        <IconEnab />

        <!-- Numpad -->
        <div w="18rem" flex flex-col gap-4>
            <span text-dangerOp text-sm v-if="error">Code is invalid</span>
            <AInput text-3xl v-model="code" placeholder="Enter Code" />
            <div class="grid-row grid-cols-3 justify-items-stretch" gap-2>
                <ABtn v-for="index, value in 9" @click="code += index" :key="value" h="80px" text-3xl>
                    {{ index }}
                </ABtn>

                <ABtn ref="backspace" @click="code = code.slice(0, -1)" color="danger" h="80px" text-3xl>
                    <IconBackspace />
                </ABtn>

                <ABtn @click="code += 0" h="80px" text-3xl>
                    0
                </ABtn>

                <ABtn @click="login()" color="success" h="80px" text-3xl :disabled="loading">
                    <IconLoading v-if="loading" />
                    <IconCheck v-else />
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
const router = useRouter()
const code = ref('')
const backspace = ref(null)
const loading = ref(false)
const error = ref(false)
const { signIn, fetchUser } = useAuth()
onLongPress(
    backspace,
    () => code.value = '',
    { modifiers: { prevent: true } }
)

const login = async () => {
    loading.value = true
    await new Promise(res => setTimeout(res, 1000));
    loading.value = false
    const result = await signIn(code.value, "123456")
    console.log(result)
    if (result) {
        router.push('/tables')
    } else {
        error.value = true
        setTimeout(() => error.value = false, 3000)
        code.value = ''
    }
}

</script>