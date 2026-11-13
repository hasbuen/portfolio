import { ExternalLink, Star } from 'lucide-react'
import { PROJECTS } from '../data/portfolio'

const tagColors: Record<string, string> = {
  TypeScript: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  React: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
  NestJS: 'bg-red-500/10 text-red-300 border-red-500/20',
  PostgreSQL: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  PrismaJS: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  GraphQL: 'bg-pink-500/10 text-pink-300 border-pink-500/20',
  Redis: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
  Python: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
  Automação: 'bg-green-500/10 text-green-300 border-green-500/20',
  default: 'bg-slate-700/50 text-slate-300 border-slate-600/40',
}

function getTagColor(tag: string) {
  return tagColors[tag] ?? tagColors.default
}

export function Projects() {
  return (
    <section id="projetos" className="border-t border-slate-800/60">
      <div className="section-container">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Portfólio</p>
        <h2 className="section-title">Projetos Selecionados</h2>
        <p className="section-subtitle">
          Ferramentas e plataformas desenvolvidas para resolver problemas reais do suporte e operação.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.name}
              className={`card p-6 flex flex-col gap-4 group ${
                proj.highlight ? 'ring-1 ring-blue-500/20' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.name}
                  </h3>
                  {proj.highlight && (
                    <Star size={14} className="text-blue-400 fill-blue-400/30" />
                  )}
                </div>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <p className="text-sm text-slate-400 leading-relaxed flex-1">{proj.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
