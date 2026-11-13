import { useState, useMemo } from 'react'
import { Download, Search, Filter, Award, Clock, ChevronDown } from 'lucide-react'
import type { Certificate } from '../types'
import certificatesData from '../data/certificates.json'

const certificates = certificatesData as Certificate[]

const ALL_CATEGORIES = ['Todos', ...Array.from(new Set(certificates.map((c) => c.category))).sort()]
const ALL_TYPES = ['Todos', ...Array.from(new Set(certificates.map((c) => c.type))).sort()]

const categoryColors: Record<string, string> = {
  'JavaScript': 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25',
  'HTML & CSS': 'bg-orange-500/15 text-orange-300 border-orange-500/25',
  'Linux': 'bg-green-500/15 text-green-300 border-green-500/25',
  'Git & GitHub': 'bg-gray-500/15 text-gray-300 border-gray-500/25',
  'Lógica de Programação': 'bg-blue-500/15 text-blue-300 border-blue-500/25',
  'Desenvolvimento de Jogos': 'bg-purple-500/15 text-purple-300 border-purple-500/25',
  'Metodologias Ágeis': 'bg-teal-500/15 text-teal-300 border-teal-500/25',
  'Outros': 'bg-slate-500/15 text-slate-300 border-slate-500/25',
}

const typeColors: Record<string, string> = {
  'Bootcamp': 'bg-blue-600/20 text-blue-300 border-blue-500/30',
  'Módulo': 'bg-violet-600/20 text-violet-300 border-violet-500/30',
  'Curso': 'bg-sky-600/20 text-sky-300 border-sky-500/30',
  'Projeto': 'bg-emerald-600/20 text-emerald-300 border-emerald-500/30',
  'Mentoria': 'bg-pink-600/20 text-pink-300 border-pink-500/30',
}

