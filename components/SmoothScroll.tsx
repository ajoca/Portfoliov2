'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    // Activa suavizado de rueda solo en desktop
    const lenis = new Lenis(
      (!('ontouchstart' in window) ? { smoothWheel: true } : {}) as any
    )

    let raf = 0
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop) }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return null
}
