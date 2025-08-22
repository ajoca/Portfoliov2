
'use client'
import { motion } from 'framer-motion'
type Item = { year: string, title: string, desc: string, link?: string }
export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />
      <div className="space-y-6">
        {items.map((it, idx) => (
          <motion.div key={it.title + idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="pl-10">
            <div className="relative">
              <div className="absolute -left-[22px] top-1 h-3 w-3 rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
              <div className="text-xs text-white/60">{it.year}</div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-white/80">{it.desc}</div>
              {it.link ? <a className="text-xs underline text-white/70" href={it.link} target="_blank">Ver repo</a> : null}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
