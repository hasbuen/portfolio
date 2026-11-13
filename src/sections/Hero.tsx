import { Mail, MapPin, Download, ExternalLink } from 'lucide-react'

// Brand SVG icons not in lucide-react v1.72
function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-500/6 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        {/* Avatar com anel luminoso */}
        <div className="relative mb-5 group animate-fade-in">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-800">
            <img
              src="/profile.jpg"
              onError={(e) => {
                // Fallback para a URL remota do GitHub caso necessário
                e.currentTarget.src = "https://avatars.githubusercontent.com/u/91395027?v=4"
              }}
              alt="Julio Cesar Ovídio Bueno"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span
            className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-slate-900 rounded-full shadow-md"
            title="Online / Disponível para oportunidades"
          />
        </div>

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs sm:text-sm font-medium mb-6 animate-fade-in">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow" />
          Disponível para novas oportunidades
        </div>

        {/* Name + Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight animate-slide-up">
          Julio Cesar Ovídio
          <br />
          <span className="gradient-text">Bueno</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-400 font-semibold mb-6 animate-slide-up">
          Analista de Suporte &nbsp;·&nbsp; Help Desk &nbsp;·&nbsp; Sistemas ERP
        </p>

        <p className="max-w-2xl text-slate-400 text-base sm:text-lg leading-relaxed mb-8 animate-fade-in">
          Mais de <span className="text-white font-semibold">10 anos</span> de experiência em suporte
          técnico corporativo, implantação de ERP e diagnóstico de incidentes em infraestrutura e
          bancos de dados. Apaixonado por automação e desenvolvimento de ferramentas que otimizam
          processos operacionais.
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-10">
          <MapPin size={14} />
          <span>Cascavel, PR — Brasil</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button onClick={() => scrollTo('projetos')} className="btn-primary">
            Ver Projetos
            <ExternalLink size={16} />
          </button>
          <a href="/curriculo_julio_cesar_bueno.pdf" download className="btn-secondary">
            <Download size={16} />
            Download CV
          </a>
          <button onClick={() => scrollTo('contato')} className="btn-secondary">
            Entrar em Contato
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hasbuen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 hover:border-slate-600 rounded-xl text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/julio-cesar-ovidio-bueno/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-800/60 hover:bg-blue-600/20 border border-slate-700/50 hover:border-blue-500/40 rounded-xl text-slate-400 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:julio.cesar.ovidio.bueno@gmail.com"
            className="p-2.5 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 hover:border-slate-600 rounded-xl text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 sm:gap-16 max-w-lg mx-auto">
          {[
            { value: '10+', label: 'Anos de Experiência' },
            { value: '73', label: 'Certificados DIO' },
            { value: '256h', label: 'Horas de Treinamento' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600">
          <span className="text-xs">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </div>
    </section>
  )
}
