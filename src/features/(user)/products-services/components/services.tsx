import { specsData, roastLevels, brewingRecommendations } from "@/data/data";

export function ProserServicesSection() {
  return (
    <>
      <div className="max-w-296 mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 md:gap-12 font-['Plus_Jakarta_Sans'] text-[#50453E] my-20">
        {/* KOLOM KIRI: Profil & Radar Grafik */}
        <div className="flex-1 flex flex-col justify-between gap-8">
          <div>
            {/* Badge Atas dengan Icon Kustom */}
            <div className="inline-flex items-center gap-2 bg-[#F4DACF] rounded-full px-3 py-1.5 mb-5">
              <img
                src="/services-icon.svg"
                alt="Services Icon"
                className="w-3.5 h-3.5 object-contain"
              />
              <span className="font-label font-bold text-[10px] leading-3.5 tracking-[0.5px] text-[#725F56]">
                PROFIL SPESIFIKASI SANGRAI
              </span>
            </div>

            {/* Judul Utama */}
            <h2 className="font-headline font-bold text-[28px] leading-9 text-primary-150 mb-4">
              Flores Bajawa Natural Anaerobic
            </h2>

            {/* Deskripsi Produk */}
            <p className="text-[13px] leading-5` text-[#50453E]">
              Diproses dengan fermentasi anaerobik tertutup selama 72 jam
              sebelum dijemur lambat di atas raised beds. Menghasilkan rasa
              manis kental menyerupai cokelat susu dengan aroma harum rempah
              khas tanah Nusa Tenggara.
            </p>
          </div>

          {/* Flavor Radar & Cupping Metrics */}
          <div className="bg-[#FAF8F5] rounded-xl p-6 flex flex-col items-center border border-[#F4DACF]/20">
            <div className="w-full text-left mb-4">
              <span className="font-label font-bold text-[10px] tracking-[0.5px] text-[#725F56]">
                FLAVOR RADAR & CUPPING METRICS
              </span>
            </div>

            {/* SVG Radar Chart */}
            <div className="relative w-[124.8px] h-[118.08px] flex items-center justify-center my-4">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-sm"
              >
                <polygon
                  points="50,10 88,38 73,82 27,82 12,38"
                  fill="none"
                  stroke="#E6DFD9"
                  strokeWidth="1"
                />
                <polygon
                  points="50,25 78,45 67,73 33,73 22,45"
                  fill="none"
                  stroke="#E6DFD9"
                  strokeWidth="1"
                />
                <polygon
                  points="50,40 68,52 61,64 39,64 32,52"
                  fill="none"
                  stroke="#E6DFD9"
                  strokeWidth="1"
                />
                <polygon
                  points="50,15 85,42 68,75 35,78 20,40"
                  fill="#553722"
                  fillOpacity="0.25"
                  stroke="#553722"
                  strokeWidth="2.4"
                />
              </svg>
              <span className="absolute -top-3 font-label text-[9px] font-bold text-[#725F56]">
                Aroma (9.0)
              </span>
              <span className="absolute -right-8 top-1/3 font-label text-[9px] font-bold text-[#725F56]">
                Acidity (7.5)
              </span>
              <span className="absolute -bottom-3 right-4 font-label text-[9px] font-bold text-[#725F56]">
                Body (8.8)
              </span>
              <span className="absolute -bottom-3 left-2 font-label text-[9px] font-bold text-[#725F56]">
                Sweetness (9.2)
              </span>
              <span className="absolute -left-8 top-1/3 font-label text-[9px] font-bold text-[#725F56]">
                Aftertaste (8.6)
              </span>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: Grid Detail Informasi */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Baris 1: Looping Detail Tanam & Proses */}
          <div className="grid grid-cols-3 gap-3">
            {specsData.map((spec, index) => (
              <div
                key={index}
                className="bg-[#FAF8F5] p-3 rounded-xl border border-[#F4DACF]/20"
              >
                <p className="font-label font-bold text-[10px] tracking-[0.5px] text-[#725F56] mb-1">
                  {spec.label}
                </p>
                <p className="text-[13px] font-bold text-primary-150 leading-4.5">
                  {spec.value}
                </p>
                <p className="text-[11px] text-[#725F56]">{spec.subValue}</p>
              </div>
            ))}
          </div>

          {/* Baris 2: Looping Tingkat Sangrai (Roast Level) */}
          <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#F4DACF]/20">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-label font-bold text-[12px] leading-4 tracking-[0.6px] text-primary-150">
                TINGKAT SANGRAI: MEDIUM ROAST
              </h4>
              <span className="text-[11px] text-[#725F56]">
                Development Ratio: <b className="text-primary-150">13.8%</b>
              </span>
            </div>

            <div className="grid grid-cols-5 gap-1 text-[9px] font-bold text-center tracking-[0.3px] text-[#725F56]">
              {roastLevels.map((level, index) => (
                <div key={index}>
                  <div className={`h-2 mb-1.5 ${level.colorClass}`}></div>
                  <span
                    className={
                      level.isActive ? "text-primary-150 font-black" : ""
                    }
                  >
                    {level.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Baris 3: Looping Rekomendasi Seduhan */}
          <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#F4DACF]/20">
            <p className="font-label font-bold text-[10px] tracking-[0.5px] text-[#725F56] mb-4">
              REKOMENDASI SEDUHAN OPTIMAL
            </p>
            <div className="grid grid-cols-3 gap-2">
              {brewingRecommendations.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-base mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-[13px] font-bold text-primary-150 leading-tight">
                      {item.method}
                    </p>
                    <p className="text-[11px] text-[#725F56] mt-0.5">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Baris 4: Kotak Quote Cupping Review */}
          <div className="bg-[#F4DACF]/30 rounded-xl p-4 border border-[#F4DACF]/50 relative flex items-start gap-2">
            <span className="font-serif text-2xl text-primary-150 leading-none select-none">
              “
            </span>
            <div>
              <p className="text-[13px] leading-5 text-[#50453E] italic mb-1.5">
                Flores Bajawa Natural dari Kopi Nusa memiliki konsistensi luar
                biasa. Kadar sweetness brown sugar dan aroma floral bertahan
                stabil hingga tetes terakhir saat dingin.
              </p>
              <p className="font-label text-[10px] font-bold text-[#725F56] tracking-[0.3px]">
                — Rian Pratama, Q-Arabika Grader & Roastery Lab Lead
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
