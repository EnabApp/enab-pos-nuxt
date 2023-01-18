<template>

    <div v-for="item in usersStore.getUsers" :key="item">
        <div class="flex justify-between gap-4	w-full">
            <ACard :title="item.name">
                <!-- <img src="https://picsum.photos/200/300" alt="{{ item.name }}"> -->
                <div class="a-card-body a-card-spacer">
                    <p class="text-sm">
                        {{ item.role }}
                    </p>
                    <ABtn @click="usersStore.updete(item.id)" h="7px" text-2xl text-dangerOp>
                        updete
                    </ABtn>
                    <ABtn @click="usersStore.remove(item.id)" h="7px" text-2xl text-dangerOp>
                        delete
                    </ABtn>
                </div>
            </ACard>
        </div>
    </div>
    <ADialog v-model="usersStore.isDialogShown" title="New Category" persistent>
        <div class="a-card-body">
            <UsersNewUser />
        </div>
    </ADialog>

    <ABtn @click="usersStore.isDialogShown = true">
        Show dialog
    </ABtn>
</template>

<script setup>
const usersStore = useUsers();
await usersStore.fetch()

</script>
