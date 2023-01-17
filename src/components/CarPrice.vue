<template>
    <div class="car-price flex flex-col gap-6">
        <h3 class="font-gr text-[16px] leading-5 text-[#575757]">Стоимость автомобиля</h3>
        <div class="input-block flex flex-col">
            <div class="input-block-num flex justify-between items-center w-full h-full p-6">
                <input :onkeypress=validate type="number" placeholder="1.000.000-6.000.000"
                    :disabled="currentMonthPay != '-' && currentSumLeasing != '-' ? true : false"
                    class="text-[30px] leading-9 text-[#575757] w-[100%] bg-transparent max-[405px]:placeholder:text-[20px]"
                    v-model="currentCarPrice">
                <h3 class="text-[30px] leading-9 text-[#575757]">₽</h3>
            </div>
            <input type="range" min="1000000" max="6000000"
                class="styled-slider slider-progress" v-model="currentCarPrice"
                :disabled="currentMonthPay != '-' && currentSumLeasing != '-' ? true : false">
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/counter'
import { validate } from '@/logic/validate'
import { toRef, watch } from 'vue'

const store = useStore()

const calc: any = toRef(store.calc, 'val')
const currentCarPrice: any = toRef(store.carPrice, 'val')
const anInitialFree: any = toRef(store.anInitialFree, 'val')
const currentMonthPay: any = toRef(store.monthPay, 'val')
const currentSumLeasing: any = toRef(store.sumLeasing, 'val')

watch(currentCarPrice, (newCurrentCarPrice: any) => {
    calc.value = Math.round(currentCarPrice.value / 100 * anInitialFree.value)

    if (newCurrentCarPrice >= 6000000) {
        currentCarPrice.value = 6000000
    } else if (newCurrentCarPrice == '00') {
        currentCarPrice.value = 1000000
    } else if (newCurrentCarPrice.toString().includes(".")) {
        currentCarPrice.value = Number(newCurrentCarPrice.toString().replace(/[\s.,%]/g, ''))
    }
})

</script>