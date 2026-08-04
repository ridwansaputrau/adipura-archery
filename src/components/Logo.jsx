// Menampilkan logo (dari /public/logo.svg) + nama klub.
// Ganti /public/logo.svg dengan logo asli — komponen ini otomatis ikut.
export default function Logo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-adipura-dark'
  const subColor = variant === 'light' ? 'text-white/70' : 'text-adipura-navy/70'
  return (
    <a href="#hero" className={`group flex items-center gap-3 ${className}`} aria-label="Adipura Archery — beranda">
      <img
        src="/logo.svg"
        alt="Logo Adipura Archery"
        className="h-11 w-11 shrink-0 transition group-hover:scale-105"
        width="44"
        height="44"
      />
      <span className="leading-tight">
        <span className={`block font-heading text-base font-extrabold tracking-tight ${textColor}`}>
          Adipura Archery
        </span>
        <span className={`block text-[11px] font-semibold uppercase tracking-[0.18em] ${subColor}`}>
          Community · Bandung
        </span>
      </span>
    </a>
  )
}
