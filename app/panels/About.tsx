import Image from 'next/image'
import { about, aboutInstitutions } from '../content'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
      <p className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-white/50">
        About
      </p>

      <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
        Who I am
      </h2>

      {about.bio.map((paragraph, i) => (
        <p key={i} className="mt-8 max-w-2xl text-center text-base leading-relaxed text-white/60 sm:text-lg">
          {paragraph}
        </p>
      ))}

      <p className="mt-16 text-xs font-semibold tracking-[0.2em] uppercase text-white/30 text-center">
        Education &amp; Training
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-12">
        {aboutInstitutions.map(({ src, alt, name, container, link }) => (
          <a target="_blank" href={link} key={name} className="flex flex-col items-center gap-3 w-24">
            <div className={`relative backdrop-blur-sm ${container}`}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <p className="text-xs text-white/45 text-center max-w-32 h-8">{name}</p>
          </a>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-3 text-xs text-white/30">
        <span>TOPIK Level 3</span>
        <span className="w-px h-3 bg-white/15" />
        <span>Cambridge English C1</span>
      </div>
    </div>
  )
}
