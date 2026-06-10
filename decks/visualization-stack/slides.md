---
theme: seriph
title: ECharts + Vue-ECharts + Mermaid
class: viz-deck cover
drawings:
  persist: false
transition: fade-out
mdc: true
---

<div class="kicker">Visualization Stack / Live Demo</div>

# ECharts<br/><span class="gradient">Vue-ECharts</span><br/>Mermaid

<div class="subtitle">
一份可运行的 Slidev 示例：数据图表、Vue 组件和流程图在同一套演示里协作。
</div>

<div class="chips mt-10">
  <span class="chip">Slidev</span>
  <span class="chip">Vue 3</span>
  <span class="chip">ECharts</span>
  <span class="chip">Mermaid</span>
</div>

<div class="footer-note">基于仓库现有 Demo Deck 结构生成 · 2026-06-10</div>

---
class: viz-deck
---

<div class="kicker">Why This Stack</div>

# 三种表达，各司其职

<div class="grid3 mt-10">
  <div class="panel">
    <div class="index cyan">01</div>
    <h2>ECharts</h2>
    <p>直接控制实例，适合复杂交互、事件联动与精细性能调优。</p>
  </div>
  <div class="panel">
    <div class="index pink">02</div>
    <h2>Vue-ECharts</h2>
    <p>把图表变成 Vue 组件，配置响应式更新，更适合业务页面组合。</p>
  </div>
  <div class="panel">
    <div class="index gold">03</div>
    <h2>Mermaid</h2>
    <p>用文本维护流程、架构和时序，版本差异清晰，修改成本低。</p>
  </div>
</div>

---
class: viz-deck
---

<div class="kicker">Live Charts</div>

# 同一份数据，两种接入方式

<VisualChart class="mt-6" />

<div class="note mt-4">
左侧通过 <code>echarts.init()</code> 创建实例；右侧通过 <code>&lt;VChart&gt;</code> 声明式渲染。
</div>

---
class: viz-deck
---

<div class="kicker">Mermaid Flow</div>

# 从数据到决策

```mermaid
flowchart LR
  A[业务数据] --> B{数据处理}
  B -->|指标趋势| C[ECharts]
  B -->|Vue 页面| D[Vue-ECharts]
  B -->|流程关系| E[Mermaid]
  C --> F[统一演示]
  D --> F
  E --> F
  F --> G[理解与决策]
```

<div class="note mt-4">图表负责“量”，流程图负责“关系”，Slidev 负责把它们组织成叙事。</div>

---
class: viz-deck
---

<div class="kicker">Architecture</div>

# 页面结构保持简单

```mermaid
flowchart TB
  S[slides.md] --> V[Vue Component]
  V --> VE[vue-echarts / VChart]
  V --> EC[ECharts Core]
  S --> M[Mermaid Code Block]
  VE --> R[Browser Canvas]
  EC --> R
  M --> SVG[Generated SVG]
  R --> P[Slidev Page]
  SVG --> P
```

---
class: viz-deck
---

<div class="kicker">Selection Guide</div>

# 怎么选

<div class="compare mt-9">
  <div class="panel">
    <div class="badge">直接用 ECharts</div>
    <ul>
      <li>需要手动管理实例和生命周期</li>
      <li>大量事件联动或底层能力</li>
      <li>追求最明确的控制边界</li>
    </ul>
  </div>
  <div class="panel">
    <div class="badge pink-bg">优先 Vue-ECharts</div>
    <ul>
      <li>项目本身使用 Vue 3</li>
      <li>配置来自响应式状态</li>
      <li>图表需要复用为业务组件</li>
    </ul>
  </div>
</div>

<div class="note mt-7"><span class="gold">Mermaid 不参与二选一：</span>它用于描述流程、架构和关系，可与两者同时使用。</div>

---
class: viz-deck cover
---

<div class="kicker">Takeaway</div>

# 数据可视化<br/>不只是一张图

<div class="statement mt-10">
<span class="cyan">ECharts</span> 提供能力，<br/>
<span class="pink">Vue-ECharts</span> 提供工程化，<br/>
<span class="gold">Mermaid</span> 提供结构表达。
</div>

<div class="footer-note">按方向键浏览 · 按 O 查看全部页面</div>

