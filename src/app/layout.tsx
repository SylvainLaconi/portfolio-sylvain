import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio développeur fullstack - Sylvain Laconi',
  description:
    'Freelance fullstack basé à Colombes, Île-de-France, je conçois des applications web, SaaS et sites vitrines performants avec Next.js, TypeScript, Webflow et Retool, alliant qualité technique et optimisation pour la visibilité en ligne.',
  openGraph: {
    title: 'Portfolio développeur fullstack - Sylvain Laconi',
    description:
      'Freelance fullstack basé à Colombes, Île-de-France, je conçois des applications web, SaaS et sites vitrines performants avec Next.js, TypeScript, Webflow et Retool, alliant qualité technique et optimisation pour la visibilité en ligne.',
    url: 'https://sylvain-laconi.fr',
    siteName: 'Portfolio Sylvain Laconi',
    type: 'website',
    images: [
      {
        url: 'https://sylvain-laconi.fr/images/og-image.png',
        width: 1200,
        height: 627,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${raleway.variable} antialiased`}>
        <Navbar />
        <main className="mt-[56px] flex flex-col md:mt-[84px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
