'use client'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-avatar', { y: -30, scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=300', scrub: true } })
      gsap.to('.hero-text',   { y:  20, scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=300', scrub: true } })
      gsap.to('.blob-left',   { y: -40, scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'top top', scrub: true } })
      gsap.to('.blob-right',  { y:  40, scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'top top', scrub: true } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return <section ref={ref} className="relative overflow-hidden">{children}</section>
}
