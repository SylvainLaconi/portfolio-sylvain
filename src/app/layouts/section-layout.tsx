import { cn } from '@/lib/utils'

type SectionLayoutProps = {
  id: string
  children: React.ReactNode
  color?: 'white' | 'black' | 'gray'
}

export default function SectionLayout({
  id,
  children,
  color = 'black',
}: SectionLayoutProps) {
  return (
    <div
      id={id}
      className={cn(
        color === 'white' && 'bg-white text-black',
        color === 'gray' && 'bg-gray-200 text-black',
      )}
    >
      <div
        className={cn(
          'container flex w-screen flex-col px-2.5 py-10 md:mx-auto md:w-auto md:px-0 md:py-20',
          color === 'gray' ? 'gap-0' : 'gap-8 md:gap-16',
        )}
      >
        {children}
      </div>
    </div>
  )
}
