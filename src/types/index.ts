export interface NavItem {
  label: string
  href: string
}

export interface Product {
  id: string
  name: string
  description: string
  icon: string
  status: 'active' | 'development' | 'coming-soon'
  color: string
  domain?: string
}

export interface ConsultingService {
  id: string
  title: string
  description: string
  items: string[]
  icon: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  slug: string
}

export interface ContactForm {
  name: string
  email: string
  whatsapp: string
  message: string
}

export interface ConsultingForm {
  name: string
  whatsapp: string
  email: string
  type: string
  objective: string
}
