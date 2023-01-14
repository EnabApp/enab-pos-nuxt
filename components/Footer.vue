<template>
    <div flex justify-between text-tertiary border-t border-secondaryOp pt-3 mt-1>
        <div flex gap-2 items-center>
            <a href="https://enab.app" font-bold target="_blank">Enab.app</a>
            <span text-sm>0.0.1000</span>
        </div>
        <div flex gap-2>
            <ClientOnly>
                <span text-right>{{ formatted }}</span>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
</script>