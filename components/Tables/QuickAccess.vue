<template>
    <ABtn v-if="auth.isManager" @click="$router.push('/dashboard')" h="70px" text-2xl text-tertiary>
        Dashboard
    </ABtn>
    <TablesQuickAccessNewOrder />
    <TablesQuickAccessVoidTable />
    <TablesQuickAccessTransferTable />
    <TablesQuickAccessSearch />

</template>

            
<script setup>
const auth = useAuth()
auth.fetchUser()

</script>