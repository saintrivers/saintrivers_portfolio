import { hero, contactLinks, skillGroups, projects, publications, contactInstitutions } from '../content'
import PrintButton from './PrintButton'

export const metadata = {
  title: 'CV — Dayan Eam',
}

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <div className="mx-auto max-w-3xl px-8 py-12 print:py-6 print:px-0">

        {/* Toolbar */}
        <div className="print:hidden mb-8 flex items-center justify-between">
          <a href="/" className="text-sm text-zinc-500 hover:text-zinc-800 transition-colors">
            ← Back
          </a>
          <PrintButton />
        </div>

        {/* Header */}
        <header className="mb-8 border-b border-zinc-200 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">{hero.name}</h1>
          <p className="mt-1 text-lg text-zinc-600">{hero.title}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-500">
            {contactLinks.map(({ label, href, display }) => (
              <a
                key={label}
                href={href}
                className="hover:text-zinc-800 transition-colors"
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {display}
              </a>
            ))}
          </div>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-400">Summary</h2>
          <p className="text-sm leading-relaxed text-zinc-600">{hero.bio}</p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">Skills</h2>
          <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-3">
            {skillGroups.map(({ category, skills }) => (
              <div key={category}>
                <span className="text-xs font-semibold text-zinc-500">{category}: </span>
                <span className="text-xs text-zinc-700">{skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-zinc-900 hover:underline print:no-underline"
                  >
                    {project.name}
                  </a>
                  <span className="shrink-0 text-xs text-zinc-400 capitalize">{project.type}</span>
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-600">{project.description}</p>
                <p className="mt-1 text-xs text-zinc-400">{project.tags.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">Research</h2>
          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.title}>
                <p className="text-sm font-semibold text-zinc-900">{pub.title}</p>
                <p className="mt-0.5 text-xs text-zinc-500">
                  <a href={pub.labLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {pub.lab}
                  </a>
                  {pub.venue && <span> — {pub.venue}</span>}
                </p>
                {pub.doi && (
                  <p className="mt-0.5 text-xs text-zinc-400">DOI: {pub.doi}</p>
                )}
                <span className={`mt-1 inline-block text-xs font-medium ${pub.status === 'published' ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {pub.status === 'published' ? 'Published' : 'In Preparation'}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-400">Education</h2>
          <div className="space-y-3">
            {contactInstitutions.map(({ name, degree, link }) => (
              <div key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-900 hover:underline"
                >
                  {name}
                </a>
                <p className="text-xs text-zinc-500">{degree}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-400">Languages</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-600">
            <span>Khmer — Native</span>
            <span>Korean — TOPIK Level 3</span>
            <span>English — Cambridge C1</span>
          </div>
        </section>

      </div>
    </div>
  )
}
