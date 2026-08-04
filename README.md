# Adipura Archery Community — Website Company Profile

Website satu halaman (company profile) untuk **Adipura Archery Community**, Bandung.
Dibuat dengan **React + Vite** (statis), di-hosting di **Coolify** dengan domain
`adipuraarchery.karyain.co.id`.

## Menjalankan di komputer

```bash
npm install     # sekali saja di awal
npm run dev     # buka http://localhost:5173
npm run build   # membuat versi siap-online (folder dist/)
```

## Cara mengganti LOGO

Ganti file `public/logo.svg` dengan logo asli Adipura Archery.
- Format terbaik: **SVG** (paling tajam). PNG juga bisa (mis. `public/logo.png`) —
  bila pakai PNG, ubah `src="/logo.svg"` menjadi `src="/logo.png"` di
  `src/components/Logo.jsx` dan `index.html`.

## Cara menambah FOTO galeri

1. Taruh foto di folder `public/` (mis. `public/galeri-1.jpg`).
2. Buka `src/data/content.js`, cari bagian `GALERI`, isi `src` dengan nama file:
   ```js
   { src: '/galeri-1.jpg', alt: 'Latihan panahan Adipura Archery' },
   ```
   Foto yang `src`-nya masih `null` akan tampil sebagai penanda sementara.

### Foto latar Hero (bagian paling atas)
Taruh `public/hero.jpg`, lalu di `src/sections/Hero.jsx` ganti nilai
`backgroundImage` menjadi `url("/hero.jpg")`.

## Mengubah teks / kontak

Semua isi tulisan ada di **satu file**: `src/data/content.js`
(nomor WhatsApp, Instagram, alamat, program, prestasi, dll).

> Catatan: **harga** dan **nama pelatih** sengaja tidak ditampilkan sesuai permintaan.
> Nomor WhatsApp yang dipakai: **0821-2966-6670 (Aditya)**.

## Deploy ke Coolify

Proyek ini sudah menyertakan `Dockerfile` + `nginx.conf`, jadi tinggal:
1. Push ke repositori GitHub.
2. Di Coolify: **New Resource → Application → dari GitHub**, pilih repo ini.
3. Build Pack: **Dockerfile**. Port: **80**.
4. Set domain: `adipuraarchery.karyain.co.id` (arahkan DNS A record ke IP VPS).
5. Deploy. Setiap `git push` ke `main` akan otomatis deploy ulang.
