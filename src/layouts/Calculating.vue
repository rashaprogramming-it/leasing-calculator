<template>
    <div class="calculating flex justify-between items-center">
        <div class="flex flex-col gap-2 max-w-[427px] w-full">
            <h3 class="font-gr text-[16px] leading-5 text-[#575757]">Сумма договора лизинга</h3>
            <h2 class="text-[54px] leading-[90%] text-[#333333]" v-show="!store.sumS">{{
                store.calcBtnVisible == false ?
                    new Intl.NumberFormat('ru-RU').format(currentSumLeasing) : '-'
            }}<span> ₽</span></h2>
        </div>
        <div class="flex flex-col gap-2 max-w-[427px] w-full">
            <h3 class="font-gr text-[16px] leading-5 text-[#575757]">Ежемесячный платеж от</h3>
            <!-- <h2 class="text-[54px] leading-[90%] text-[#333333]">{{ monthPay }}<span>₽</span></h2> -->
            <h2 class="text-[54px] leading-[90%] text-[#333333]" v-show="!store.sumS">{{
                store.calcBtnVisible == false ?
                    new Intl.NumberFormat('ru-RU').format(currentMonthPay) : '-'
            }}<span> ₽</span></h2>
        </div>
        <button @click="calcFunction" v-if="!store.calcBtnDisableAll"
            class="max-w-[427px] w-full pl-[92px] pr-[92px] pt-[15px] pb-[15px] flex items-center justify-center bg-[#FF9514] rounded-[40px] text-[#fff] text-3xl leading-9 text-center"
            :class="{ 'hover:opacity-50': !store.calcBtnVisible }">
            <span v-show="store.calcBtnVisible == false ? true : false">Посчитать</span>
            <div class="text-[#fff] text-3xl leading-9 text-center" v-show="store.calcBtnVisible == true ? true : false">Ожидайте...</div>
        </button>
        <button v-if="store.calcBtnDisableAll" @click="reloadFunction()"
            class="max-w-[427px] w-full pl-[92px] pr-[92px] pt-[15px] pb-[15px] flex items-center justify-center bg-[#FF9514] rounded-[40px] text-[#fff] text-3xl leading-9 text-center hover:opacity-50 max-[425px]:pl-[70px] max-[425px]:pr-[70px] max-[425px]:pt-[10px] max-[425px]:pb-[10px] max-[381px]:text-2xl">Оставить
            заявку</button>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/counter'
import { toRef } from 'vue'

const store = useStore()

const calc: any = toRef(store.calc, 'val')
const currentCarPrice: any = toRef(store.carPrice, 'val')
const currentAnInitialFree = toRef(store.anInitialFree, 'val')
const leasingTermVal: any = toRef(store.leasingTermVal, 'val')
const currentMonthPay: any = toRef(store.monthPay, 'val')
const currentSumLeasing: any = toRef(store.sumLeasing, 'val')

const calcFunction = () => {
    if (
        currentCarPrice.value != null &&
        currentAnInitialFree.value != null &&
        leasingTermVal.value != null &&
        currentCarPrice.value >= 1000000 &&
        currentCarPrice.value <= 6000000 &&
        currentAnInitialFree.value >= 10 &&
        currentAnInitialFree.value <= 60 &&
        leasingTermVal.value >= 1 &&
        leasingTermVal.value <= 60
    ) {
        store.calcBtnVisible = true
        setTimeout(() => {
            store.calcBtnVisible = false
            currentMonthPay.value = Math.floor((currentCarPrice.value - calc.value) * ((0.035 * Math.pow((1 + 0.035), leasingTermVal.value)) / (Math.pow((1 + 0.035), leasingTermVal.value) - 1)))
            currentSumLeasing.value = Math.floor(calc.value + +leasingTermVal.value * Number(currentMonthPay.value))
            store.sumS = !store.sumS
            store.calcBtnDisableAll = !store.calcBtnDisableAll
        }, 1500);
    } else {
        alert('Пожалуйста заполните корректно все поля!')
    }
}

const reloadFunction = () => {
    alert('Заявка оставлена!')
    location.reload()
}
</script>