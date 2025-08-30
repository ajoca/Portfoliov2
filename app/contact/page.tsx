import HeroGSAP from '@/components/HeroGSAP'
import { getRepos, getUser, getPinnedRepos } from '@/lib/github'
import Container from '@/components/Container'
import KPIs from '@/components/KPIs'
import RepoGrid from '@/components/RepoGrid'
import FeaturedGrid from '@/components/FeaturedGrid'
import SectionTitle from '@/components/SectionTitle'

export default async function Page() {
  const user = await getUser('ajoca')
  const repos = await getRepos('ajoca')
  const pinned = await getPinnedRepos('ajoca')
  const sorted = [...repos].sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

  return (
    <main>
      <HeroGSAP avatar={user.avatar_url} name={user.name || user.login} bio={user.bio} />
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
    </main>
  )
}
