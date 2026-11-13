import { GraduationCap } from 'lucide-react'
import { EDUCATION } from '../data/portfolio'

export function About() {
  return (
    <section id="sobre" className="border-t border-slate-800/60">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Sobre mim</p>
            <h2 className="section-title">Quem sou eu</h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Analista de suporte com sólida experiência em{' '}
                <span className="text-slate-200 font-medium">Help Desk corporativo</span> e{' '}
                <span className="text-slate-200 font-medium">implantação de sistemas ERP</span>. Ao longo
                de mais de uma década, desenvolvi expertise em diagnóstico e resolução de incidentes
                complexos em infraestrutura, redes e bancos de dados.
              </p>
              <p>
                Minha trajetória passa por empresas como{' '}
                <span className="text-slate-200 font-medium">Rhede Sistemas</span>,{' '}
                <span className="text-slate-200 font-medium">Linx S.A.</span> e{' '}
                <span className="text-slate-200 font-medium">Softpharma</span>, onde aprendi a equilibrar
                atendimento de alta qualidade com soluções técnicas robustas.
              </p>
              <p>
                Paralelamente ao suporte, desenvolvo ferramentas SaaS como o{' '}
                <span className="text-slate-200 font-medium">Acionar</span> e o{' '}
                <span className="text-slate-200 font-medium">Protocord</span>, unindo minha visão
                operacional ao desenvolvimento de software moderno com React, TypeScript, NestJS e
                PostgreSQL.
              </p>
            </div>

            {/* Contact quick links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: '(45) 9 9982-3929', href: 'tel:+5545999823929' },
                { label: 'julio.cesar.ovidio.bueno@gmail.com', href: 'mailto:julio.cesar.ovidio.bueno@gmail.com' },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-mono"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Education + Key facts */}
          <div className="space-y-6">
            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Localização', value: 'Cascavel, PR' },
                { label: 'Disponibilidade', value: 'Imediata' },
                { label: 'Modalidade', value: 'Presencial / Remoto' },
                { label: 'Viagens', value: 'Disponível' },
              ].map((f) => (
                <div key={f.label} className="card p-4">
                  <div className="text-xs text-slate-500 mb-1">{f.label}</div>
                  <div className="text-sm font-semibold text-white">{f.value}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-5 text-slate-300 font-semibold">
                <GraduationCap size={18} className="text-blue-400" />
                Formação Acadêmica
              </div>
              <div className="space-y-5">
                {EDUCATION.map((e) => (
                  <div key={e.institution} className="flex gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-white">{e.institution}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{e.course}</div>
                      <div className="text-xs text-slate-500 italic mt-0.5">{e.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
