import type { ReactNode } from 'react'
import DotNav from './components/DotNav'
import Hero from './panels/Hero'
import Work from './panels/Work'
import Skills from './panels/Skills'
import Contact from './panels/Contact'
import { sections, type SectionId } from './content'

const panels: Record<SectionId, ReactNode> = {
  hero:    <Hero />,
  skills:  <Skills />,
  work:    <Work />,
  contact: <Contact />,
}

export default function Home() {
  return (
    <>
      <DotNav />
      {sections.map(({ id }) => (
        <section key={id} id={id} className="min-h-screen">
          {panels[id]}
        </section>
      ))}
    </>
  )
}
