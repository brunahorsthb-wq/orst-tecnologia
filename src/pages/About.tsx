import { Target, Eye, Heart, Users, Zap, Globe } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const values = [
  { icon: Zap, title: 'Inovação', text: 'Buscamos constantemente novas tecnologias e abordagens para criar soluções de alto impacto.' },
  { icon: Heart, title: 'Propósito', text: 'Cada sistema que desenvolvemos tem o objetivo de transformar positivamente a rotina de quem o utiliza.' },
  { icon: Users, title: 'Parceria', text: 'Trabalhamos lado a lado com nossos clientes, entendendo profundamente suas necessidades.' },
  { icon: Globe, title: 'Escalabilidade', text: 'Desenvolvemos soluções preparadas para crescer junto com o seu negócio.' },
]

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-orst-navy to-orst-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
              Sobre a ORST
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Quem somos</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              Somos uma empresa de tecnologia comprometida em desenvolver sistemas inteligentes e prestação de consultoria especializada para impulsionar o crescimento de empresas, produtores e empreendedores.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Nossa História" title="Nascida para transformar" />
              <div className="mt-6 space-y-4 text-orst-gray leading-relaxed">
                <p>
                  A ORST Tecnologia nasceu da visão de que a tecnologia deve ser acessível, intuitiva e verdadeiramente útil para quem precisa gerenciar seu negócio com eficiência.
                </p>
                <p>
                  Com foco em dois pilares — <strong className="text-orst-navy">Tecnologia</strong> e <strong className="text-orst-navy">Consultoria</strong> — a ORST desenvolve plataformas SaaS especializadas e oferece serviços de consultoria para diferentes segmentos de mercado.
                </p>
                <p>
                  Cada produto da ORST possui sua própria identidade visual, domínio e público-alvo, garantindo uma experiência personalizada e focada para cada setor atendido.
                </p>
                <p>
                  Nossa missão é ser o parceiro tecnológico de confiança de empresas e empreendedores que desejam crescer com organização, dados e inteligência.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="card border-l-4 border-orst-accent">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-orst-light rounded-lg flex items-center justify-center">
                    <Target className="text-orst-accent" size={20} />
                  </div>
                  <h3 className="font-bold text-orst-navy text-lg">Missão</h3>
                </div>
                <p className="text-orst-gray">
                  Desenvolver sistemas inteligentes e prestar consultoria especializada que transformam a gestão de empresas, produtores e empreendedores, gerando crescimento com organização e tecnologia.
                </p>
              </div>
              <div className="card border-l-4 border-blue-500">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Eye className="text-blue-600" size={20} />
                  </div>
                  <h3 className="font-bold text-orst-navy text-lg">Visão</h3>
                </div>
                <p className="text-orst-gray">
                  Ser referência nacional em desenvolvimento de plataformas SaaS setoriais e consultoria empresarial, reconhecida pela qualidade, inovação e impacto gerado nos negócios de nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-orst-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeader label="Nossos Valores" title="O que nos move" centered />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card text-center group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-orst-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <v.icon className="text-white" size={26} />
                </div>
                <h3 className="font-bold text-orst-navy text-lg mb-2">{v.title}</h3>
                <p className="text-orst-gray text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-orst-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-4">
              Dois Pilares
            </span>
            <h2 className="text-4xl font-black mb-4">Como atuamos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orst-blue rounded-2xl p-8">
              <div className="w-12 h-12 bg-orst-accent rounded-xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tecnologia</h3>
              <p className="text-blue-200 mb-6">
                Desenvolvemos plataformas SaaS especializadas para diferentes setores do mercado. Cada produto possui identidade única, domínio próprio e foco total no seu segmento.
              </p>
              <ul className="space-y-2 text-blue-200 text-sm">
                {['ORST Café', 'ORST Finanças', 'ORST Planner', 'ORST Beauty', 'ORST Agro', 'ORST Gestão'].map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orst-accent rounded-full" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-orst-blue rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultoria</h3>
              <p className="text-blue-200 mb-6">
                Oferecemos consultoria especializada em diferentes áreas para ajudar empresas e empreendedores a organizar seus processos e alcançar resultados.
              </p>
              <ul className="space-y-2 text-blue-200 text-sm">
                {['Consultoria Financeira', 'Consultoria Empresarial', 'Consultoria para Cafés', 'Consultoria de Produtividade', 'Implantação de Sistemas'].map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
