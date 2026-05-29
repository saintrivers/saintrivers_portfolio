import { projects } from '../content'

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
        A selection of things I've built as a student, instructor and freelancer.
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
