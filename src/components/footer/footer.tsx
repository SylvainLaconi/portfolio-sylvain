import Links from '../links/links'

export default function Footer() {
  return (
    <footer className="container mx-auto flex flex-col items-center justify-center gap-4 py-10 md:gap-8 md:py-20">
      <Links />
      <p className="text-xs md:text-sm">
        ©2025 Sylvain Laconi. Tous droits réservés.
      </p>
    </footer>
  )
}
