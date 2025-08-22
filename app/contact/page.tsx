
import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'Contacto — Alan Canto' }

export default function ContactPage() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold mb-6">Contacto</h1>
        <p className="text-white/80 mb-6">¿Tenés una idea o proyecto? Escribime y lo charlamos.</p>
        <ContactForm />
        <div className="mt-6 text-xs text-white/60">
          Alternativa: si preferís <strong>Formspree</strong>, creá un form y configurá <code>FORMSPREE_ID</code>; podés reemplazar la acción del form por su endpoint.
        </div>
      </Container>
    </main>
  )
}
