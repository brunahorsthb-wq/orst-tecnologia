import { Coffee, DollarSign, Calendar, Scissors, Wheat, BarChart3, ArrowRight, ExternalLink } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const products = [
  {
    id: 'cafe',
    name: 'ORST Café',
    icon: Coffee,
    description: 'Sistema completo de gestão para cafeterias, cafés especiais e produtores rurais do setor cafeeiro. Controle de estoque, vendas, custos de produção e relatórios gerenciais.',
    color: 'bg-amber-50',
    iconColor: 'bg-amber-100 text-amber-700',
    accentColor: 'border-amber-400',
    domain: 'orstcafe.com.br',
    features: ['Gestão de estoque', 'Controle de vendas', 'Custos de produção', 'Relatórios gerenciais', 'Gestão de safra'],
    status: 'development',
  },
  {
    id: 'financas',
    name: 'ORST Finanças',
    icon: DollarSign,
    description: 'Plataforma de gestão financeira para pessoas físicas e empresas. Controle de receitas, despesas, fluxo de caixa, metas e planejamento financeiro inteligente.',
    color: 'bg-green-50',
    iconColor: 'bg-green-100 text-green-700',
    accentColor: 'border-green-400',
    domain: 'orstfinancas.com.br',
    features: ['Fluxo de caixa', 'Planejamento financeiro', 'Metas e objetivos', 'Relatórios detalhados', 'Alertas inteligentes'],
    status: 'development',
  },
  {
    id: 'planner',
    name: 'ORST Planner',
    icon: Calendar,
    description: 'Sistema de planejamento pessoal e profissional com foco em produtividade, gestão de metas, organização semanal e acompanhamento de resultados.',
    color: 'bg-blue-50',
    iconColor: 'bg-blue-100 text-blue-700',
    accentColor: 'border-blue-400',
    domain: 'orstplanner.com.br',
    features: ['Planejamento semanal', 'Gestão de metas', 'Organização pessoal', 'Acompanhamento de hábitos', 'Relatórios de produtividade'],
    status: 'development',
  },
  {
    id: 'beauty',
    name: 'ORST Beauty',
    icon: Scissors,
    description: 'Gestão completa para salões de beleza, barbearias, clínicas de estética e profissionais autônomos da área da beleza. Agendamentos, clientes e financeiro.',
    color: 'bg-pink-50',
    iconColor: 'bg-pink-100 text-pink-700',
    accentColor: 'border-pink-400',
    domain: 'orstbeauty.com.br',
    features: ['Agendamento online', 'Gestão de clientes', 'Controle financeiro', 'Histórico de serviços', 'Relatórios de desempenho'],
    status: 'development',
  },
  {
    id: 'agro',
    name: 'ORST Agro',
    icon: Wheat,
    description: 'Ferramentas digitais desenvolvidas para produtores rurais modernos. Gestão de lavouras, controle de custos, planejamento de safra e relatórios agrícolas.',
    color: 'bg-lime-50',
    iconColor: 'bg-lime-100 text-lime-700',
    accentColor: 'border-lime-400',
    domain: 'orstagro.com.br',
    features: ['Gestão de lavouras', 'Controle de custos', 'Planejamento de safra', 'Registro de atividades', 'Análise de produtividade'],
    status: 'development',
  },
  {
    id: 'gestao',
    name: 'ORST Gestão',
    icon: BarChart3,
    description: 'Plataforma de gestão empresarial integrada para pequenas e médias empresas. Processos, equipes, indicadores e decisões baseadas em dados.',
    color: 'bg-purple-50',
    iconColor: 'bg-purple-100 text-purple-700',
    accentColor: 'border-purple-400',
    domain: 'orstgestao.com.br',
    features: ['Gestão de processos', 'KPIs e indicadores', 'Gestão de equipes', 'Relatórios executivos', 'Integrações'],
    status: 'development',
  },
]

export default function Solutions() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-orst-navy to-orst-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Nossas Soluções
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Plataformas SaaS ORST</h1>
          <p className="text-blue-100 text-xl max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos sistemas especializados para cada setor de mercado. Cada plataforma possui identidade própria, domínio exclusivo e foco total nas necessidades do seu público.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 ${product.accentColor} hover:shadow-xl transition-shadow duration-300`}>
                <div className={`${product.color} p-8`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${product.iconColor} rounded-2xl flex items-center justify-center`}>
                      <product.icon size={28} />
                    </div>
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1.5 rounded-full">
                      Em Desenvolvimento
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-orst-navy mb-3">{product.name}</h2>
                  <p className="text-orst-gray leading-relaxed">{product.description}</p>
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-orst-navy text-sm uppercase tracking-wider mb-4">Principais Recursos</h3>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-orst-gray text-sm">
                        <ArrowRight className="text-orst-accent shrink-0" size={14} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1.5 text-orst-gray text-sm">
                      <ExternalLink size={14} />
                      <span>{product.domain}</span>
                    </div>
                    <button className="btn-outline text-sm py-2 px-4" disabled>
                      Em Breve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orst-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Quer saber quando lançaremos?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Entre em contato e seja um dos primeiros a ter acesso às nossas plataformas.
          </p>
          <a href="/contato" className="bg-white text-orst-navy font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            Entre em Contato <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </>
  )
}
