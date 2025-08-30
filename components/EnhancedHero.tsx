'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Container from './Container'
import Badge from './Badge'
import TypingMascot from './TypingMascot'
import TechKeycaps from './TechKeycaps'
import AutoMarquee from './AutoMarquee'

export default function EnhancedHero({ avatar, name, bio }: { avatar: string, name: string, bio: string | null }) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -30])
  const y2 = useTransform(scrollY, [0, 300], [0, 20])

  return (
    <section className="relative overflow-hidden">
      {/* blobs */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle at 30% 30%, rgba(16,185,129,.35), transparent 60%)' }} />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle at 70% 70%, rgba(59,130,246,.35), transparent 60%)' }} />

      <Container>
        <div className="relative flex flex-col items-center md:flex-row md:items-end gap-8 py-16">
          {/* avatar */}
          <motion.div style={{ y: y1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <Image src={avatar} alt={name} width={160} height={160} className="rounded-2xl ring-1 ring-white/10 shadow-soft" priority />
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-tr from-sky-500/30 to-emerald-400/20 blur-2xl" />
          </motion.div>

          {/* mascota (oculta en móvil para no tapar) */}
          <div className="hidden md:block"><TypingMascot /></div>

          {/* texto + badges + teclas + marquee */}
          <motion.div className="flex-1 text-center md:text-left pb-2" style={{ y: y2 }}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{name}</h1>
            <p className="mt-3 max-w-2xl text-white/80">{bio || 'Full Stack Developer — Web • Mobile • Desktop.'}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <Badge>Java • Spring</Badge>
              <Badge>JavaScript/TypeScript</Badge>
              <Badge>React & React Native</Badge>
              <Badge>Python • C# • PHP</Badge>
              <Badge>SQL • MongoDB</Badge>
            </div>
            <TechKeycaps />
            <div className="mt-4">
              <AutoMarquee items={['Next.js','React','TypeScript','Node','Python','Java','SQL','MongoDB','Vercel','Tailwind']} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
