'use client'
import { useState, useEffect, useRef } from 'react'
import { T } from './tokens'

const PROMPT_TEXT = 'Mr. Shadow isimli giyim mağazam için yaz koleksiyonu tanıtım görseli hazırla'

export default function Step1({ onNext }: { onNext: () => void }) {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)
  const idx = useRef(0)

  useEffect(() => {
    idx.current = 0
    setTyped('')
    setDone(false)
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        idx.current++
        setTyped(PROMPT_TEXT.slice(0, idx.current))
        if (idx.current >= PROMPT_TEXT.length) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 400)
        }
      }, 42)
      return () => clearInterval(interval)
    }, 800)
    return () => clearTimeout(delay)
  }, [])

  const handleSend = () => {
    if (!done || sending) return
    setSending(true)
    setTimeout(onNext, 900)
  }

  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, animation: 'fadeIn .5s ease' }}>
      <div style={{ width: '100%', maxWidth: 700 }}>
        <div style={{ marginBottom: 36, animation: 'slideUp .5s ease' }}>
          <div style={{ fontSize: 11, color: T.textMute, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 10 }}>
            Sparkle Flow · İçerik Üretici
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.8px', lineHeight: 1.2 }}>
            Ne üretmek istiyorsunuz?
          </h1>
          <p style={{ marginTop: 8, fontSize: 14, color: T.textSec }}>
            Markanız ve ihtiyacınız hakkında bize anlatın — gerisini Sparkle halleder.
          </p>
        </div>

        <div style={{ background: T.surface, border: `1px solid ${T.borderMid}`, borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)', animation: 'slideUp .5s .1s ease both' }}>
          <div style={{ padding: '24px 24px 0' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: T.dark, flexShrink: 0, marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13 }}>✦</div>
              <div style={{ flex: 1, minHeight: 80, fontSize: 15.5, lineHeight: 1.65, color: T.textPrimary, paddingTop: 4 }}>
                {typed}
                {!done && <span style={{ display: 'inline-block', width: 2, height: 17, background: T.textPrimary, marginLeft: 1, verticalAlign: 'text-bottom', animation: 'blink .9s infinite' }} />}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '16px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', borderRadius: 10, background: T.surfaceAlt, border: `1px solid ${T.border}`, fontSize: 12, color: T.textSec }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: T.dark, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10 }}>◈</div>
              mr-shadow-brand.pdf
              <span style={{ color: T.textMute }}>· Marka kiti</span>
            </div>
            <div style={{ padding: '7px 12px', borderRadius: 10, background: T.surfaceAlt, border: `1px solid ${T.border}`, fontSize: 12, color: T.textMute, cursor: 'pointer' }}>+ Dosya ekle</div>
            <div style={{ flex: 1 }} />
            {['Instagram', 'Story'].map(tag => (
              <div key={tag} style={{ padding: '5px 10px', borderRadius: 8, background: T.surfaceAlt, border: `1px solid ${T.border}`, fontSize: 11, color: T.textSec }}>{tag}</div>
            ))}
          </div>

          <div style={{ borderTop: `1px solid ${T.border}`, padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ fontSize: 12, color: T.textMute }}>Ek bağlam, marka dosyası veya referans görsel ekleyebilirsiniz</div>
            <div style={{ flex: 1 }} />
            <button onClick={handleSend} style={{ padding: '10px 22px', borderRadius: 12, background: done ? T.dark : '#ccc', color: done ? '#fff' : '#999', border: 'none', cursor: done ? 'pointer' : 'default', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, transition: 'all .3s', opacity: sending ? 0.6 : 1 }}>
              {sending ? <><span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span> Gönderiliyor…</> : '✦ Üret'}
            </button>
          </div>
        </div>

        {done && !sending && (
          <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap', animation: 'fadeIn .4s ease' }}>
            <span style={{ fontSize: 11, color: T.textMute, alignSelf: 'center', marginRight: 4 }}>Öneri:</span>
            {['Ürün lansmanı', 'Sezon kampanyası', 'Koleksiyon duyurusu'].map(s => (
              <div key={s} style={{ padding: '5px 12px', borderRadius: 20, background: T.surface, border: `1px solid ${T.border}`, fontSize: 12, color: T.textSec, cursor: 'pointer' }}>{s}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
