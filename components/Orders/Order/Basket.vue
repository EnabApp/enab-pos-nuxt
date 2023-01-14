<template>
    <div flex flex-col gap-2 border-2 border-secondaryOp rounded-lg p-4 basis="3/12" overflow-y-auto>
        <OrdersOrderBasketItem v-for="item in 10" :key="item" />
    </div>
</template>