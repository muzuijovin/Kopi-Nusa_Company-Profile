import { GoDotFill } from "react-icons/go";
import { coffeeBatchData } from "@/data/data";
import { coffeeQualitiesData } from "@/data/data";

export function HeroSection() {
  return (
    <>
      {/* Kontainer Utama Hero: relatif dan memiliki tinggi minimum atau pasti agar bg terlihat bagus */}
      <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#FBF9F6]">
        {/* GAMBAR LATAR BELAKANG */}
        {/* Menggunakan object-cover agar gambar penuh ke segala sisi layar tanpa gepeng */}
        <img
          src="/herosection-background.png"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 pointer-events-none"
        />

        {/* LAPISAN OVERLAY (Opsional: untuk memastikan teks lebih terbaca jika gambarnya terlalu ramai) */}
        <div className="absolute inset-0 g-linear-to-b from-white/30 via-transparent to-white/10 z-10 pointer-events-none" />

        {/* Kiri (Menggelap ke arah kiri) */}
        <div className="absolute inset-y-0 left-0 w-1/4 md:w-1/3 bg-linear-to-r from-black/40 to-transparent z-10 pointer-events-none" />

        {/* Kanan (Menggelap ke arah kanan) */}
        <div className="absolute inset-y-0 right-0 w-1/4 md:w-1/3 g-linear-to-l from-black/40 to-transparent z-10 pointer-events-none" />

        {/* Gradasi Bawah Menyatu ke Krem [#F5F3EF] === */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-primary-50 to-transparent z-10 pointer-events-none" />

        {/* KONTEN TEKS (Berada di atas gambar berkat z-20) */}
        <div
          id="heroSection"
          className="relative z-20 w-full mx-auto px-12 py-24 text-center flex flex-col items-center justify-center gap-6"
        >
          {/* Badge: Roastery Artisanal */}
          <div className="flex justify-center items-center py-1.5 px-4 bg-[#F4DACF] rounded-full shadow-sm">
            <GoDotFill className="w-3 h-3 text-[#A36A4F] mr-2" />
            <h1 className="font-label font-semibold text-xs tracking-widest text-[#5E3407]">
              ROASTERY ARTISANAL INDONESIA • EST. 2018
            </h1>
          </div>

          {/* Heading Utama (H1) */}
          <div className="max-w-4xl">
            <h1 className="font-headline font-semibold text-4xl md:text-[56px] leading-tight text-primary-150">
              Menghidupkan Cita Rasa Tanah Nusantara{" "}
              <i className="font-headline italic font-normal text-primary-150">
                dalam Setiap Biji Sangrai
              </i>
            </h1>
          </div>

          {/* Sub-heading (H3) */}
          <div className="max-w-2xl">
            <p className="font-body text-sm md:text-[16px] leading-relaxed text-[#50453E] opacity-90">
              Kurasi biji kopi specialty dari lereng vulkanik Gayo hingga
              dataran tinggi Kintamani. Disangrai presisi dalam mikro-batch demi
              memancarkan karakter jujur bumi dan kemanisan alami setiap origin.
            </p>
          </div>

          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-3">
            <a href="">
              <div className="flex justify-center items-center gap-2 py-3.5 px-8 bg-primary-150 rounded-lg hover:shadow-md">
                <img src="/herosection-eksplor-1.svg" alt="logo" />
                <h1 className="font-label font-medium text-[14px] text-[#FFFFFF]">
                  EKSPLORASI VARIAN BIJI SANGRAI
                </h1>
                <img src="/herosection-eksplor-2.svg" alt="logo" />
              </div>
            </a>

            <a href="">
              <div className="flex justify-center items-center gap-2 py-3.5 px-8 bg-primary-200 rounded-lg hover:shadow-md">
                <img src="/herosection-jadwal.svg" alt="logo" />
                <h1 className="font-label font-semibold text-[14px] text-primary-150">
                  JADWAL CUPPING & KEMITRAAN
                </h1>
              </div>
            </a>
          </div>

          {/* container grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
            {coffeeBatchData.map((item) => {
              return (
                <div key={item?.id} className="bg-[#ffff] rounded-lg p-6.25">
                  <div className="mb-4 flex justify-between items-center border-b pb-2.5">
                    <div className="flex gap-2">
                      <img src={item?.header?.minilogo} alt="logokecil" />
                      <h1 className="font-label font-bold text-[10px] text-primary-10">
                        {item?.header?.title}
                      </h1>
                    </div>

                    <div className="rounded-xl bg-[#F4DACF] px-1 py-.5 ">
                      <h1 className="font-label font-bold text-[11px] text-[#5E3407]">
                        {item?.header?.badgeText}
                      </h1>
                    </div>
                  </div>

                  <div className="group rounded-xl overflow-hidden h-max relative mb-4">
                    <div className="absolute bottom-2 left-2 bg-primary-200 rounded-xl px-2 py-1 cursor-pointer">
                      <h1 className="font-label font-bold text-[10px] text-primary-150">
                        {item?.media?.imageBadge}
                      </h1>
                    </div>
                    <img
                      src={item?.media?.imageSrc}
                      alt="foto"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 border-b items-start">
                    <h1 className="font-label font-bold text-[10px] text-primary-10">
                      {item?.content?.sectionTitle}
                    </h1>
                    <h1 className="font-headline font-bold text-[22px] text-primary-150">
                      {item?.content?.mainTitle}
                    </h1>
                    <div className="flex gap-1.5 pb-8">
                      <div className="bg-[#EFEEEA] px-3 py-1.5 rounded-xl">
                        <h1 className="font-body text-[#50453E] text-[13px]">
                          {item?.content?.tags[0]}
                        </h1>
                      </div>
                      <div className="bg-[#EFEEEA] px-3 py-1.5 rounded-xl flex">
                        <h1 className="font-body text-[#50453E] text-[13px]">
                          {item?.content?.tags[1]}
                        </h1>
                      </div>
                      <div className="bg-[#EFEEEA] px-3 py-1.5 rounded-xl">
                        <h1 className="font-body text-[#50453E] text-[13px]">
                          {item?.content?.tags[2]}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-3">
                    <div className="flex gap-2">
                      <img
                        src={item?.footer?.leftInfo?.minilogo}
                        alt="logo kecil"
                      />
                      <h1 className="font-body font-medium text-primary-10 text-xs">
                        {item?.footer?.leftInfo?.text}
                      </h1>
                    </div>

                    <h1 className="font-body font-semibold text-xs text-primary-150">
                      {item?.footer?.rightInfo?.text}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-primary-200 grid grid-cols-2 lg:grid-cols-4 py-6 gap-6 px-6 w-full rounded-lg">
            {coffeeQualitiesData.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <div className="flex gap-2">
                    <img src={item?.icon} alt="logo footer" />
                    <h1 className="font-label font-bold text-xs text-primary-150">
                      {item?.title}
                    </h1>
                  </div>

                  <h1 className="font-body text-[13px] text-primary-10">
                    {item?.description}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
