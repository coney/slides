<script setup>
import VChart from 'vue-echarts'
import 'echarts'
defineProps({
  option: { type: Object, required: true },
})
</script>

<template>
  <v-chart :option="option" autoresize style="width:100%;height:100%" />
</template>
