
import Container from '@/components/Container'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata = { title: 'Blog — Alan Canto' }

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="grid gap-4">
          {posts.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10">
              <div className="text-sm text-white/60">{new Date(p.date).toLocaleDateString()}</div>
              <div className="font-semibold">{p.title}</div>
              {p.excerpt ? <div className="text-sm text-white/80">{p.excerpt}</div> : null}
            </Link>
          ))}
          {!posts.length && <div className="text-white/60">Sin posts todavía.</div>}
        </div>
      </Container>
    </main>
  )
}
