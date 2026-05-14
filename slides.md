---
theme: seriph
background: https://cover.sli.dev
class: text-center
drawings:
  persist: false
transition: slide-left
title: Slides
mdc: true
---

# Slides

A Slidev deck hosted on GitHub Pages

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: two-cols
layoutClass: gap-16
---

# What is this?

This repository is initialized with Slidev.

- Markdown-based slides
- Vue components supported
- GitHub Pages deployment

::right::

# Edit

Open `slides.md` and start writing.

```bash
npm run dev
```

---
layout: center
class: text-center
---

# Ready

Built and deployed with GitHub Actions.
