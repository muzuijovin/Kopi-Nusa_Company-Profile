# ☕ Kopi Nusa — Company Profile

> **Cita rasa Nusantara di setiap seduhan.**
> Website company profile untuk *Kopi Nusa*, roastery kopi artisanal Indonesia. Isinya cerita brand, katalog biji kopi & layanan B2B, profil tim, dan jurnal kopi yang bisa dikelola admin.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-0055FF?logo=framer&logoColor=white)
![Backendless](https://img.shields.io/badge/Backendless-BaaS-553722)

---

## ✨ Fitur Utama

| Halaman | Yang bisa dilakukan |
| --- | --- |
| **Beranda** `/` | Hero dengan parallax, kartu batch kopi, statistik yang menghitung naik, produk unggulan, testimoni, newsletter, dan FAQ |
| **Tentang Kami** `/about-us` | Kisah brand, timeline sejarah 2018–2024, nilai budaya kerja, dan tim inti |
| **Produk & Layanan** `/products-services` | Katalog dengan filter kategori (Single Origin, House Blend, B2B, Pelatihan Barista) dan profil sangrai lengkap dengan radar rasa |
| **Tim Kami** `/teams` | Anggota tim dari **Backendless** dengan filter per divisi |
| **Jurnal** `/blog-list` | Artikel dari **Backendless** dengan pencarian, filter kategori, dan artikel sorotan |
| **Detail Artikel** `/blog-list/[id]` | Halaman baca artikel lengkap |
| **Login / Register** `/login`, `/register` | Akun komunitas dengan validasi form (zod) |
| **Admin** `/admin/login`, `/admin/blog-create` | Admin menulis dan menerbitkan artikel baru, dengan preview foto sampul |

**Standar UI/UX** mengikuti [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill):

- kontras teks ≥ 4.5:1
- area sentuh ≥ 44px
- label form selalu terlihat, error tampil di bawah field
- `aria-label` dan focus ring
- ikon SVG, bukan emoji
- gambar AVIF/WebP yang di-lazy-load
- animasi menghormati *prefers-reduced-motion*

---

## 🛠️ Tech Stack

| Kebutuhan | Library |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) + React 19 |
| Styling | Tailwind CSS 4 + daisyUI 5 |
| Animasi | Framer Motion |
| Data fetching | TanStack Query + Axios |
| Backend | [Backendless](https://backendless.com) (auth & database) |
| Form & validasi | React Hook Form + Zod |
| State | Zustand (persist sesi login) |
| Ikon | Lucide React, React Icons |
| Notifikasi | React Toastify |

---

## 🚀 Menjalankan Project

**Prasyarat:** Node.js 20+ dan npm.

```bash
# 1. clone repo
git clone https://github.com/muzuijovin/Kopi-Nusa_Company-Profile.git
cd Kopi-Nusa_Company-Profile

# 2. install dependency
npm install

# 3. jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

| Script | Fungsi |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Build production |
| `npm run start` | Menjalankan hasil build |
| `npm run lint` | Cek kode dengan ESLint |
| `node scripts/seed-backendless.mjs` | Mengisi data dummy ke Backendless |

> Butuh koneksi internet karena foto diambil dari Unsplash dan data dari Backendless.

---

## 🗄️ Database (Backendless)

Konfigurasi semua app Backendless ada di satu file: [`src/lib/backendless.ts`](src/lib/backendless.ts).

| App | Dipakai untuk |
| --- | --- |
| `userApi` | Login & register akun komunitas |
| `adminApi` | Login admin |
| `dataApi` | Tabel konten `blog` dan `Team` |

**Tabel `blog`**

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `judul` | String | Judul artikel |
| `category` | String | Panduan Menyeduh / Catatan Roasting / Kisah Petani / Industri Kopi |
| `ringkasan` | String | Ringkasan di kartu blog |
| `isiCerita` | String | Isi artikel (paragraf dipisah baris baru) |
| `tagar` | String | Contoh: `#V60 #ManualBrew` |
| `image_url` | String | URL foto sampul |
| `author`, `authorRole`, `authorAvatar` | String | Data penulis |
| `readTime` | Number | Estimasi menit baca |
| `featured` | Boolean | `true` = tampil sebagai sorotan utama |

**Tabel `Team`**

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `fullName` | String | Nama anggota |
| `role` | String | Jabatan |
| `category` | String | ROASTERY / SOURCING / SENSORY / BARISTA / BISNIS |
| `description` | String | Deskripsi singkat |
| `photoUrl` | String | URL foto |
| `sortOrder` | Number | Urutan tampil |

Untuk mengisi atau me-reset data dummy, jalankan `node scripts/seed-backendless.mjs`. Script ini aman dijalankan berulang karena data dengan judul atau nama yang sama akan di-update, bukan diduplikasi.

---

## 📁 Struktur Folder

```
src/
├── api/               # fungsi request ke Backendless (blog, team, auth)
├── app/
│   ├── (user)/        # halaman publik + layout navbar & footer
│   ├── admin/         # login admin & tulis artikel
│   ├── login/, register/
│   ├── globals.css    # design token (warna & font)
│   └── layout.tsx     # root layout, font, providers
├── components/        # navbar, footer, motion, filter-tabs, section-heading, form-field, auth-shell
├── data/data.ts       # konten statis (produk, sejarah, FAQ, testimoni, dll.)
├── features/          # komponen per halaman + hooks mutation
├── hooks/             # useSessionUser (sinkronisasi sesi login)
├── lib/               # konfigurasi Backendless & helper gambar
├── providers/         # React Query + MotionConfig
└── store/             # Zustand auth store
scripts/
└── seed-backendless.mjs
```

---

## 🎨 Design System

**Warna** didefinisikan sebagai token di [`globals.css`](src/app/globals.css), sehingga tidak ada kode hex mentah di komponen:

| Token | Hex | Penggunaan |
| --- | --- | --- |
| `primary-150` | `#553722` | Judul & tombol utama |
| `brand-dark` | `#40291A` | Hover tombol |
| `cocoa` | `#5E3407` | Eyebrow & teks badge |
| `body` | `#50453E` | Paragraf |
| `ink` | `#1B1C1A` | Teks paling gelap |
| `primary-10` | `#6D5A52` | Label / teks sekunder |
| `blush` | `#F4DACF` | Background badge & ikon |
| `primary-50` / `primary-100` | `#FBF9F5` / `#F5F3EF` | Background section |
| `line` | `#EFE5DC` | Border card |

**Font** (dimuat dengan `next/font`):

- Playfair Display untuk judul
- Plus Jakarta Sans untuk teks
- Space Grotesk untuk label

**Animasi "Roast & Pour"** ada di [`src/components/motion.tsx`](src/components/motion.tsx):

| Komponen | Efek |
| --- | --- |
| `Pour` | Konten "dituang" dari bawah (clip-path wipe) |
| `Steep` / `SteepItem` | Card berdiri dari posisi miring 3D dengan spring, bergantian |
| `RoastReveal` | Foto dibuka tirai cokelat lalu sedikit zoom-out |
| `CountUp` | Angka statistik menghitung naik saat terlihat |
| `ScrollProgress` | Progress bar scroll di atas halaman |

**Gambar:** semua foto memakai Unsplash resolusi tinggi lewat `next/image`. Next mengoptimasinya otomatis ke AVIF/WebP sesuai ukuran layar (quality 90), jadi tetap tajam di layar retina.

---

## 🙏 Kredit

- Foto: [Unsplash](https://unsplash.com). Foto anggota tim dan testimoni adalah foto stok dummy.
- Data perusahaan, tim, dan artikel bersifat fiktif untuk keperluan pembelajaran di **Purwadhika**.

Dibuat oleh **Jovin** · © 2026 Kopi Nusa Roastery
