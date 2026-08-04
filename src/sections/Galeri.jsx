import PhotoPlaceholder from '../components/PhotoPlaceholder.jsx'
import { GALERI } from '../data/content.js'

export default function Galeri() {
  return (
    <section id="galeri" className="bg-adipura-cream py-20 sm:py-28">
      <div className="container-app">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Galeri</span>
          <h2 className="section-title">Momen latihan &amp; kejuaraan</h2>
          <p className="mt-4 text-adipura-dark/70">
            Cuplikan kegiatan Adipura Archery Community.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALERI.map((g, i) => (
            <div
              key={i}
              className={`reveal overflow-hidden rounded-2xl shadow-sm ${i === 0 ? 'col-span-2 row-span-2 sm:col-span-2' : ''}`}
            >
              {g.src ? (
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              ) : (
                <PhotoPlaceholder label={g.alt} className={i === 0 ? 'aspect-square sm:aspect-[4/3]' : 'aspect-square'} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
