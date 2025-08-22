import Image from 'next/image'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export default function BurgerMenu() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <Image
          src="/icons/icon-menu.png"
          alt="burger-menu"
          width={36}
          height={36}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/#about">À propos de moi</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/#services">Mes services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/#portfolio">Portfolio</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/#contact">Discutons de votre projet</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
