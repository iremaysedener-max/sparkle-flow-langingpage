'use client'
import { useState, useEffect } from 'react'
import { T } from './tokens'

function AnalysisItem({ label, value, delay }: { label: string; value: string; delay: number }) {
  const [visible, setVisible] = useState(false)
  const [complete, setComplete] = useState(false)
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), delay)
    const t2 = setTimeout(() => setComplete(true), delay + 1200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [delay])
  if (!visible) return null
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 0', borderBottom: `1px solid ${T.border}`, animation: 'slideUp .4s ease' }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, background: complete ? T.dark : T.surfaceAlt, border: `1.5px solid ${complete ? T.dark : T.borderMid}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: complete ? '#fff' : T.textMute, transition: 'all .4s' }}>
        {complete ? '✓' : <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span>}
      </div>
      <span style={{ fontSize: 13, color: T.textSec, flex: 1 }}>{label}</span>
      <span style={{ fontSize: 12, fontWeight: 500, color: complete ? T.textPrimary : T.textMute, transition: 'color .4s', maxWidth: 180, textAlign: 'right' }}>
        {complete ? value : '...'}
      </span>
    </div>
  )
}

function GeneratingBar({ label, delay, width }: { label: string; delay: number; width: number }) {
  const [active, setActive] = useState(false)
  const [filled, setFilled] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => {
      setActive(true)
      let cur = 0
      const iv = setInterval(() => {
        cur += 2
        setFilled(Math.min(cur, width))
        if (cur >= width) clearInterval(iv)
      }, 30)
    }, delay)
    return () => clearTimeout(t)
  }, [delay, width])
  return (
    <div style={{ marginBottom: 10, animation: active ? 'slideUp .3s ease' : 'none' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
        <span style={{ fontSize: 12, color: T.textSec }}>{label}</span>
        <span style={{ fontSize: 11, color: T.textMute }}>{filled}%</span>
      </div>
      <div style={{ height: 5, borderRadius: 10, background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
        <div style={{ height: '100%', borderRadius: 10, background: '#fff', width: `${filled}%`, transition: 'width .05s linear' }} />
      </div>
    </div>
  )
}

function TypedLine({ text, color, size, startDelay }: { text: string; color: string; size: number; startDelay: number }) {
  const [t, setT] = useState('')
  useEffect(() => {
    const tm = setTimeout(() => {
      let i = 0
      const iv = setInterval(() => { i++; setT(text.slice(0, i)); if (i >= text.length) clearInterval(iv) }, 38)
      return () => clearInterval(iv)
    }, startDelay)
    return () => clearTimeout(tm)
  }, [text, startDelay])
  return <div style={{ fontSize: size, color, lineHeight: 1.5, minHeight: 20 }}>{t}</div>
}

export default function Step2({ onNext, preview }: { onNext: () => void; preview?: boolean }) {
  const [phase, setPhase] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setAnalysisComplete(true), 4200)
    const t2 = setTimeout(() => setPhase(1), 4600)
    // Only auto-advance in non-preview mode
    const t3 = !preview ? setTimeout(onNext, 9000) : null
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      if (t3) clearTimeout(t3)
    }
  }, [onNext, preview])

  return (
    <div style={{ flex: 1, display: 'flex', padding: '32px 40px', gap: 20, animation: 'fadeIn .5s ease', overflow: 'hidden' }}>
      {/* Sol: Marka analizi */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
        <div style={{ background: T.surface, borderRadius: 18, padding: 22, border: `1px solid ${T.border}`, boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: T.dark, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 18, fontWeight: 700 }}>MS</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Mr. Shadow</div>
              <div style={{ fontSize: 12, color: T.textMute }}>Giyim Mağazası · İstanbul</div>
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ padding: '4px 10px', borderRadius: 20, background: analysisComplete ? '#f0f7f0' : T.surfaceAlt, border: `1px solid ${analysisComplete ? '#c0ddc0' : T.border}`, fontSize: 11, color: analysisComplete ? '#2a7a2a' : T.textMute, transition: 'all .5s' }}>
              {analysisComplete ? '✓ Analiz Tamamlandı' : '⟳ Analiz Ediliyor…'}
            </div>
          </div>
          <AnalysisItem label="Marka Tonu" value="Sofistike · Karanlık · Güçlü" delay={300} />
          <AnalysisItem label="Renk Paleti" value="#0A0A0A · #C8A96E · #FFFFFF" delay={800} />
          <AnalysisItem label="Hedef Kitle" value="25-40 yaş, Premium segment" delay={1300} />
          <AnalysisItem label="Görsel Dil" value="Minimalist, High-contrast" delay={1800} />
          <AnalysisItem label="Önerilen Format" value="1080×1080 · Siyah zemin" delay={2300} />
          <AnalysisItem label="Kopya Tonu" value="Özgüvenli, kısa, etkileyici" delay={2800} />
        </div>

        {analysisComplete && (
          <div style={{ background: T.surface, borderRadius: 16, padding: '16px 20px', border: `1px solid ${T.border}`, animation: 'popIn .4s ease', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 12, color: T.textSec }}>Renk Paleti</span>
            {['#0A0A0A', '#1A1A1A', '#C8A96E', '#E5D5B0', '#FFFFFF'].map(c => (
              <div key={c} title={c} style={{ width: 32, height: 32, borderRadius: 8, background: c, border: `1px solid ${T.border}`, flexShrink: 0 }} />
            ))}
            <span style={{ fontSize: 11, color: T.textMute, marginLeft: 4 }}>5 renk · Altın vurgu</span>
          </div>
        )}
      </div>

      {/* Sağ: Üretim */}
      <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 16, flexShrink: 0 }}>
        <div style={{ background: T.darkCard, borderRadius: 18, padding: 22, color: '#fff', flex: 1, boxShadow: '0 4px 24px rgba(0,0,0,0.18)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 14 }}>İçerik Üretimi</div>
          {phase < 1 ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.1)', borderTopColor: 'rgba(255,255,255,0.8)', animation: 'spin 1.2s linear infinite' }} />
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>Marka analizi bekleniyor…</div>
            </div>
          ) : (
            <div style={{ animation: 'fadeIn .4s ease' }}>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginBottom: 18 }}>3 farklı taslak üretiliyor</div>
              <GeneratingBar label="Taslak 01 — Siyah zemin" delay={100} width={92} />
              <GeneratingBar label="Taslak 02 — Altın vurgu" delay={600} width={78} />
              <GeneratingBar label="Taslak 03 — Minimal beyaz" delay={1100} width={61} />
              <div style={{ marginTop: 20, padding: '12px 14px', borderRadius: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>Üretilen metin</div>
                <TypedLine text='"Karanlığın Şıklığı — Mr. Shadow"' color="rgba(255,255,255,0.85)" size={12} startDelay={1600} />
              </div>
            </div>
          )}
        </div>

        <div style={{ background: T.surface, borderRadius: 16, padding: '14px 18px', border: `1px solid ${T.border}`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[['Platform', 'Instagram'], ['Format', '1:1 · Story'], ['Dil', 'Türkçe'], ['Çözünürlük', '1080×1080']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 10, color: T.textMute, marginBottom: 2 }}>{k}</div>
              <div style={{ fontSize: 12, fontWeight: 500 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
