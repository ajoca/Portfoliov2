// lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export type PostMeta = {
  title: string
  date: string
  excerpt?: string
  tags?: string[]
  slug: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
  return files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/,'')
    const full = path.join(POSTS_DIR, file)
    const src = fs.readFileSync(full, 'utf-8')
    const { data } = matter(src)
    return {
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      slug
    }
  }).sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostSource(slug: string): string | null {
  const candidates = ['.mdx', '.md'].map(ext => path.join(POSTS_DIR, slug + ext))
  const file = candidates.find(p => fs.existsSync(p))
  if (!file) return null
  const src = fs.readFileSync(file, 'utf-8')
  const { content } = matter(src)
  return content
}
