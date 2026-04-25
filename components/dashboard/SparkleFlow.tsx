'use client'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { T } from './tokens'

export default function SparkleFlow() {
  const [step, setStep] = useState(1)
  const [transitioning, setTransitioning] = useState(false)
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    setMounted(true)
    const startStep = searchParams.get('startStep')
    if (startStep) {
      // Preview mode: start at specified step
      setStep(parseInt(startStep))
    } else {
      // Normal mode: restore from localStorage
      const s = localStorage.getItem('sf_step')
      if (s) setStep(parseInt(s))
    }
  }, [searchParams])

  const isPreview = !!searchParams.get('startStep')

  const goTo = (s: number) => {
    // Don't auto-advance in preview mode
    if (isPreview) return
    setTransitioning(true)
    setTimeout(() => {
      setStep(s)
      localStorage.setItem('sf_step', String(s))
      setTransitioning(false)
    }, 300)
  }

  if (!mounted) return null

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', background: T.bg, overflow: 'hidden', fontFamily: 'DM Sans, sans-serif' }}>
      <Sidebar step={step} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopBar step={step} />
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden', opacity: transitioning ? 0 : 1, transition: 'opacity .3s' }}>
          {step === 1 && <Step1 onNext={() => goTo(2)} />}
          {step === 2 && <Step2 onNext={() => goTo(3)} preview={isPreview} />}
          {step === 3 && <Step3 onRestart={() => goTo(1)} />}
        </div>
      </div>
    </div>
  )
}
