import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Download, Search, Filter, Award, Clock, ChevronDown, Sparkles, Check } from 'lucide-react'
import type { Certificate } from '../types'
import certificatesData from '../data/certificates.json'

const certificates = certificatesData as Certificate[]

const ALL_CATEGORIES = ['Todos', ...Array.from(new Set(certificates.map((c) => c.category))).sort()]
const ALL_TYPES = ['Todos', ...Array.from(new Set(certificates.map((c) => c.type))).sort()]

const categoryColors: Record<string, string> = {
  'JavaScript': 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25',
  'HTML & CSS': 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  'Linux': 'bg-green-500/15 text-green-300 border-green-500/25',
  'Git & GitHub': 'bg-slate-500/15 text-slate-300 border-slate-500/25',
  'Lógica de Programação': 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  'Desenvolvimento de Jogos': 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  'Metodologias Ágeis': 'bg-teal-500/15 text-teal-300 border-teal-500/25',
  'Outros': 'bg-slate-500/15 text-slate-300 border-slate-500/25',
}

const typeColors: Record<string, string> = {
  'Bootcamp': 'bg-blue-600/20 text-blue-300 border-blue-500/30 font-bold',
  'Módulo': 'bg-violet-600/20 text-violet-300 border-violet-500/30',
  'Curso': 'bg-sky-600/20 text-sky-300 border-sky-500/30',
  'Projeto': 'bg-emerald-600/20 text-emerald-300 border-emerald-500/30',
  'Mentoria': 'bg-pink-600/20 text-pink-300 border-pink-500/30',
}

function triggerDownloadConfetti() {
  try {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#3b82f6', '#0ea5e9', '#6366f1', '#10b981'],
    })
  } catch {
    // Silently continue if confetti fails
  }
}

function CertCard({ cert }: { cert: Certificate }) {
  const [downloaded, setDownloaded] = useState(false)
  const catColor = categoryColors[cert.category] ?? 'bg-slate-800 text-slate-300 border-slate-700'
  const typeColor = typeColors[cert.type] ?? 'bg-slate-800 text-slate-300 border-slate-700'

  const handleDownload = () => {
    setDownloaded(true)
    triggerDownloadConfetti()
    setTimeout(() => setDownloaded(false), 2500)
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -3, borderColor: 'rgba(59, 130, 246, 0.45)' }}
      className="card p-4 sm:p-5 flex flex-col justify-between gap-3 group bg-slate-900/70"
    >
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors">
              {cert.title}
            </h3>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">{cert.platform}</p>
          </div>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            href={cert.url}
            download={cert.filename}
            onClick={handleDownload}
            className={`shrink-0 p-2 border rounded-xl transition-all duration-200 ${
              downloaded
                ? 'bg-emerald-600/30 border-emerald-500 text-emerald-400'
                : 'bg-slate-800 hover:bg-blue-600/30 border-slate-700 hover:border-blue-500/40 text-slate-300 hover:text-blue-400'
            }`}
            aria-label={`Baixar certificado: ${cert.title}`}
            title="Baixar certificado PDF"
          >
            {downloaded ? <Check size={14} /> : <Download size={14} />}
          </motion.a>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-2">
          <span className={`badge border text-[10px] sm:text-xs ${typeColor}`}>{cert.type}</span>
          <span className={`badge border text-[10px] sm:text-xs ${catColor}`}>{cert.category}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
        <div className="flex items-center gap-1 font-semibold text-slate-300">
          <Clock size={12} className="text-blue-400" />
          <span>{cert.hours}h</span>
        </div>
        <span>{cert.date}</span>
      </div>
    </motion.div>
  )
}

