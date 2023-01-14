<template>
    <div ref="itemRef" @click="opened = !opened" flex justify-center flex-col gap-4 w-full h-full :bg="opened ? 'tertiary opacity-30' : 'secondaryOp'" rounded-lg px-4 py-2 cursor-pointer font-bold text-white>
        <div flex justify-between w-full>
            <span uppercase>1 chicken sub</span>
            <span>1000.00</span>
        </div>

        <div v-if="opened" flex w-full items-center justify-between gap-4 text-sm mb-2>
            <ABtn @click.stop="() => { }" grow color="danger">حذف</ABtn>
            <ABtn @click.stop="() => { }" grow color="success">زيادة</ABtn>
            <ABtn @click.stop="() => { }" grow bg="secondaryOp">نقصان</ABtn>
        </div>
    </div>
</template>

<script setup>
const opened = ref(false)
const itemRef = ref(null)
onClickOutside(itemRef, () => opened.value = false)
</script>