import AnimateOnScroll from '@/lib/animate-on-scroll'
import { Button } from '../ui/button'

export default function AboutMeSection() {
  return (
    <div
      id="about-me"
      className="container flex w-screen flex-col gap-8 px-2.5 py-10 md:mx-auto md:w-auto md:gap-16 md:px-0 md:py-20"
    >
      <AnimateOnScroll delay={200}>
        <h2 className="text-2xl font-semibold uppercase md:text-3xl">
          À propos de moi
        </h2>
      </AnimateOnScroll>

      <AnimateOnScroll delay={400}>
        <p className="text-justify text-sm leading-loose md:text-lg">
          Ancien cadre dirigeant reconverti en développeur fullstack freelance,
          j’apporte à mes clients une double compétence :{' '}
          <strong>vision business</strong> et{' '}
          <strong>exécution technique</strong>. <br /> Au cours de ma carrière,
          j’ai travaillé en <strong>agence</strong> comme en{' '}
          <strong>startup</strong>, ce qui me permet de comprendre aussi bien
          les enjeux stratégiques que les besoins opérationnels du quotidien.
          <br />
          Guidé par une forte <strong>sensibilité produit</strong>, j’aime le
          travail bien fait et oriente chaque projet vers la{' '}
          <strong>satisfaction client</strong>. <br /> Je me suis spécialisé
          dans une stack moderne et efficace —{' '}
          <strong>Next.js, TypeScript, Webflow</strong> et{' '}
          <strong>Retool</strong> — afin de concevoir des solutions robustes,
          évolutives et centrées sur les besoins métiers.
        </p>
      </AnimateOnScroll>

      <div className="flex w-full justify-center">
        <AnimateOnScroll delay={600}>
          <a href="/api/cv" download>
            <Button>Télécharger mon CV</Button>
          </a>
        </AnimateOnScroll>
      </div>
    </div>
  )
}
