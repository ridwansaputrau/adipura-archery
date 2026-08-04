import Logo from '../components/Logo.jsx'
import { InstagramIcon, WhatsAppIcon, MapPinIcon } from '../components/Icons.jsx'
import { KONTAK, waLink } from '../data/content.js'

const TAHUN = 2025

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white/70">
      <div className="container-app">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Klub &amp; komunitas panahan di Bandung sejak 2020, di bawah naungan PERPANI Kota Bandung.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">Navigasi</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li><a className="transition hover:text-adipura-orange" href="#tentang">Tentang</a></li>
              <li><a className="transition hover:text-adipura-orange" href="#program">Program</a></li>
              <li><a className="transition hover:text-adipura-orange" href="#divisi">Divisi</a></li>
              <li><a className="transition hover:text-adipura-orange" href="#keunggulan">Keunggulan</a></li>
              <li><a className="transition hover:text-adipura-orange" href="#prestasi">Prestasi</a></li>
              <li><a className="transition hover:text-adipura-orange" href="#kontak">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-white">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={waLink('latihan panahan')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-adipura-orange">
                  <WhatsAppIcon className="h-4 w-4" /> {KONTAK.waDisplay} ({KONTAK.nama})
                </a>
              </li>
              <li>
                <a href={KONTAK.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-adipura-orange">
                  <InstagramIcon className="h-4 w-4" /> @{KONTAK.instagram}
                </a>
              </li>
              <li>
                <a href={KONTAK.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 transition hover:text-adipura-orange">
                  <MapPinIcon className="h-4 w-4 shrink-0" /> {KONTAK.alamatDetail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {TAHUN} Adipura Archery Community. Seluruh hak cipta dilindungi.</p>
          <p>
            Dibuat oleh{' '}
            <a href="https://karyain.co.id" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-adipura-orange">
              Karyain
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
