<template>
    <ABtn v-for="item in dashboard.tabs" :key="item" @click="dashboard.selecteTab(item)" h="70px" text-2xl text-tertiary>
        {{ item }}
    </ABtn>
</template>
            
<script setup>
const dashboard = useDashboard();
</script>