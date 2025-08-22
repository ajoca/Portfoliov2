'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Github, Moon, SunMedium, Mail, Home, BookOpenText, User, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Nav() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-white">
            <Home className="h-4 w-4" /> <span>Alan Canto</span>
          </Link>

          {/* Links desktop */}
          <div className="hidden sm:flex items-center gap-4 text-sm text-white/80">
            <Link href="/about" className="hover:text-white flex items-center gap-1"><User className="h-4 w-4" /> About</Link>
            <Link href="/blog" className="hover:text-white flex items-center gap-1"><BookOpenText className="h-4 w-4" /> Blog</Link>
            <Link href="/contact" className="hover:text-white flex items-center gap-1"><Mail className="h-4 w-4" /> Contacto</Link>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ajoca"
            target="_blank"
            className="rounded-xl border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5 flex items-center gap-2"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>

          {/* Theme toggle */}
          <button
            className="hidden sm:flex rounded-xl border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5 items-center gap-2"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          {/* Mobile menu button */}
          <button
            className="sm:hidden rounded-xl border border-white/10 p-2 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Linea glow */}
      <motion.div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" layoutId="nav-underline" />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="sm:hidden border-t border-white/10 bg-black/85 backdrop-blur-md"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2 text-sm">
              <Link href="/about" onClick={() => setOpen(false)} className="flex items-center gap-2 py-2">
                <User className="h-4 w-4" /> About
              </Link>
              <Link href="/blog" onClick={() => setOpen(false)} className="flex items-center gap-2 py-2">
                <BookOpenText className="h-4 w-4" /> Blog
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center gap-2 py-2">
                <Mail className="h-4 w-4" /> Contacto
              </Link>

              {/* Toggle de tema también en mobile */}
              <button
                className="mt-2 inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5"
                onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark'); setOpen(false) }}
              >
                {theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
