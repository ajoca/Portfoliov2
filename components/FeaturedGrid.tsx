
'use client'
import type { Repo } from '@/lib/github'
import RepoCard from './RepoCard'

export default function FeaturedGrid({ repos }: { repos: Repo[] }) {
  if (!repos?.length) return null
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-3">Destacados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((r, i) => <RepoCard key={r.html_url + i} repo={r} />)}
      </div>
    </div>
  )
}
