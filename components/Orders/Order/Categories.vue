<template>
    <div v-if="selectedCategory" grid="~ cols-8" gap-4 place-items-center overflow-x-hidden overflow-y-auto basis="9/12" w="9/12">
        <ABtn @click="selectedCategory = null" w-full h-full aspect-video color="danger" variant="light">
            <IconBack />
        </ABtn>

        <ABtn v-for="item in itemsInCategory" :key="item" whitespace="!normal" w-full h-full aspect-video>
            <p break-words overflow-x-hidden flex-initial font-bold>{{ item.title }}</p>
        </ABtn>

        <!-- Generate Blank Items -->
        <ABtn v-for="item in blankItems" :key="item" w-full h-full aspect-video bg-secondaryOp />
    </div>
    <div v-else grid="~ cols-8" gap-4 place-items-center overflow-x-hidden overflow-y-auto basis="9/12" w="9/12">
        <ABtn @click="selectedCategory = item" v-for="item in categories" :key="item" whitespace="!normal" w-full h-full aspect-video>
            <p break-words overflow-x-hidden flex-initial font-bold>{{ item.title }}</p>
        </ABtn>

        <!-- Generate Blank Categories -->
        <ABtn v-for="item in blankCategories" :key="item" w-full h-full aspect-video bg-secondaryOp />
    </div>
</template>

<script setup>
const selectedCategory = ref(null)

const categories = ref([
    {
        id: 123,
        title: "عصائر",
    },
    {
        id: 124,
        title: "أكلات سريعة",
    },
    {
        id: 125,
        title: "أكلات شرقية",
    },
    {
        id: 126,
        title: "أكلات شرقية غربية شمالية",
    },
])

const items = ref([
    {
        id: 1,
        category_id: 123,
        title: "عصير برتقال",
        price: 500,
    },
    {
        id: 2,
        category_id: 124,
        title: "سندويش",
        price: 4500,
    },
    {
        id: 3,
        category_id: 125,
        title: "مشويات",
        price: 10000,
    }
])

const itemsInCategory = computed(() => items.value.filter(item => item.category_id === selectedCategory.value.id))

const blankCategories = computed(() => 48 - categories.value.length ? 48 - categories.value.length : 0)

const blankItems = computed(() => 47 - itemsInCategory.value.length ? 47 - itemsInCategory.value.length : 0)
</script>