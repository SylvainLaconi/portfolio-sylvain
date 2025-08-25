'use client'

import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../ui/dialog'

import Image from 'next/image'

type ProjectModalProps = {
  project: {
    id: number
    title_card: string
    description_card: string
    image: string
    period: string
    title_project: string
    description_project: string
    stack: string[]
    context: string
  }
}

export default function ProjectModal({ project }: ProjectModalProps) {
  return (
    <DialogContent
      className="max-h-screen gap-8 overflow-y-auto"
      onOpenAutoFocus={(e) => e.preventDefault()}
    >
      <DialogHeader className="flex flex-col items-start gap-8">
        <div className="flex flex-col items-start gap-2">
          <DialogTitle>{project.title_card}</DialogTitle>
          <DialogDescription>{project.description_card}</DialogDescription>
          <DialogDescription>{project.period}</DialogDescription>
          <div className="rounded-full bg-green-200 px-2 py-1 text-sm font-bold text-green-800">
            {project.context}
          </div>
        </div>

        <Image
          src={project.image}
          alt={project.title_card}
          width={300}
          height={350}
          className="h-[200px] w-full object-cover object-top md:h-[350px]"
        />
      </DialogHeader>
      <DialogDescription className="flex flex-col gap-1 md:gap-2">
        <span className="text-base font-bold md:text-lg">
          {project.title_project}
        </span>
        <span
          className="text-xs leading-loose md:text-sm [&_li]:mb-1 [&_ul]:list-disc [&_ul]:pl-5"
          dangerouslySetInnerHTML={{
            __html: project.description_project,
          }}
        />
      </DialogDescription>
      <DialogFooter>
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((stack) => (
            <div
              key={stack}
              className="rounded-full bg-gray-200 px-2 py-1 text-sm font-bold"
            >
              {stack}
            </div>
          ))}
        </div>
      </DialogFooter>
    </DialogContent>
  )
}
