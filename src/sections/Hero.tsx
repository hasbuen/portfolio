import { motion, type Variants } from 'framer-motion'
import { Mail, MapPin, Download, ExternalLink, ArrowRight, Sparkles } from 'lucide-react'

// Brand SVG icons
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12"
    >
      {/* Background radial gradient lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-80 h-80 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-80 h-80 sm:w-96 sm:h-96 bg-sky-400 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Avatar com respiração suave e indicador ativo */}
        <motion.div variants={itemVariants} className="relative mb-6 group">
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px 2px rgba(59, 130, 246, 0.3)',
                '0 0 35px 8px rgba(14, 165, 233, 0.45)',
                '0 0 20px 2px rgba(59, 130, 246, 0.3)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-full p-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-500"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-slate-900 shadow-2xl bg-slate-800"
            >
              <img
                src="/profile.jpg"
                onError={(e) => {
                  e.currentTarget.src = 'https://avatars.githubusercontent.com/u/91395027?v=4'
                }}
                alt="Julio Cesar Ovídio Bueno"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          <span
            className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-500 border-2 border-slate-950 rounded-full shadow-md"
            title="Disponível para novas oportunidades"
          />
        </motion.div>

        {/* Badge de disponibilidade */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-emerald-400 text-xs sm:text-sm font-semibold mb-5 shadow-sm shadow-emerald-500/10">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <span className="relative flex h-2 w-2 -ml-3">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponível para novas oportunidades
          </div>
        </motion.div>

        {/* Nome Principal */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-3 tracking-tight leading-[1.15]"
        >
          Julio Cesar Ovídio
          <br className="sm:hidden" />
          <span className="gradient-text ml-2 sm:ml-3">Bueno</span>
        </motion.h1>

        {/* Cargo / Subtítulo */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl font-bold text-blue-400 mb-5 tracking-wide max-w-xl"
        >
          Analista de Suporte &nbsp;·&nbsp; Help Desk &nbsp;·&nbsp; Sistemas ERP
        </motion.p>

        {/* Resumo compacto */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal"
        >
          Mais de <strong className="text-white font-bold">10 anos</strong> de experiência em suporte
          técnico corporativo, implantação de ERP e diagnóstico crítico em infraestrutura, redes e
          bancos de dados. Especialista em automação de rotinas e suporte ágil.
        </motion.p>

        {/* Localização */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-1.5 text-slate-400 text-xs sm:text-sm mb-8"
        >
          <MapPin size={15} className="text-blue-400 shrink-0" />
          <span>Cascavel, PR — Brasil (Disponibilidade para viagens e mudança)</span>
        </motion.div>

        {/* Botões de Ação */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-md sm:max-w-none flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('projetos')}
            className="btn-primary w-full sm:w-auto py-3 px-6 text-sm font-semibold shadow-md shadow-blue-600/30"
          >
            Ver Projetos
            <ArrowRight size={16} />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="/curriculo_julio_cesar_bueno.pdf"
            download
            className="btn-secondary w-full sm:w-auto py-3 px-6 text-sm font-semibold"
          >
            <Download size={16} />
            Download Currículo (PDF)
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('certificados')}
            className="btn-secondary w-full sm:w-auto py-3 px-5 text-sm font-semibold text-slate-300"
          >
            <Sparkles size={15} className="text-yellow-400" />
            74 Certificados
          </motion.button>
        </motion.div>

        {/* Redes Sociais */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-12">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/hasbuen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={19} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/julio-cesar-ovidio-bueno/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-slate-900/80 hover:bg-blue-600/20 border border-slate-800 hover:border-blue-500/40 rounded-xl text-slate-300 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={19} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:julio.cesar.ovidio.bueno@gmail.com"
            className="p-2.5 sm:p-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors"
            aria-label="E-mail"
          >
            <Mail size={19} />
          </motion.a>
        </motion.div>

        {/* Cards de Métricas / Estatísticas */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-xl grid grid-cols-3 gap-3 sm:gap-6 bg-slate-900/50 border border-slate-800/80 p-4 sm:p-6 rounded-2xl backdrop-blur-md shadow-xl shadow-black/20"
        >
          {[
            { value: '10+', label: 'Anos em Suporte & ERP' },
            { value: '74', label: 'Certificados DIO' },
            { value: '256h', label: 'Horas de Especialização' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-black gradient-text mb-0.5">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
