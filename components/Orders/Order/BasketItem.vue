<template>
    <div ref="itemRef" @click="opened = !opened" flex justify-center flex-col gap-4 w-full h-full :bg="opened ? 'tertiary opacity-30' : 'secondaryOp'" rounded-lg px-4 py-2 cursor-pointer font-bold text-white>
        <div flex justify-between w-full>
            <span uppercase>1 chicken sub</span>
            <span>1000.00</span>
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