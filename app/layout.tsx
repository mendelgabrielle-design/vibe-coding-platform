import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'LUMINA - A luz que guia a essência',
  description: 'Consultas espirituais, leitura de cartas e trabalhos espirituais com Patrícia Porciuncula. Atendimento online com discrição e sensibilidade.',
  keywords: 'consulta espiritual, leitura de cartas, baralho cigano, umbanda, maria padilha, trabalhos espirituais',
  icons: {
    icon: '/images/logo-lumina.jpg',
    apple: '/images/logo-lumina.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
