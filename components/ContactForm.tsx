
'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    setLoading(true); setError(null)
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type':'application/json' }, body: JSON.stringify(data) })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || 'Error enviando')
      setDone(true)
      form.reset()
    } catch (err:any) {
      setError(err.message || 'Error enviando')
    } finally {
      setLoading(false)
    }
  }

  if (done) return <div className="rounded-xl border border-white/10 bg-emerald-500/10 p-4 text-sm">¡Listo! Te voy a escribir pronto.</div>

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div>
        <label className="block text-xs mb-1">Nombre</label>
        <input name="name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" />
      </div>
      <div>
        <label className="block text-xs mb-1">Email</label>
        <input name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" />
      </div>
      <div>
        <label className="block text-xs mb-1">Mensaje</label>
        <textarea name="message" rows={5} required className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none" />
      </div>
      {error && <div className="rounded-xl border border-white/10 bg-red-500/10 p-3 text-xs">{error}</div>}
      <button disabled={loading} className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/20 disabled:opacity-50">
        {loading ? 'Enviando…' : 'Enviar'}
      </button>
      <p className="text-xs text-white/60">Alternativa: Formspree. Reemplazá el endpoint si querés 0 backend.</p>
    </form>
  )
}
