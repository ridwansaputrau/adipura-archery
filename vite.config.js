import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Konfigurasi build statis untuk di-hosting di Coolify (nginx)
export default defineConfig({
  plugins: [react()],
})
