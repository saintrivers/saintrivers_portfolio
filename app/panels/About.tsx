export default function About() {
  const highlights = [
    { label: 'Years of experience', value: '5+' },
    { label: 'Projects shipped', value: '30+' },
    { label: 'Countries worked from', value: '3' },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
      <p className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-white/50">
        About
      </p>

      <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
        Who I am
      </h2>

      <p className="mt-8 max-w-2xl text-center text-base leading-relaxed text-white/60 sm:text-lg">
        I'm Dayan, a backend and full-stack engineer passionate about building
        systems that scale and interfaces that don't get in the way. I care
        about clean code, good architecture, and shipping things that matter.
      </p>

      <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-white/60 sm:text-lg">
        When I'm not writing code, I'm probably reading about distributed systems,
        exploring new tools, or figuring out how things work under the hood.
      </p>

      <div className="mt-16 grid grid-cols-3 gap-12 text-center">
        {highlights.map(({ label, value }) => (
          <div key={label}>
            <p className="text-4xl font-bold text-white">{value}</p>
            <p className="mt-2 text-sm text-white/50">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
