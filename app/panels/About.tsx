import Image from 'next/image'

const institutions = [
  { src: '/logos/rupp_logo.png', alt: 'Royal University of Phnom Penh', name: 'Royal University of Phnom Penh', link: 'https://www.rupp.edu.kh/', container: 'h-16 w-16 rounded-full' },
  { src: '/logos/kshrd_logo.png', alt: 'Korea Software HRD Center', name: 'Korea Software HRD Center', link: 'https://www.kshrd.com.kh/', container: 'h-16 w-16 rounded-full' },
  { src: '/logos/ajou_logo.png', alt: 'Ajou University', name: 'Ajou University', link: 'https://www.ajou.ac.kr/en/index.do', container: 'h-16 w-16 rounded-full bg-white/90' },
]

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
      <p className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-white/50">
        About
      </p>

      <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
        Who I am
      </h2>

      <p className="mt-8 max-w-2xl text-center text-base leading-relaxed text-white/60 sm:text-lg">
        I'm mainly focused on backend and infrastructure, but I can readily step into full-stack roles when needed. I also possess expertise in machine learning for applications like recommendation systems, text processing, and radar signal processing.
      </p>

      <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-white/60 sm:text-lg">
        When I'm not writing code, I like to step away from the screen to train in taekwondo, play billiards, or play table tennis.
      </p>

      <p className="mt-16 text-xs font-semibold tracking-[0.2em] uppercase text-white/30 text-center">
        Education &amp; Training
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-12">
        {institutions.map(({ src, alt, name, container, link }) => (
          <a target="_blank" href={link} key={name} className="flex flex-col items-center gap-3 w-24">
            <div className={`relative backdrop-blur-sm ${container}`}>
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-white/45 text-center max-w-32 h-8">{name}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
