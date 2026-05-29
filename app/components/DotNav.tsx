'use client'

import { type ReactElement, useEffect, useState } from 'react'
import { sections, type SectionId } from '../content'

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  )
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  )
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  )
}

const icons: Record<SectionId, (props: { className?: string }) => ReactElement> = {
  hero:     HomeIcon,
  skills:   StarIcon,
  work:     BriefcaseIcon,
  research: FileTextIcon,
  contact:  EnvelopeIcon,
}

export default function DotNav() {
  const [active, setActive] = useState<string>('hero')

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5">
      {sections.map(({ id, label }) => {
        const isActive = active === id
        const Icon = icons[id]
        return (
          <button
            key={id}
            className="group relative flex items-center justify-end cursor-pointer"
            onClick={() => scrollTo(id)}
            aria-label={label}
          >
            <span className="mr-3 text-xs font-medium tracking-wide text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 select-none whitespace-nowrap drop-shadow">
              {label}
            </span>

            <div
              className={[
                'flex items-center justify-center rounded-full transition-all duration-200 ease-out',
                isActive
                  ? 'w-4 h-4 bg-white'
                  : 'w-2.5 h-2.5 bg-white/40',
                'group-hover:w-10 group-hover:h-10 group-hover:bg-white',
              ].join(' ')}
            >
              <Icon
                className={[
                  'transition-all duration-150 text-zinc-900',
                  'opacity-0 group-hover:opacity-100',
                  isActive ? 'w-2 h-2' : 'w-5 h-5',
                  'group-hover:w-5 group-hover:h-5',
                ].join(' ')}
              />
            </div>
          </button>
        )
      })}
    </nav>
  )
}
