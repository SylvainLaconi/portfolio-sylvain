import type { Metadata } from "next";
import { Raleway, Raleway_Dots } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const ralewayDots = Raleway_Dots({
  variable: "--font-raleway-dots",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio développeur fullstack - Sylvain Laconi",
  description: "Freelance fullstack spécialisé en Next.js, TypeScript, Webflow et Retool. Applications web, SaaS et sites vitrines optimisés pour performance et visibilité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${raleway.variable} ${ralewayDots.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
