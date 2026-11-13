import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Download, FileText, ExternalLink, CheckCircle, Sparkles } from 'lucide-react'

export function Resume() {
  const handleDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#3b82f6', '#0ea5e9', '#6366f1', '#10b981'],
      })
    } catch {
      // Ignore
    }
  }

  return (
    <section id="curriculo" className="border-t border-slate-800/60 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Documento Oficial
          </p>
          <h2 className="section-title">Currículo Profissional</h2>
          <p className="section-subtitle">
            Formatado com rigor tipográfico segundo as normas da ABNT e estruturado em fluxo linear para 100% de pontuação em sistemas ATS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-3xl">
          {/* Versão Completa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.45)' }}
            className="card p-6 flex flex-col justify-between group relative overflow-hidden bg-slate-900/70 border-blue-500/20"
          >
            <div>
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <FileText size={22} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-0.5">
                    <Sparkles size={11} /> Versão Recomendada
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg">Versão Completa (2 Páginas)</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Formato PDF A4 · ABNT & ATS</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                Histórico detalhado de 14 anos de carreira, distribuição equilibrada (50/50), descrição minuciosa das 5 empresas, projetos, stack técnica e disponibilidade.
              </p>

              <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-emerald-400" />
                  <span>Tipografia padrão ABNT (Arial / Helvetica)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-emerald-400" />
                  <span>Links ativos (E-mail, LinkedIn, GitHub)</span>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/curriculo_julio_cesar_bueno.pdf"
              download="curriculo_julio_cesar_bueno.pdf"
              onClick={handleDownload}
              className="btn-primary w-full justify-center py-3 text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/25"
            >
              <Download size={15} />
              <span>Baixar Versão Completa (PDF)</span>
            </motion.a>
          </motion.div>

          {/* Versão Síntese */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.45)' }}
            className="card p-6 flex flex-col justify-between group relative overflow-hidden bg-slate-900/70"
          >
            <div>
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <FileText size={22} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-sky-400 uppercase tracking-wider mb-0.5">
                    One-Page Resume
                  </div>
                  <h3 className="font-bold text-white text-base sm:text-lg">Versão Síntese (1 Página)</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Formato PDF A4 · Página Única</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                Condensado com precisão milimétrica para processos seletivos e plataformas que exigem estritamente currículo de página única com leitura dinâmica.
              </p>

              <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-sky-400" />
                  <span>Compactação sem perda de legibilidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-sky-400" />
                  <span>Ideal para triagens rápidas</span>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/curriculo_julio_cesar_bueno_1pagina.pdf"
              download="curriculo_julio_cesar_bueno_1pagina.pdf"
              onClick={handleDownload}
              className="btn-secondary w-full justify-center py-3 text-xs sm:text-sm font-semibold"
            >
              <Download size={15} />
              <span>Baixar Versão Síntese (1 Pág)</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Link para o LinkedIn */}
        <div className="mt-8">
          <motion.a
            whileHover={{ x: 3 }}
            href="https://www.linkedin.com/in/julio-cesar-ovidio-bueno/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-blue-400 transition-colors font-medium"
          >
            <ExternalLink size={14} />
            <span>Ver perfil e recomendações completas no LinkedIn</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
