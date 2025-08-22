
'use client'
import { motion } from 'framer-motion'
import { Star, GitFork, Globe } from 'lucide-react'
import Link from 'next/link'
import type { Repo } from '@/lib/github'

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft lift">
      <div className="flex items-start justify-between gap-3">
        <Link href={repo.html_url} target="_blank" className="text-base font-semibold hover:underline">{repo.name}</Link>
        <div className="flex items-center gap-3 text-xs text-white/70">
          <div className="flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {repo.stargazers_count}</div>
          <div className="flex items-center gap-1"><GitFork className="h-3.5 w-3.5" /> {repo.forks_count}</div>
        </div>
      </div>
      <p className="mt-2 text-sm text-white/80 line-clamp-3">{repo.description || 'Sin descripción'}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-white/70">
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">{repo.language || 'N/A'}</span>
        {repo.homepage ? <Link href={repo.homepage} target="_blank" className="inline-flex items-center gap-1 hover:underline"><Globe className="h-3.5 w-3.5" /> Demo</Link> : <span />}
      </div>
    </motion.div>
  )
}
