const links = [
  { label: 'GitHub', href: 'https://github.com/saintrivers', display: 'github.com/saintrivers' },
  { label: 'LinkedIn', href: 'https://linkedin.com', display: 'linkedin.com/in/yourhandle' },
  { label: 'Email', href: 'mailto:eam.dayan@gmail.com', display: 'eam.dayan@gmail.com' },
]

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
        Whether it's a project, an opportunity, or just a question — I'm happy
        to hear from you. Drop me a message and I'll get back to you.
      </p>

      <a
        href="mailto:eam.dayan@gmail.com"
        className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-zinc-900 transition-colors hover:bg-white/90"
      >
        Say hello →
      </a>

      <div className="mt-16 flex flex-col items-center gap-4">
        {links.map(({ label, href, display }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-white"
          >
            <span className="w-14 text-right text-white/25">{label}</span>
            <span className="w-px h-3 bg-white/15" />
            <span>{display}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
