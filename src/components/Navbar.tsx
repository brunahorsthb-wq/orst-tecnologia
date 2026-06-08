import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Consultoria', href: '/consultoria' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const isLight = !scrolled && location.pathname === '/'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-cream' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none">
            <span className={`font-serif font-semibold text-2xl tracking-wide transition-colors ${isLight ? 'text-white' : 'text-navy'}`}>
              ORST
            </span>
            <span className={`font-sans text-[10px] tracking-[0.25em] uppercase transition-colors ${isLight ? 'text-warm' : 'text-warm-dark'}`}>
              Tecnologia
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`font-sans text-sm font-medium transition-colors duration-200 ${
                  location.pathname === l.href
                    ? 'text-warm'
                    : isLight
                    ? 'text-white/80 hover:text-white'
                    : 'text-ink/70 hover:text-navy'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/consultoria" className="btn-primary ml-4">
              Fale Conosco
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            {open
              ? <X size={22} className={isLight ? 'text-white' : 'text-navy'} />
              : <Menu size={22} className={isLight ? 'text-white' : 'text-navy'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-cream">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`font-sans text-sm font-medium ${location.pathname === l.href ? 'text-warm' : 'text-ink/70'}`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/consultoria" className="btn-primary justify-center mt-2">
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
