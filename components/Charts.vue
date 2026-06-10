<script setup>
import VChart from 'vue-echarts'
import 'echarts'

const lineOption = {
  title: { text: '访问趋势', left: 'center' },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
  yAxis: { type: 'value' },
  series: [
    { name: '浏览量', type: 'line', smooth: true, data: [320, 432, 501, 634, 790, 930, 1020], areaStyle: {} },
    { name: '访客', type: 'line', smooth: true, data: [220, 312, 401, 534, 690, 830, 920] },
  ],
}

const radarOption = {
  title: { text: '能力评估', left: 'center' },
  radar: {
    indicator: [
      { name: '排版', max: 100 },
      { name: '代码', max: 100 },
      { name: '图表', max: 100 },
      { name: '动画', max: 100 },
      { name: '流程', max: 100 },
      { name: '导出', max: 100 },
    ],
  },
  series: [{
    type: 'radar',
    data: [
      { value: [90, 85, 95, 80, 92, 88], name: 'Slidev' },
    ],
  }],
}
</script>

<template>
  <div style="display:grid;gap:16px;height:100%">
    <v-chart :option="lineOption" autoresize style="width:100%;height:45%" />
    <v-chart :option="radarOption" autoresize style="width:100%;height:45%" />
  </div>
</template>
