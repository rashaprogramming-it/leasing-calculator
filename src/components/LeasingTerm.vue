<template>
    <div class="car-price flex flex-col gap-6">
        <h3 class="font-gr text-[16px] leading-5 text-[#575757]">Срок лизинга</h3>
        <div class="input-block flex flex-col">
            <div class="input-block-num flex justify-between items-center w-full h-full p-6">
                <input :onkeypress=validate type="number" placeholder="25" :disabled="currentMonthPay != '-' && currentSumLeasing != '-' ? true : false"
                    class="text-[30px] leading-9 text-[#575757] w-[100%] bg-transparent" v-model="leasingTermVal">
                <h3 class="text-[30px] leading-9 text-[#575757]">мес.</h3>
            </div>
            <input type="range" min="1" max="60" class="styled-slider slider-progress" :disabled="currentMonthPay != '-' && currentSumLeasing != '-' ? true : false" 
                v-model="leasingTermVal">
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/counter'
import { validate } from '@/logic/validate'
import { toRef, watch } from 'vue'

const store = useStore()

const leasingTermVal: any = toRef(store.leasingTermVal, 'val')
const currentMonthPay: any = toRef(store.monthPay, 'val')
const currentSumLeasing: any = toRef(store.sumLeasing, 'val')

watch(leasingTermVal, (newLeasingTermVal: any) => {
    if (newLeasingTermVal >= 60) {
        leasingTermVal.value = 60
    } else if(newLeasingTermVal = 0 || newLeasingTermVal == '00') {
        leasingTermVal.value = 10
    } else if (leasingTermVal.value.toString().includes(".")) {
        leasingTermVal.value = newLeasingTermVal.toString().replace(/[\s.,%]/g, '')
    }    
})
</script>