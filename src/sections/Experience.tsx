import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { EXPERIENCES } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-slate-800/60">
      <div className="section-container">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Carreira</p>
        <h2 className="section-title">Experiência Profissional</h2>
        <p className="section-subtitle">
          Mais de 10 anos de atuação em ambientes corporativos de suporte técnico e TI.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-slate-700/40 to-transparent" />

          <div className="space-y-6 pl-12 sm:pl-20">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative group">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[42px] sm:-left-[58px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300
                    ${exp.current
                      ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/40 group-hover:scale-110'
                      : 'bg-slate-800 border-slate-600 group-hover:border-blue-500/50'
                    }`}
                />

                <div className="card p-6 group-hover:translate-y-[-2px] transition-transform duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base font-bold text-white">{exp.company}</h3>
                        {exp.current && (
                          <span className="badge bg-blue-500/15 text-blue-400 border border-blue-500/20">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                            Atual
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Briefcase size={13} className="text-slate-500" />
                        <span className="text-sm text-blue-400 font-medium">{exp.role}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 text-sm text-slate-400">
                        <span className="text-blue-500 mt-1 shrink-0">›</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
