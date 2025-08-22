
'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Github, Moon, SunMedium, Mail, Home, BookOpenText, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Nav() {
  const { theme, setTheme } = useTheme()
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-white">
            <Home className="h-4 w-4" /> <span>Alan Canto</span>
          </Link>
          <div className="hidden sm:flex items-center gap-4 text-sm text-white/80">
            <Link href="/about" className="hover:text-white flex items-center gap-1"><User className="h-4 w-4" /> About</Link>
            <Link href="/blog" className="hover:text-white flex items-center gap-1"><BookOpenText className="h-4 w-4" /> Blog</Link>
            <Link href="/contact" className="hover:text-white flex items-center gap-1"><Mail className="h-4 w-4" /> Contacto</Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://github.com/ajoca" target="_blank" className="rounded-xl border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5 flex items-center gap-2">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <button
            className="rounded-xl border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5 flex items-center gap-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>
      <motion.div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" layoutId="nav-underline" />
    </nav>
  )
}
