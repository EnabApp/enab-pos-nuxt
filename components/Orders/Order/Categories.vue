<template>
    <!-- ITEMS (PRODUCTS) -->
    <div v-if="categoriesStore.getSelected" grid="~ cols-8" gap-4 place-items-center overflow-x-hidden overflow-y-auto basis="9/12" w="9/12">
        <ABtn @click="categoriesStore.selected = null" w-full h-full aspect-video color="danger" variant="light">
            <IconBack />
        </ABtn>

        <ABtn v-for="item in categoriesStore.getSelected.products" :key="item" whitespace="!normal" w-full h-full aspect-video>
            <div break-words overflow-x-hidden flex flex-col font-bold>
                <span>{{ item.name }} </span>
                <span text-gray-400>{{ item.price }}</span>
            </div>
        </ABtn>

        <!-- Generate Blank Items -->
        <div v-for="item in blankItems" :key="item" w-full h-full aspect-video bg-secondaryOp rounded-lg />
    </div>

    <!-- CATEGORIES -->
    <div v-else grid="~ cols-8" gap-4 place-items-center overflow-x-hidden overflow-y-auto basis="9/12" w="9/12">
        <ABtn @click="categoriesStore.selected = item" v-for="item in categoriesStore.getCategories" :key="item" whitespace="!normal" w-full h-full aspect-video>
            <p break-words overflow-x-hidden flex-initial font-bold>{{ item.name }}</p>
        </ABtn>

        <!-- Generate Blank Categories -->
        <div v-for="item in blankCategories" :key="item" w-full h-full aspect-video bg-secondaryOp rounded-lg />
    </div>
</template>

<script setup>
const categoriesStore = useCategories()
if (!categoriesStore.getCategories.length) categoriesStore.fetch()
const blankCategories = computed(() => 48 - categoriesStore.getCategories.length ? 48 - categoriesStore.getCategories.length : 0)

const blankItems = computed(() => 47 - categoriesStore.getSelected?.products.length ? 47 - categoriesStore.getSelected?.products.length : 0)
</script>