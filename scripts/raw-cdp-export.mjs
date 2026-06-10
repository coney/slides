import http from 'node:http'
import net from 'node:net'
import crypto from 'node:crypto'
import fs from 'node:fs/promises'

function getJson(url) {
  return new Promise((resolve, reject) => http.get(url, res => {
    let data=''; res.on('data', c => data += c); res.on('end', () => resolve(JSON.parse(data)))
  }).on('error', reject))
}

function encodeFrame(str) {
  const payload = Buffer.from(str)
  let header
  if (payload.length < 126) header = Buffer.alloc(2), header[1] = payload.length | 0x80
  else if (payload.length < 65536) header = Buffer.alloc(4), header[1] = 126 | 0x80, header.writeUInt16BE(payload.length, 2)
  else header = Buffer.alloc(10), header[1] = 127 | 0x80, header.writeBigUInt64BE(BigInt(payload.length), 2)
  header[0] = 0x81
  const mask = crypto.randomBytes(4)
  const out = Buffer.alloc(header.length + 4 + payload.length)
  header.copy(out, 0); mask.copy(out, header.length)
  for (let i=0;i<payload.length;i++) out[header.length+4+i] = payload[i] ^ mask[i%4]
  return out
}

function decodeFrames(buffer) {
  const messages=[]; let offset=0
  while (buffer.length-offset >= 2) {
    const b0=buffer[offset], b1=buffer[offset+1]; let len=b1 & 0x7f; let hdr=2
    if (len===126) { if (buffer.length-offset<4) break; len=buffer.readUInt16BE(offset+2); hdr=4 }
    else if (len===127) { if (buffer.length-offset<10) break; len=Number(buffer.readBigUInt64BE(offset+2)); hdr=10 }
    const masked=!!(b1&0x80); const maskLen=masked?4:0
    if (buffer.length-offset < hdr+maskLen+len) break
    let payload=buffer.subarray(offset+hdr+maskLen, offset+hdr+maskLen+len)
    if (masked) { const mask=buffer.subarray(offset+hdr, offset+hdr+4); payload=Buffer.from(payload.map((v,i)=>v^mask[i%4])) }
    if ((b0 & 0x0f) === 1) messages.push(payload.toString())
    offset += hdr+maskLen+len
  }
  return { messages, rest: buffer.subarray(offset) }
}

class CDP {
  constructor(wsUrl) { this.wsUrl = new URL(wsUrl); this.id=0; this.pending=new Map(); this.events=[]; this.buf=Buffer.alloc(0) }
  async connect() {
    this.sock = net.connect(Number(this.wsUrl.port), this.wsUrl.hostname)
    const key = crypto.randomBytes(16).toString('base64')
    await new Promise((resolve, reject) => {
      this.sock.once('error', reject)
      this.sock.write(`GET ${this.wsUrl.pathname} HTTP/1.1\r\nHost: ${this.wsUrl.host}\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: ${key}\r\nSec-WebSocket-Version: 13\r\n\r\n`)
      let hs=''
      const onData = chunk => {
        hs += chunk.toString('binary')
        const idx = hs.indexOf('\r\n\r\n')
        if (idx >= 0) {
          this.sock.off('data', onData)
          const rest = Buffer.from(hs.slice(idx+4), 'binary')
          if (!hs.startsWith('HTTP/1.1 101')) reject(new Error(hs.split('\r\n')[0]))
          else { if (rest.length) this._data(rest); resolve() }
        }
      }
      this.sock.on('data', onData)
    })
    this.sock.on('data', c => this._data(c))
  }
  _data(c) {
    this.buf = Buffer.concat([this.buf, c])
    const r = decodeFrames(this.buf); this.buf = r.rest
    for (const m of r.messages) {
      const msg = JSON.parse(m)
      if (msg.id && this.pending.has(msg.id)) { this.pending.get(msg.id)(msg); this.pending.delete(msg.id) }
      else this.events.push(msg)
    }
  }
  send(method, params={}) {
    const id = ++this.id
    this.sock.write(encodeFrame(JSON.stringify({id, method, params})))
    return new Promise((resolve, reject) => {
      const timer = setTimeout(()=>{this.pending.delete(id); reject(new Error(`timeout ${method}`))}, 60000)
      this.pending.set(id, msg => { clearTimeout(timer); msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result) })
    })
  }
  close(){ this.sock.end() }
}

const tabs = await getJson('http://127.0.0.1:9333/json/list')
const pageTab = tabs.find(t => t.type === 'page')
console.log('tab before:', pageTab.title, pageTab.url)
const cdp = new CDP(pageTab.webSocketDebuggerUrl)
await cdp.connect()
await cdp.send('Page.enable')
await cdp.send('Runtime.enable')
await cdp.send('Page.navigate', { url: 'http://127.0.0.1:3031/export/' })
await new Promise(r => setTimeout(r, 15000))
const title = await cdp.send('Runtime.evaluate', { expression: 'document.title', returnByValue: true })
const text = await cdp.send('Runtime.evaluate', { expression: 'document.body.innerText.slice(0,800)', returnByValue: true })
const shot = await cdp.send('Page.captureScreenshot', { format: 'png' })
await fs.writeFile('/tmp/gdm-raw-cdp-slidev.png', Buffer.from(shot.data, 'base64'))
const pdf = await cdp.send('Page.printToPDF', { printBackground: true, preferCSSPageSize: true })
await fs.writeFile('/tmp/gdm-raw-cdp-slidev.pdf', Buffer.from(pdf.data, 'base64'))
console.log(JSON.stringify({title: title.result?.value, text: text.result?.value, pdfBytes: (await fs.stat('/tmp/gdm-raw-cdp-slidev.pdf')).size}, null, 2))
cdp.close()
