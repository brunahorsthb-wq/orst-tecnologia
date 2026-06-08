import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-orst-navy to-orst-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Contato
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Fale com a ORST</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Estamos prontos para ouvir sobre seu projeto e ajudar a transformar sua ideia em realidade.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <SectionHeader label="Entre em contato" title="Vamos conversar?" />
              <p className="text-orst-gray leading-relaxed">
                Tem alguma dúvida, sugestão ou quer saber mais sobre nossas soluções e serviços? Entre em contato e nossa equipe responderá em breve.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-orst-light rounded-lg flex items-center justify-center">
                    <Mail className="text-orst-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-orst-gray font-medium">E-mail</p>
                    <p className="text-orst-navy font-semibold">contato@orst.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-orst-light rounded-lg flex items-center justify-center">
                    <Phone className="text-orst-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-orst-gray font-medium">WhatsApp</p>
                    <p className="text-orst-navy font-semibold">Disponível em breve</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 bg-orst-light rounded-lg flex items-center justify-center">
                    <MapPin className="text-orst-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-orst-gray font-medium">Localização</p>
                    <p className="text-orst-navy font-semibold">Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <div className="card text-center py-16">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={56} />
                  <h3 className="text-2xl font-bold text-orst-navy mb-2">Mensagem enviada!</h3>
                  <p className="text-orst-gray">Obrigado pelo contato. Responderemos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-orst-navy mb-2">Nome *</label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orst-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-orst-navy mb-2">WhatsApp</label>
                      <input
                        type="tel"
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
                    <label className="block text-sm font-semibold text-orst-navy mb-2">Mensagem *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Como podemos ajudar você?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orst-accent resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                    <Send size={18} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
