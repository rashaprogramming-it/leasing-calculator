<template>
    <div class="car-price flex flex-col gap-6">
        <h3 class="font-gr text-[16px] leading-5 text-[#575757]">Первоначальный взнос</h3>
        <div class="input-block flex flex-col">
            <div class="input-block-num flex justify-between items-center w-full h-full p-6">
                <input :onkeypress=validate type="number" :disabled="true"
                    class="text-[30px] leading-9 text-[#575757] w-[100%] bg-transparent" v-model="calc">
                <input type="number" min="0" max="60" :onkeypress=validate :disabled="currentMonthPay != '-' && currentSumLeasing != '-' ? true : false"
                    class="w-[69px] h-[54px] flex justify-center items-center bg-[#EBEBEC] rounded-2xl text-[20px] leading-[120%] text-[#575757] text-center"
                    placeholder="%"
                     v-model="currentAnInitialFree">
            </div>
            <input type="range" min="0" max="60" class="styled-slider slider-progress" v-model="currentAnInitialFree" :disabled="currentMonthPay != '-' && currentSumLeasing != '-' ? true : false">
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/counter'
import { validate } from '@/logic/validate'
import { toRef, watch } from 'vue'

const store = useStore()

const calc: any = toRef(store.calc, 'val')
const currentCarPrice = toRef(store.carPrice, 'val')
const currentAnInitialFree: any = toRef(store.anInitialFree, 'val')
const currentMonthPay: any = toRef(store.monthPay, 'val')
const currentSumLeasing: any = toRef(store.sumLeasing, 'val')

watch(currentAnInitialFree, (newCurrentAnInitialFree: any) => {
    calc.value = Math.round(Number(currentCarPrice.value) / 100 * Number(newCurrentAnInitialFree))

    if (newCurrentAnInitialFree >= 60) {
        currentAnInitialFree.value = 60
    } else if (newCurrentAnInitialFree == '00' || newCurrentAnInitialFree.toString().length > 2) {
        currentAnInitialFree.value = 1
    }    
})

</script>