import { motion } from 'framer-motion'
import { SKILL_CATEGORIES } from '../data/portfolio'

const colorMap: Record<string, string> = {
  blue: 'bg-blue-500/15 border-blue-500/30 text-blue-400',
  emerald: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400',
  violet: 'bg-violet-500/15 border-violet-500/30 text-violet-400',
  orange: 'bg-orange-500/15 border-orange-500/30 text-orange-400',
}

const tagColorMap: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-300 border-blue-500/20 hover:border-blue-400 hover:bg-blue-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:border-emerald-400 hover:bg-emerald-500/20',
  violet: 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:border-violet-400 hover:bg-violet-500/20',
  orange: 'bg-orange-500/10 text-orange-300 border-orange-500/20 hover:border-orange-400 hover:bg-orange-500/20',
}

export function Skills() {
  return (
    <section id="habilidades" className="border-t border-slate-800/60 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Stack & Ferramentas
          </p>
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">
            Combinação sólida de suporte técnico profundo, administração de dados e engenharia de software moderna.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="card p-5 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl sm:text-2xl border shadow-inner ${colorMap[cat.color]}`}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{cat.name}</h3>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {cat.skills.length} competências dominadas
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-default select-none shadow-sm ${tagColorMap[cat.color]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
