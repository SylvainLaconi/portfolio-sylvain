import SectionLayout from '@/app/layouts/section-layout'
import AnimateOnScroll from '@/lib/animate-on-scroll'
import projects from '@/data/projects.json'
import ProjectCard from '../cards/project-card'

export default function PortfolioSection() {
  return (
    <SectionLayout id="portfolio" color="white">
      <div className="flex flex-col gap-4">
        <AnimateOnScroll delay={200}>
          <h2 className="text-2xl font-semibold uppercase md:text-3xl">
            Portfolio
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={400}>
          <p className="text-sm leading-loose md:text-lg">
            Quelques projets réalisés pour accompagner entreprises et startups
            dans leurs outils digitaux.
          </p>
        </AnimateOnScroll>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projects.map((project, index) => (
          <AnimateOnScroll key={project.id} delay={600 + (index % 3) * 200}>
            <ProjectCard project={project} />
          </AnimateOnScroll>
        ))}
      </div>
    </SectionLayout>
  )
}
