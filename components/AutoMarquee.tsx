'use client'
import { motion } from 'framer-motion'

export default function AutoMarquee({ items }:{ items: string[] }) {
  const content = [...items, ...items]
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6 whitespace-nowrap py-2"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        {content.map((it, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            {it}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
