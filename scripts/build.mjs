import { execFileSync } from 'node:child_process'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'

const decks = [
  {
    slug: 'demo',
    title: 'Demo Deck',
    description: '多 PPT 展示结构示例',
    entry: 'decks/demo/slides.md',
  },
  {
    slug: 'trump-china-visits',
    title: '川普访华：从故宫到天坛',
    description: '2017 记录、2026 动态与几点观察',
    entry: 'decks/trump-china-visits/slides.md',
  },
  {
    slug: 'visualization-stack',
    title: 'ECharts + Vue-ECharts + Mermaid',
    description: '数据图表、Vue 组件与流程图的组合演示',
    entry: 'decks/visualization-stack/slides.md',
  },
]

rmSync('dist', { recursive: true, force: true })
mkdirSync('dist', { recursive: true })

for (const deck of decks) {
  execFileSync(
    'npx',
    ['slidev', 'build', deck.entry, '--base', `/slides/${deck.slug}/`, '--out', new URL(`../dist/${deck.slug}`, import.meta.url).pathname],
    { stdio: 'inherit' },
  )
}

const cards = decks.map(deck => `
  <a class="card" href="./${deck.slug}/">
    <div class="tag">/${deck.slug}/</div>
    <h2>${escapeHtml(deck.title)}</h2>
    <p>${escapeHtml(deck.description)}</p>
  </a>`).join('\n')

writeFileSync('dist/index.html', `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Slides</title>
  <style>
    :root { color-scheme: dark; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    body { margin: 0; min-height: 100vh; background: radial-gradient(circle at top left, #334155, #020617 55%); color: #e5e7eb; }
    main { max-width: 960px; margin: 0 auto; padding: 72px 24px; }
    h1 { font-size: clamp(40px, 8vw, 76px); margin: 0 0 12px; letter-spacing: -0.06em; }
    .lead { color: #cbd5e1; font-size: 18px; margin-bottom: 40px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; }
    .card { display: block; padding: 24px; border: 1px solid rgba(148, 163, 184, .25); border-radius: 20px; background: rgba(15, 23, 42, .72); color: inherit; text-decoration: none; box-shadow: 0 20px 60px rgba(0, 0, 0, .28); transition: transform .16s ease, border-color .16s ease; }
    .card:hover { transform: translateY(-3px); border-color: rgba(96, 165, 250, .9); }
    .tag { color: #93c5fd; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px; }
    h2 { margin: 12px 0 8px; font-size: 24px; }
    p { margin: 0; color: #94a3b8; line-height: 1.6; }
    footer { margin-top: 48px; color: #64748b; font-size: 14px; }
    code { color: #bfdbfe; }
  </style>
</head>
<body>
  <main>
    <h1>Slides</h1>
    <p class="lead">这里集中展示这个仓库里的多个 Slidev PPT。</p>
    <section class="grid">
${cards}
    </section>
    <footer>新增 PPT：创建 <code>decks/&lt;slug&gt;/slides.md</code>，并登记到 <code>scripts/build.mjs</code>。</footer>
  </main>
</body>
</html>
`)

writeFileSync('dist/404.html', `<script>location.replace('/slides/')</script>`)

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  }[char]))
}
