import { motion } from 'framer-motion'
import { ExternalLink, Star, Layers, Code2 } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'

const tagColors: Record<string, string> = {
  TypeScript: 'bg-blue-500/10 text-blue-300 border-blue-500/25',
  React: 'bg-sky-500/10 text-sky-300 border-sky-500/25',
  NestJS: 'bg-red-500/10 text-red-300 border-red-500/25',
  PostgreSQL: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/25',
  PrismaJS: 'bg-teal-500/10 text-teal-300 border-teal-500/25',
  GraphQL: 'bg-pink-500/10 text-pink-300 border-pink-500/25',
  Redis: 'bg-orange-500/10 text-orange-300 border-orange-500/25',
  Python: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/25',
  Automação: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
  default: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
}

function getTagColor(tag: string) {
  return tagColors[tag] ?? tagColors.default
}

export function Projects() {
  return (
    <section id="projetos" className="border-t border-slate-800/60 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Casos de Uso Reais
          </p>
          <h2 className="section-title">Projetos Selecionados</h2>
          <p className="section-subtitle">
            Ferramentas e plataformas utilitárias construídas para solucionar gargalos práticos de suporte e operação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: 'rgba(59, 130, 246, 0.45)' }}
              className={`card p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden ${
                proj.highlight
                  ? 'border-blue-500/30 bg-gradient-to-b from-blue-950/20 via-slate-900/60 to-slate-900/60'
                  : ''
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="p-1.5 bg-blue-600/15 text-blue-400 rounded-lg">
                      {proj.highlight ? <Layers size={17} /> : <Code2 size={17} />}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {proj.name}
                    </h3>
                    {proj.highlight && (
                      <span className="badge bg-blue-500/15 text-blue-300 border border-blue-500/30 text-[10px]">
                        <Star size={11} className="fill-blue-400 text-blue-400" />
                        Destaque
                      </span>
                    )}
                  </div>

                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label={`Ver código do ${proj.name}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
