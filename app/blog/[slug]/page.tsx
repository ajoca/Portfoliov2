// app/blog/[slug]/page.tsx
import Container from '@/components/Container'
import { notFound } from 'next/navigation'
import { getAllPosts } from '@/lib/posts'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Validar que el post exista por meta
  const list = getAllPosts()
  const found = list.find(p => p.slug === slug)
  if (!found) return notFound()

  // Import dinámico del archivo MDX/MD según el slug
  let Post: React.ComponentType
  try {
    Post = (await import(`@/content/posts/${slug}.mdx`)).default
  } catch {
    try {
      Post = (await import(`@/content/posts/${slug}.md`)).default
    } catch {
      return notFound()
    }
  }

  return (
    <main className="py-12">
      <Container>
        <div className="text-sm text-white/60">
          {new Date(found.date).toLocaleDateString()}
        </div>
        <h1 className="text-3xl font-bold mb-6">{found.title}</h1>
        <article className="prose prose-invert max-w-none">
          <Post />
        </article>
      </Container>
    </main>
  )
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}
