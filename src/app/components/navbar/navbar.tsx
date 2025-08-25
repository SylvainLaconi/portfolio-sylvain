import Link from 'next/link'
import { Button } from '../ui/button'
import BurgerMenu from '../burger-menu/burger-menu'

const Navbar = () => {
  return (
    <header className="bg-background fixed top-0 right-0 left-0 z-50 flex h-[68px] w-screen items-center py-2.5 md:h-[88px] md:py-5">
      <div className="container mx-auto">
        <div className="hidden items-center justify-end gap-8 md:flex">
          <Link
            href="/#about-me"
            className="flex h-12 items-center font-medium transition-transform duration-200 hover:scale-105"
          >
            À propos de moi
          </Link>
          <Link
            href="/#services"
            className="flex h-12 items-center font-medium transition-transform duration-200 hover:scale-105"
          >
            Mes services
          </Link>
          <Link
            href="/#portfolio"
            className="flex h-12 items-center font-medium transition-transform duration-200 hover:scale-105"
          >
            Portfolio
          </Link>
          <Button>
            <Link href="/#contact">Discutons de votre projet</Link>
          </Button>
        </div>
        <div className="flex items-center justify-end px-4 md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </header>
  )
}

export default Navbar
