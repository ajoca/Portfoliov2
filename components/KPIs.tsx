
'use client'
import { motion } from 'framer-motion'
export default function KPIs({ repos, followers, following }: { repos:number, followers:number, following:number }) {
  const items = [
    { label: 'Repos públicos', value: repos },
    { label: 'Followers', value: followers },
    { label: 'Siguiendo', value: following }
  ]
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((i, idx) => (
        <motion.div key={i.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-soft">
          <div className="text-2xl font-bold">{i.value}</div>
          <div className="text-xs text-white/70">{i.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
