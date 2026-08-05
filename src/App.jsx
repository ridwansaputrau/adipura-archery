import Navbar from './components/Navbar.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Hero from './sections/Hero.jsx'
import Tentang from './sections/Tentang.jsx'
import VisiMisi from './sections/VisiMisi.jsx'
import Program from './sections/Program.jsx'
import Divisi from './sections/Divisi.jsx'
import Keunggulan from './sections/Keunggulan.jsx'
import Prestasi from './sections/Prestasi.jsx'
import Galeri from './sections/Galeri.jsx'
import Faq from './sections/Faq.jsx'
import Kontak from './sections/Kontak.jsx'
import Footer from './sections/Footer.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tentang />
        <VisiMisi />
        <Program />
        <Divisi />
        <Keunggulan />
        <Prestasi />
        <Galeri />
        <Faq />
        <Kontak />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
