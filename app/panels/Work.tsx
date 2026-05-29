type ProjectType = 'client' | 'teaching' | 'class'

const projects: {
  name: string
  description: string
  tags: string[]
  href: string
  type: ProjectType
}[] = [
    {
      name: 'Product Showcase Homepage',
      description: 'Independently developed and deployed a showcase platform for a medical aesthetics client in Pangyo, South Korea.',
      tags: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Docker'],
      href: 'https://www.iregenbogen.com',
      type: 'client',
    },
    {
      name: 'Kafka Full-Stack Template',
      description: 'Reference architecture for event-driven applications — Angular frontend, Spring Boot services, Kafka messaging, fully containerized with Docker.',
      tags: ['Angular', 'Spring Boot', 'Kafka', 'Docker'],
      href: 'https://github.com/saintrivers/kafka_messaging_app',
      type: 'teaching',
    },
    {
      name: 'REST API with JWT Auth',
      description: 'Full backend reference implementation with JWT authentication, PostgreSQL integration, and clean layered architecture for students to model and replicate.',
      tags: ['Kotlin', 'Spring Boot', 'JWT', 'Spring Data JPA', 'PostgreSQL'],
      href: 'https://github.com/saintrivers/kotlin_springboot_ams',
      type: 'teaching',
    },
    {
      name: 'Keycloak OAuth2 Deployment',
      description: 'Full-stack deployment template demonstrating OAuth2/OIDC security with Keycloak — a reproducible reference for engineers learning auth infrastructure.',
      tags: ['Keycloak', 'OAuth2', 'Spring Boot', 'Docker'],
      href: 'https://github.com/saintrivers',
      type: 'teaching',
    },
    {
      name: 'KONG + Keycloak API Gateway',
      description: 'API gateway integration template using KONG and Keycloak — covers service routing, and centralized auth enforcement across services.',
      tags: ['KONG', 'Keycloak', 'Spring Boot', 'Docker'],
      href: 'https://github.com/saintrivers',
      type: 'teaching',
    },
    {
      name: 'ML Recommendation System',
      description: 'Compared item-based, content-based, and neural-collaborative-filtering movie recommendation systems.',
      tags: ['Python', 'kNN', 'TensorFlow', 'Sklearn'],
      href: 'https://github.com/saintrivers/movie_recommendation.git',
      type: 'class',
    },
  ]

const typeConfig = {
  client: {
    badge: 'Client Project',
    badgeClass: 'bg-amber-400/15 text-amber-300 border-amber-400/20',
    cardClass: 'border-white/15 hover:border-white/30 border-t-amber-400/40',
    linkLabel: 'Visit site →',
  },
  teaching: {
    badge: 'Teaching Project',
    badgeClass: 'bg-white/5 text-white/40 border-white/10',
    cardClass: 'border-white/10 hover:border-white/20',
    linkLabel: 'View on GitHub →',
  },
  class: {
    badge: 'Class Project',
    badgeClass: 'bg-sky-400/10 text-sky-300/70 border-sky-400/15',
    cardClass: 'border-white/10 hover:border-white/20',
    linkLabel: 'View on GitHub →',
  },
}

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
        A selection of things I've built — production work and open teaching material.
      </p>

      <div className="mt-16 grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ name, description, tags, href, type }) => {
          const config = typeConfig[type]
          return (
            <div
              key={name}
              className={`group flex flex-col rounded-2xl border bg-white/5 p-6 backdrop-blur-sm transition-all ${config.cardClass}`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${config.badgeClass}`}>
                  {config.badge}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white">
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

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 text-xs font-medium transition-colors ${type === 'client'
                  ? 'text-amber-300/70 hover:text-amber-300'
                  : 'text-white/30 hover:text-white/60'
                  }`}
              >
                {config.linkLabel}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
