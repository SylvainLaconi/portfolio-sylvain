import AnimateOnScroll from '@/lib/animate-on-scroll'
import { Button } from '../ui/button'
import SectionLayout from '@/app/layouts/section-layout'

export default function AboutMeSection() {
  return (
    <SectionLayout id="about-me">
      <AnimateOnScroll delay={200}>
        <h2 className="text-2xl font-semibold uppercase md:text-3xl">
          À propos de moi
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
        <p className="text-justify text-sm leading-loose md:text-lg">
          Ancien cadre dirigeant reconverti en développeur fullstack freelance{' '}
          <strong>avec 5 ans d’expérience</strong>, je combine{' '}
          <strong>vision stratégique</strong> et{' '}
          <strong>exécution technique</strong> pour livrer rapidement des
          solutions digitales qui font avancer votre business. <br />
          Ayant travaillé en <strong>agence</strong> et en{' '}
          <strong>startup</strong>, je comprends vos besoins opérationnels tout
          en alignant les solutions sur vos objectifs.
          <br />
          Je suis spécialisé en{' '}
          <strong>React.js, Next.js, TypeScript, Webflow & Retool</strong> pour
          créer des outils robustes, scalables et centrés sur l’utilisateur.
          <br />
          <strong>Mon objectif : </strong> vous faire gagner du temps,
          <strong>améliorer votre productivité</strong> et{' '}
          <strong>booster votre présence en ligne</strong>, sans surprises, avec
          une <strong>transparence totale</strong>.
        </p>
      </AnimateOnScroll>

      <div className="flex w-full justify-center">
        <AnimateOnScroll delay={600}>
          <a href="/api/cv" download>
            <Button>Télécharger mon CV</Button>
          </a>
        </AnimateOnScroll>
      </div>
    </SectionLayout>
  )
}
