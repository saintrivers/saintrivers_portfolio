import { publications } from '../content'

const statusConfig = {
  'published': {
    badge: 'Published',
    badgeClass: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/20',
    cardClass: 'border-white/15 hover:border-white/25 border-t-emerald-400/30',
  },
  'in-preparation': {
    badge: 'Ongoing',
    badgeClass: 'bg-white/5 text-white/40 border-white/10',
    cardClass: 'border-white/10 hover:border-white/20',
  },
}

export default function Research() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
      <p className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-white/50">
        Research
      </p>

      <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
        Publications
      </h2>

      <p className="mt-6 max-w-xl text-center text-base text-white/50">
        Academic work from the AiCONS Lab at Ajou University.
      </p>

      <div className="mt-16 flex flex-col w-full max-w-3xl gap-6">
        {publications.map(({ title, lab, labLink, venue, doi, status }) => {
          const config = statusConfig[status]
          return (
            <div
              key={title}
              className={`flex flex-col rounded-2xl border bg-white/5 p-6 backdrop-blur-sm transition-all ${config.cardClass}`}
            >
              <span className={`self-start rounded-full border px-2.5 py-0.5 text-xs font-medium mb-4 ${config.badgeClass}`}>
                {config.badge}
              </span>

              <h3 className="text-base font-semibold text-white leading-snug">
                {title}
              </h3>

              <a target='_blank' href={labLink} className="mt-2 text-xs text-white/35 hover:text-white/55">{lab}</a>

              {venue && (
                <p className="mt-3 text-xs text-white/50 italic">{venue}</p>
              )}

              {doi && (
                <a
                  href={`https://doi.org/${doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-mono text-white/25 hover:text-white/55 transition-colors"
                >
                  doi:{doi} →
                </a>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
