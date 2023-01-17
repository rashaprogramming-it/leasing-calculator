<template>
    <div class="main__content-instruments flex justify-between items-center">
        <CarPrice />
        <AnInitialFree  />
        <LeasingTerm   />
    </div>
</template>

<script setup lang="ts">
import CarPrice from '@/components/CarPrice.vue'
import AnInitialFree from '@/components/AnInitialFree.vue'
import LeasingTerm from '@/components/LeasingTerm.vue'
import { useStore } from '@/stores/counter'

const store = useStore()

</script>