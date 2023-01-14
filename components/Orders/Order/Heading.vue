<template>
    <div flex justify-between items-center>
        <div flex gap-4 text-tertiary>
            <div flex flex-col>
                <span text-sm font-bold>Total</span>
                <span text-warningOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ total }}
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Opened By</span>
                <span text-white p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    Hussam al-Rassam
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Table</span>
                <span text-white p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    0
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Order</span>
                <span text-white p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ $route.params.id }}
                </span>
            </div>
        </div>

        <!-- Title -->
        <span font-bold text-3xl>{{ categoriesStore.getSelected?.name ?? 'Categories' }}</span>
    </div>
</template>

<script setup>
const categoriesStore = useCategories()
const total = ref(1230.00)
</script>