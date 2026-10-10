import { HiStar } from "react-icons/hi";
import { testimonials } from "@/data/data";

export function TestimonialsSection() {
  return (
    <>
      <div className="bg-primary-50 h-max mx-auto px-12 py-28">
        {/* Container Bagian Atas - Menggunakan flex-col dengan gap 12px */}
        <div className="flex flex-col items-center gap-3 text-center max-w-159.5 mx-auto mb-16">
          {/* Label Kecil */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-[#5E3407]"></span>
            <span className="font-label font-bold text-xs tracking-[1.2px] text-[#5E3407] uppercase">
              Suara Komunitas & Mitra
            </span>
            <span className="w-6 h-px bg-[#5E3407]"></span>
          </div>

          {/* Judul Utama */}
          <h2 className="font-headline font-bold text-[40px] leading-12 tracking-[-0.6px] text-primary-150">
            Dipercaya Lebih dari 250+ Pemilik Kedai Kopi
          </h2>

          {/* Deskripsi Teks */}
          <p className="font-body font-normal text-[15px] leading-6 text-[#50453E]">
            Konsistensi rasa sangrai dan komitmen pada kualitas rantai pasok
            adalah alasan utama para pemilik usaha mempercayakan bar kopinya
            pada Kopi Nusa.
          </p>
        </div>

        {/* Container Grid Bawah - Menggunakan grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5F3EF] rounded-2xl p-8 flex flex-col justify-between min-h-85.25 relative"
            >
              {/* Bagian Atas Card (Rating Bintang & Kutipan Teks) */}
              <div>
                {/* Render Bintang Dinamis dari React Icons */}
                <div className="flex gap-1 mb-4 text-[#EEA93C]">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <HiStar key={index} className="w-5 h-5 text-[#F5A623]" />
                  ))}
                </div>

                {/* Teks Kutipan Komunitas */}
                <p className="font-['Plus_Jakarta_Sans'] font-normal text-[15px] leading-6 text-[#50453E] italic">
                  {item.quote}
                </p>
              </div>

              {/* Bagian Bawah Card (Profil Anggota/Mitra) */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#EAE7E0]">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover bg-gray-300"
                />
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] text-primary-150">
                    {item.name}
                  </h4>
                  <p className="font-['Plus_Jakarta_Sans'] font-normal text-[12px] text-primary-10">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Dekorasi Tanda Petik (99) di Pojok Kanan Atas */}
              <span className="absolute top-6 right-8 font-['Playfair_Display'] font-bold text-[48px] text-[#EAE7E0] leading-none select-none">
                99
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
