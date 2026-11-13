import { SKILL_CATEGORIES } from '../data/portfolio'

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  violet: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
  orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
}

const tagColorMap: Record<string, string> = {
  blue: 'bg-blue-500/8 text-blue-300 border-blue-500/15 hover:bg-blue-500/15',
  emerald: 'bg-emerald-500/8 text-emerald-300 border-emerald-500/15 hover:bg-emerald-500/15',
  violet: 'bg-violet-500/8 text-violet-300 border-violet-500/15 hover:bg-violet-500/15',
  orange: 'bg-orange-500/8 text-orange-300 border-orange-500/15 hover:bg-orange-500/15',
}

export function Skills() {
  return (
    <section id="habilidades" className="border-t border-slate-800/60">
      <div className="section-container">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Competências</p>
        <h2 className="section-title">Habilidades Técnicas</h2>
        <p className="section-subtitle">
          Combinação única de suporte técnico profundo com desenvolvimento de software moderno.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.name} className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl border ${colorMap[cat.color]}`}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-white text-sm">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-default ${tagColorMap[cat.color]}`}
                  >
                    {skill}
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
