// =====================================================================
// SEMUA ISI/TEKS WEBSITE ADA DI SINI — mudah diubah tanpa sentuh kode lain.
// Catatan pemilik: HARGA dan NAMA PELATIH sengaja TIDAK ditampilkan
// (menunggu data terbaru). Jangan tambahkan tanpa konfirmasi.
// =====================================================================

// Kontak utama — semua tombol WhatsApp memakai nomor ini (Aditya).
export const KONTAK = {
  nama: 'Aditya',
  waNumber: '6282129666670', // format internasional tanpa "+" untuk wa.me
  waDisplay: '0821-2966-6670',
  instagram: 'adipura.archery',
  instagramUrl: 'https://www.instagram.com/adipura.archery/',
  mapsUrl: 'https://maps.app.goo.gl/TCgQ34TdSzk3dftMA',
  alamat: 'Komplek Bumi Adipura, Cluster Cempaka',
  alamatDetail: 'Kel. Rancabolang, Kec. Gedebage, Kota Bandung, Jawa Barat',
  patokan: 'Samping Polsek Gedebage',
}

// Pesan otomatis saat calon peserta klik tombol WhatsApp.
export const waPesan = (konteks) =>
  `Halo Adipura Archery, saya ingin bertanya soal ${konteks || 'latihan panahan'}. 🏹`

export const waLink = (konteks) =>
  `https://wa.me/${KONTAK.waNumber}?text=${encodeURIComponent(waPesan(konteks))}`

export const HERO = {
  badge: 'Sejak 2020 · Di bawah PERPANI Kota Bandung',
  judul: 'Adipura Archery Community',
  tagline: 'Precision, Focus, and Excellence in Archery',
  deskripsi:
    'Klub & komunitas panahan di Bandung yang membina bakat dari pemula hingga atlet berprestasi — dengan pelatih bersertifikat dan metode berbasis Sport Science.',
}

export const TENTANG = {
  paragraf: [
    'Adipura Archery Community adalah klub dan komunitas olahraga panahan yang berdedikasi untuk mengenalkan, memasyarakatkan, serta membina bakat panahan dari tingkat pemula hingga atlet berprestasi.',
    'Berbasis di kawasan Adipura, Bandung, kami menyediakan fasilitas latihan yang aman, bimbingan pelatih berpengalaman, serta kurikulum bertahap yang mencakup disiplin mental, teknik dasar, hingga persiapan kompetisi resmi.',
    'Kami meyakini panahan adalah olahraga penuh manfaat untuk membentuk fokus, kedisiplinan, dan karakter — terutama bagi generasi muda.',
  ],
  fakta: [
    { angka: '2020', label: 'Berdiri sejak' },
    { angka: 'PERPANI', label: 'Di bawah naungan Kota Bandung' },
    { angka: 'Semua', label: 'Untuk semua usia & kalangan' },
    { angka: 'Sport Science', label: 'Metode latihan berbasis' },
  ],
}

export const VISI =
  'Menjadi klub panahan terdepan yang melahirkan generasi atlet berkarakter, berprestasi nasional, serta menjadikan olahraga panahan dapat dijangkau dan dinikmati oleh seluruh lapisan masyarakat.'

export const MISI = [
  {
    judul: 'Edukasi & Pembinaan',
    teks: 'Mengembangkan potensi pemanah melalui program pelatihan yang terstruktur, aman, dan menyenangkan.',
  },
  {
    judul: 'Pengembangan Karakter',
    teks: 'Menanamkan nilai-nilai fokus, kedisiplinan, ketenangan, dan sportivitas tinggi.',
  },
  {
    judul: 'Prestasi',
    teks: 'Memfasilitasi atlet lokal untuk berlaga di kejuaraan tingkat daerah hingga nasional (Kejurda/Kejurnas).',
  },
  {
    judul: 'Komunitas Inklusif',
    teks: 'Membangun ekosistem panahan yang ramah untuk anak-anak, remaja, dewasa, maupun keluarga.',
  },
]

// Program & Layanan — TANPA harga (sesuai permintaan pemilik).
export const PROGRAM = [
  {
    ikon: 'calendar',
    nama: 'Kelas Reguler',
    deskripsi: 'Pelatihan rutin mingguan untuk mengasah teknik dasar panahan secara konsisten.',
    target: 'Anak-anak, Remaja & Dewasa',
  },
  {
    ikon: 'trophy',
    nama: 'Kelas Prestasi',
    deskripsi: 'Program intensif untuk persiapan turnamen dan pembentukan atlet profesional.',
    target: 'Pemanah Lanjutan / Atlet',
  },
  {
    ikon: 'target',
    nama: 'Private / Fun Archery',
    deskripsi: 'Sesi privat atau rekreasi panahan untuk pemula yang ingin mencoba tanpa komitmen jangka panjang.',
    target: 'Umum / Perorangan / Grup',
  },
  {
    ikon: 'school',
    nama: 'Corporate / School Workshop',
    deskripsi: 'Program edukasi panahan untuk ekstrakurikuler sekolah atau fun event perusahaan.',
    target: 'Sekolah & Perusahaan',
  },
  {
    ikon: 'wrench',
    nama: 'Sewa & Perawatan Alat',
    deskripsi: 'Layanan konsultasi peralatan, penyewaan alat panahan, serta perawatan alat.',
    target: 'Seluruh Anggota Klub',
  },
]

