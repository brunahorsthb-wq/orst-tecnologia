import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'

const solutions = [
  { label: 'ORST Café', href: '/solucoes' },
  { label: 'ORST Finanças', href: '/solucoes' },
  { label: 'ORST Planner', href: '/solucoes' },
  { label: 'ORST Beauty', href: '/solucoes' },
  { label: 'ORST Agro', href: '/solucoes' },
]

const company = [
  { label: 'Sobre a ORST', href: '/sobre' },
  { label: 'Consultoria', href: '/consultoria' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

const legal = [
  { label: 'Política de Privacidade', href: '/privacidade' },
  { label: 'Termos de Uso', href: '/termos' },
]

export default function Footer() {
  return (
    <footer className="bg-orst-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orst-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <div>
                <span className="font-bold text-xl">ORST</span>
                <span className="text-sm block leading-none text-blue-300">Tecnologia</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Sistemas inteligentes para empresas, produtores e empreendedores.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-orst-blue rounded-lg flex items-center justify-center hover:bg-orst-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-orst-blue rounded-lg flex items-center justify-center hover:bg-orst-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Soluções</h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Empresa</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@orst.com.br" className="flex items-center gap-2 text-blue-200 hover:text-white text-sm transition-colors">
                  <Mail size={16} />
                  contato@orst.com.br
                </a>
              </li>
              <li>
                <a href="https://wa.me/5500000000000" className="flex items-center gap-2 text-blue-200 hover:text-white text-sm transition-colors">
                  <Phone size={16} />
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-3">Legal</h4>
              <ul className="space-y-2">
                {legal.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-orst-blue mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} ORST Tecnologia. Todos os direitos reservados.
          </p>
          <p className="text-blue-400 text-xs">
            Desenvolvido com tecnologia e propósito.
          </p>
        </div>
      </div>
    </footer>
  )
}
