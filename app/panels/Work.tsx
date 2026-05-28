const projects = [
  {
    name: 'Product Showcase Homepage',
    description: 'Independently developed and deployed a showcase platform for a medical aesthetics company in Pangyo.',
    tags: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Docker'],
    href: 'https://www.iregenbogen.com',
  },
  {
    name: 'Kafka-based Messaging Application ',
    description: 'Built asynchronous and distributed messaging application using event-driven architecture and containerized deployment for training purposes in Korea Software HRD Center.',
    tags: ['JMeter', 'Spring Boot', 'Kafka', 'Docker'],
    href: 'https://github.com/saintrivers/kafka_messaging_app',
  },
  {
    name: 'Content Management Application',
    description: 'Developed REST API with database integration for students/trainees to model and replicate.',
    tags: ['Kotlin', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
    href: 'https://github.com/saintrivers/kotlin_springboot_ams',
  },
]

export default function Work() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
      <p className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-white/50">
        Work
      </p>

      <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
        Projects
      </h2>

      <p className="mt-6 max-w-xl text-center text-base text-white/50">
        A selection of things I've built — each one taught me something.
      </p>

      <div className="mt-16 grid w-full max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ name, description, tags, href }) => (
          <a
            key={name}
            href={href}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-white/90">
              {name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
              {description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
