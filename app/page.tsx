import Container from '@/components/Container'
import EnhancedHero from '@/components/EnhancedHero'
import KPIs from '@/components/KPIs'
import RepoGrid from '@/components/RepoGrid'
import Footer from '@/components/Footer'
import FeaturedGrid from '@/components/FeaturedGrid'
import SectionTitle from '@/components/SectionTitle'
import { getRepos, getUser, getPinnedRepos } from '@/lib/github'
import { Reveal } from '@/components/Reveal' // si no existe, creá un Reveal básico

export default async function Page() {
  const user = await getUser('ajoca')
  const repos = await getRepos('ajoca')
  const pinned = await getPinnedRepos('ajoca')
  const sorted = [...repos].sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

  return (
    <main>
      <EnhancedHero avatar={user.avatar_url} name={user.name || user.login} bio={user.bio} />
      <section className="py-10">
        <Container>
          <Reveal><KPIs repos={user.public_repos} followers={user.followers} following={user.following} /></Reveal>
          {pinned?.length ? <Reveal delay={.05}><FeaturedGrid repos={pinned} /></Reveal> : null}
          <div className="mt-10">
            <SectionTitle>Proyectos y Repositorios</SectionTitle>
            <Reveal delay={.1}><RepoGrid repos={sorted} /></Reveal>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  )
}
