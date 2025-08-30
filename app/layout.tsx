import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Nav from '@/components/Nav'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = { title: 'Alan Canto', description: 'Portfolio' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-black text-white">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Nav />
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
