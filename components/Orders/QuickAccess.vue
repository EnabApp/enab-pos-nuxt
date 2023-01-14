<template>
    <ABtn @click="goTo('order')" h="70px" text-2xl :bg="route.path.endsWith('order') ? 'infoOp' : 'secondaryOp'" :text="route.path.endsWith('order') ? 'white' : 'tertiary'">
        Order
    </ABtn>
    <ABtn @click="goTo('close')" h="70px" text-2xl :bg="route.path.endsWith('close') ? 'infoOp' : 'secondaryOp'" :text="route.path.endsWith('close') ? 'white' : 'tertiary'">
        Close
    </ABtn>
    <ABtn h="70px" text-2xl text-tertiary>
        Change Table
    </ABtn>
    <ABtn h="70px" text-2xl text-tertiary>
        Void
    </ABtn>
    <ABtn @click="router.push('/tables')" h="70px" text-2xl text-tertiary>
        Home
    </ABtn>
</template>

            
<script setup>
const route = useRoute()
const router = useRouter()
const orderId = route.params.id
const goTo = (path) => {
    router.push(`/order/${orderId}/${path}`)
}
</script>