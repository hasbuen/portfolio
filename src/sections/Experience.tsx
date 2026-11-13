import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react'
import { EXPERIENCES } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-slate-800/60 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Trajetória
          </p>
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="section-subtitle">
            Mais de 10 anos de atuação contínua em ambientes corporativos de suporte técnico, TI e ERP.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha da timeline adaptativa */}
          <div className="absolute left-3 sm:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-blue-500 via-slate-700 to-transparent" />

          <div className="space-y-6 sm:space-y-8 pl-8 sm:pl-16">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Ponto indicador da timeline */}
                <div
                  className={`absolute -left-[27px] sm:-left-[46px] top-5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 transition-all duration-300 z-10 ${
                    exp.current
                      ? 'bg-blue-500 border-white shadow-lg shadow-blue-500/50 scale-110'
                      : 'bg-slate-900 border-slate-600 group-hover:border-blue-400 group-hover:bg-blue-600/30'
                  }`}
                />

                <motion.div
                  whileHover={{ y: -3, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="card p-4 sm:p-6"
                >
                  {/* Cabeçalho do Card */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-3.5">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="p-1.5 bg-blue-600/15 text-blue-400 rounded-lg shrink-0">
                          <Building2 size={16} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="badge bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px]">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                            Atual
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1.5 ml-0 sm:ml-7">
                        <Briefcase size={13} className="text-blue-400 shrink-0" />
                        <span className="text-xs sm:text-sm text-blue-300 font-semibold">{exp.role}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col sm:items-end gap-x-3 gap-y-1 text-xs text-slate-400 font-medium">
                      <div className="flex items-center gap-1">
                        <Calendar size={13} className="text-slate-400 shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={13} className="text-slate-400 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points descritivos */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <span className="text-blue-400 font-bold mt-0.5 shrink-0">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-slate-800/70 border border-slate-700/60 rounded-md text-[11px] font-medium text-slate-300 hover:border-slate-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
