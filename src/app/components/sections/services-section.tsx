import AnimateOnScroll from '@/lib/animate-on-scroll'
import ServiceCard from '../cards/service-card'
import services from '@/data/services.json'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="container flex w-screen flex-col gap-8 px-2.5 py-10 md:mx-auto md:w-auto md:gap-16 md:px-0 md:py-20"
    >
      <AnimateOnScroll delay={200}>
        <h2 className="text-2xl font-semibold uppercase md:text-3xl">
          Mes services
        </h2>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
        {services.map((service, index) => (
          <AnimateOnScroll key={service.id} delay={400 + index * 200}>
            <ServiceCard service={service} />
          </AnimateOnScroll>
        ))}
      </div>

      <div className="flex w-full justify-center">
        <AnimateOnScroll delay={600}>
          <Link href="/#contact">
            <Button>Discutons de votre projet</Button>
          </Link>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
