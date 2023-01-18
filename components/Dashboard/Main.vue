<template>
    <!-- HEADER -->
    <Header :component="DashboardQuickAccess" />

    <!-- CONTENT -->
    <div grid="~ cols-10" gap-4 place-items-center overflow-y="auto" pr="2">
        <ProductsMain v-if="dashboard.selected == 'Products'" />
        <CategoriesMain v-if="dashboard.selected == 'Categories'" />
        <UsersMain v-if="dashboard.selected == 'Users'" />
        <OverviewMain v-if="dashboard.selected == 'Overview'" />

    </div>
</template>

            
<script setup>
import { DashboardQuickAccess } from '#components'
const dashboard = useDashboard();
</script>