'use client'
import { T } from './tokens'

const LABELS = ['Prompt Oluştur', 'Marka Analizi', 'Taslakları İncele']

export default function TopBar({ step }: { step: number }) {
  return (
    <div style={{
      height: 56, background: T.surface, borderBottom: `1px solid ${T.border}`,
      display: 'flex', alignItems: 'center', padding: '0 24px', gap: 16, flexShrink: 0,
    }}>
      <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.3px' }}>✦ Sparkle Flow</span>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {[1, 2, 3].map(s => (
          <div key={s} style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '4px 12px', borderRadius: 20,
            background: s === step ? T.dark : T.surfaceAlt,
            color: s === step ? '#fff' : s < step ? T.textSec : T.textMute,
            fontSize: 12, fontWeight: 500,
            border: `1px solid ${s === step ? T.dark : T.border}`,
            transition: 'all .3s',
          }}>
            <span style={{
              width: 18, height: 18, borderRadius: '50%',
              background: s === step ? '#fff' : s < step ? '#222' : T.border,
              color: s === step ? T.dark : s < step ? '#fff' : T.textMute,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 10, fontWeight: 700, flexShrink: 0,
            }}>{s < step ? '✓' : s}</span>
            {LABELS[s - 1]}
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{
        width: 32, height: 32, borderRadius: '50%',
        background: T.surfaceAlt, border: `1px solid ${T.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 14, color: T.textSec,
      }}>⊙</div>
    </div>
  )
}
