
import Container from '@/components/Container'
import Hero from '@/components/Hero'
import KPIs from '@/components/KPIs'
import RepoGrid from '@/components/RepoGrid'
import Footer from '@/components/Footer'
import FeaturedGrid from '@/components/FeaturedGrid'
import { getRepos, getUser, getPinnedRepos } from '@/lib/github'
import SectionTitle from '@/components/SectionTitle'

export default async function Page() {
  const user = await getUser('ajoca')
  const repos = await getRepos('ajoca')
  const pinned = await getPinnedRepos('ajoca')
  const sorted = [...repos].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

  return (
    <main>
      <Hero avatar={user.avatar_url} name={user.name || user.login} bio={user.bio} />
      <section className="py-10">
        <Container>
          <KPIs repos={user.public_repos} followers={user.followers} following={user.following} />
          {pinned?.length ? <FeaturedGrid repos={pinned} /> : null}
          <div className="mt-10">
            <SectionTitle>Proyectos y Repositorios</SectionTitle>
            <RepoGrid repos={sorted} />
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  )
}
