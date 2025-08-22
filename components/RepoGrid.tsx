
'use client'
import { useMemo, useState } from 'react'
import type { Repo } from '@/lib/github'
import RepoCard from './RepoCard'
import Filters from './Filters'

export default function RepoGrid({ repos }: { repos: Repo[] }) {
  const [filters, setFilters] = useState<{q:string, lang:string}>({ q: '', lang: 'All' })
  const filtered = useMemo(() => {
    const q = filters.q.toLowerCase()
    return repos.filter(r => {
      const matchQ = !q || r.name.toLowerCase().includes(q) || (r.description || '').toLowerCase().includes(q)
      const matchLang = filters.lang === 'All' || r.language === filters.lang
      return matchQ && matchLang
    })
  }, [repos, filters])
  return (
    <div className="space-y-6">
      <Filters repos={repos} onChange={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(repo => <RepoCard key={(repo.id || repo.html_url)} repo={repo} />)}
      </div>
    </div>
  )
}
