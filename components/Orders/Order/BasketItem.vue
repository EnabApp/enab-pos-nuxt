<template>
    <div ref="itemRef" @click="opened = !opened" flex justify-center flex-col gap-4 w-full h-content :bg="opened ? 'tertiary opacity-30' : 'secondaryOp'" rounded-lg px-4 py-2 cursor-pointer font-600 text-white>
        <div flex justify-between w-full>
            <div><span>{{ product.quantity }}</span> <span uppercase>{{ product.name }}</span></div>
            <div flex flex-col text-right>
                <span>{{ usePrice(product.price * product.quantity) }}</span>
                <Transition>
                    <span v-show="opened" text-sm font-normal>{{ usePrice(product.price) }}</span>
                </Transition>
            </div>
        </div>


        <Transition>
            <div v-show="opened" flex w-full items-center justify-between gap-4 text-sm mb-2>
                <ABtn @click.stop="() => { }" grow color="danger">
                    <IconTrash w="6" h="6" />
                </ABtn>
                <ABtn @click.stop="() => { }" grow bg="secondaryOp">
                    <IconPlus w="7" h="7" />
                </ABtn>
                <ABtn @click.stop="() => { }" grow bg="secondaryOp">
                    <IconMinus w="7" h="7" />
                </ABtn>
            </div>
        </Transition>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})
const opened = ref(false)
const itemRef = ref(null)
onClickOutside(itemRef, () => opened.value = false)
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.15s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>