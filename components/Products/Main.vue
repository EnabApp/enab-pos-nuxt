<template>
    <div>
        <div v-for="item in productsStore.getProducts" :key="item">
            <div class="flex justify-between gap-4	w-full">
                <ACard :title="item.name" :subtitle="item.description">
                    <!-- <img src="https://picsum.photos/200/300" alt="{{ item.name }}"> -->
                    <div class="a-card-body a-card-spacer">
                        <p class="text-sm">
                            {{ item.name }}
                        </p>
                        <ABtn @click="productsStore.updete(item.id)" h="7px" text-2xl text-dangerOp>
                            updete
                        </ABtn>
                        <ABtn @click="productsStore.remove(item.id)" h="7px" text-2xl text-dangerOp>
                            delete
                        </ABtn>
                    </div>
                </ACard>
            </div>
        </div>
        <ADialog v-model="productsStore.isDialogShown" title="New Category" persistent>
            <div class="a-card-body">
                <ProductsNewProduct />
            </div>
        </ADialog>

        <ABtn @click="productsStore.isDialogShown = true">
            Show dialog
        </ABtn>
    </div>
</template>

<script setup>
const productsStore = useProducts();
await productsStore.fetch()
</script>

