import SectionLayout from '@/app/layouts/section-layout'
import AnimateOnScroll from '@/lib/animate-on-scroll'

export default function PortfolioSection() {
  return (
    <SectionLayout id="portfolio" isWhite>
      <AnimateOnScroll delay={200}>
        <h2 className="text-2xl font-semibold uppercase md:text-3xl">
          Portfolio
        </h2>
      </AnimateOnScroll>
    </SectionLayout>
  )
}
