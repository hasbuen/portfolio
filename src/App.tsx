import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
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
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Barra de progresso de rolagem no topo
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen relative selection:bg-blue-600 selection:text-white">
      {/* Barra de progresso animada fixa no topo */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 origin-left z-50 shadow-sm shadow-blue-500/50"
        style={{ scaleX }}
      />

      <Navbar sections={NAV_SECTIONS} activeSection={activeSection} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </main>

      {/* Botão flutuante "Voltar ao topo" com animação Framer Motion */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 z-40 p-3 bg-blue-600/90 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-600/40 backdrop-blur-md border border-blue-400/30 transition-colors"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </div>
  )
}

export default App
