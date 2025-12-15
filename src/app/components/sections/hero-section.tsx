import AnimateOnScroll from '@/lib/animate-on-scroll'
import Links from '../links/links'

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-start justify-center bg-white pt-[28px] md:pt-[88px]">
      <div className="absolute inset-0 bg-[linear-gradient(4deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.99)_16%,transparent_100%)] xl:bg-[linear-gradient(4deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.99)_18%,transparent_100%)] 2xl:bg-[linear-gradient(4deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.99)_25%,transparent_100%)]" />
      <div className="w-full bg-[url('/images/hero-image.webp')] bg-contain bg-right bg-no-repeat">
        <div className="relative container mx-2.5 flex flex-col gap-4 py-24 md:mx-auto md:gap-8 md:py-48">
          <AnimateOnScroll delay={200}>
            <div className="flex min-h-8 items-center">
              <span className="min-h-8 text-lg font-bold text-black md:text-4xl">
                Freelance fullstack
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={400}>
            <h1 className="min-h-8 text-2xl font-bold md:text-7xl">
              Sylvain Laconi
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={600}>
            <div className="flex min-h-8 items-center">
              <h2 className="text-xs font-extrabold uppercase md:text-2xl">
                React.js, Next.js, Webflow & Retool
              </h2>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={800}>
            <Links />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
