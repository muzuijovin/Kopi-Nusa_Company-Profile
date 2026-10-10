import { historyData } from "@/data/data";

export function AboutHistorySection() {
  return (
    <>
      <div className="bg-primary-50 h-max mx-auto px-12 py-28">
        {/* Container Bagian Atas - Menggunakan flex-col dengan gap 12px */}
        <div className="flex flex-col items-center gap-3 text-center mx-auto mb-16">
          {/* Label Kecil */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-[#5E3407]"></span>
            <span className="font-label font-bold text-xs tracking-[1.2px] text-[#5E3407] uppercase">
              LANGKAH DEMI LANGKAH
            </span>
            <span className="w-6 h-px bg-[#5E3407]"></span>
          </div>

          {/* Judul Utama */}
          <h2 className="font-headline font-bold text-[40px] leading-12 tracking-[-0.6px] text-primary-150">
            Sejarah & Jejak Perjalanan
          </h2>

          {/* Deskripsi Teks */}
          <p className="font-body font-normal text-[15px] leading-6 text-[#50453E]">
            Dari garasi sederhana hingga menjadi wadah kolaborasi pecinta kopi
            dan komunitas petani di pelosok tanah air.
          </p>
        </div>

        {/* container grid history */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg h-max p-8 flex flex-col items-start"
              >
                {/* Header Card: Tag Tahun & Ikon */}
                <div className="flex justify-between items-center w-full mb-4">
                  <span className="bg-[#F4DACF] text-[#5E3407] font-semibold px-3 py-1 rounded-full text-xs">
                    {item.year}
                  </span>
                  <img
                    src={item.icon}
                    alt={`Icon ${item.year}`}
                    className="w-6 h-6"
                  />
                </div>

                {/* Konten Utama */}
                <h3 className="font-headline font-medium text-[22px] text-[#1B1C1A] leading-7.5 mb-3">
                  {item.title}
                </h3>
                <p className="font-body font-normal text-[13px] text-[#50453E] leading-[21.1px] mb-6">
                  {item.description}
                </p>

                {/* Footer Card */}
                <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                  <span className="font-body text-[10px] font-bold text-[#8C847E] tracking-wider uppercase">
                    {item.footer}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
