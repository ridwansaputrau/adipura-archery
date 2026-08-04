import { PRESTASI, PRESTASI_TAHUN } from '../data/content.js'

export default function Prestasi() {
  return (
    <section id="prestasi" className="bg-white py-20 sm:py-28">
      <div className="container-app">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Prestasi</span>
          <h2 className="section-title">Torehan prestasi tim kami</h2>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-adipura-orange/10 px-4 py-1.5 text-sm font-semibold text-adipura-orange">
            Pencapaian Tahun {PRESTASI_TAHUN}
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {PRESTASI.map((p, i) => (
            <li
              key={i}
              className="reveal flex items-start gap-3 rounded-xl border border-black/5 bg-adipura-cream px-4 py-3"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-adipura-orange text-xs font-bold text-white">
                🏆
              </span>
              <span className="text-sm font-medium leading-snug text-adipura-dark/85">{p}</span>
            </li>
          ))}
        </ul>

        <p className="reveal mx-auto mt-8 max-w-2xl text-center text-xs text-adipura-dark/50">
          Daftar prestasi di atas merupakan pencapaian tahun {PRESTASI_TAHUN}. Prestasi terbaru akan diperbarui.
        </p>
      </div>
    </section>
  )
}
