'use client'
import { T } from './tokens'

const SidebarIcon = ({ icon, active }: { icon: string; active?: boolean }) => (
  <div style={{
    width: 40, height: 40, borderRadius: 12,
    background: active ? T.dark : 'transparent',
    color: active ? '#fff' : T.textMute,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', fontSize: 16, transition: 'all .2s', marginBottom: 4,
  }}>{icon}</div>
)

export default function Sidebar({ step }: { step: number }) {
  return (
    <div style={{
      width: 68, minHeight: '100%', background: T.surface,
      borderRight: `1px solid ${T.border}`,
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '20px 0', gap: 4, flexShrink: 0,
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: 10, background: T.dark, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 600, fontSize: 14, marginBottom: 24, letterSpacing: '-0.5px',
      }}>S</div>
      <SidebarIcon icon="⊡" active={step === 1} />
      <SidebarIcon icon="◈" active={step === 2} />
      <SidebarIcon icon="⊞" active={step === 3} />
      <div style={{ flex: 1 }} />
      <SidebarIcon icon="⊙" />
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#d0d0d0,#a0a0a0)', marginTop: 8 }} />
    </div>
  )
}
