<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as echarts from 'echarts/core'
import { BarChart, LineChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import VChart from 'vue-echarts'

echarts.use([
  BarChart,
  LineChart,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  CanvasRenderer,
])

const nativeChartEl = ref()
let nativeChart

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const nativeOption = {
  backgroundColor: 'transparent',
  grid: { top: 36, right: 18, bottom: 28, left: 42 },
  tooltip: { trigger: 'axis' },
  xAxis: {
    type: 'category',
    data: labels,
    axisLine: { lineStyle: { color: '#64748b' } },
    axisLabel: { color: '#cbd5e1' },
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { color: 'rgba(148, 163, 184, .16)' } },
    axisLabel: { color: '#94a3b8' },
  },
  series: [{
    type: 'bar',
    data: [120, 200, 150, 80, 70, 110, 130],
    barWidth: 18,
    itemStyle: {
      borderRadius: [7, 7, 0, 0],
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: '#22d3ee' },
          { offset: 1, color: '#2563eb' },
        ],
      },
    },
  }],
}

const vueOption = {
  backgroundColor: 'transparent',
  grid: { top: 36, right: 18, bottom: 28, left: 42 },
  tooltip: { trigger: 'axis' },
  xAxis: {
    type: 'category',
    data: labels,
    boundaryGap: false,
    axisLine: { lineStyle: { color: '#64748b' } },
    axisLabel: { color: '#cbd5e1' },
  },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { color: 'rgba(148, 163, 184, .16)' } },
    axisLabel: { color: '#94a3b8' },
  },
  series: [{
    type: 'line',
    smooth: true,
    symbolSize: 8,
    data: [88, 132, 101, 176, 142, 205, 232],
    lineStyle: { width: 4, color: '#f472b6' },
    itemStyle: { color: '#f9a8d4' },
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(244, 114, 182, .52)' },
          { offset: 1, color: 'rgba(244, 114, 182, .02)' },
        ],
      },
    },
  }],
}

function resize() {
  nativeChart?.resize()
}

onMounted(() => {
  nativeChart = echarts.init(nativeChartEl.value)
  nativeChart.setOption(nativeOption)
  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  nativeChart?.dispose()
})
</script>

<template>
  <div class="chart-grid">
    <section class="chart-card">
      <div class="chart-label">ECharts · imperative API</div>
      <div ref="nativeChartEl" class="chart-canvas" />
    </section>
    <section class="chart-card">
      <div class="chart-label pink">Vue-ECharts · component API</div>
      <VChart class="chart-canvas" :option="vueOption" autoresize />
    </section>
  </div>
</template>