export function Certificates() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [activeType, setActiveType] = useState('Todos')
  const [showFilters, setShowFilters] = useState(false)
  const [displayLimit, setDisplayLimit] = useState(24)

  const totalHours = useMemo(() => certificates.reduce((s, c) => s + c.hours, 0), [])

  const filtered = useMemo(() => {
    return certificates.filter((cert) => {
      const matchSearch =
        !search ||
        cert.title.toLowerCase().includes(search.toLowerCase()) ||
        cert.category.toLowerCase().includes(search.toLowerCase()) ||
        cert.type.toLowerCase().includes(search.toLowerCase())
      const matchCategory = activeCategory === 'Todos' || cert.category === activeCategory
      const matchType = activeType === 'Todos' || cert.type === activeType
      return matchSearch && matchCategory && matchType
    })
  }, [search, activeCategory, activeType])

  const visible = filtered.slice(0, displayLimit)
  const hasMore = filtered.length > displayLimit

  const statsByCategory = useMemo(() => {
    const map: Record<string, { count: number; hours: number }> = {}
    certificates.forEach((c) => {
      if (!map[c.category]) map[c.category] = { count: 0, hours: 0 }
      map[c.category].count++
      map[c.category].hours += c.hours
    })
    return Object.entries(map).sort((a, b) => b[1].hours - a[1].hours)
  }, [])

  return (
    <section id="certificados" className="border-t border-slate-800/60 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            DIO · Potência Tech iFood
          </p>
          <h2 className="section-title">Certificados & Especializações</h2>
          <p className="section-subtitle">
            Catálogo completo com {certificates.length} certificações emitidas pela plataforma DIO — {totalHours} horas de aprendizado prático comprovado.
          </p>
        </motion.div>

        {/* Cards de Métricas por Categoria Principal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {statsByCategory.slice(0, 4).map(([cat, stat]) => {
            const isSelected = activeCategory === cat
            return (
              <motion.div
                key={cat}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(isSelected ? 'Todos' : cat)}
                className={`card p-3.5 sm:p-4 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-600/15 shadow-md shadow-blue-500/20'
                    : 'bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-lg sm:text-2xl font-black text-white">{stat.count}</span>
                  <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-blue-300">
                    {stat.hours}h
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 truncate">{cat}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {isSelected ? 'Filtro ativo' : 'Clique para filtrar'}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Barra de Busca & Botão de Filtro */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar certificados por nome, tecnologia ou módulo..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setDisplayLimit(24)
              }}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowFilters((f) => !f)}
            className={`btn-secondary text-xs sm:text-sm py-2.5 px-4 justify-center sm:justify-start ${
              showFilters || activeCategory !== 'Todos' || activeType !== 'Todos'
                ? 'border-blue-500/50 text-blue-400 bg-blue-600/10'
                : ''
            }`}
          >
            <Filter size={15} />
            <span>Filtros Avançados</span>
            {(activeCategory !== 'Todos' || activeType !== 'Todos') && (
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            )}
          </motion.button>
        </div>

        {/* Painel de Filtros com Animação */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-6"
            >
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Por Categoria:
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {ALL_CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat)
                          setDisplayLimit(24)
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          activeCategory === cat
                            ? 'bg-blue-600 text-white border-blue-500 shadow-sm shadow-blue-500/30'
                            : 'bg-slate-800/80 text-slate-400 border-slate-700/80 hover:text-white hover:border-slate-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Por Tipo de Conteúdo:
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {ALL_TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setActiveType(type)
                          setDisplayLimit(24)
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          activeType === type
                            ? 'bg-blue-600 text-white border-blue-500 shadow-sm shadow-blue-500/30'
                            : 'bg-slate-800/80 text-slate-400 border-slate-700/80 hover:text-white hover:border-slate-600'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {(activeCategory !== 'Todos' || activeType !== 'Todos' || search) && (
                  <div className="pt-2 border-t border-slate-800 flex justify-end">
                    <button
                      onClick={() => {
                        setActiveCategory('Todos')
                        setActiveType('Todos')
                        setSearch('')
                        setDisplayLimit(24)
                      }}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
                    >
                      Redefinir todos os filtros
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Linha de Status de Resultados e Ações em Lote */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
            <Award size={15} className="text-blue-400 shrink-0" />
            <span>
              Exibindo <strong className="text-white">{filtered.length}</strong> de {certificates.length} certificados
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 hidden md:inline">Baixar em ZIP:</span>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/certificados_julio_bueno_parte1.zip"
              download="certificados_julio_bueno_parte1.zip"
              onClick={triggerDownloadConfetti}
              className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
              title="Baixar lote 1 (37 certificados em ZIP)"
            >
              <Download size={13} />
              <span>Lote 1 (ZIP)</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="/certificados_julio_bueno_parte2.zip"
              download="certificados_julio_bueno_parte2.zip"
              onClick={triggerDownloadConfetti}
              className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
              title="Baixar lote 2 (36 certificados em ZIP)"
            >
              <Download size={13} />
              <span>Lote 2 (ZIP)</span>
            </motion.a>
          </div>
        </div>

        {/* Grade de Certificados com Layout Animado */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
            <Award size={44} className="mx-auto mb-3 opacity-30 text-blue-400" />
            <p className="text-sm font-semibold text-slate-400">Nenhum certificado encontrado para esses filtros.</p>
            <button
              onClick={() => {
                setSearch('')
                setActiveCategory('Todos')
                setActiveType('Todos')
              }}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              Limpar busca e filtros
            </button>
          </div>
        ) : (
          <>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              <AnimatePresence>
                {visible.map((cert) => (
                  <CertCard key={cert.id} cert={cert} />
                ))}
              </AnimatePresence>
            </motion.div>

            {hasMore && (
              <div className="text-center mt-10">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setDisplayLimit((l) => l + 24)}
                  className="btn-secondary py-3 px-6 text-xs sm:text-sm font-semibold shadow-md"
                >
                  <ChevronDown size={16} />
                  <span>Carregar mais certificados ({filtered.length - displayLimit} restantes)</span>
                </motion.button>
              </div>
            )}
          </>
        )}

        {/* Banner de Download do Pacote Completo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-blue-900/30 via-slate-900/80 to-sky-900/30 border border-blue-500/30 rounded-2xl shadow-xl shadow-blue-950/20"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs font-semibold">
                <Sparkles size={13} className="text-yellow-400" />
                Download de Todos os Arquivos
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Pacote Completo de Certificados</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Você pode baixar individualmente qualquer um dos {certificates.length} certificados pelos cards acima ou baixar todo o acervo agrupado em dois arquivos compactados (ZIP).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="/certificados_julio_bueno_parte1.zip"
                download="certificados_julio_bueno_parte1.zip"
                onClick={triggerDownloadConfetti}
                className="btn-primary py-3 px-5 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/30 justify-center"
              >
                <Download size={15} />
                <span>Baixar Lote 1 (37 PDFs)</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="/certificados_julio_bueno_parte2.zip"
                download="certificados_julio_bueno_parte2.zip"
                onClick={triggerDownloadConfetti}
                className="btn-primary py-3 px-5 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/30 justify-center"
              >
                <Download size={15} />
                <span>Baixar Lote 2 (36 PDFs)</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
