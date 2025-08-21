import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio développeur fullstack - Sylvain Laconi',
  description:
    'Freelance fullstack spécialisé en Next.js, TypeScript, Webflow et Retool. Applications web, SaaS et sites vitrines optimisés pour performance et visibilité.',
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
