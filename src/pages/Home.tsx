import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Coffee, DollarSign, Calendar, Scissors, Wheat, BarChart3, Users, TrendingUp, Shield } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const stats = [
  { value: '5+', label: 'Produtos em Desenvolvimento' },
  { value: '3+', label: 'Áreas de Consultoria' },
  { value: '100%', label: 'Foco em Resultados' },
  { value: '∞', label: 'Potencial de Crescimento' },
]

const products = [
  { name: 'ORST Café', icon: Coffee, description: 'Gestão completa para cafés e produtores rurais.', color: 'bg-amber-50 text-amber-600' },
  { name: 'ORST Finanças', icon: DollarSign, description: 'Controle financeiro pessoal e empresarial.', color: 'bg-green-50 text-green-600' },
  { name: 'ORST Planner', icon: Calendar, description: 'Planejamento, metas e produtividade.', color: 'bg-blue-50 text-blue-600' },
  { name: 'ORST Beauty', icon: Scissors, description: 'Gestão para salões e profissionais da beleza.', color: 'bg-pink-50 text-pink-600' },
  { name: 'ORST Agro', icon: Wheat, description: 'Ferramentas digitais para o agronegócio.', color: 'bg-lime-50 text-lime-600' },
  { name: 'ORST Gestão', icon: BarChart3, description: 'Gestão empresarial integrada.', color: 'bg-purple-50 text-purple-600' },
]

const whyItems = [
  { icon: Shield, title: 'Tecnologia de Ponta', text: 'Sistemas modernos, seguros e escaláveis desenvolvidos com as melhores práticas do mercado.' },
  { icon: Users, title: 'Foco no Cliente', text: 'Cada solução é desenhada pensando nas reais necessidades do seu negócio e setor.' },
  { icon: TrendingUp, title: 'Crescimento Contínuo', text: 'Nossas plataformas evoluem junto com a sua empresa, sempre com novos recursos.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-orst-navy via-orst-blue to-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-white">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-sm font-medium px-4 py-2 rounded-full mb-8">
              Bem-vindo à ORST Tecnologia
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Transformando<br />
              <span className="text-blue-300">ideias</span> em<br />
              soluções digitais.
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
              Desenvolvemos sistemas web, plataformas SaaS e serviços de consultoria para empresas, produtores e profissionais que desejam crescer com organização, tecnologia e resultados.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/solucoes" className="btn-primary text-lg py-4 px-8">
                Conhecer Soluções <ArrowRight size={20} />
              </Link>
              <Link to="/consultoria" className="btn-secondary text-lg py-4 px-8">
                Solicitar Consultoria
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black text-orst-accent mb-2">{stat.value}</div>
                <div className="text-orst-gray text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeader
              label="Nossas Soluções"
              title="Tecnologia para cada setor"
              subtitle="Desenvolvemos plataformas SaaS especializadas para diferentes segmentos de mercado, cada uma com identidade e recursos próprios."
              centered
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center mb-4`}>
                  <p.icon size={24} />
                </div>
                <h3 className="font-bold text-orst-navy text-lg mb-2">{p.name}</h3>
                <p className="text-orst-gray text-sm mb-4">{p.description}</p>
                <span className="inline-block bg-yellow-50 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Em Desenvolvimento
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/solucoes" className="btn-outline">
              Ver Todas as Soluções <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why ORST */}
      <section className="py-24 bg-orst-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Por que escolher a ORST?"
                title="Inovação com propósito e resultado"
                subtitle="Unimos tecnologia de ponta com profundo entendimento de cada setor para entregar soluções que realmente funcionam."
              />
              <ul className="mt-8 space-y-4">
                {[
                  'Sistemas desenvolvidos com React e tecnologias modernas',
                  'Cada produto tem identidade e domínio próprios',
                  'Suporte e consultoria especializada',
                  'Foco total em usabilidade e experiência do usuário',
                  'Estrutura escalável para crescer com seu negócio',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="text-orst-accent mt-0.5 shrink-0" size={20} />
                    <span className="text-orst-gray">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/sobre" className="btn-primary">
                  Conhecer a ORST <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {whyItems.map((item) => (
                <div key={item.title} className="card flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orst-accent rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-orst-navy mb-1">{item.title}</h3>
                    <p className="text-orst-gray text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consulting CTA */}
      <section className="py-24 bg-gradient-to-r from-orst-navy to-orst-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Consultoria ORST
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-blue-100 text-xl mb-10 leading-relaxed">
            Nossa equipe de consultoria está pronta para ajudar você a organizar, crescer e alcançar resultados com estratégia e tecnologia.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/consultoria" className="bg-white text-orst-navy font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Solicitar Consultoria <ArrowRight size={20} />
            </Link>
            <Link to="/contato" className="btn-secondary text-lg py-4 px-8">
              Falar Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
