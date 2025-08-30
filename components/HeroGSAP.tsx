'use client'
import Image from 'next/image'
import Container from '@/components/Container'
import Badge from '@/components/Badge'
import TypingMascotGSAP from './gsap/TypingMascotGSAP'
import TechKeycapsGSAP from './gsap/TechKeycapsGSAP'
import HeroParallax from './gsap/HeroParallax'

export default function HeroGSAP({ avatar, name, bio }: { avatar: string, name: string, bio: string | null }) {
  return (
    <HeroParallax>
      {/* blobs */}
      <div className="blob-left pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle at 30% 30%, rgba(16,185,129,.35), transparent 60%)' }} />
      <div className="blob-right pointer-events-none absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle at 70% 70%, rgba(59,130,246,.35), transparent 60%)' }} />

      <Container>
        <div className="relative flex flex-col items-center md:flex-row md:items-end gap-8 py-16">
          {/* avatar + mascot superpuesto (como en el video) */}
          <div className="relative hero-avatar">
            <Image src={avatar} alt={name} width={180} height={180} className="rounded-2xl ring-1 ring-white/10 shadow-soft" priority />
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-tr from-sky-500/30 to-emerald-400/20 blur-2xl" />
            <div className="absolute -right-10 -bottom-6 hidden md:block">
              <TypingMascotGSAP />
            </div>
          </div>

          {/* texto + badges + keycaps */}
          <div className="flex-1 hero-text text-center md:text-left pb-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{name}</h1>
            <p className="mt-3 max-w-2xl text-white/80">{bio || 'Full Stack Developer — Web • Mobile • Desktop.'}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <Badge>Java • Spring</Badge>
              <Badge>JavaScript/TypeScript</Badge>
              <Badge>React & React Native</Badge>
              <Badge>Python • C# • PHP</Badge>
              <Badge>SQL • MongoDB</Badge>
            </div>
            <TechKeycapsGSAP />
          </div>
        </div>
      </Container>
    </HeroParallax>
  )
}
