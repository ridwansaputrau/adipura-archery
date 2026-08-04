import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx'
import { TENTANG } from '../data/content.js'

export default function Tentang() {
  return (
    <section id="tentang" className="bg-adipura-cream py-20 sm:py-28">
      <div className="container-app grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <span className="section-eyebrow">Tentang Kami</span>
          <h2 className="section-title">Membina pemanah, membentuk karakter</h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-adipura-dark/80">
            {TENTANG.paragraf.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4">
            {TENTANG.fakta.map((f) => (
              <div key={f.label} className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <dt className="font-heading text-xl font-extrabold text-adipura-orange">{f.angka}</dt>
                <dd className="mt-1 text-sm text-adipura-dark/70">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal">
          <div className="relative">
            <PhotoPlaceholder
              label="Latihan Adipura Archery"
              className="aspect-[4/5] w-full rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-adipura-orange px-5 py-4 text-white shadow-lg sm:block">
              <p className="font-heading text-2xl font-extrabold leading-none">🏹</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider">Sport Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
