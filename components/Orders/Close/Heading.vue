<template>
    <div flex flex-col gap-8>
        <div flex gap-4 text-tertiary>
            <div flex flex-col>
                <span text-sm font-bold>Total</span>
                <span text-warningOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ total }}
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Opened By</span>
                <span text-white p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    Hussam al-Rassam
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Table</span>
                <span text-white p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    0
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Order</span>
                <span text-white p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    {{ $route.params.id }}
                </span>
            </div>
        </div>

        <div flex gap-4 text-tertiary>
            <div flex flex-col>
                <span text-sm font-bold>Discount</span>
                <span text-dangerOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    0.00
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Service</span>
                <span text-infoOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    0.00
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Exchange</span>
                <span text-dangerOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    2000.00
                </span>
            </div>
            <div flex flex-col>
                <span text-sm font-bold>Due</span>
                <span text-successOp p-3 rounded-lg font-bold text-xl bg-secondaryOp w-200px>
                    0.00
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
const total = ref(1230.00)
</script>