import Image from "next/image";

export function AboutHeroSection() {
  return (
    <section
      id="aboutHeroSection"
      className="relative w-full bg-primary-150 text-white py-24 px-12 md:px-24 overflow-hidden h-max flex items-center"
    >
      {/* BACKGROUND IMAGE OVERLAY (Sisi Kiri) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-luminosity">
        <Image
          src="/tentang-bg-image.svg"
          alt="Coffee Roasting Background"
          fill
          priority
          className="object-cover object-left"
        />
        {/* Efek gradasi agar menyatu mulus ke warna solid kanan */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary-150/80 to-primary-150" />
      </div>

      {/* KONTEN UTAMA */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* KIRI: TEKS & TOMBOL */}
        <div className="max-w-145 w-full flex flex-col gap-6">
          {/* Tagline Badge Mini */}
          <div className="inline-flex items-center gap-2 self-start bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
            <svg
              xmlns="http://w3.org"
              className="h-3.5 w-3.5 text-white/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="text-[10px] font-semibold tracking-wider uppercase font-label text-white/90">
              Tentang Kopi Nusa
            </span>
          </div>

          {/* Judul Utama */}
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] font-headline text-white">
            Kisah di Balik Setiap Butir Kopi Nusa
          </h2>

          {/* Deskripsi */}
          <p className="text-[15px] leading-7 text-white/80 font-body font-light">
            Sebuah dedikasi tulus dari dataran tinggi Nusantara. Menghubungkan
            jerih payah para petani tanah air dengan teknik penyangraian
            artisanal presisi untuk secangkir kopi berkarakter murni.
          </p>

          {/* Group Tombol Aksi */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="btn bg-white hover:bg-white/90 text-primary-150 border-none rounded px-6 h-12 text-xs font-bold uppercase tracking-wider font-['Space_Grotesk'] inline-flex items-center gap-2">
              Pelajari Perjalanan Kami
              <svg
                xmlns="http://w3.org"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
            <button className="btn bg-primary-10/30 hover:bg-primary-10/50 text-white border border-white/20 rounded px-6 h-12 text-xs font-bold uppercase tracking-wider font-label">
              Temui Para Pengrajin
            </button>
          </div>
        </div>

        {/* KANAN: GAMBAR UTAMA & FLOATING BADGE */}
        <div className="relative ax-w-125 w-full aspect-4/3 md:aspect-[1.4] lg:aspect-[1.3] rounded-2xl overflow-visible mt-6 lg:mt-0">
          {/* Bingkai Foto Utama */}
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
            <Image
              src="/tentang-hero-foto.svg"
              alt="Pengrajin Kopi Nusa sedang memilah biji kopi"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Badge (Pojok Kiri Bawah) */}
          <div className="absolute -bottom-6 -left-4 md:-left-10 bg-white text-primary-150 p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-70 border border-stone-100 animate-fade-in animate-duration-500">
            <div className="shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center text-primary-10">
              <svg
                xmlns="http://w3.org"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-bold font-label text-primary-150">
                100% Kopi Nusantara
              </span>
              <span className="text-[11px] text-[#50453E] font-body leading-tight">
                Dari 8 kepulauan penghasil kopi terbaik.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
