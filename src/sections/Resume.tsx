import { Download, FileText, ExternalLink } from 'lucide-react'

export function Resume() {
  return (
    <section id="curriculo" className="border-t border-slate-800/60">
      <div className="section-container">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Currículo</p>
        <h2 className="section-title">Baixar Currículo</h2>
        <p className="section-subtitle">
          Currículo formatado seguindo padrões ABNT e otimizado para sistemas ATS.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
          {/* Versão Completa */}
          <div className="card p-6 group hover:border-blue-500/40 transition-all">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Versão Completa</h3>
                <p className="text-xs text-slate-500 mt-0.5">2 páginas · PDF · ABNT + ATS</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-5">
              Currículo detalhado com todas as experiências, competências, projetos e disponibilidade.
              Ideal para processos seletivos tradicionais.
            </p>
            <a
              href="/curriculo_julio_cesar_bueno.pdf"
              download
              className="btn-primary w-full justify-center"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>

          {/* Versão Síntese */}
          <div className="card p-6 group hover:border-blue-500/40 transition-all">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Versão Síntese</h3>
                <p className="text-xs text-slate-500 mt-0.5">1 página · PDF · Compacto</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-5">
              Versão condensada em uma página. Perfeita para candidaturas que exigem o formato{' '}
              <em>One-Page Resume</em> ou para plataformas de triagem automatizada.
            </p>
            <a
              href="/curriculo_julio_cesar_bueno_1pagina.pdf"
              download
              className="btn-secondary w-full justify-center"
            >
              <Download size={16} />
              Download PDF (1 página)
            </a>
          </div>
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-8 flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/julio-cesar-ovidio-bueno/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={14} />
            Ver perfil completo no LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
