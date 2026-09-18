# PicoBlog

Platform microblogging berbasis Markdown yang cepat dan modern.

## Gambaran Umum

PicoBlog adalah platform blogging ringan yang dirancang untuk penulis yang ingin fokus pada konten tanpa ribet mengatur infrastruktur. Dengan PicoBlog, Anda cukup menulis dalam format Markdown, dan platform akan menangani sisanya — dari tampilan, performa, hingga SEO.

## Fitur Utama

### Markdown Native
Tulis postingan Anda dalam Markdown murni. PicoBlog memproses Markdown saat build time untuk performa maksimal, dengan dukungan untuk frontmatter, blok kode, dan math.

### Blazing Fast
Berbasis Next.js App Router dan static generation, blog Anda akan load secara instan. Skor 100 di Lighthouse tersedia sejak awal.

### Premium Design
Tidak perlu repot mengatur CSS. PicoBlog hadir dengan komponen yang telah dirancang dengan indah, mode gelap, dan animasi halus.

## Teknologi

PicoBlog dibangun dengan teknologi modern:

- **Next.js 16** — Framework React dengan App Router untuk performa dan developer experience terbaik
- **React 19** — Library UI terbaru dengan fitur hooks dan concurrent rendering
- **TypeScript** — Type safety untuk kode yang lebih robust
- **CSS Modules** — Styling scoped untuk komponen yang modular dan maintainable

## Cara Memulai

### Instalasi

```bash
npm install
```

### Development

Jalankan server development:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### Build

Buat build untuk production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Struktur Proyek

```
picoblog/
├── src/
│   ├── app/              # App Router (pages & layouts)
│   │   ├── page.tsx      # Halaman utama (landing page)
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   └── components/       # Komponen React
│       ├── Header.tsx    # Navigasi header
│       ├── Hero.tsx      # Hero section
│       ├── Features.tsx  # Section fitur
│       └── Footer.tsx    # Footer
├── public/              # Static assets
├── next.config.ts       # Konfigurasi Next.js
├── tsconfig.json        # Konfigurasi TypeScript
└── package.json         # Dependencies & scripts
```

## Desain UI

Tema visual futuristik dengan:
- Gradien teks dinamis
- Glassmorphism panels
- Animasi fade-in dan floating effects
- Dark mode support
- Responsive design

##Lisensi

MIT License
