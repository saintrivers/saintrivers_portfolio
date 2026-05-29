import Image from 'next/image'
import { contactLinks, contactInstitutions } from '../content'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24 text-center">
      <p className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-white/50">
        Contact
      </p>

      <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
        Let's talk
      </h2>

      <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50">
        Whether it's a project, an opportunity, or just a question — drop me a message and I'll get back to you.
      </p>

      <a
        href="mailto:eam.dayan@gmail.com"
        className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-zinc-900 transition-colors hover:bg-white/90"
      >
        Email Me →
      </a>

      <div className="mt-16 flex flex-col items-center gap-4">
        {contactLinks.map(({ label, href, display }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex w-full items-center gap-3 text-sm text-white/40 transition-colors hover:text-white"
          >
            <span className="w-36 text-right text-white/25">{label}</span>
            <span className="w-px h-3 bg-white/15" />
            <span>{display}</span>
          </a>
        ))}
      </div>

      <div className="mt-12 w-full max-w-2xl border-t border-white/10 pt-6">
        <p className="mb-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/25">
          Education &amp; Training
        </p>

        <div className="flex flex-wrap items-start justify-center gap-10">
          {contactInstitutions.map(({ src, alt, name, degree, link, container }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 w-36 transition-opacity hover:opacity-100 opacity-80"
            >
              <div className={`relative backdrop-blur-sm ${container}`}>
                <Image
                  src={src} alt={alt} fill sizes="64px" className="object-contain" />
              </div>
              <p className="text-xs text-white font-medium leading-snug h-8">{name}</p>
              <p className="text-xs text-white/60 leading-snug">{degree}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-white/70">
          <span>Khmer Native</span>
          <span className="w-px h-3 bg-white/40" />
          <span>TOPIK Level 3</span>
          <span className="w-px h-3 bg-white/40" />
          <span>Cambridge English <strong>C1</strong></span>
        </div>
      </div>
    </div>
  )
}
