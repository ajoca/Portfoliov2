
export type Repo = {
  id?: number
  name: string
  full_name?: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics?: string[]
  homepage?: string | null
  updated_at: string
}

export type User = {
  login: string
  name: string | null
  avatar_url: string
  bio: string | null
  followers: number
  following: number
  public_repos: number
  html_url: string
  blog: string | null
  location?: string | null
}

const GITHUB_API = 'https://api.github.com'

function headers() {
  const h: Record<string,string> = { 'Accept':'application/vnd.github+json' }
  if (process.env.GITHUB_TOKEN) h['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
  return h
}

export async function getUser(username = process.env.GITHUB_USERNAME || 'ajoca'): Promise<User> {
  const res = await fetch(`${GITHUB_API}/users/${username}`, { headers: headers(), next: { revalidate: 3600 }})
  if (!res.ok) throw new Error('Failed fetching user')
  return res.json()
}

export async function getRepos(username = process.env.GITHUB_USERNAME || 'ajoca'): Promise<Repo[]> {
  const res = await fetch(`${GITHUB_API}/users/${username}/repos?sort=updated&per_page=100`, { headers: headers(), next: { revalidate: 900 }})
  if (!res.ok) throw new Error('Failed fetching repos')
  const data: Repo[] = await res.json()
  return data
}

// GraphQL: pinned repos
export async function getPinnedRepos(username = process.env.GITHUB_USERNAME || 'ajoca'): Promise<Repo[]> {
  if (!process.env.GITHUB_TOKEN) return [] // token required
  const query = `
    query ($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              stargazerCount
              forkCount
              updatedAt
              primaryLanguage { name }
              repositoryTopics(first: 10) { nodes { topic { name } } }
              owner { login }
            }
          }
        }
      }
    }
  `
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type':'application/json', 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}` },
    body: JSON.stringify({ query, variables: { login: username } }),
    next: { revalidate: 900 }
  })
  if (!res.ok) return []
  const json = await res.json()
  const nodes = json?.data?.user?.pinnedItems?.nodes || []
  return nodes.map((n: any) => ({
    name: n.name,
    html_url: n.url,
    description: n.description,
    language: n.primaryLanguage?.name || null,
    stargazers_count: n.stargazerCount,
    forks_count: n.forkCount,
    topics: n.repositoryTopics?.nodes?.map((x: any) => x.topic?.name).filter(Boolean),
    homepage: n.homepageUrl,
    updated_at: n.updatedAt
  }))
}
