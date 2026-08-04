// Kumpulan ikon SVG sederhana (tanpa dependency eksternal).
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.84.98h.01a7.94 7.94 0 0 0 5.55-13.56ZM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 5.6 3.09Zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.51.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-1.6-.99 6 6 0 0 1-1.1-1.37c-.12-.2 0-.31.09-.41s.2-.23.3-.35a1.4 1.4 0 0 0 .2-.34.37.37 0 0 0-.02-.35c-.05-.1-.44-1.07-.6-1.46s-.32-.34-.44-.34h-.38a.72.72 0 0 0-.52.24 2.19 2.19 0 0 0-.68 1.63 3.8 3.8 0 0 0 .8 2.02 8.7 8.7 0 0 0 3.34 2.95c.47.2.83.32 1.11.41a2.68 2.68 0 0 0 1.23.08c.37-.06 1.17-.48 1.34-.94s.17-.86.12-.94-.18-.14-.38-.24Z" />
    </svg>
  )
}

export function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MapPinIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// Ikon panah/target sebagai penanda merek.
export function BowIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

const paths = {
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M8 2v4M16 2v4M3 10h18" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5a2 2 0 0 0 0 4h1M16 5h3a2 2 0 0 1 0 4h-1M9 17h6M10 21h4M12 13v4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  school: (
    <>
      <path d="M3 9l9-5 9 5-9 5-9-5Z" />
      <path d="M7 11v5c0 1 2 2 5 2s5-1 5-2v-5M21 9v5" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.4 2.4-2.1-.4-.4-2.1 2.4-2.4Z" />
  ),
  medal: (
    <>
      <circle cx="12" cy="14" r="6" />
      <path d="M9 2h6l-2 6h-2L9 2ZM12 12v1.5M12 16l1.4.9-.5-1.6 1.3-1H12.6L12 13.7l-.6 1.6H9.8l1.3 1-.5 1.6L12 16Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Z" />
      <path d="M9.5 12l1.8 1.8 3.2-3.6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 16l3-4 3 2 4-6" />
    </>
  ),
  bow: (
    <>
      <path d="M5 19c8 0 14-6 14-14" />
      <path d="M5 19l14-14M5 19l3-.6M5 19l.6-3" />
      <path d="M19 5h-3M19 5v3" />
    </>
  ),
  brain: (
    <>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8V15a3 3 0 0 0 4 2.8V4Z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8V15a3 3 0 0 1-4 2.8V4Z" />
    </>
  ),
  perpani: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
    </>
  ),
}

// Ikon generik dipakai lewat nama (misal <Icon name="trophy" />).
export function Icon({ name, className = 'h-6 w-6' }) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      {paths[name] || paths.target}
    </svg>
  )
}
