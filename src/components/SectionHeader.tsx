interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionHeader({ label, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <span className="inline-block bg-orst-light text-orst-accent text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          {label}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  )
}
