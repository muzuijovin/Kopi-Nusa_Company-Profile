import { budayaData } from "@/data/data";

export function AboutBudayaSection() {
  return (
    <>
      <div className="bg-primary-100 h-max mx-auto px-12 py-28">
        {/* tulisan atas */}
        <div className="flex flex-col items-start gap-3 mx-auto mb-16">
          {/* Label Kecil */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-[#5E3407]"></span>
            <span className="font-label font-bold text-xs tracking-[1.2px] text-[#5E3407] uppercase">
              PRINSIP & FONDASI
            </span>
            <span className="w-6 h-px bg-[#5E3407]"></span>
          </div>

          {/* Judul Utama */}
          <h2 className="font-headline font-bold text-[40px] leading-12 tracking-[-0.6px] text-primary-150">
            Budaya & Nilai Kerja
          </h2>

          {/* Deskripsi Teks */}
          <p className="font-body font-normal text-[15px] leading-6 text-[#50453E] max-w-md">
            Empat pilar komitmen kami dalam mengolah biji kopi nusantara, mulai
            dari bibit di kebun hingga sajian di meja Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {budayaData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg h-max p-8 flex flex-col items-start"
            >
              {/* Bagian Ikon dengan background kotak soft pink */}
              <div className="bg-[#F4DACF] p-3 rounded-lg mb-6 flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
              </div>

              {/* Judul & Deskripsi */}
              <h3 className="font-headline font-medium text-[22px] text-[#1B1C1A] leading-7.5 mb-3">
                {item.title}
              </h3>
              <p className="font-body font-normal text-[13px] text-[#50453E] leading-[21.1px] mb-8">
                {item.description}
              </p>

              {/* Tombol Teks Link di bagian paling bawah */}
              <button className="mt-auto flex items-center gap-1 font-body text-[10px] font-bold text-[#5E3407] tracking-wider uppercase hover:opacity-80 transition-opacity">
                {item.linkText}
                {/* Ikon Panah Kanan kecil */}
                <svg
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
