'use client'

import { useEffect, useState } from 'react'

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

const NAV_ITEMS = [
  { id: 'home',    label: 'Home',    Icon: HomeIcon },
  { id: 'about',   label: 'About',   Icon: UserIcon },
  { id: 'work',    label: 'Work',    Icon: BriefcaseIcon },
  { id: 'skills',  label: 'Skills',  Icon: StarIcon },
  { id: 'contact', label: 'Contact', Icon: EnvelopeIcon },
] as const

export default function DotNav() {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
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
      {NAV_ITEMS.map(({ id, label, Icon }) => {
        const isActive = active === id
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
