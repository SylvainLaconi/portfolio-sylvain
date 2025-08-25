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
          width={48}
          height={48}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/#about" className="h-12">
            À propos de moi
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/#services" className="h-12">
            Mes services
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/#portfolio" className="h-12">
            Portfolio
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/#contact" className="h-12">
            Discutons de votre projet
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
