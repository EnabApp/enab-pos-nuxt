<template>

    <div v-for="item in categoriesStore.getCategories" :key="item">
        <div class="flex justify-between gap-4	w-full">
            <ACard :title="item.name" :subtitle="item.description">
                <!-- <img src="https://picsum.photos/200/300" alt="{{ item.name }}"> -->
                <div class="a-card-body a-card-spacer">
                    <p class="text-sm">
                        {{ item.name }}
                    </p>
                    <ABtn @click="categoriesStore.updete(item.id)" h="7px" text-2xl text-dangerOp>
                        updete
                    </ABtn>
                    <ABtn @click="categoriesStore.remove(item.id)" h="7px" text-2xl text-dangerOp>
                        delete
                    </ABtn>
                </div>
            </ACard>
        </div>
    </div>
    <ADialog v-model="categoriesStore.isDialogShown" title="New Category" persistent>
        <div class="a-card-body">
            <CategoriesNewCategory />
        </div>
    </ADialog>

    <ABtn @click="categoriesStore.isDialogShown = true">
        Show dialog
    </ABtn>
</template>

<script setup>
const categoriesStore = useCategories();
await categoriesStore.fetch()

</script>
