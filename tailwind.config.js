/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warna diambil dari logo Adipura Archery
        adipura: {
          orange: '#F5A623', // oranye hangat (aksen utama)
          amber: '#FFB84D',
          dark: '#20242B',    // charcoal gelap
          navy: '#123A5E',    // biru logo
          red: '#D6322E',     // merah logo
          cream: '#F6F3EE',   // latar terang lembut
        },
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.25rem',
      },
    },
  },
  plugins: [],
}
