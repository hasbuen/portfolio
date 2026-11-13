import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Heart, Copy, Check, MessageSquare } from 'lucide-react'

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'julio.cesar.ovidio.bueno@gmail.com'

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contato" className="border-t border-slate-800/60 relative overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Canais de Comunicação
          </p>
          <h2 className="section-title">Vamos Conversar?</h2>
          <p className="section-subtitle max-w-lg">
            Estou à disposição para contratações, novas oportunidades corporativas, desafios de suporte ou desenvolvimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mb-14">
          {/* E-mail Card */}
          <motion.a
            whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.45)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            href={`mailto:${email}`}
            className="card p-5 flex flex-col justify-between gap-4 group bg-slate-900/70 relative"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 bg-blue-600/15 text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Copiar e-mail"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">E-mail</div>
              <div className="text-xs font-semibold text-slate-200 break-all leading-snug">
                {email}
              </div>
              {copied && (
                <div className="text-[10px] text-emerald-400 font-bold mt-1">Copiado para a área de transferência!</div>
              )}
            </div>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            whileHover={{ y: -4, borderColor: 'rgba(34, 197, 94, 0.45)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            href="https://wa.me/5545999823929"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-5 flex flex-col justify-between gap-4 group bg-slate-900/70"
          >
            <div className="p-2 w-fit bg-emerald-600/15 text-emerald-400 rounded-xl group-hover:scale-110 transition-transform">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">WhatsApp / Telefone</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                (45) 9 9982-3929
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Mensagem direta</div>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            whileHover={{ y: -4, borderColor: 'rgba(14, 165, 233, 0.45)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            href="https://www.linkedin.com/in/julio-cesar-ovidio-bueno/"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-5 flex flex-col justify-between gap-4 group bg-slate-900/70"
          >
            <div className="p-2 w-fit bg-sky-600/15 text-sky-400 rounded-xl group-hover:scale-110 transition-transform">
              <LinkedinIcon size={20} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                in/julio-cesar-ovidio-bueno
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Conexão profissional</div>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            whileHover={{ y: -4, borderColor: 'rgba(148, 163, 184, 0.45)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            href="https://github.com/hasbuen"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-5 flex flex-col justify-between gap-4 group bg-slate-900/70"
          >
            <div className="p-2 w-fit bg-slate-700/30 text-slate-300 rounded-xl group-hover:scale-110 transition-transform">
              <GithubIcon size={20} />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">GitHub</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                github.com/hasbuen
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Repositórios e código</div>
            </div>
          </motion.a>
        </div>

        {/* Rodapé Elegante */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com carinho</span>
            <Heart size={12} className="text-red-500 fill-red-500 inline" />
            <span>em Cascavel, PR — Brasil.</span>
          </p>
          <p className="text-slate-400">
            © {new Date().getFullYear()} · Julio Cesar Ovídio Bueno · Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
