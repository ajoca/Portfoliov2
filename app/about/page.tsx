
import Container from '@/components/Container'
import Timeline from '@/components/Timeline'
import TechRadar from '@/components/TechRadar'

export const metadata = { title: 'Sobre mí — Alan Canto' }

export default function AboutPage() {
  const items = [
    { year: '2025', title: 'Shelter — lockers para turistas (cofundador)', desc: 'Mapa interactivo, reservas y pricing; visión futura con lockers inteligentes.' },
    { year: '2025', title: 'Sistema reservas hoteleras', desc: 'Backend + dominio + diagrama de clases + persistencia MySQL.' },
    { year: '2024', title: 'Game-Shop', desc: 'E-commerce de videojuegos con roles y dashboard.', link: 'https://github.com/ajoca' },
    { year: '2024', title: 'AppBooks', desc: 'Android/Kotlin + Firebase para PDFs y auth.', link: 'https://github.com/ajoca' },
    { year: '2024', title: 'PetAdoption', desc: 'Plataforma de adopción con mapa y microservicios.', link: 'https://github.com/ajoca' },
  ]

  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold mb-6">Sobre mí</h1>
        <p className="text-white/80 mb-8">Un desarrollador Full Stack con foco en crear productos útiles y bien terminados. Acá va mi recorrido y mi Tech Radar personal.</p>
        <h2 className="text-xl font-semibold mb-3">Timeline</h2>
        <Timeline items={items} />
        <h2 className="text-xl font-semibold mt-10 mb-3">Tech Radar</h2>
        <TechRadar />
      </Container>
    </main>
  )
}
