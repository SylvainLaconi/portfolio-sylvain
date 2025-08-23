import Image from 'next/image'
import { Dialog, DialogTrigger } from '../ui/dialog'

import ProjectModal from '../modals/project-modal'

type Project = {
  id: number
  title_card: string
  description_card: string
  image: string
  period: string
  title_project: string
  description_project: string
  stack: string[]
}

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative h-[350px] w-full cursor-pointer overflow-hidden shadow-md">
          <Image
            src={project.image}
            alt={project.title_card}
            fill
            sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
            className="absolute inset-0 object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute inset-0 flex flex-col items-center justify-end gap-2.5 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-xl font-bold text-white md:text-2xl">
              {project.title_card}
            </h3>
            <p className="text-sm text-white md:text-lg">
              {project.description_card}
            </p>
          </div>
        </div>
      </DialogTrigger>

      <ProjectModal project={project} />
    </Dialog>
  )
}
