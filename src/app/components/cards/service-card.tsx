import Image from 'next/image'

type ServiceCardProps = {
  service: {
    id: number
    title: string
    description: string
    icon: string
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <Image
        src={service.icon}
        alt={service.title}
        width={40}
        height={40}
        className="h-8 w-8 md:h-14 md:w-14"
      />
      <h3 className="text-xl font-semibold md:text-2xl">{service.title}</h3>
      <p
        className="text-sm leading-loose md:text-lg"
        dangerouslySetInnerHTML={{ __html: service.description }}
      />
    </div>
  )
}
