<template>
    <div class="main">
        <div class="container">
            <div class="main__content flex flex-col gap-8">
                <h1 class="text-[#111111] text-[54px] leading-[90%] w-[750px] max-w-full">Рассчитайте стоимость автомобиля в лизинг</h1>
                <p class="text-[#FF9514] text-2xl">Процентная ставка: 3.5%</p>
                <MainInstruments />
                <Calculating v-if="currentCarPrice == null ? false : true" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MainInstruments from '@/layouts/MainInstruments.vue'
import Calculating from '@/layouts/Calculating.vue'
import { useStore } from '@/stores/counter'
import { toRef } from 'vue'

const store = useStore()

const currentCarPrice = toRef(store.carPrice, 'val')

</script>