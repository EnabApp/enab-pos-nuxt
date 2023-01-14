<template>
    <ABtn @click="goTo('order')" h="70px" text-2xl :bg="route.path.endsWith('order') ? 'infoOp' : 'secondaryOp'" :text="route.path.endsWith('order') ? 'white' : 'tertiary'">
        Order
    </ABtn>
    <ABtn @click="goTo('close')" h="70px" text-2xl :bg="route.path.endsWith('close') ? 'infoOp' : 'secondaryOp'" :text="route.path.endsWith('close') ? 'white' : 'tertiary'">
        Close
    </ABtn>
    <OrdersQuickAccessTransferTable />
    <ABtn @click="voidOrder()" h="70px" text-2xl text-tertiary>
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
const orderId = route.params.id
const goTo = (path) => {
    router.push(`/order/${orderId}/${path}`)
}

const loadingVoid = ref(false)
const voidOrder = async () => {
    loadingVoid.value = true
    await new Promise(res => setTimeout(res, 1000));
    loadingVoid.value = false
    router.push('/tables')
}
</script>