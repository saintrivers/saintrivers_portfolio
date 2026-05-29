import { skillGroups } from '../content'

export default function Skills() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-24">
      <p className="mb-4 text-sm font-semibold tracking-[0.25em] uppercase text-white/50">
        Tech Stack
      </p>

      <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
        What I work with
      </h2>

      <p className="mt-6 max-w-xl text-center text-base text-white/50">
        Tools and technologies I reach for day to day.
      </p>

      <div className="mt-16 grid w-full max-w-3xl gap-10 sm:grid-cols-3">
        {skillGroups.map(({ category, skills }) => (
          <div key={category}>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
