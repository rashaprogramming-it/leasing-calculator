// import { ref } from 'vue'
import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    carPrice: reactive({
      val: null
    }),
    anInitialFree: reactive({
      val: null // Проценты
    }),
    // calc: ref(null),
    calc: reactive({
      val: null
    }),
    leasingTermVal: reactive({
      val: null
    }),
    monthPay: reactive({
      val: '-'
    }),
    calcBtnVisible: false,
    sumLeasing: reactive({
      val: '-'
    }),
    sumS: true,
    calcBtnDisableAll: false
  }),
  actions: {
    
  },
  getters: {

  }
})
