import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'

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
        <DropdownMenuItem>
          <Link href="/">À propos de moi</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/">Mes services</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/">Portfolio</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Discutons de votre projet</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
