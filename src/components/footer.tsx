import {
  FaInstagram,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaHandshake,
} from "react-icons/fa";

export function FooterSection() {
  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#D4C3BA]/40 px-5 py-10">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* BAGIAN ATAS: GRID KONTEN UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* KOLOM 1: BRAND LOGO & DESKRIPSI */}
          <div className="flex flex-col gap-4">
            {/* Logo & Nama Brand */}
            <div className="flex items-center gap-3">
              <img
                src="/navbar-kopi-nusa-logo.svg"
                alt="Kopi Nusa Logo"
                className="w-7.5 h-7.5 object-contain"
              />
              <h2 className="font-headline font-bold text-[22px] leading-7.5 tracking-[-0.55px] text-primary-150">
                Kopi Nusa
              </h2>
            </div>
            {/* Deskripsi */}
            <p className="font-body font-normal text-[13px] leading-[21.1px] text-[#50453E] max-w-94.5">
              Roastery kopi artisanal Nusantara yang memadukan dedikasi pada
              single-origin nusantara, relasi langsung dengan petani lokal, dan
              proses sangrai presisi untuk menghadirkan karakter rasa terbaik
              bumi Indonesia ke cangkir Anda.
            </p>
            {/* Ikon Sosial Media */}
            <div className="flex items-center gap-3 mt-2 text-[#50453E]">
              <a
                href="#"
                className="hover:text-primary-150 transition-colors p-1.5 bg-[#F5F3EF] rounded-md"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-primary-150 transition-colors p-1.5 bg-[#F5F3EF] rounded-md"
              >
                <FaGlobe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="hover:text-primary-150 transition-colors p-1.5 bg-[#F5F3EF] rounded-md"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* KOLOM 2: NAVIGASI */}
          <div className="flex flex-col gap-4">
            <h4 className="font-label font-bold text-[14px] leading-5 tracking-[0.7px] text-primary-150 uppercase">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-2.5 font-body font-normal text-[13px] text-[#50453E]">
              <li>
                <a
                  href="/"
                  className="hover:text-primary-150 transition-colors hover:underline"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="hover:text-primary-150 transition-colors hover:underline"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="/products-services"
                  className="hover:text-primary-150 transition-colors hover:underline"
                >
                  Layanan & Produk
                </a>
              </li>
              <li>
                <a
                  href="/teams"
                  className="hover:text-primary-150 transition-colors hover:underline"
                >
                  Tim Sangrai & Barista
                </a>
              </li>
              <li>
                <a
                  href="/blog-list"
                  className="hover:text-primary-150 transition-colors hover:underline"
                >
                  Jurnal & Cerita Kopi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-150 transition-colors hover:underline"
                >
                  Publikasi Artikel
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: FASILITAS ROASTERY */}
          <div className="flex flex-col gap-4">
            <h4 className="font-label font-bold text-[14px] leading-5 tracking-[0.7px] text-primary-150 uppercase">
              Fasilitas Roastery
            </h4>
            <div className="flex flex-col gap-3 font-body text-[13px] text-[#50453E]">
              <div>
                <p className="font-semibold text-[#1B1C1A] leading-5">
                  Roastery & Lab Bandung:
                </p>
                <p className="text-gray-500 mt-0.5">
                  Jl. Riau No. 128, Cihapit, Bandung, Jawa Barat
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1B1C1A] leading-5">
                  Creative Space & Bar Jakarta:
                </p>
                <p className="text-gray-500 mt-0.5">
                  Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#1B1C1A] leading-5">
                  Jam Operasional:
                </p>
                <p className="text-gray-500 mt-0.5">
                  Senin - Minggu: 07.30 - 21.00 WIB
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM 4: KONTAK & KERJASAMA */}
          <div className="flex flex-col gap-4">
            <h4 className="font-label font-bold text-[14px] leading-5 tracking-[0.7px] text-primary-150 uppercase">
              Kontak & Kerjasama
            </h4>
            <div className="flex flex-col gap-3 font-body text-[13px] text-[#50453E]">
              <a
                href="mailto:halo@kopinusa.id"
                className="flex items-center gap-2 hover:text-primary-150 transition-colors hover:underline"
              >
                <FaEnvelope className="w-3.5 h-3.5 text-primary-150" />
                <span>halo@kopinusa.id</span>
              </a>
              <a
                href="tel:02158902341"
                className="flex items-center gap-2 hover:text-primary-150 transition-colors hover:underline"
              >
                <FaPhoneAlt className="w-3.5 h-3.5 text-primary-150" />
                <span>(021) 5890 2341</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-primary-150 transition-colors hover:underline"
              >
                <FaHandshake className="w-3.5 h-3.5 text-primary-150" />
                <span>Kemitraan Kafe & B2B Roasting</span>
              </a>
            </div>
          </div>
        </div>

        {/* BAGIAN BAWAH: HAK CIPTA & SLOGAN */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-100 font-body text-[12px] text-gray-400">
          <p>© 2026 Kopi Nusa Roastery. Seluruh hak cipta dilindungi.</p>
          <p className="italic font-medium text-[#50453E]/80 mt-2 sm:mt-0">
            Cita Rasa Nusantara di Setiap Seduhan
          </p>
        </div>
      </div>
    </footer>
  );
}
