import { Icon } from '../components/Icons.jsx'
import { PROGRAM, waLink } from '../data/content.js'
import { WhatsAppIcon } from '../components/Icons.jsx'

export default function Program() {
  return (
    <section id="program" className="bg-adipura-cream py-20 sm:py-28">
      <div className="container-app">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Program &amp; Layanan</span>
          <h2 className="section-title">Pilihan program untuk semua kalangan</h2>
          <p className="mt-4 text-adipura-dark/70">
            Dari yang baru mencoba hingga persiapan atlet — pilih program yang paling sesuai dengan kebutuhanmu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAM.map((p) => (
            <article
              key={p.nama}
              className="reveal group flex flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-adipura-orange/10 text-adipura-orange transition group-hover:bg-adipura-orange group-hover:text-white">
                <Icon name={p.ikon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-adipura-dark">{p.nama}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-adipura-dark/70">{p.deskripsi}</p>
              <p className="mt-4 inline-flex w-fit rounded-full bg-adipura-navy/5 px-3 py-1 text-xs font-semibold text-adipura-navy">
                {p.target}
              </p>
            </article>
          ))}

          {/* Kartu ajakan */}
          <article className="reveal flex flex-col justify-center rounded-3xl bg-adipura-navy p-7 text-white shadow-lg">
            <h3 className="font-heading text-xl font-bold">Tertarik ikut latihan?</h3>
            <p className="mt-2 text-sm text-white/75">
              Tanyakan jadwal, lokasi, dan cara bergabung langsung ke kami.
            </p>
            <a
              href={waLink('program latihan panahan dan cara bergabung')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-adipura-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-amber-500"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Tanya via WhatsApp
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
