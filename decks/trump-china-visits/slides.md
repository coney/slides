---
theme: seriph
title: 川普访华：从故宫到天坛
class: deck cover
drawings:
  persist: false
transition: fade-out
mdc: true
---

<div class="kicker">China / U.S. / Power Diplomacy</div>

# <span class="neon">川普访华</span><br/>从故宫到天坛

<div class="subtitle">
两次访问，两个场景：2017 的“礼遇与订单”，2026 的“竞争与控险”。
</div>

<div class="chips mt-10">
  <div class="chip">2017 故宫</div><div class="chip">2026 天坛</div><div class="chip">贸易</div><div class="chip">AI / 芯片</div><div class="chip">台湾 / 伊朗</div>
</div>

<div class="footer-note">公开资料整理 · 更新于 2026-05-14</div>

---
class: deck
---

<div class="kicker">The Core</div>

# 一句话判断

<div class="grid2 mt-10">
  <div class="panel">
    <div class="num cyan">2017</div>
    <div class="bigline mt-4">把合作氛围<br/>做到极致</div>
    <p class="mini mt-5">故宫、京剧、晚宴、商业大单：重点是“关系还有想象空间”。</p>
  </div>
  <div class="panel">
    <div class="num pink">2026</div>
    <div class="bigline mt-4">在竞争里<br/>寻找刹车</div>
    <p class="mini mt-5">贸易、AI、台湾、伊朗、供应链：重点是“别让风险失控”。</p>
  </div>
</div>

<div class="panel compact mt-8">
  <span class="gold">我的看法：</span> 访问本身不是答案，它只是把中美关系的阶段性矛盾压缩成一个可观看的画面。
</div>

---
class: deck
---

<div class="kicker">Timeline</div>

# 五个节点，看关系转向

```mermaid
flowchart LR
  A["2017.11.08<br/>抵达北京 · 故宫"] --> B["2017.11.09<br/>会谈 · 商业协议"]
  B --> C["2018 起<br/>关税与科技竞争"]
  C --> D["2026.05.13<br/>再度抵京"]
  D --> E["2026.05.14<br/>会谈 · 天坛"]
```

<div class="panel compact mt-5">
关系主轴从“扩大合作窗口”，逐步转向“管理竞争风险”。
</div>

---
class: deck bg-forbidden
---

<div class="kicker">Scene 01</div>

# 2017：故宫外交

<div class="panel mt-8" style="max-width:560px">
  <div class="bigline">它不是景点安排，<br/>是外交叙事。</div>
  <ul class="clean">
    <li>→ 故宫前三殿、茶叙、京剧、晚宴</li>
    <li>→ 高规格礼遇塑造合作气氛</li>
    <li>→ 文明与历史感，压住现实分歧</li>
  </ul>
</div>

<div class="footer-note">图：故宫 / Wikimedia Commons</div>

---
class: deck bg-hall
---

<div class="kicker">Deals & Frictions</div>

# 大单很大，<br/>问题也很大

<div class="grid3 mt-8" style="max-width:760px">
  <div class="panel compact"><div class="stat gold">$250B+</div><div class="mini mt-2">商业与投资协议量级</div></div>
  <div class="panel compact"><div class="stat cyan">6</div><div class="mini mt-2">能源、航空、农业等领域</div></div>
  <div class="panel compact"><div class="stat pink">未解</div><div class="mini mt-2">逆差、准入、产业政策</div></div>
</div>

<div class="panel compact mt-8" style="max-width:680px">
签单能改善气氛，但不能自动解决结构性不信任。
</div>

---
class: deck bg-tech
---

<div class="kicker">After 2017</div>

# 访问窗口关闭，<br/>竞争窗口打开

<div class="grid3 mt-10">
  <div class="visual-card"><div class="badge">Tariffs</div><h2 class="mt-5">关税</h2><p class="mini">贸易逆差争议升级为关税攻防。</p></div>
  <div class="visual-card"><div class="badge">Tech</div><h2 class="mt-5">科技</h2><p class="mini">芯片、AI、出口管制成为新主轴。</p></div>
  <div class="visual-card"><div class="badge">Supply Chain</div><h2 class="mt-5">供应链</h2><p class="mini">效率优先让位于安全与韧性。</p></div>
</div>

---
class: deck bg-temple
---

<div class="kicker">Scene 02</div>

# 2026：天坛会谈

<div class="panel mt-8" style="max-width:610px">
  <div class="bigline">这次不是蜜月，<br/>而是风险管理。</div>
  <ul class="clean">
    <li>→ 5 月 13 日晚抵京</li>
    <li>→ 5 月 14 日人民大会堂会谈逾 2 小时</li>
    <li>→ 会后同游天坛，象征“秩序与稳定”</li>
  </ul>
</div>

<div class="footer-note">图：天坛 / Wikimedia Commons</div>

---
class: deck
---

<div class="kicker">2026 Agenda Map</div>

# 议题已经升级

