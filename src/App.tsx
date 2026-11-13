import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Certificates } from './sections/Certificates'
import { Resume } from './sections/Resume'
import { Contact } from './sections/Contact'
import { useActiveSection } from './hooks/useActiveSection'
import { NAV_SECTIONS } from './data/portfolio'

function App() {
  const sectionIds = NAV_SECTIONS.map((s) => s.id)
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="min-h-screen">
      <Navbar sections={NAV_SECTIONS} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>
    </div>
  )
}

export default App
