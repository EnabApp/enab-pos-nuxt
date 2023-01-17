<template>
    <!-- HEADER -->
    <Header :component="DashboardQuickAccess" />

    <!-- CONTENT -->
    <div grid="~ cols-10" gap-4 place-items-center overflow-y="auto" pr="2">
        <ProductsMain v-if="dashboard.selected == 'products'" />
        <ProductsMain v-if="dashboard.selected == 'categories'" />

    </div>
</template>

            
<script setup>
import { DashboardQuickAccess } from '#components'
const dashboard = useDashboard();
</script>