<script setup>
const agendaOption = {
  backgroundColor: 'transparent',
  tooltip: {},
  legend: {
    bottom: 0,
    textStyle: { color: '#dbeafe' },
    data: ['2017', '2026'],
  },
  radar: {
    radius: '67%',
    center: ['50%', '48%'],
    splitNumber: 4,
    axisName: { color: '#e0f2fe', fontSize: 14 },
    splitArea: {
      areaStyle: { color: ['rgba(34,211,238,.03)', 'rgba(244,114,182,.03)'] },
    },
    splitLine: { lineStyle: { color: 'rgba(148,163,184,.25)' } },
    axisLine: { lineStyle: { color: 'rgba(148,163,184,.28)' } },
    indicator: [
      { name: '贸易', max: 5 },
      { name: 'AI / 芯片', max: 5 },
      { name: '供应链', max: 5 },
      { name: '台湾', max: 5 },
      { name: '地区安全', max: 5 },
      { name: '企业合作', max: 5 },
    ],
  },
  series: [{
    type: 'radar',
    data: [
      {
        name: '2017',
        value: [5, 1, 2, 2, 3, 5],
        lineStyle: { width: 3, color: '#22d3ee' },
        itemStyle: { color: '#22d3ee' },
        areaStyle: { color: 'rgba(34,211,238,.18)' },
      },
      {
        name: '2026',
        value: [4, 5, 5, 5, 4, 3],
        lineStyle: { width: 3, color: '#f472b6' },
        itemStyle: { color: '#f472b6' },
        areaStyle: { color: 'rgba(244,114,182,.18)' },
      },
    ],
  }],
}
</script>

<Chart :option="agendaOption" height="355px" />

<div class="caption">议题强度为演示性归纳，用于比较两次访问的议程重心，不代表统计评分。</div>

---
class: deck
---

<div class="kicker">2017 vs 2026</div>

# 从“扩大蛋糕”到“划清边界”

<div class="compare">
  <div class="side">
    <div class="num cyan">2017</div>
    <h2 class="mt-4">故宫</h2>
    <div class="chips"><span class="chip">礼遇</span><span class="chip">订单</span><span class="chip">朝核</span><span class="chip">贸易逆差</span></div>
    <p class="mini mt-6">核心是：制造合作窗口，让市场看到确定性。</p>
  </div>
  <div class="side">
    <div class="num pink">2026</div>
    <h2 class="mt-4">天坛</h2>
    <div class="chips"><span class="chip">AI</span><span class="chip">芯片</span><span class="chip">台湾</span><span class="chip">稀土</span><span class="chip">伊朗</span></div>
    <p class="mini mt-6">核心是：给竞争装护栏，避免误判升级。</p>
  </div>
</div>

---
class: deck
---

<div class="kicker">My Takeaways</div>

# 四个观察

<div class="grid2 mt-8">
  <div class="panel compact"><div class="badge">01</div><h2 class="mt-4">仪式感就是谈判</h2><p class="mini">故宫和天坛都在给谈判加历史与秩序叙事。</p></div>
  <div class="panel compact"><div class="badge">02</div><h2 class="mt-4">稳定本身是成果</h2><p class="mini">高度竞争下，能继续谈、避免误判，已经有价值。</p></div>
  <div class="panel compact"><div class="badge">03</div><h2 class="mt-4">企业是缓冲器</h2><p class="mini">商业利益能拉住关系，但不再单独决定方向。</p></div>
  <div class="panel compact"><div class="badge">04</div><h2 class="mt-4">订单不是答案</h2><p class="mini">2017 证明，大单能改善气氛，但解决不了结构性不信任。</p></div>
</div>

---
class: deck cover
---

<div class="kicker">Final Frame</div>

# 今天的中美关系

<div class="panel mt-9" style="max-width:780px">
  <div class="bigline">
  红毯、古建筑、友好措辞，<br/>
  和关税、芯片、台湾、战争、供应链，<br/>
  同时存在。
  </div>
</div>

<div class="subtitle mt-8">
必须合作，但无法回到单纯合作。
</div>

---
class: deck
---

<div class="kicker">Sources</div>

# 资料来源

<div class="grid2 mt-8">
  <div class="panel compact">
    <ul class="clean">
      <li>中国外交部：2026 访华公告、会谈消息</li>
      <li>白宫档案：2017 联合记者会、企业活动讲话</li>
      <li>Reuters：2026 访华议题、企业代表团、AI/台湾/伊朗报道</li>
    </ul>
  </div>
  <div class="panel compact">
    <ul class="clean">
      <li>BBC 中文：会谈逾 2 小时、同游天坛</li>
      <li>Xinhua / SCMP / CNBC：2017 故宫行程与经贸协议</li>
      <li>Wikimedia Commons / Unsplash：配图素材</li>
    </ul>
  </div>
</div>

<div class="footer-note">注：2026 年访问仍在进行中，后续成果可能继续更新。</div>
