import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle2, Phone, Mail } from 'lucide-react'
import { EDUCATION } from '../data/portfolio'

export function About() {
  return (
    <section id="sobre" className="border-t border-slate-800/60 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Coluna Esquerda: Biografia e Visão */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Perfil Profissional
              </p>
              <h2 className="section-title">Sobre Mim</h2>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Atuo como analista de suporte com sólida bagagem em{' '}
                <strong className="text-white font-semibold">Help Desk corporativo</strong> e{' '}
                <strong className="text-white font-semibold">implantação de sistemas ERP</strong>. Ao longo
                de mais de uma década, aperfeiçoei o diagnóstico em tempo real e a resolução de incidentes
                críticos em ambientes produtivos de alta exigência.
              </p>
              <p>
                Minha trajetória inclui empresas de referência como{' '}
                <span className="text-blue-300 font-medium">Rhede Sistemas</span>,{' '}
                <span className="text-blue-300 font-medium">Linx S.A.</span> e{' '}
                <span className="text-blue-300 font-medium">Softpharma</span>, onde consolidei o equilíbrio
                entre atendimento técnico empático ao cliente e precisão na administração de bancos de dados
                e servidores.
              </p>
              <p>
                Além da sustentação de sistemas, desenvolvo soluções internas e produtos SaaS como o{' '}
                <span className="text-white font-medium underline decoration-blue-500/50 underline-offset-4">Acionar</span> e o{' '}
                <span className="text-white font-medium underline decoration-blue-500/50 underline-offset-4">Protocord</span>, aplicando
                tecnologias modernas como React, TypeScript, NestJS e PostgreSQL para automatizar rotinas operacionais.
              </p>
            </div>

            {/* Destaques rápidos */}
            <div className="pt-2 grid sm:grid-cols-2 gap-2.5">
              {[
                'Gestão avançada de incidentes N1/N2/N3',
                'Consultas complexas e modelagem SQL',
                'Automação de processos com scripts',
                'Treinamento e capacitação de usuários',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Contato rápido */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="tel:+5545999823929"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors font-mono"
              >
                <Phone size={13} className="text-blue-400" />
                (45) 9 9982-3929
              </a>
              <a
                href="mailto:julio.cesar.ovidio.bueno@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors font-mono break-all"
              >
                <Mail size={13} className="text-blue-400" />
                julio.cesar.ovidio.bueno@gmail.com
              </a>
            </div>
          </div>

          {/* Coluna Direita: Fatos e Formação */}
          <div className="lg:col-span-5 space-y-6">
            {/* Grid de Fatos Rápidos */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Localização', value: 'Cascavel, PR' },
                { label: 'Disponibilidade', value: 'Imediata' },
                { label: 'Viagens & Mudança', value: 'Disponível' },
                { label: 'Foco de Atuação', value: 'Suporte & ERP' },
              ].map((f, i) => (
                <motion.div
                  key={f.label}
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="card p-3.5 sm:p-4 bg-slate-900/70 border-slate-800"
                >
                  <div className="text-[11px] text-slate-400 font-medium mb-1">{f.label}</div>
                  <div className="text-xs sm:text-sm font-bold text-white">{f.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Formação Acadêmica */}
            <motion.div
              whileHover={{ borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="card p-5 sm:p-6"
            >
              <div className="flex items-center gap-2.5 mb-5 text-white font-bold text-sm sm:text-base border-b border-slate-800 pb-3">
                <div className="p-1.5 bg-blue-600/20 text-blue-400 rounded-lg">
                  <GraduationCap size={18} />
                </div>
                <span>Formação & Educação</span>
              </div>

              <div className="space-y-4">
                {EDUCATION.map((e, index) => (
                  <div key={index} className="flex gap-3 relative group">
                    <div className="mt-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20 shrink-0 group-hover:scale-125 transition-transform" />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        {e.institution}
                      </div>
                      <div className="text-xs text-slate-300 mt-0.5 leading-snug">{e.course}</div>
                      <div className="text-[11px] text-slate-400 italic mt-0.5 font-medium">{e.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
