# Slides

这个仓库用于托管多个 Slidev PPT，并通过 GitHub Pages 展示。

## 访问

- 索引页：https://coney.github.io/slides/
- Demo PPT：https://coney.github.io/slides/demo/

## 目录结构

```txt
decks/
  demo/
    slides.md
scripts/
  build.mjs
```

## 新增一个 PPT

1. 新建目录：`decks/<slug>/slides.md`
2. 在 `scripts/build.mjs` 的 `decks` 数组里添加：

```js
{
  slug: '<slug>',
  title: '标题',
  description: '简介',
  entry: 'decks/<slug>/slides.md',
}
```

3. 本地构建：

```bash
npm run build
```

4. 提交并推送，GitHub Actions 会自动部署。

访问地址会是：

```txt
https://coney.github.io/slides/<slug>/
```
