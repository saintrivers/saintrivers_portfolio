import { hero, contactLinks } from '../content'

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
            <p className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-white/50">
                Available for work
            </p>

            <h1 className="text-6xl font-bold tracking-tight text-white drop-shadow-lg sm:text-8xl">
                {hero.name}
            </h1>

            <h2 className="mt-4 text-xl font-medium text-white/70 sm:text-2xl">
                {hero.title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50">
                {hero.bio}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90">
                {hero.stack}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                    href="#work"
                    className="px-6 py-3 rounded-full bg-white text-zinc-900 text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors"
                >
                    View my work
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold tracking-wide hover:border-white/60 hover:bg-white/5 transition-colors"
                >
                    Get in touch
                </a>
            </div>

            <div className="mt-16 flex items-center gap-6 text-white/40">
                {contactLinks.flatMap(({ label, href }, i) => {
                    const link = (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="hover:text-white transition-colors"
                        >
                            {label}
                        </a>
                    )
                    return i === 0
                        ? [link]
                        : [<span key={`sep-${i}`} className="w-px h-4 bg-white/20" />, link]
                })}
            </div>
        </div>
    )
}
