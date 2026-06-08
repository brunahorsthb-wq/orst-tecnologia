import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Consulting from './pages/Consulting'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="solucoes" element={<Solutions />} />
        <Route path="consultoria" element={<Consulting />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contato" element={<Contact />} />
        <Route path="privacidade" element={<PrivacyPolicy />} />
        <Route path="termos" element={<TermsOfUse />} />
      </Route>
    </Routes>
  )
}
