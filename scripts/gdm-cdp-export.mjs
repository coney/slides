import { chromium } from 'playwright-core'

const browser = await chromium.connectOverCDP('http://127.0.0.1:9333')
const context = browser.contexts()[0] || await browser.newContext()
const page = context.pages()[0] || await context.newPage()
await page.goto('http://127.0.0.1:3031/export/', { waitUntil: 'domcontentloaded', timeout: 60000 })
await page.waitForTimeout(15000)
const title = await page.title()
const bodyText = (await page.locator('body').innerText({ timeout: 10000 }).catch(() => '')).slice(0, 800)
await page.screenshot({ path: '/tmp/gdm-headed-cdp-slidev.png', fullPage: false })
const pdf = await page.pdf({ path: '/tmp/gdm-headed-cdp-slidev.pdf', printBackground: true, preferCSSPageSize: true })
console.log(JSON.stringify({ title, bodyTextStart: bodyText, pdfBytes: pdf.length }, null, 2))
await browser.close()
