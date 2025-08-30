'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const items = ['JS','TS','React','Next','Node','Python','Java','SQL']

export default function TechKeycapsGSAP() {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const caps = gsap.utils.toArray<HTMLElement>('.keycap')
      caps.forEach((el, i) => {
        gsap.to(el, {
          y: 2,
          duration: .12,
          repeat: -1, yoyo: true,
          ease: 'power1.inOut',
          repeatDelay: 1.6 + i * 0.12,
          boxShadow: '0 2px 6px rgba(0,0,0,.25)'
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="mt-6 flex flex-wrap gap-2">
      {items.map((l) => (
        <button
          key={l}
          className="keycap rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/90 shadow-[0_10px_20px_rgba(0,0,0,.25)] will-change-transform"
          onMouseEnter={e => gsap.to(e.currentTarget, { y: 2, duration: .12 })}
          onMouseLeave={e => gsap.to(e.currentTarget, { y: 0, duration: .12 })}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
