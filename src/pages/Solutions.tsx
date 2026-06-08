import { ArrowUpRight, ExternalLink } from 'lucide-react'

const products = [
  {
    name: 'ORST Hub',
    tagline: 'Para uso pessoal',
    description: 'Plataforma de gestão pessoal com controle de finanças, planejamento e inteligência artificial. Para quem quer organizar a vida com tecnologia.',
    status: 'available',
    statusLabel: 'Disponível',
    href: 'https://brunahorsthb-wq.github.io/orst-hub/',
    tag: 'B2C',
    accent: 'border-t-[#0d2d4f]',
  },
  {
    name: 'ORST Café',
    tagline: 'Para produtores de café',
    description: 'Sistema de gestão agrícola desenvolvido especialmente para produtores de café, cooperativas e empresas do setor cafeeiro.',
    status: 'available',
    statusLabel: 'Disponível',
    href: 'https://brunahorsthb-wq.github.io/orst-cafe/',
    tag: 'B2B',
    accent: 'border-t-[#c4a882]',
  },
  {
    name: 'ORST Beauty',
    tagline: 'Para salões e estética',
    description: 'Gestão completa para salões de beleza, barbearias, clínicas de estética e profissionais autônomos da área da beleza.',
    status: 'soon',
    statusLabel: 'Em breve',
    href: null,
    tag: 'B2B',
    accent: 'border-t-pink-300',
  },
  {
    name: 'ORST Agro',
    tagline: 'Para produtores rurais',
    description: 'Ferramentas digitais para produtores rurais modernos. Gestão de lavouras, custos, planejamento de safra e relatórios agrícolas.',
    status: 'soon',
    statusLabel: 'Em breve',
    href: null,
    tag: 'B2B',
    accent: 'border-t-[#5a7a5a]',
  },
  {
    name: 'ORST Gestão',
    tagline: 'Para empresas',
    description: 'Plataforma de gestão empresarial integrada para pequenas e médias empresas. Processos, equipes, indicadores e decisões baseadas em dados.',
    status: 'soon',
    statusLabel: 'Em breve',
    href: null,
    tag: 'B2B',
    accent: 'border-t-[#0f3460]',
  },
]

export default function Solutions() {
  return (
    <>
      <section className="pt-40 pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-4">Portfólio</p>
          <h1 className="section-title max-w-2xl mb-6">Plataformas SaaS para cada setor</h1>
          <p className="font-sans text-ink/60 text-lg max-w-2xl leading-relaxed">
            Cada solução ORST é desenvolvida com foco total no seu segmento, com identidade própria, domínio exclusivo e recursos que fazem diferença no dia a dia.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className={`card-base border-t-4 ${p.accent} flex flex-col`}>
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${
                    p.tag === 'B2C' ? 'bg-navy/10 text-navy' : 'bg-warm/10 text-warm-dark'
                  }`}>
                    {p.tag}
                  </span>
                  <span className={`font-sans text-xs font-semibold px-2.5 py-1 rounded-full ${
                    p.status === 'available'
                      ? 'bg-orst-green/10 text-orst-green'
                      : 'bg-warm/10 text-warm-dark'
                  }`}>
                    {p.statusLabel}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-light text-navy mb-1">{p.name}</h2>
                <p className="font-sans text-xs text-warm-dark font-medium mb-4">{p.tagline}</p>
                <p className="font-sans text-sm text-ink/60 leading-relaxed flex-grow mb-8">{p.description}</p>
                <div>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-navy w-full justify-center"
                    >
                      Acessar <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <button disabled className="w-full font-sans text-sm font-semibold py-3.5 border border-cream text-ink/30 rounded-sm cursor-not-allowed">
                      Em breve
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-warm mb-4">Seja o primeiro</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
            Quer saber quando lançaremos?
          </h2>
          <p className="font-sans text-white/60 mb-10">
            Entre em contato e seja um dos primeiros a ter acesso às nossas plataformas.
          </p>
          <a href="/contato" className="btn-primary inline-flex items-center gap-2">
            Entrar em Contato <ExternalLink size={15} />
          </a>
        </div>
      </section>
    </>
  )
}
