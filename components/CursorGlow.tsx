'use client'
import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current!
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full blur-3xl opacity-30"
      style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.35), transparent)' }}
    />
  )
}
