import { WhatsAppIcon } from './Icons.jsx'
import { waLink } from '../data/content.js'

// Tombol WhatsApp mengambang — selalu terlihat, memudahkan calon peserta menghubungi.
export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink('latihan panahan di Adipura Archery')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-heading font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden sm:inline">Chat WhatsApp</span>
    </a>
  )
}
