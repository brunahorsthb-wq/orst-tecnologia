import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const categories = ['Todos', 'Tecnologia', 'Gestão', 'Finanças', 'Produtividade', 'Agronegócio']

const posts = [
  {
    id: 1,
    title: 'Como a tecnologia pode transformar a gestão do seu negócio',
    excerpt: 'Descubra como sistemas inteligentes e bem implementados podem reduzir custos, aumentar a produtividade e melhorar a tomada de decisão na sua empresa.',
    category: 'Tecnologia',
    date: '08 Jun 2025',
    readTime: '5 min',
    slug: 'tecnologia-gestao-negocio',
  },
  {
    id: 2,
    title: 'Planejamento financeiro: por onde começar?',
    excerpt: 'O controle financeiro é a base de qualquer negócio sustentável. Neste artigo, mostramos um passo a passo prático para você organizar as finanças da sua empresa.',
    category: 'Finanças',
    date: '05 Jun 2025',
    readTime: '7 min',
    slug: 'planejamento-financeiro-por-onde-comecar',
  },
  {
    id: 3,
    title: 'Produtividade no campo: como o agronegócio está se digitalizando',
    excerpt: 'O setor rural está em constante transformação digital. Conheça as principais ferramentas e práticas que estão mudando a gestão das propriedades rurais.',
    category: 'Agronegócio',
    date: '01 Jun 2025',
    readTime: '6 min',
    slug: 'produtividade-campo-digitalizacao',
  },
  {
    id: 4,
    title: 'Gestão de tempo: técnicas que realmente funcionam',
    excerpt: 'Com tantas demandas do dia a dia, organizar o tempo se tornou essencial. Apresentamos as melhores técnicas de produtividade para profissionais e empreendedores.',
    category: 'Produtividade',
    date: '28 Mai 2025',
    readTime: '5 min',
    slug: 'gestao-tempo-tecnicas',
  },
  {
    id: 5,
    title: 'SaaS para pequenas empresas: vale a pena investir?',
    excerpt: 'Os sistemas SaaS estão se tornando cada vez mais acessíveis para pequenas e médias empresas. Entenda os benefícios e como escolher a solução certa.',
    category: 'Tecnologia',
    date: '25 Mai 2025',
    readTime: '8 min',
    slug: 'saas-pequenas-empresas',
  },
  {
    id: 6,
    title: 'Processos internos: a chave para escalar seu negócio',
    excerpt: 'Empresas que crescem com sustentabilidade têm processos bem definidos. Veja como mapear, otimizar e documentar os processos da sua empresa.',
    category: 'Gestão',
    date: '20 Mai 2025',
    readTime: '6 min',
    slug: 'processos-internos-escalar-negocio',
  },
]

const categoryColors: Record<string, string> = {
  Tecnologia: 'bg-blue-100 text-blue-700',
  Finanças: 'bg-green-100 text-green-700',
  Gestão: 'bg-purple-100 text-purple-700',
  Produtividade: 'bg-orange-100 text-orange-700',
  Agronegócio: 'bg-lime-100 text-lime-700',
}

export default function Blog() {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-orst-navy to-orst-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
            Blog ORST
          </span>
          <h1 className="text-5xl md:text-6xl font-black mb-6">Conteúdo para crescer</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Tecnologia, gestão, finanças e produtividade. Artigos escritos por especialistas para ajudar seu negócio a crescer.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'Todos'
                    ? 'bg-orst-accent text-white'
                    : 'bg-white text-orst-gray hover:bg-orst-light hover:text-orst-accent border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="card group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                <div className="h-2 bg-gradient-to-r from-orst-accent to-blue-500 rounded-full mb-6" />
                <div className="flex items-center gap-2 mb-4">
                  <Tag size={14} className="text-orst-gray" />
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                </div>
                <h2 className="font-bold text-orst-navy text-lg mb-3 leading-snug group-hover:text-orst-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-orst-gray text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-xs text-orst-gray">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-orst-accent text-xs font-semibold hover:gap-2 transition-all">
                    Ler <ArrowRight size={12} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
