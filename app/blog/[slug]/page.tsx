// app/blog/[slug]/page.tsx
import Container from '@/components/Container'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostSource } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const list = getAllPosts()
  const found = list.find(p => p.slug === slug)
  if (!found) return notFound()

  const source = getPostSource(slug)
  if (!source) return notFound()

  return (
    <main className="py-12">
      <Container>
        <div className="text-sm text-white/60">{new Date(found.date).toLocaleDateString()}</div>
        <h1 className="text-3xl font-bold mb-6">{found.title}</h1>
        <article className="prose prose-invert max-w-none">
          {/* Render directo del MDX en el JSX */}
          <MDXRemote source={source} />
        </article>
      </Container>
    </main>
  )
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}
