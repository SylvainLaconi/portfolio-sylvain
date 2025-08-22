import { cn } from '@/lib/utils'

type SectionLayoutProps = {
  id: string
  children: React.ReactNode
  isWhite?: boolean
}

export default function SectionLayout({
  id,
  children,
  isWhite = false,
}: SectionLayoutProps) {
  return (
    <div id={id} className={cn('w-screen', isWhite && 'bg-white text-black')}>
      <div className="container flex w-full flex-col gap-8 px-2.5 py-10 md:mx-auto md:w-auto md:gap-16 md:px-0 md:py-20">
        {children}
      </div>
    </div>
  )
}
