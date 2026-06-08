const terms = [
  ['1. Aceitação dos termos', 'Ao acessar e usar o portal ORST Tecnologia, você concorda em cumprir e estar sujeito aos seguintes termos e condições de uso.'],
  ['2. Uso do site', 'O portal da ORST Tecnologia destina-se exclusivamente a fornecer informações sobre a empresa, seus produtos e serviços. Qualquer uso indevido, fraudulento ou ilegal é estritamente proibido.'],
  ['3. Propriedade intelectual', 'Todo o conteúdo presente neste portal, incluindo textos, imagens, logotipos, marcas e software, é de propriedade exclusiva da ORST Tecnologia e está protegido pelas leis de propriedade intelectual.'],
  ['4. Limitação de responsabilidade', 'A ORST Tecnologia não se responsabiliza por danos diretos ou indiretos resultantes do uso ou impossibilidade de uso deste portal.'],
  ['5. Modificações', 'Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no portal.'],
  ['6. Lei aplicável', 'Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil.'],
]

export default function TermsOfUse() {
  return (
    <section className="pt-40 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <p className="section-label mb-4">Legal</p>
        <h1 className="section-title mb-2">Termos de Uso</h1>
        <p className="font-sans text-ink/40 text-sm mb-16">Última atualização: Junho de 2025</p>
        <div className="space-y-10">
          {terms.map(([title, text]) => (
            <div key={title}>
              <h2 className="font-serif text-2xl font-light text-navy mb-3">{title}</h2>
              <p className="font-sans text-sm text-ink/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
