import SectionLayout from '@/app/layouts/section-layout'
import AnimateOnScroll from '@/lib/animate-on-scroll'
import CalendlyEmbed from '../calendly/calendly-embed'
import { Suspense } from 'react'

export default function ContactSection() {
  return (
    <SectionLayout id="contact" color="gray">
      <div className="flex flex-col gap-4">
        <AnimateOnScroll delay={200}>
          <h2 className="text-2xl font-semibold uppercase md:text-3xl">
            Contact
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={400}>
          <p className="text-sm leading-loose md:text-lg">
            Envie d’échanger sur votre projet ? Je vous propose un{' '}
            <strong>appel visio gratuit de 15 minutes</strong>, sans engagement.
          </p>
        </AnimateOnScroll>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <CalendlyEmbed />
      </Suspense>
    </SectionLayout>
  )
}
