import { DIVISI } from '../data/content.js'
import { BowIcon } from '../components/Icons.jsx'

export default function Divisi() {
  return (
    <section id="divisi" className="bg-white py-20 sm:py-28">
      <div className="container-app">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Divisi &amp; Kategori</span>
          <h2 className="section-title">Jenis panahan yang kami bina</h2>
          <p className="mt-4 text-adipura-dark/70">
            Sesuai standar nasional (PERPANI) dan internasional (World Archery).
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIVISI.map((d, i) => (
            <div
              key={d.nama}
              className="reveal relative overflow-hidden rounded-3xl border border-black/5 bg-adipura-cream p-7 transition hover:border-adipura-orange/40 hover:shadow-lg"
            >
              <span className="absolute right-4 top-4 font-heading text-4xl font-extrabold text-adipura-orange/15">
                {String(i + 1).padStart(2, '0')}
              </span>
              <BowIcon className="h-8 w-8 text-adipura-orange" />
              <h3 className="mt-4 font-heading text-lg font-bold text-adipura-dark">{d.nama}</h3>
              <p className="mt-2 text-sm leading-relaxed text-adipura-dark/70">{d.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
