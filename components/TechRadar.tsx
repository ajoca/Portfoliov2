
'use client'
import { useMemo } from 'react'

type Ring = 'Adopt' | 'Trial' | 'Assess' | 'Hold'
type RadarItem = { name: string, ring: Ring, category: 'Languages' | 'Frameworks' | 'Data' | 'DevOps' }

const items: RadarItem[] = [
  { name: 'TypeScript', ring: 'Adopt', category: 'Languages' },
  { name: 'Java', ring: 'Adopt', category: 'Languages' },
  { name: 'Python', ring: 'Trial', category: 'Languages' },
  { name: 'React', ring: 'Adopt', category: 'Frameworks' },
  { name: 'Next.js', ring: 'Adopt', category: 'Frameworks' },
  { name: 'React Native', ring: 'Trial', category: 'Frameworks' },
  { name: 'Spring Boot', ring: 'Trial', category: 'Frameworks' },
  { name: 'Node.js', ring: 'Adopt', category: 'Frameworks' },
  { name: 'Tailwind CSS', ring: 'Adopt', category: 'Frameworks' },
  { name: 'MongoDB', ring: 'Trial', category: 'Data' },
  { name: 'MySQL', ring: 'Adopt', category: 'Data' },
  { name: 'PostgreSQL', ring: 'Trial', category: 'Data' },
  { name: 'Docker', ring: 'Adopt', category: 'DevOps' },
  { name: 'GitHub Actions', ring: 'Trial', category: 'DevOps' },
  { name: 'Vercel', ring: 'Adopt', category: 'DevOps' },
]

export default function TechRadar() {
  const grouped = useMemo(() => {
    const res: Record<Ring, RadarItem[]> = { Adopt:[], Trial:[], Assess:[], Hold:[] }
    items.forEach(i => res[i.ring].push(i))
    return res
  }, [])

  const ringOrder: Ring[] = ['Adopt', 'Trial', 'Assess', 'Hold']

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {ringOrder.map(ring => (
        <div key={ring} className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-sm font-semibold mb-2">{ring}</div>
          <div className="flex flex-wrap gap-2">
            {grouped[ring].map(i => (
              <span key={i.name} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs">
                {i.name} <span className="text-white/50">({i.category})</span>
              </span>
            ))}
            {!grouped[ring].length && <span className="text-xs text-white/60">Sin items</span>}
          </div>
        </div>
      ))}
    </div>
  )
}
