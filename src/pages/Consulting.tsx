import { useState } from 'react'
import { DollarSign, Building2, Coffee, Clock, Cpu, CheckCircle, Send } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    icon: DollarSign,
    color: 'bg-green-100 text-green-700',
    title: 'Consultoria Financeira',
    description: 'Organize as finanças do seu negócio e tome decisões baseadas em dados reais.',
    items: ['Organização financeira', 'Fluxo de caixa', 'Planejamento financeiro', 'Indicadores de desempenho'],
  },
  {
    icon: Building2,
    color: 'bg-blue-100 text-blue-700',
    title: 'Consultoria Empresarial',
    description: 'Estruture e otimize os processos da sua empresa para crescer com eficiência.',
    items: ['Gestão de processos', 'Controle operacional', 'Estruturação de negócios', 'Planejamento estratégico'],
  },
  {
    icon: Coffee,
    color: 'bg-amber-100 text-amber-700',
    title: 'Consultoria para Cafés e Produtores',
    description: 'Especialistas no setor cafeeiro, do campo à xícara.',
    items: ['Custos de produção', 'Gestão rural', 'Planejamento de safra', 'Implantação do ORST Café'],
  },
  {
    icon: Clock,
    color: 'bg-purple-100 text-purple-700',
    title: 'Consultoria de Produtividade',
    description: 'Organize sua rotina e alcance mais resultados com menos esforço.',
    items: ['Planejamento semanal', 'Gestão do tempo', 'Organização pessoal', 'Utilização do ORST Planner'],
  },
  {
    icon: Cpu,
    color: 'bg-indigo-100 text-indigo-700',
    title: 'Implantação de Sistemas',
    description: 'Acompanhamento completo na adoção de tecnologia no seu negócio.',
    items: ['Diagnóstico', 'Parametrização', 'Treinamento', 'Acompanhamento'],
  },
]

const consultingTypes = [
  'Consultoria Financeira',
  'Consultoria Empresarial',
  'Consultoria para Cafés e Produtores',
  'Consultoria de Produtividade',
  'Implantação de Sistemas',
]

export default function Consulting() {
  const [form, setForm] = useState({ name: '', whatsapp: '', email: '', type: '', objective: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-orst-navy to-orst-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
              Consultoria ORST
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6">Consultoria especializada</h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              Transformamos a gestão do seu negócio com consultoria especializada em finanças, processos, produtividade e implantação de sistemas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeader label="Nossas Especialidades" title="Como podemos ajudar" centered />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-4`}>
                  <s.icon size={24} />
                </div>
                <h3 className="font-bold text-orst-navy text-lg mb-2">{s.title}</h3>
                <p className="text-orst-gray text-sm mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-orst-gray">
                      <CheckCircle className="text-orst-accent shrink-0" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionHeader label="Fale Conosco" title="Solicite sua consultoria" subtitle="Preencha o formulário e entraremos em contato em até 24 horas." centered />
          </div>
          {submitted ? (
            <div className="card text-center py-12">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-orst-navy mb-2">Solicitação enviada!</h3>
              <p className="text-orst-gray">Entraremos em contato em breve pelo WhatsApp ou e-mail informado.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-orst-navy mb-2">Nome *</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orst-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-orst-navy mb-2">WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={form.whatsapp}
                    onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orst-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-orst-navy mb-2">E-mail *</label>
                <input
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orst-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-orst-navy mb-2">Tipo de consultoria *</label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orst-accent bg-white"
                >
                  <option value="">Selecione...</option>
                  {consultingTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-orst-navy mb-2">Objetivo principal *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Descreva brevemente o que você deseja alcançar..."
                  value={form.objective}
                  onChange={(e) => setForm({ ...form, objective: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orst-accent resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                <Send size={18} />
                Solicitar Consultoria
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
