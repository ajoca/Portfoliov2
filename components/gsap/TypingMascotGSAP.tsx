'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function TypingMascotGSAP() {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hand-left',  { y:  2, duration: .22, repeat: -1, yoyo: true, ease: 'power1.inOut' })
      gsap.to('.hand-right', { y: -2, duration: .22, repeat: -1, yoyo: true, ease: 'power1.inOut', delay: .05 })
      gsap.to('.eye', { opacity: 0, duration: 0.06, repeat: -1, yoyo: true, repeatDelay: 2.2, stagger: .12 })
      gsap.to('.body', { y: -2, duration: 2.2, repeat: -1, yoyo: true, ease: 'power1.inOut' })
      gsap.utils.toArray<HTMLElement>('.code-line').forEach((el, i) => {
        gsap.to(el, { opacity: 1, duration: 2 + i*.2, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="relative w-56 h-56 select-none">
      <div className="absolute inset-x-8 bottom-2 h-3 rounded-full bg-black/40 blur-sm" />
      <div className="body absolute inset-0 rounded-[28px] bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10" />
      <div className="absolute left-8 top-10 flex gap-6">
        <div className="eye h-3 w-7 rounded-full bg-white/80" />
        <div className="eye h-3 w-7 rounded-full bg-white/80" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2">
        <div className="mx-auto h-2 w-10 rounded-full bg-zinc-700" />
        <div className="mt-1 h-20 w-40 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-800 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="p-3 space-y-1.5 text-[9px] leading-3 font-mono text-white/80">
            {['const a = 1;','function go(){','  return a+1','}','go() // ✨'].map((t,i)=>(
              <div key={i} className="code-line opacity-60">{t}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="hand-left absolute left-8 bottom-10 h-8 w-10 rounded-2xl bg-zinc-700" />
      <div className="hand-right absolute right-8 bottom-10 h-8 w-10 rounded-2xl bg-zinc-700" />
    </div>
  )
}
