<template>
    <ABtn @click="goTo('order')" h="70px" text-2xl :bg="route.path.endsWith('order') ? 'infoOp' : 'secondaryOp'" :text="route.path.endsWith('order') ? 'white' : 'tertiary'">
        Order
    </ABtn>
    <ABtn @click="goTo('close')" h="70px" text-2xl :bg="route.path.endsWith('close') ? 'infoOp' : 'secondaryOp'" :text="route.path.endsWith('close') ? 'white' : 'tertiary'">
        Close
    </ABtn>
    <OrdersQuickAccessTransferTable />

    <!-- VOID -->
    <ADialog v-model="isVoidDialogShown" title="Are you sure to void?">
        <div p="5" flex justify-between>
            <ABtn @click="isVoidDialogShown = false">
                Cancel
            </ABtn>

            <ABtn @click="voidOrder()" color="danger" variant="light">
                <IconLoading v-if="loadingVoid" />
                <span v-else>Delete</span>
            </ABtn>
        </div>
    </ADialog>
    <ABtn @click="isVoidDialogShown = true" h="70px" text-2xl text-tertiary>
        <IconLoading v-if="loadingVoid" />
        <span v-else>Void</span>
    </ABtn>
    <ABtn @click="router.push('/tables')" h="70px" text-2xl text-tertiary>
        <IconHome />
    </ABtn>
</template>

            
<script setup>
const route = useRoute()
const router = useRouter()
const ordersStore = useOrders()
const orderId = route.params.id
const goTo = (path) => {
    router.push(`/order/${orderId}/${path}`)
}


// VOID
const isVoidDialogShown = ref(false)
const loadingVoid = ref(false)

const voidOrder = async () => {
    loadingVoid.value = true
    if (await ordersStore.voidOrder(orderId)) {
        router.push('/tables')
    } else {
        alert('Error')
    }
    loadingVoid.value = false
}

</script>