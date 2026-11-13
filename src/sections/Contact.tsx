import { Mail, Phone, Heart } from 'lucide-react'

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
  return (
    <section id="contato" className="border-t border-slate-800/60">
      <div className="section-container">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Contato</p>
        <h2 className="section-title">Vamos Conversar?</h2>
        <p className="section-subtitle max-w-lg">
          Estou disponível para novas oportunidades, projetos colaborativos ou apenas uma boa troca de
          ideias sobre tecnologia e suporte.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mb-12">
          {[
            {
              icon: <Mail size={20} />,
              label: 'E-mail',
              value: 'julio.cesar.ovidio.bueno@gmail.com',
              href: 'mailto:julio.cesar.ovidio.bueno@gmail.com',
              color: 'blue',
            },
            {
              icon: <Phone size={20} />,
              label: 'WhatsApp',
              value: '(45) 9 9982-3929',
              href: 'https://wa.me/5545999823929',
              color: 'green',
            },
            {
              icon: <LinkedinIcon size={20} />,
              label: 'LinkedIn',
              value: 'julio-cesar-ovidio-bueno',
              href: 'https://www.linkedin.com/in/julio-cesar-ovidio-bueno/',
              color: 'blue',
            },
            {
              icon: <GithubIcon size={20} />,
              label: 'GitHub',
              value: 'hasbuen',
              href: 'https://github.com/hasbuen',
              color: 'slate',
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card p-5 flex flex-col gap-3 hover:border-blue-500/30 transition-all group hover:-translate-y-1"
            >
              <div className="text-blue-400 group-hover:scale-110 transition-transform">
                {c.icon}
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">{c.label}</div>
                <div className="text-xs font-medium text-slate-300 truncate">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>
            Feito com <Heart size={11} className="inline text-red-500 fill-red-500" /> em Cascavel, PR.
          </p>
          <p>© 2024 · Julio Cesar Ovídio Bueno · Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  )
}
