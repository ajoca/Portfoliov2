
import './globals.css'
import { inter } from './fonts'
import { ThemeProvider } from 'next-themes'
import Nav from '@/components/Nav'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  metadataBase: new URL('https://ajoca.dev'),
  title: 'Alan Canto — Portfolio',
  description: 'Portfolio moderno de Alan Canto (ajoca): proyectos, repos y contacto.',
  openGraph: { title: 'Alan Canto — Portfolio', description: 'Full Stack Developer — Web • Mobile • Desktop', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Alan Canto — Portfolio', description: 'Full Stack Developer — Web • Mobile • Desktop' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Nav />
          {children}
          {process.env.NEXT_PUBLIC_ANALYTICS === 'vercel' && <Analytics />}
          {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
            <script async defer data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID} src={process.env.NEXT_PUBLIC_UMAMI_SRC || 'https://us.umami.is/script.js'} />
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