function CertCard({ cert }: { cert: Certificate }) {
  const catColor = categoryColors[cert.category] ?? 'bg-slate-700/40 text-slate-300 border-slate-600/40'
  const typeColor = typeColors[cert.type] ?? 'bg-slate-700/40 text-slate-300 border-slate-600/40'

  return (
    <div className="card p-5 flex flex-col gap-3 group">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-white leading-snug line-clamp-2 group-hover:text-blue-400 transition-colors">
            {cert.title}
          </h3>
          <p className="text-xs text-slate-500 mt-1">{cert.platform}</p>
        </div>
        <a
          href={cert.url}
          download={cert.filename}
          className="shrink-0 p-2 bg-slate-700/50 hover:bg-blue-600/30 border border-slate-600/40 hover:border-blue-500/40 rounded-lg text-slate-400 hover:text-blue-400 transition-all duration-200"
          aria-label={`Baixar certificado: ${cert.title}`}
          title="Baixar certificado"
        >
          <Download size={14} />
        </a>
      </div>

      <div className="flex flex-wrap gap-1.5">
        <span className={`badge border text-xs ${typeColor}`}>{cert.type}</span>
        <span className={`badge border text-xs ${catColor}`}>{cert.category}</span>
      </div>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-1">
          <Clock size={11} />
          <span>{cert.hours}h</span>
        </div>
        <span>{cert.date}</span>
      </div>
    </div>
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

  // Stats summary
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
    <section id="certificados" className="border-t border-slate-800/60">
      <div className="section-container">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">DIO · Potência Tech</p>
        <h2 className="section-title">Certificados</h2>
        <p className="section-subtitle">
          {certificates.length} certificados emitidos pela plataforma DIO — {totalHours}h de aprendizado.
        </p>

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {statsByCategory.slice(0, 4).map(([cat, stat]) => (
            <div
              key={cat}
              className={`card p-4 cursor-pointer transition-all ${
                activeCategory === cat ? 'ring-1 ring-blue-500/50 border-blue-500/30' : ''
              }`}
              onClick={() => setActiveCategory(activeCategory === cat ? 'Todos' : cat)}
            >
              <div className="text-xl font-bold text-white mb-0.5">{stat.count}</div>
              <div className="text-xs text-slate-400 leading-tight mb-1">{cat}</div>
              <div className="text-xs text-slate-600">{stat.hours}h</div>
            </div>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar certificados..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setDisplayLimit(24) }}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/60 border border-slate-700/50 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
            />
          </div>
          <button
            onClick={() => setShowFilters((f) => !f)}
            className={`btn-secondary text-sm ${showFilters ? 'border-blue-500/40 text-blue-400' : ''}`}
          >
            <Filter size={14} />
            Filtros
            {(activeCategory !== 'Todos' || activeType !== 'Todos') && (
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
            )}
          </button>
        </div>

        {/* Filter panels */}
        {showFilters && (
          <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 mb-6 space-y-4">
            {/* Category filter */}
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Categoria</p>
              <div className="flex flex-wrap gap-2">
                {ALL_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setDisplayLimit(24) }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                      activeCategory === cat
                        ? 'bg-blue-600/30 text-blue-300 border-blue-500/40'
                        : 'bg-slate-700/40 text-slate-400 border-slate-600/40 hover:border-slate-500 hover:text-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            {/* Type filter */}
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Tipo</p>
              <div className="flex flex-wrap gap-2">
                {ALL_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => { setActiveType(type); setDisplayLimit(24) }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
                      activeType === type
                        ? 'bg-blue-600/30 text-blue-300 border-blue-500/40'
                        : 'bg-slate-700/40 text-slate-400 border-slate-600/40 hover:border-slate-500 hover:text-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            {/* Reset */}
            {(activeCategory !== 'Todos' || activeType !== 'Todos') && (
              <button
                onClick={() => { setActiveCategory('Todos'); setActiveType('Todos'); setDisplayLimit(24) }}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                Limpar filtros
              </button>
            )}
          </div>
        )}

        {/* Result count & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Award size={14} />
            <span>
              {filtered.length} certificado{filtered.length !== 1 ? 's' : ''}{' '}
              {filtered.length !== certificates.length && `de ${certificates.length}`}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-600 hidden sm:inline mr-1">
              Download em lote:
            </span>
            <a
              href="/certificados_julio_bueno_parte1.zip"
              download="certificados_julio_bueno_parte1.zip"
              className="btn-secondary text-xs py-1.5 px-3"
              title="Baixar Parte 1 (37 certificados)"
            >
              <Download size={13} />
              Parte 1 (ZIP)
            </a>
            <a
              href="/certificados_julio_bueno_parte2.zip"
              download="certificados_julio_bueno_parte2.zip"
              className="btn-secondary text-xs py-1.5 px-3"
              title="Baixar Parte 2 (36 certificados)"
            >
              <Download size={13} />
              Parte 2 (ZIP)
            </a>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <Award size={40} className="mx-auto mb-3 opacity-30" />
            <p>Nenhum certificado encontrado.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visible.map((cert) => (
                <CertCard key={cert.id} cert={cert} />
              ))}
            </div>

            {hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setDisplayLimit((l) => l + 24)}
                  className="btn-secondary"
                >
                  <ChevronDown size={16} />
                  Ver mais ({filtered.length - displayLimit} restantes)
                </button>
              </div>
            )}
          </>
        )}

        {/* Download all section */}
        <div className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-blue-600/15 via-slate-800/80 to-sky-600/15 border border-blue-500/30 rounded-2xl shadow-xl shadow-blue-950/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs font-semibold">
                📦 Pacote Completo Disponível
              </div>
              <h3 className="text-lg font-bold text-white">Todos os Certificados para Download</h3>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                Você pode baixar individualmente qualquer um dos {certificates.length} certificados em PDF utilizando o botão de download presente em cada card acima, ou baixar todos reunidos em um único arquivo ZIP compactado.
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <a
                href="/certificados_julio_bueno_parte1.zip"
                download="certificados_julio_bueno_parte1.zip"
                className="btn-primary py-3 px-5 text-sm font-semibold shadow-lg shadow-blue-600/30"
                title="Baixar lote 1 (37 certificados)"
              >
                <Download size={16} />
                Baixar Lote 1 (ZIP)
              </a>
              <a
                href="/certificados_julio_bueno_parte2.zip"
                download="certificados_julio_bueno_parte2.zip"
                className="btn-primary py-3 px-5 text-sm font-semibold shadow-lg shadow-blue-600/30"
                title="Baixar lote 2 (36 certificados)"
              >
                <Download size={16} />
                Baixar Lote 2 (ZIP)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
