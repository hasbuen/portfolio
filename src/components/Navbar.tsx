import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-500/50 group-hover:border-blue-400 transition-colors shadow-sm bg-slate-800 shrink-0">
              <img
                src="/profile.jpg"
                onError={(e) => {
                  e.currentTarget.src = "https://avatars.githubusercontent.com/u/91395027?v=4"
                }}
                alt="Julio Bueno"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-white hidden sm:block">
              Julio<span className="text-blue-400"> Bueno</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`nav-link text-sm ${activeSection === s.id ? 'active' : ''}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/curriculo_julio_cesar_bueno.pdf"
              download
              className="hidden sm:flex btn-primary text-sm py-2 px-4"
            >
              Download CV
            </a>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 py-4 px-4 flex flex-col gap-2"
          >
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === s.id
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {s.label}
              </button>
            ))}
            <div className="border-t border-slate-700/50 mt-2 pt-2">
              <a
                href="/curriculo_julio_cesar_bueno.pdf"
                download
                className="btn-primary w-full justify-center text-sm py-2"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
