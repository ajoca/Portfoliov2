// components/Reveal.tsx
'use client'
import { motion } from 'framer-motion'
export const Reveal = ({ delay=0, children }:{ delay?: number, children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .35, delay }}>
    {children}
  </motion.div>
)
