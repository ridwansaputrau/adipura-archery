import { WhatsAppIcon, InstagramIcon } from '../components/Icons.jsx'
import { HERO, KONTAK, waLink } from '../data/content.js'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-adipura-dark">
      {/* Latar: foto (jika ada) + lapisan gelap. Ganti url("/hero.jpg") dengan foto asli. */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'linear-gradient(120deg,#123A5E,#20242B)' }}
        aria-hidden="true"
      />
      {/* aksen bulatan brand */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-adipura-orange/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-adipura-red/10 blur-3xl" aria-hidden="true" />

      <div className="container-app relative z-10 py-28 text-white">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-adipura-amber backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-adipura-orange" />
            {HERO.badge}
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
            {HERO.judul}
          </h1>

          <p className="mt-4 font-heading text-lg font-semibold text-adipura-amber sm:text-xl">
            “{HERO.tagline}”
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {HERO.deskripsi}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={waLink('cara bergabung latihan panahan')} target="_blank" rel="noopener noreferrer" className="btn-wa">
              <WhatsAppIcon className="h-5 w-5" />
              Hubungi via WhatsApp
            </a>
            <a href={KONTAK.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <InstagramIcon className="h-5 w-5" />
              @{KONTAK.instagram}
            </a>
          </div>
        </div>
      </div>

      {/* indikator scroll */}
      <a
        href="#tentang"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/60 transition hover:text-white"
        aria-label="Gulir ke bawah"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
