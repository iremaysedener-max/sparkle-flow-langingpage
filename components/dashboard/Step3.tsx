'use client'
import { useState, useEffect } from 'react'
import { T } from './tokens'

type ColorScheme = 'dark' | 'gold' | 'light'

function DraftCard({ num, title, subtitle, colorScheme, selected, onSelect, delay }: {
  num: string; title: string; subtitle: string; colorScheme: ColorScheme
  selected: boolean; onSelect: () => void; delay: number
}) {
  const [visible, setVisible] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [published, setPublished] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  const handlePublish = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (publishing || published) return
    setPublishing(true)
    setTimeout(() => { setPublishing(false); setPublished(true) }, 1200)
  }

  if (!visible) return <div style={{ flex: 1 }} />

  const tags = { dark: 'Flatlay · 2026', gold: 'Editorial · 2026', light: 'Summer · 2026' }
  const titles = { dark: 'Shadow\nCollection', gold: 'The Dark\nEdition', light: 'Summer\nEssentials' }
  const overlays = {
    dark: 'linear-gradient(to top, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.08) 100%)',
    gold: 'linear-gradient(to top, rgba(10,6,2,0.80) 38%, rgba(0,0,0,0.10) 100%)',
    light: 'linear-gradient(to top, rgba(10,10,10,0.65) 32%, rgba(0,0,0,0.0) 100%)',
  }
  const images = {
    dark: '/draft1.jpg',
    gold: '/draft2.jpg',
    light: '/draft3.jpg',
  }
  const gradients = {
    dark: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    gold: 'linear-gradient(135deg, #1a1200 0%, #3d2e00 100%)',
    light: 'linear-gradient(135deg, #e8e0d0 0%, #c8bea8 100%)',
  }

  return (
    <div onClick={onSelect} style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRadius: 20, overflow: 'hidden', border: `2px solid ${selected ? T.dark : T.border}`, cursor: 'pointer', transition: 'all .25s', boxShadow: selected ? '0 8px 32px rgba(0,0,0,0.14)' : '0 2px 12px rgba(0,0,0,0.05)', animation: 'popIn .45s ease', transform: selected ? 'translateY(-2px)' : 'none' }}>
      {/* Photo */}
      <div style={{ flex: 1, minHeight: 220, overflow: 'hidden', position: 'relative', background: gradients[colorScheme], backgroundImage: `url(${images[colorScheme]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: overlays[colorScheme] }} />
        <div style={{ position: 'absolute', top: 12, left: 12, padding: '3px 9px', borderRadius: 20, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.18)', fontSize: 8.5, letterSpacing: '0.12em', color: '#fff', fontWeight: 600, textTransform: 'uppercase' }}>
          {tags[colorScheme]}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 14px 12px' }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1.15, textShadow: '0 1px 8px rgba(0,0,0,0.5)', whiteSpace: 'pre-line' }}>
            {titles[colorScheme]}
          </div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.14em', marginTop: 5, textTransform: 'uppercase' }}>MR. SHADOW</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: T.surface, padding: '14px 16px', borderTop: `1px solid ${T.border}` }}>
        <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2 }}>Taslak {num} — {title}</div>
        <div style={{ fontSize: 11, color: T.textMute, marginBottom: 12 }}>{subtitle}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={e => { e.stopPropagation(); onSelect() }} style={{ flex: 1, padding: '8px 0', borderRadius: 10, background: T.surfaceAlt, border: `1px solid ${selected ? T.dark : T.border}`, fontSize: 11, fontWeight: 600, cursor: 'pointer', color: selected ? T.dark : T.textSec, transition: 'all .2s' }}>
            {selected ? '✓ Seçildi' : 'Seç'}
          </button>
          <button onClick={handlePublish} style={{ flex: 2, padding: '8px 0', borderRadius: 10, background: published ? '#1a3a1a' : T.dark, color: published ? '#7cba7c' : '#fff', border: 'none', fontSize: 11, fontWeight: 600, cursor: publishing || published ? 'default' : 'pointer', transition: 'all .3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
            {published ? '✓ Yayınlandı' : publishing ? <><span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span> Yayınlanıyor</> : '↑ Onayla & Yayınla'}
          </button>
        </div>
      </div>
    </div>
  )
}

const DRAFTS = [
  { num: '01', title: 'Flatlay', subtitle: 'Ürün yerleşimi · Siyah koleksiyon', colorScheme: 'dark' as ColorScheme },
  { num: '02', title: 'Editorial', subtitle: 'Model çekimi · Rooftop', colorScheme: 'gold' as ColorScheme },
  { num: '03', title: 'Summer Look', subtitle: 'Yazlık koleksiyon · Outdoor', colorScheme: 'light' as ColorScheme },
]

export default function Step3({ onRestart }: { onRestart: () => void }) {
  const [selected, setSelected] = useState(1)

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px 40px 28px', gap: 18, animation: 'fadeIn .5s ease', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.5px' }}>3 Taslak Hazır ✦</h2>
          <p style={{ fontSize: 13, color: T.textSec, marginTop: 3 }}>Mr. Shadow · Mağaza Tanıtım Görseli · İnstagram 1:1</p>
        </div>
        <div style={{ flex: 1 }} />
        <button onClick={onRestart} style={{ padding: '8px 18px', borderRadius: 10, background: T.surfaceAlt, border: `1px solid ${T.border}`, fontSize: 12, cursor: 'pointer', color: T.textSec, fontWeight: 500 }}>← Yeni Prompt</button>
        <div style={{ padding: '8px 18px', borderRadius: 10, background: T.surfaceAlt, border: `1px solid ${T.border}`, fontSize: 12, color: T.textSec, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}>↓ Hepsini İndir</div>
      </div>

      <div style={{ flex: 1, display: 'flex', gap: 16, minHeight: 0 }}>
        {DRAFTS.map((d, i) => (
          <DraftCard key={d.num} {...d} selected={selected === i + 1} onSelect={() => setSelected(i + 1)} delay={i * 150} />
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', borderRadius: 16, background: T.surface, border: `1px solid ${T.border}`, animation: 'slideUp .5s .4s ease both' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2a7a2a', flexShrink: 0, boxShadow: '0 0 6px #2a7a2a' }} />
        <span style={{ fontSize: 12, color: T.textSec }}><b style={{ color: T.textPrimary }}>Taslak {selected}</b> seçili — onayladıktan sonra direkt yayınlanır</span>
        <div style={{ flex: 1 }} />
        <div style={{ fontSize: 11, color: T.textMute }}>Zamanlanmış yayın · Düzenle · Paylaş</div>
      </div>
    </div>
  )
}
