import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sylvain Laconi – Développeur Freelance Next.js & Expert Webflow',
  description:
    'Besoin d’un site professionnel rapide et élégant ? J’accompagne startups et indépendants avec Next.js et Webflow pour créer des expériences web sur-mesure.',
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' }, // navigateur classique
      { url: '/favicons/favicon_32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon_16x16.png', sizes: '16x16', type: 'image/png' },
      {
        url: '/favicons/favicon_192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicons/favicon_512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: '/favicons/favicon_180x180.png', // 180x180
    shortcut: '/favicons/favicon_16x16.png', // fallback rapide
  },
  openGraph: {
    title: 'Sylvain Laconi – Développeur Freelance Next.js & Expert Webflow',
    description:
      'Besoin d’un site professionnel rapide et élégant ? J’accompagne startups et indépendants avec Next.js et Webflow pour créer des expériences web sur-mesure.',
    url: 'https://sylvain-laconi.fr',
    siteName: 'Portfolio Sylvain Laconi',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://sylvain-laconi.fr/images/og-image.png',
        width: 1200,
        height: 627,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-image.webp"
          fetchPriority="high"
        />
      </head>
      <body className={`${raleway.variable} overflow-x-hidden antialiased`}>
        <Navbar />
        <main className="flex flex-col">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
