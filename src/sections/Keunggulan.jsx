import { Icon } from '../components/Icons.jsx'
import { KEUNGGULAN, MATERI } from '../data/content.js'

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="bg-adipura-cream py-20 sm:py-28">
      <div className="container-app">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Keunggulan</span>
          <h2 className="section-title">Mengapa berlatih di Adipura Archery</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {KEUNGGULAN.map((k) => (
            <div key={k.judul} className="reveal flex gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-adipura-navy/5 text-adipura-navy">
                <Icon name={k.ikon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-adipura-dark">{k.judul}</h3>
                <p className="mt-1 text-sm leading-relaxed text-adipura-dark/70">{k.teks}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Materi latihan: Teknik, Fisik, Mental */}
        <div className="reveal mt-14 rounded-3xl bg-adipura-navy p-8 text-white sm:p-10">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="font-heading text-2xl font-extrabold">Materi Latihan Kami</h3>
            <p className="mt-2 text-sm text-white/70">
              Pembinaan menyeluruh sesuai kaidah World Archery Association.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {MATERI.map((m, i) => (
              <div key={m.judul} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-adipura-orange font-heading text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <h4 className="mt-4 font-heading text-lg font-bold text-adipura-amber">{m.judul}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{m.teks}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
