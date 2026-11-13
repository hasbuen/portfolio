import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import type { NavSection } from '../types'

interface NavbarProps {
  sections: NavSection[]
  activeSection: string
}

export function Navbar({ sections, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    if (mobileOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileOpen])

  // Fecha o menu ao redimensionar para tela grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Perfil */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-blue-500/60 group-hover:border-blue-400 transition-colors shadow-md shadow-blue-500/20 bg-slate-800 shrink-0">
              <img
                src="/profile.jpg"
                onError={(e) => {
                  e.currentTarget.src = "https://avatars.githubusercontent.com/u/91395027?v=4"
                }}
                alt="Julio Bueno"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <span className="font-bold text-white text-sm sm:text-base leading-tight block">
                Julio <span className="text-blue-400 font-extrabold">Bueno</span>
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Analista de Suporte
              </span>
            </div>
          </motion.button>

          {/* Desktop Nav com pílula indicadora */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 p-1.5 rounded-2xl backdrop-blur-md">
            {sections.map((s) => {
              const isActive = activeSection === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-blue-600/30 border border-blue-500/40 rounded-xl"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{s.label}</span>
                </button>
              )
            })}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2.5">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/curriculo_julio_cesar_bueno.pdf"
              download
              className="hidden sm:inline-flex btn-primary text-xs py-2 px-4 shadow-sm shadow-blue-600/30"
            >
              <Download size={13} />
              <span>Download CV</span>
            </motion.a>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors rounded-xl bg-slate-900/80 border border-slate-800 hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown com AnimatePresence */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden mt-3 bg-slate-950/95 backdrop-blur-2xl border border-slate-800/90 rounded-2xl p-4 shadow-2xl flex flex-col gap-1.5"
            >
              {sections.map((s) => {
                const isActive = activeSection === s.id
                return (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600/25 text-blue-400 border border-blue-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {s.label}
                  </button>
                )
              })}
              <div className="border-t border-slate-800/80 mt-2 pt-3">
                <a
                  href="/curriculo_julio_cesar_bueno.pdf"
                  download
                  className="btn-primary w-full justify-center text-xs py-2.5"
                >
                  <Download size={14} />
                  Baixar Currículo (PDF)
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
