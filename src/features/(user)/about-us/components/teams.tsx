import { teamData } from "@/data/data";
import Image from "next/image";

export function AboutTeamSection() {
  return (
    <>
      <div className="bg-primary-50 h-max mx-auto px-12 py-28">
        {/* Container Bagian Atas - Menggunakan flex-col dengan gap 12px */}
        <div className="flex flex-col items-center gap-3 text-center mx-auto mb-16">
          {/* Label Kecil */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-[#5E3407]"></span>
            <span className="font-label font-bold text-xs tracking-[1.2px] text-[#5E3407] uppercase">
              PENGGERAK UTAMA
            </span>
            <span className="w-6 h-px bg-[#5E3407]"></span>
          </div>

          {/* Judul Utama */}
          <h2 className="font-headline font-bold text-[40px] leading-12 tracking-[-0.6px] text-primary-150">
            Sosok di Balik Seduhan
          </h2>

          {/* Deskripsi Teks */}
          <p className="font-body font-normal text-[15px] leading-6 text-[#50453E]">
            Kombinasi pengalaman sensory, dedikasi penjelajahan kebun kopi, dan
            sains penyangraian modern.
          </p>
        </div>

        {/* container bagian grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden flex flex-col shadow-sm"
            >
              {/* Container Foto - Ditambahkan relative, w-full, dan aspect-video/aspect-square agar tingginya terbaca */}
              <div className="group relative w-full aspect-4/3 min-h-65">
                <Image
                  src={member.foto}
                  alt={member.name}
                  fill
                  priority={index === 0} // Mengoptimalkan pemuatan gambar pertama
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Tag Badge pojok kanan atas foto */}
                <span className="absolute top-4 right-4 bg-[#5E3407] text-white font-body text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase z-10">
                  {member.tag}
                </span>
              </div>

              {/* Area Konten Teks */}
              <div className="p-8 flex flex-col flex-1 items-start w-full">
                <span className="font-body text-[10px] font-bold text-[#8C847E] tracking-wider uppercase mb-2">
                  {member.role}
                </span>
                <h3 className="font-headline font-medium text-[22px] text-[#1B1C1A] leading-7.5 mb-3">
                  {member.name}
                </h3>
                <p className="font-body font-normal text-[13px] text-[#50453E] leading-[21.1px] mb-6">
                  {member.description}
                </p>

                {/* Footer Bagian Bawah Card */}
                <div className="mt-auto pt-4 border-t border-gray-100 w-full flex justify-between items-center">
                  <span className="font-body text-[12px] text-[#8C847E]">
                    {member.footerText}
                  </span>

                  {/* Grup Dua Ikon Statis */}
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
                      <Image
                        src="/about-team-icon-1.svg"
                        alt="Link Icon"
                        width={16}
                        height={16}
                      />
                    </button>
                    <button className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center">
                      <Image
                        src="/about-team-icon-2.svg"
                        alt="Social Icon"
                        width={16}
                        height={16}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* join us */}
        <div className="w-full bg-primary-150 rounded-[20px] p-12 flex flex-col items-start relative overflow-hidden shadow-lg">
          {/* LAPISAN GRADASI KANAN BAWAH */}
          {/* Menggunakan perpaduan radial-gradient buatan Tailwind (via bg-[radial-gradient]) untuk meniru pendaran cahaya terang/lembut cokelat muda di pojok kanan bawah */}
          <div className="absolute -bottom-48 -right-48 w-150 h-150 rounded-full bg-[radial-gradient(circle,rgba(244,218,207,0.15)_0%,rgba(244,218,207,0.05)_50%,transparent_70%)] pointer-events-none z-0" />

          {/* Konten dibungkus z-10 agar posisinya berada di atas lapisan gradasi pendaran cahaya */}
          <div className="relative z-10 flex flex-col items-start w-full">
            {/* Badge Kemitraan */}
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6">
              {/* Ikon User/Kemitraan kecil */}
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 text-[#F4DACF]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold text-[#F4DACF] tracking-wider uppercase">
                KEMITRAAN & LAB TOUR
              </span>
            </div>

            {/* Judul Utama */}
            <h2 className="font-['Playfair_Display'] font-medium text-[36px] text-white leading-11.5 max-w-2xl mb-4">
              Ingin Berkolaborasi atau Mengunjungi Roastery Kami?
            </h2>

            {/* Deskripsi */}
            <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#F4DACF]/80 leading-5.75 max-w-3xl mb-8">
              Pintu roastery kami di Bandung selalu terbuka bagi Anda yang ingin
              berdiskusi perihal pasokan biji kopi kafe, private cupping
              session, atau sekadar berbagi cerita hangat tentang kopi
              nusantara.
            </p>

            {/* Grup Tombol Aksi */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Tombol Utama: Hubungi Kami Sekarang */}
              <button className="flex items-center gap-2 bg-white text-[#5E3407] font-['Plus_Jakarta_Sans'] text-[12px] font-bold px-6 py-3 rounded-lg hover:bg-[#F4DACF] transition-colors uppercase tracking-wider">
                <svg
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Hubungi Kami Sekarang
              </button>

              {/* Tombol Kedua: Konsultasi B2B */}
              <button className="flex items-center gap-2 bg-white/10 text-white font-['Plus_Jakarta_Sans'] text-[12px] font-bold px-6 py-3 rounded-lg hover:bg-white/20 border border-white/20 transition-colors uppercase tracking-wider">
                <svg
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.948 14.948 0 0 1-6.522-6.523l2.018-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                Konsultasi B2B
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
