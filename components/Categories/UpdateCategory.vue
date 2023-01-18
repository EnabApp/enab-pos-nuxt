<template>
    <div>
        <AAlert v-if="categoriesStore.getCreateError" class="mb-2" color="danger">
            {{ categoriesStore.getCreateError }}
        </AAlert>
        <div class="grid-row sm:grid-cols-1 place-items-stretch mb-2">
            <AInput v-model="categoriesStore.name" type="text" label="Name" />
            <AInput v-model="categoriesStore.description" type="text" label="Description" />
        </div>
        <AInput mt-2 type="file" label="File" />
        <div class="flex mt-4">
            <ABtn @click="categoriesStore.update()" class="mr-4">
                Save
            </ABtn>
            <ABtn @click="categoriesStore.isDrawerShown = false" class="mr-4">
                Cancel
            </ABtn>
        </div>
    </div>
</template>

<script setup>
const categoriesStore = useCategories();
</script>
