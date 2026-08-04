import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'
import { WhatsAppIcon } from './Icons.jsx'
import { waLink } from '../data/content.js'

const MENU = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Program', href: '#program' },
  { label: 'Divisi', href: '#divisi' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Prestasi', href: '#prestasi' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kontak', href: '#kontak' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-app flex h-16 items-center justify-between">
        <Logo variant={scrolled || open ? 'dark' : 'light'} />

        <nav className="hidden items-center gap-1 lg:flex">
          {MENU.map((m) => (
            <a
              key={m.href}
              href={m.href}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition hover:text-adipura-orange ${
                scrolled ? 'text-adipura-dark' : 'text-white'
              }`}
            >
              {m.label}
            </a>
          ))}
          <a
            href={waLink('latihan panahan')}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-adipura-orange px-4 py-2 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-amber-500"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>

        {/* Tombol menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
          aria-expanded={open}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden ${
            scrolled || open ? 'text-adipura-dark' : 'text-white'
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="container-app flex flex-col py-3">
            {MENU.map((m) => (
              <a
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-semibold text-adipura-dark transition hover:bg-adipura-cream hover:text-adipura-orange"
              >
                {m.label}
              </a>
            ))}
            <a
              href={waLink('latihan panahan')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-adipura-orange px-4 py-3 font-semibold text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
