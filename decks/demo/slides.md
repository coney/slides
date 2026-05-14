---
theme: seriph
background: https://cover.sli.dev
title: Demo Deck
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Demo Deck

这是一个多 PPT 展示仓库的示例

<div class="pt-12 opacity-70">
  入口页：<a href="/slides/">/slides/</a><br>
  当前 PPT：<a href="/slides/demo/">/slides/demo/</a>
</div>

---
layout: two-cols
layoutClass: gap-16
---

# 推荐结构

每个 PPT 一个目录：

```txt
decks/
  demo/
    slides.md
  product-intro/
    slides.md
  tech-sharing/
    slides.md
```

::right::

# 访问方式

每个 deck 会构建到：

```txt
/slides/demo/
/slides/product-intro/
/slides/tech-sharing/
```

---
layout: center
class: text-center
---

# 新增 PPT

1. 复制 `decks/demo` 为新目录
2. 改 `slides.md`
3. 在 `scripts/build.mjs` 的 `decks` 数组里登记
4. push 后 GitHub Pages 自动更新
