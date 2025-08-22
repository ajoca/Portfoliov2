'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { User, BookOpenText, Mail } from 'lucide-react'
import { clsx } from 'clsx'

export default function MobileTabs() {
  const pathname = usePathname()
  const tabs = [
    { href: '/about', label: 'About', Icon: User },
    { href: '/blog', label: 'Blog', Icon: BookOpenText },
    { href: '/contact', label: 'Contacto', Icon: Mail },
  ]
  return (
    <div className="sm:hidden fixed bottom-3 left-1/2 z-40 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/85 backdrop-blur px-3 py-2 shadow-soft">
      <nav className="flex items-center gap-3">
        {tabs.map(({ href, label, Icon }) => {
          const active = pathname === href || pathname?.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm',
                active ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5'
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
