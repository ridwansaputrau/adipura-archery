import { VISI, MISI } from '../data/content.js'

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="bg-adipura-dark py-20 text-white sm:py-28">
      <div className="container-app">
        <div className="reveal max-w-3xl">
          <span className="section-eyebrow">Visi &amp; Misi</span>
          <h2 className="section-title text-white">Arah dan komitmen kami</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Visi */}
          <div className="reveal rounded-3xl bg-gradient-to-br from-adipura-orange to-amber-500 p-8 text-adipura-dark shadow-xl lg:row-span-2">
            <h3 className="font-heading text-2xl font-extrabold">Visi</h3>
            <p className="mt-4 text-base leading-relaxed text-adipura-dark/90">{VISI}</p>
          </div>

          {/* Misi */}
          {MISI.map((m) => (
            <div
              key={m.judul}
              className="reveal rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-adipura-orange/40 hover:bg-white/10"
            >
              <h4 className="font-heading text-lg font-bold text-adipura-amber">{m.judul}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{m.teks}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
