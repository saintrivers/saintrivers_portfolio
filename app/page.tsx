import DotNav from './components/DotNav'

const sections = [
  { id: 'home',    label: 'Home',    description: 'Welcome to my portfolio' },
  { id: 'about',   label: 'About',   description: 'A little about me' },
  { id: 'work',    label: 'Work',    description: "Projects I've built" },
  { id: 'skills',  label: 'Skills',  description: 'What I work with' },
  { id: 'contact', label: 'Contact', description: 'Get in touch' },
]

export default function Home() {
  return (
    <>
      <DotNav />
      {sections.map(({ id, label, description }) => (
        <section
          key={id}
          id={id}
          className="min-h-screen flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg">
            {label}
          </h2>
          <p className="mt-4 text-lg text-white/60">
            {description}
          </p>
        </section>
      ))}
    </>
  )
}
