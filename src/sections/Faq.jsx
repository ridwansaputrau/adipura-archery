import { useState } from 'react'
import { FAQ, waLink } from '../data/content.js'
import { WhatsAppIcon } from '../components/Icons.jsx'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="reveal rounded-2xl border border-black/5 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-heading text-base font-bold text-adipura-dark">{q}</span>
        <svg
          viewBox="0 0 24 24"
          className={`h-5 w-5 shrink-0 text-adipura-orange transition-transform ${open ? 'rotate-45' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      {open && <p className="px-5 pb-5 text-sm leading-relaxed text-adipura-dark/75">{a}</p>}
    </div>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="container-app">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Tanya Jawab</span>
          <h2 className="section-title">Pertanyaan yang sering ditanyakan</h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3">
          {FAQ.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

        <div className="reveal mx-auto mt-8 max-w-3xl rounded-2xl bg-adipura-cream p-6 text-center">
          <p className="text-adipura-dark/80">Masih ada pertanyaan lain?</p>
          <a
            href={waLink('pertanyaan seputar latihan panahan')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa mt-3"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Tanya langsung via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
