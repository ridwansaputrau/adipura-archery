import { BowIcon } from './Icons.jsx'

// Penanda foto sementara — dipakai bila foto asli belum dipasang.
// Tampil rapi (gradient + ikon target) sehingga website tetap enak dilihat.
export default function PhotoPlaceholder({ label, className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-adipura-navy via-adipura-dark to-black ${className}`}
      role="img"
      aria-label={label || 'Foto Adipura Archery'}
    >
      {/* aksen bulatan oranye khas brand */}
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-adipura-orange/30 blur-xl" />
      <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-adipura-red/20 blur-xl" />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center text-white/70">
        <BowIcon className="h-10 w-10 text-adipura-orange" />
        <span className="text-xs font-semibold uppercase tracking-widest">{label || 'Adipura Archery'}</span>
        <span className="text-[10px] text-white/40">Foto menyusul</span>
      </div>
    </div>
  )
}
