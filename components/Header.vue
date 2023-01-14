<template>
    <div flex justify-between items-center>
        <!-- Logo -->
        <CommonLogo />

        <!-- Quick Access -->
        <div flex gap-4>
            <!-- Quick Access Inherted Buttons -->
            <component :is="component" />

            <!-- Logout -->
            <ABtn @click="logout()" h="70px" text-2xl text-dangerOp :disabled="loadingLogout">
                <IconLoading v-if="loadingLogout" />
                <IconShutdown v-else />
            </ABtn>
        </div>
    </div>
</template>

<script setup>
const router = useRouter()
const props = defineProps({
    component: {
        type: Object,
        required: true
    }
})

const loadingLogout = ref(false)

const logout = async () => {
    loadingLogout.value = true
    await new Promise(res => setTimeout(res, 1000));
    loadingLogout.value = false
    router.push('/')
}
</script>