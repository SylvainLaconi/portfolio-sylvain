'use client'

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
      <DropdownMenuTrigger className="group flex h-12 w-12 flex-col items-center justify-center gap-1.5 focus:outline-none">
        <div className="h-0.5 w-8 bg-black transition-all duration-800 ease-in-out group-data-[state=open]:translate-y-2 group-data-[state=open]:rotate-45" />
        <div className="h-0.5 w-8 bg-black transition-all duration-800 ease-in-out group-data-[state=open]:bg-transparent group-data-[state=open]:opacity-0" />
        <div className="h-0.5 w-8 bg-black transition-all duration-800 ease-in-out group-data-[state=open]:-translate-y-2 group-data-[state=open]:-rotate-45" />
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
