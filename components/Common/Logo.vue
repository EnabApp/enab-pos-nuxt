<template>
    <div flex gap-4 p="1">
        <!-- Logo -->
        <div flex justify-center items-center w="70px" h="70px" bg-secondaryOp rounded-10px>
            <IconEnabMini />
        </div>

        <!-- Title -->
        <div flex flex-col justify-center>
            <span text-lg font-bold text-white leading-1.25rem>{{ auth.getUser?.name }}</span>
            <span font-bold text-tertiary leading-1.25rem>{{ getRoleTitle }}</span>
        </div>
    </div>
</template>

<script setup>
const auth = useAuth()
auth.fetchUser()


const getRoleTitle = computed(() => {
    if (auth.isManager) return 'Manager'
    if (auth.isWaiter) return 'Waiter'
    if (auth.isChef) return 'Chef'
    if (auth.isCashier) return 'Cashier'
})
</script>