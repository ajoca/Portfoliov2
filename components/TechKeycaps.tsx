'use client'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const items = ['JS','TS','React','Next','Node','Python','Java','SQL']

function Keycap({ label, index }: { label: string; index: number }) {
  const controls = useAnimationControls()
  useEffect(() => {
    const t = setInterval(() => {
      controls.start({
        y: [0, 2, 0],
        boxShadow: ['0 10px 20px rgba(0,0,0,.25)','0 2px 6px rgba(0,0,0,.25)','0 10px 20px rgba(0,0,0,.25)'],
        transition: { duration: .25 }
      })
    }, 1800 + index * 120)
    return () => clearInterval(t)
  }, [controls, index])
  return (
    <motion.div
      onMouseEnter={() => controls.start({ y: 2, transition: { duration: .12 } })}
      onMouseLeave={() => controls.start({ y: 0, transition: { duration: .12 } })}
      animate={controls}
      className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/90 shadow-[0_10px_20px_rgba(0,0,0,.25)]"
    >
      {label}
    </motion.div>
  )
}

export default function TechKeycaps() {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {items.map((l,i) => <Keycap key={l} label={l} index={i} />)}
    </div>
  )
}
