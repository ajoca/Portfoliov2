'use client'
import { motion } from 'framer-motion'

export default function TypingMascot() {
  return (
    <div className="relative w-56 h-56 select-none">
      <div className="absolute inset-x-8 bottom-2 h-3 rounded-full bg-black/40 blur-sm" />
      <motion.div
        className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10"
        initial={{ y: 4 }} animate={{ y: 0 }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 2.2, ease: 'easeInOut' }}
      />
      {/* ojos */}
      <motion.div className="absolute left-8 top-10 flex gap-6">
        <motion.div className="h-3 w-7 rounded-full bg-white/80"
          animate={{ opacity: [1,1,0,1] }} transition={{ duration: 3, repeat: Infinity, times: [0,.45,.5,1] }} />
        <motion.div className="h-3 w-7 rounded-full bg-white/80"
          animate={{ opacity: [1,1,0,1] }} transition={{ duration: 3.2, repeat: Infinity, times: [0,.6,.65,1] }} />
      </motion.div>
      {/* laptop + “código” */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2">
        <div className="mx-auto h-2 w-10 rounded-full bg-zinc-700" />
        <div className="mt-1 h-20 w-40 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-800 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-white/10 to-transparent" />
          <motion.div className="p-3 space-y-1.5 text-[9px] leading-3 font-mono text-white/80">
            {['const a = 1;','function go(){','  return a+1','}','go() // ✨'].map((t,i)=>(
              <motion.div key={i} initial={{ opacity: .3 }}
                animate={{ opacity: [0.3, 1, 0.6, 1] }}
                transition={{ duration: 2 + i*.2, repeat: Infinity }}>
                {t}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* manos tecleando */}
      <motion.div className="absolute left-8 bottom-10 h-8 w-10 rounded-2xl bg-zinc-700"
        animate={{ y: [0,2,0] }} transition={{ duration: .25, repeat: Infinity, repeatDelay: .05 }} />
      <motion.div className="absolute right-8 bottom-10 h-8 w-10 rounded-2xl bg-zinc-700"
        animate={{ y: [2,0,2] }} transition={{ duration: .25, repeat: Infinity, repeatDelay: .05 }} />
    </div>
  )
}
