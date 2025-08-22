
'use client'
import { useMemo, useState } from 'react'
import { Repo } from '@/lib/github'
import { Search } from 'lucide-react'

export default function Filters({ repos, onChange }:{ repos: Repo[], onChange: (f:{q:string, lang:string})=>void }) {
  const [q, setQ] = useState('')
  const [lang, setLang] = useState('All')
  const languages = useMemo(() => {
    const set = new Set<string>()
    repos.forEach(r => { if (r.language) set.add(r.language) })
    return ['All', ...Array.from(set).sort()]
  }, [repos])
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center">
      <div className="relative w-full sm:w-80">
        <input value={q} onChange={(e)=>{ setQ(e.target.value); onChange({q: e.target.value, lang})}} placeholder="Buscar repos…" className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-2.5 text-sm outline-none placeholder:text-white/40" />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
      </div>
      <select className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm" value={lang} onChange={(e)=>{ setLang(e.target.value); onChange({q, lang: e.target.value}) }}>
        {languages.map(l => <option key={l} value={l}>{l}</option>)}
      </select>
    </div>
  )
}
