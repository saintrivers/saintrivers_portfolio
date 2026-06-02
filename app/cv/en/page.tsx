import { hero, contactLinks, skillGroups, projects, publications, contactInstitutions, workExperience } from '../../content'
import PrintButton from '../PrintButton'

export const metadata = { title: 'CV — Dayan Eam' }

const H = 'mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-900 border-b border-blue-200 pb-0.5'

const cvProjects = projects.filter(p =>
  p.name === 'Kafka Full-Stack Template' ||
  p.name === 'Reactive Programming Pipeline' ||
  p.name === 'KONG + Keycloak API Gateway'
)

export default function CVEnPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans">
      <div className="mx-auto max-w-4xl px-8 py-10 print:p-0 print:max-w-none">

        {/* Toolbar */}
        <div className="print:hidden mb-6 flex items-center justify-between">
          <a href="/" className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors">← Back</a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm font-medium">
              <span className="text-zinc-800">EN</span>
              <span className="text-zinc-300">|</span>
              <a href="/cv/ko" className="text-zinc-400 hover:text-zinc-700 transition-colors">KO</a>
            </div>
            <PrintButton />
          </div>
        </div>

        {/* Header */}
        <header className="mb-5 pb-3 border-b-2 border-blue-900">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-[28px] font-bold text-blue-900 leading-none tracking-tight">{hero.name}</h1>
              <p className="text-sm text-zinc-500 mt-1">{hero.title}</p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-zinc-500">
            <span><span className="font-semibold text-zinc-600">Location:</span> {hero.location}</span>
            <span><span className="font-semibold text-zinc-600">Phone:</span> {hero.phone}</span>
            <a href="https://portfolio.saintrivers.tech" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-800">
              <span className="font-semibold text-zinc-600">Portfolio:</span> portfolio.saintrivers.tech
            </a>
            {contactLinks
              .filter(l => l.label !== 'Google Scholar')
              .map(({ label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="hover:text-zinc-800"
                >
                  <span className="font-semibold text-zinc-600">{label}:</span> {display}
                </a>
              ))}
          </div>
        </header>

        {/* Two-column body: 2/5 left sidebar, 3/5 right main */}
        <div className="grid grid-cols-5 gap-x-8 print:gap-x-6">

          {/* LEFT SIDEBAR */}
          <aside className="col-span-2 space-y-5">

            <section>
              <h2 className={H}>Skills</h2>
              <div className="space-y-2">
                {skillGroups.map(({ category, skills }) => (
                  <div key={category} className="text-[11px]">
                    <span className="font-semibold text-zinc-700">{category}: </span>
                    <span className="text-zinc-500">{skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={H}>Education</h2>
              <div className="space-y-3">
                {contactInstitutions.map(({ name, degree, period, link }) => (
                  <div key={name}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-zinc-800 hover:underline leading-snug block"
                    >
                      {name}
                    </a>
                    <p className="text-[11px] text-zinc-500 leading-snug">{degree}</p>
                    <p className="text-[10px] text-zinc-400">{period}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={H}>Research</h2>
              <div className="space-y-3">
                {publications.map((pub) => (
                  <div key={pub.title}>
                    <p className="text-[11px] font-semibold text-zinc-800 leading-snug">{pub.title}</p>
                    <p className="text-[11px] text-zinc-500">
                      <a href={pub.labLink} target="_blank" rel="noopener noreferrer" className="hover:underline">{pub.lab}</a>
                      {pub.venue && <span> — {pub.venue}</span>}
                    </p>
                    {pub.doi && <p className="text-[10px] text-zinc-400">DOI: {pub.doi}</p>}
                    <span className={`text-[10px] font-medium ${pub.status === 'published' ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {pub.status === 'published' ? 'Published' : 'In Preparation'}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={H}>Languages</h2>
              <div className="space-y-1 text-[11px] text-zinc-500">
                <p>Khmer — Native</p>
                <p>Korean — TOPIK Level 3</p>
                <p>English — Cambridge C1</p>
              </div>
            </section>

            <section>
              <h2 className={H}>Interests</h2>
              <p className="text-[11px] text-zinc-500">Taekwondo · Billiards · Table tennis</p>
            </section>

          </aside>

          {/* RIGHT MAIN */}
          <main className="col-span-3 space-y-5">

            <p className="text-[12px] leading-relaxed text-zinc-600">{hero.bio}</p>

            <section>
              <h2 className={H}>Work Experience</h2>
              <div className="space-y-4">
                {workExperience.map((job) => (
                  <div key={job.title + job.company}>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[12px] font-bold text-zinc-900">{job.title}</span>
                      <span className="text-[10px] text-zinc-400 shrink-0">{job.period}</span>
                    </div>
                    <p className="text-[11px] text-zinc-500">{job.company} · {job.location}</p>
                    <ul className="mt-1 space-y-0.5 pl-3">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="text-[11px] text-zinc-600 leading-relaxed list-disc list-outside">{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className={H}>Selected Projects</h2>
              <div className="space-y-3">
                {cvProjects.map((project) => (
                  <div key={project.name}>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] font-semibold text-zinc-800 hover:underline"
                    >
                      {project.name}
                    </a>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{project.description}</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5">{project.tags.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}
