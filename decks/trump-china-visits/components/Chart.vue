<script setup>
import { computed, provide } from 'vue'
import { use } from 'echarts/core'
import { BarChart, RadarChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  RadarComponent,
  TooltipComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from 'vue-echarts'

use([
  BarChart,
  RadarChart,
  GridComponent,
  LegendComponent,
  RadarComponent,
  TooltipComponent,
  CanvasRenderer,
])

provide(THEME_KEY, 'dark')

const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
  height: {
    type: String,
    default: '360px',
  },
})

const style = computed(() => ({ height: props.height }))
</script>

<template>
  <VChart class="chart" :option="option" :style="style" autoresize />
</template>

