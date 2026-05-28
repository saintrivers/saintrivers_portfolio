import DotNav from './components/DotNav'
import Hero from './panels/Hero'
import About from './panels/About'
import Work from './panels/Work'
import Skills from './panels/Skills'
import Contact from './panels/Contact'

const sections = [
  { id: 'hero',    panel: <Hero /> },
  { id: 'about',   panel: <About /> },
  { id: 'work',    panel: <Work /> },
  { id: 'skills',  panel: <Skills /> },
  { id: 'contact', panel: <Contact /> },
]

export default function Home() {
  return (
    <>
      <DotNav />
      {sections.map(({ id, panel }) => (
        <section key={id} id={id} className="min-h-screen">
          {panel}
        </section>
      ))}
    </>
  )
}
