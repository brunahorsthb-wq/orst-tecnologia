import { Link } from 'react-router-dom'
import { Share2, Globe, Mail } from 'lucide-react'

const col1 = [
  { label: 'ORST Hub', href: '/solucoes' },
  { label: 'ORST Café', href: '/solucoes' },
  { label: 'ORST Beauty', href: '/solucoes' },
  { label: 'ORST Agro', href: '/solucoes' },
  { label: 'ORST Gestão', href: '/solucoes' },
]

const col2 = [
  { label: 'Sobre a ORST', href: '/sobre' },
  { label: 'Consultoria', href: '/consultoria' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

const col3 = [
  { label: 'Política de Privacidade', href: '/privacidade' },
  { label: 'Termos de Uso', href: '/termos' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <div className="font-serif font-semibold text-2xl tracking-wide text-white">ORST</div>
              <div className="font-sans text-[10px] tracking-[0.25em] uppercase text-warm">Tecnologia</div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-sans">
              Sistemas inteligentes para empresas, produtores e empreendedores.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-warm hover:text-warm transition-colors rounded-sm">
                <Share2 size={16} />
              </a>
              <a href="#" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-warm hover:text-warm transition-colors rounded-sm">
                <Globe size={16} />
              </a>
              <a href="mailto:contato@orst.com.br" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-warm hover:text-warm transition-colors rounded-sm">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-warm mb-5">Soluções</h4>
            <ul className="space-y-3">
              {col1.map(i => (
                <li key={i.label}>
                  <Link to={i.href} className="font-sans text-sm text-white/60 hover:text-warm transition-colors">{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-warm mb-5">Empresa</h4>
            <ul className="space-y-3">
              {col2.map(i => (
                <li key={i.label}>
                  <Link to={i.href} className="font-sans text-sm text-white/60 hover:text-warm transition-colors">{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-warm mb-5">Legal</h4>
            <ul className="space-y-3 mb-8">
              {col3.map(i => (
                <li key={i.label}>
                  <Link to={i.href} className="font-sans text-sm text-white/60 hover:text-warm transition-colors">{i.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-warm mb-3">Contato</h4>
            <a href="mailto:contato@orst.com.br" className="font-sans text-sm text-white/60 hover:text-warm transition-colors">
              contato@orst.com.br
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-white/40">
            © {new Date().getFullYear()} ORST Tecnologia. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-white/30">orst.com.br</p>
        </div>
      </div>
    </footer>
  )
}
