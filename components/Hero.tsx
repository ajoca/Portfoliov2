
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'
import Badge from './Badge'

export default function Hero({ avatar, name, bio }: { avatar: string, name: string, bio: string | null }) {
  return (
    <section id="top" className="relative overflow-hidden bg-hero">
      <Container>
        <div className="flex flex-col items-center md:flex-row md:items-end gap-8 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <Image src={avatar} alt={name} width={160} height={160} className="rounded-2xl ring-1 ring-white/10 shadow-soft" priority />
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-tr from-brand-500/30 to-emerald-400/20 blur-2xl" />
          </motion.div>
          <div className="flex-1 text-center md:text-left pb-2">
            <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Alan Canto</motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-3 max-w-2xl text-white/80">
              Full Stack Developer — Web • Mobile • Desktop. {bio || ''}
            </motion.p>
            <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <Badge>Java • Spring</Badge>
              <Badge>JavaScript/TypeScript</Badge>
              <Badge>React & React Native</Badge>
              <Badge>Python • C# • PHP</Badge>
              <Badge>SQL • MongoDB</Badge>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
