import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Consultoria', href: '/consultoria' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orst-navy rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <div>
              <span className={`font-bold text-xl ${scrolled ? 'text-orst-navy' : 'text-white'}`}>
                ORST
              </span>
              <span className={`text-sm block leading-none ${scrolled ? 'text-orst-gray' : 'text-blue-200'}`}>
                Tecnologia
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium text-sm transition-colors duration-200 ${
                  location.pathname === link.href
                    ? 'text-orst-accent'
                    : scrolled
                    ? 'text-orst-navy hover:text-orst-accent'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/consultoria" className="btn-primary text-sm py-2 px-5">
              Fale Conosco
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? (
              <X className={scrolled ? 'text-orst-navy' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-orst-navy' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium py-2 ${
                  location.pathname === link.href
                    ? 'text-orst-accent'
                    : 'text-orst-navy hover:text-orst-accent'
                }`}
              >
                {link.label}
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
