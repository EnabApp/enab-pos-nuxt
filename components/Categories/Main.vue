<template>
    <div>
        <div v-for="item in categoriesStore.getCategories" :key="item">
            <h1>
                {{ item.name }}
            </h1>
            <ABtn @click="categoriesStore.remove(item.id)" h="70px" text-2xl text-tertiary>
                delete
            </ABtn>
        </div>
    </div>
</template>

<script setup>
const categoriesStore = useCategories();
categoriesStore.fetch()
</script>
