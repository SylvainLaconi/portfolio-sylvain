import Link from 'next/link'
import Image from 'next/image'

export default function Links() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://www.malt.fr/profile/sylvainl1"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform duration-200 hover:scale-105"
      >
        <Image
          src="/icons/icon-malt.png"
          alt="Logo Malt"
          width={56}
          height={56}
          className="h-8 w-8 md:h-14 md:w-14"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/sylvain-laconi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform duration-200 hover:scale-105"
      >
        <Image
          src="/icons/icon-linkedin.png"
          alt="Logo LinkedIn"
          width={56}
          height={56}
          className="h-8 w-8 md:h-14 md:w-14"
        />
      </Link>
      <Link
        href="mailto:sylvain.laconi.pro@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition-transform duration-200 hover:scale-105"
      >
        <Image
          src="/icons/icon-gmail.png"
          alt="Logo Gmail"
          width={56}
          height={56}
          className="h-8 w-8 md:h-14 md:w-14"
        />
      </Link>
    </div>
  )
}