export const DIVISI = [
  {
    nama: 'Standard Nasional',
    deskripsi: 'Kelas ideal untuk pemula dan pembinaan usia dini.',
  },
  {
    nama: 'Barebow',
    deskripsi: 'Teknik panahan murni tanpa alat bantu bidik — melatih intuisi dan ketepatan.',
  },
  {
    nama: 'Recurve Bow',
    deskripsi: 'Divisi olimpiade dengan perlengkapan standar kompetisi.',
  },
  {
    nama: 'Compound Bow',
    deskripsi: 'Divisi panahan modern dengan sistem roda/cam presisi tinggi.',
  },
]

export const KEUNGGULAN = [
  {
    ikon: 'medal',
    judul: 'Pelatih Bersertifikat',
    teks: 'Dibimbing instruktur yang memahami teknik anatomis, keselamatan, dan psikologi tanding.',
  },
  {
    ikon: 'shield',
    judul: 'Lingkungan Kondusif',
    teks: 'Area latihan yang aman, bersih, dan mendukung fokus pemanah.',
  },
  {
    ikon: 'chart',
    judul: 'Jalur Pembinaan Prestasi',
    teks: 'Aktif mendaftarkan dan mendampingi anggota di berbagai ajang kejuaraan resmi.',
  },
  {
    ikon: 'bow',
    judul: 'Peralatan Lengkap',
    teks: 'Menyediakan busur dan busur latihan (training bow) bagi anggota pemula.',
  },
  {
    ikon: 'brain',
    judul: 'Berbasis Sport Science',
    teks: 'Materi Teknik, Fisik, dan Mental sesuai kaidah World Archery.',
  },
  {
    ikon: 'perpani',
    judul: 'Resmi & Terdaftar',
    teks: 'Komunitas resmi di bawah naungan PENGKOT PERPANI Kota Bandung sejak 2020.',
  },
]

// Materi latihan (Teknik/Fisik/Mental) dari company profile.
export const MATERI = [
  {
    judul: 'Teknik',
    teks: 'Menguasai teknik panahan yang tepat dan aman sesuai kaidah World Archery Association.',
  },
  {
    judul: 'Fisik',
    teks: 'Membentuk tubuh yang sehat dan ideal sesuai kaidah kesehatan jasmani.',
  },
  {
    judul: 'Mental',
    teks: 'Menguasai inner & outer game berbasis 9 mental skill dan akhlak mulia.',
  },
]

// Daftar prestasi — DIBERI LABEL TAHUN agar jelas ini pencapaian 2022.
export const PRESTASI_TAHUN = '2022'
export const PRESTASI = [
  'Juara 3 Kualifikasi Piala Gubernur DKI 2022 (Queen Competition)',
  'Juara 2 Eliminasi Piala Gubernur DKI 2022 (Queen Competition)',
  'Juara 2 Kualifikasi Marinir Open 2022',
  'Juara 3 Beregu Mix Marinir Open 2022',
  'Juara 1 Eliminasi Fast Open Pangkoarmada 2022',
  'Juara 3 Kualifikasi Presiden Cup Bogor Open 2022',
  'Juara 3 Beregu Presiden Cup Bogor Open 2022',
  'Juara 1 Kualifikasi Pusdikjas Cimahi 2022',
  'Juara 1 Kualifikasi Liga Bandung 2022',
  'Juara 2 Kualifikasi Liga Bandung 2022',
  'Juara 3 Beregu Liga Bandung 2022',
  'Juara 1 Eliminasi Sukabumi Memanah 2022',
]

// Pertanyaan umum (FAQ). Jawaban berdasarkan fakta di company profile.
// Pertanyaan biaya SENGAJA diarahkan ke WhatsApp (tanpa mencantumkan harga).
export const FAQ = [
  {
    q: 'Apakah pemula boleh ikut latihan?',
    a: 'Tentu! Kami membina dari nol. Ada Kelas Reguler untuk latihan rutin, dan sesi Private / Fun Archery bagi yang ingin mencoba dulu tanpa komitmen jangka panjang.',
  },
  {
    q: 'Apakah harus punya alat panahan sendiri?',
    a: 'Tidak perlu. Kami menyediakan busur dan busur latihan (training bow) untuk anggota pemula, jadi bisa langsung mencoba.',
  },
  {
    q: 'Untuk usia berapa saja?',
    a: 'Terbuka untuk anak-anak, remaja, hingga dewasa. Untuk kesiapan anak, silakan tanyakan langsung ke kami via WhatsApp.',
  },
  {
    q: 'Berapa biaya latihannya?',
    a: 'Biaya menyesuaikan program yang dipilih. Untuk informasi terbaru, silakan chat WhatsApp kami — dibalas dengan ramah.',
  },
  {
    q: 'Bisa untuk ekstrakurikuler sekolah atau acara perusahaan?',
    a: 'Bisa. Kami punya program Corporate / School Workshop untuk ekstrakurikuler panahan sekolah maupun fun event perusahaan.',
  },
  {
    q: 'Di mana lokasi latihannya?',
    a: 'Di Komplek Bumi Adipura, Cluster Cempaka, Rancabolang, Gedebage, Kota Bandung (samping Polsek Gedebage). Lihat peta di bagian Kontak.',
  },
]

// Galeri — daftar foto. Ganti "src" dengan foto asli saat sudah dikirim.
// File diletakkan di folder /public. Untuk sementara pakai penanda (null → placeholder).
export const GALERI = [
  { src: null, alt: 'Latihan panahan Adipura Archery' },
  { src: null, alt: 'Tim Adipura Archery di podium juara' },
  { src: null, alt: 'Sesi latihan anak-anak' },
  { src: null, alt: 'Kelas prestasi Adipura Archery' },
  { src: null, alt: 'Eksibisi Panahan Adipura' },
  { src: null, alt: 'Kegiatan ekstrakurikuler sekolah' },
]
