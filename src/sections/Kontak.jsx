import { WhatsAppIcon, InstagramIcon, MapPinIcon } from '../components/Icons.jsx'
import { KONTAK, waLink } from '../data/content.js'

export default function Kontak() {
  return (
    <section id="kontak" className="relative overflow-hidden bg-adipura-dark py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-adipura-orange/15 blur-3xl" aria-hidden="true" />
      <div className="container-app relative">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Ajakan */}
          <div className="reveal">
            <span className="section-eyebrow">Hubungi Kami</span>
            <h2 className="section-title text-white">Yuk, mulai latihan panahanmu!</h2>
            <p className="mt-4 max-w-md text-white/75">
              Punya pertanyaan soal jadwal, lokasi, atau cara bergabung? Chat kami langsung —
              dibalas dengan ramah oleh {KONTAK.nama}.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={waLink('jadwal dan cara bergabung latihan panahan')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-adipura-orange/40 hover:bg-white/10"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-adipura-orange text-white">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-white/60">WhatsApp ({KONTAK.nama})</span>
                  <span className="block font-heading text-lg font-bold">{KONTAK.waDisplay}</span>
                </span>
              </a>

              <a
                href={KONTAK.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-adipura-orange/40 hover:bg-white/10"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <InstagramIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-white/60">Instagram</span>
                  <span className="block font-heading text-lg font-bold">@{KONTAK.instagram}</span>
                </span>
              </a>

              <a
                href={KONTAK.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-adipura-orange/40 hover:bg-white/10"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <MapPinIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-white/60">Lokasi Latihan</span>
                  <span className="block font-heading text-base font-bold">{KONTAK.alamat}</span>
                  <span className="block text-xs text-white/60">{KONTAK.alamatDetail}</span>
                </span>
              </a>
            </div>
          </div>

          {/* Peta */}
          <div className="reveal">
            <div className="h-full min-h-[320px] overflow-hidden rounded-3xl border border-white/10 shadow-xl">
              <iframe
                title="Lokasi Adipura Archery — Cluster Cempaka, Rancabolang, Gedebage, Bandung"
                src="https://www.google.com/maps?q=Adipura%20Archery%20Community%20Cluster%20Cempaka%20Rancabolang%20Gedebage%20Bandung&output=embed"
                className="h-full min-h-[320px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-xs text-white/50">
              Patokan: {KONTAK.patokan}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
