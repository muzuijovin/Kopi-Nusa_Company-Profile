import { coffeeFeaturesData } from "@/data/data";
import { coffeeMilestonesData } from "@/data/data";

export function AboutHomeSection() {
  return (
    <>
      <div className="bg-primary-50 h-max mx-auto px-12 py-28">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
          {/* sebelah kiri */}
          <div className="px-20 h-130 overflow-hidden flex justify-center items-center">
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <img
                src="landing-aboutsection-foto.svg"
                alt="foto"
                className="w-full object-cover"
              />

              <div className="absolute bottom-2 left-2 right-2 flex rounded-lg bg-[#FFFFff] p-4 justify-between">
                <div className="flex gap-2">
                  <div className="p-2 rounded-full w-max h-max bg-[#F4DACF] flex justify-center items-center">
                    <img src="/landing-about-logo-daun.svg" alt="logo daun" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h1 className="font-label font-bold text-xs text-primary-150">
                      Petani Mitra Binaan
                    </h1>
                    <h3 className="font-body text-[13px] text-[#50453E]">
                      Dataran Tinggi Gayo & Kintamani
                    </h3>
                  </div>
                </div>

                <div className="flex justify-center items-center px-2 rounded-xl bg-[#F4DACF]">
                  <h1 className="font-label font-bold text-[10px] text-[#5E3407]">
                    DIRECT TRADE
                  </h1>
                </div>
              </div>
            </div>

            <div></div>
          </div>

          {/* sebelah kanan */}
          <div className="flex flex-col gap-6 justify-center items-start max-w-2xl">
            <h2 className="font-label font-bold text-xs text-[#5E3407]">
              PERJALANAN KAMI SEJAK 2018
            </h2>
            <h1 className="font-headline font-bold text-[40px] text-primary-150">
              Dedikasi Menjaga Keaslian Rasa, Menyejahterakan Petani Nusantara
            </h1>
            <h3 className="font-body text-[15px] text-[#50453E]">
              Berawal dari garasi kecil di Bandung pada tahun 2018, Kopi Nusa
              bertransformasi menjadi laboratorium sangrai terdepan yang
              menjembatani para petani kopi berdedikasi di Aceh Gayo, Toraja,
              Kintamani Bali, hingga Lereng Gunung Ijen dengan para penikmat
              kopi yang haus akan transparansi dan kesempurnaan cita rasa.
            </h3>
            <h3 className="font-body text-[15px] text-[#50453E]">
              Kami mempraktikkan model kemitraan berkeadilan (Direct-Trade),
              membeli biji kopi specialty grade dengan harga premium di atas
              pasar komoditas, serta mendampingi proses pascapanen secara ketat
              demi menghasilkan profil seduh yang kaya dan konsisten.
            </h3>

            <div className="grid grid-cols-2 gap-5">
              {coffeeFeaturesData.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="flex gap-2 items-start rounded-lg px-5 py-4 bg-primary-200"
                  >
                    <img src={item?.icon} alt="logo daun" className="w-5 h-5" />
                    <div>
                      <h1 className="font-label font-bold text-[14px] text-primary-150">
                        {item?.title}
                      </h1>
                      <h2 className="font-label text-[13px] text-[#50453E]">
                        {item?.description}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* grid container besar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {coffeeMilestonesData.map((item) => {
            return (
              <div key={item?.id} className="bg-primary-200 rounded-lg flex flex-col justify-center items-center p-6">
                <div className="bg-[#F4DACF] flex justify-center items-center p-4 rounded-full mb-5">
                  <img src={item?.icon} alt="logo" />
                </div>

                <h1 className="font-headline font-bold text-[56px] text-primary-150 mb-3">
                  {item?.value}
                </h1>

                <h2 className="font-label font-bold text-xs text-primary-10">
                  {item?.label}
                </h2>

                <h3 className="font-body text-[13px] text-[#50453E] mb-3">
                  {item?.description}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
