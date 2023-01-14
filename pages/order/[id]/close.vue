<template>
    <NuxtLayout>
        <div flex flex-col gap-8 w-full h-full>
            <!-- HEADER -->
            <Header :component="OrdersQuickAccess" />

            <!-- CONTENT -->
            <div flex flex-col gap-8 w-full>
                <!-- Heading -->
                <OrdersCloseHeading />
                <div flex gap-8 w-full>
                    <OrdersCloseCalculator />
                    <OrdersCloseActions />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { OrdersQuickAccess } from '#components'

</script>
