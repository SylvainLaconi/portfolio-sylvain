import Links from '../links/links'

export default function Footer() {
  return (
    <footer className="container mx-auto flex w-screen flex-col items-center justify-center gap-4 px-2.5 py-10 md:mx-auto md:w-auto md:px-0 md:py-20">
      <Links />
      <p className="text-xs md:text-sm">
        ©2025 Sylvain Laconi. Tous droits réservés.
      </p>
    </footer>
  )
}
