import { products } from "@/data/data";

export function ProductSection() {
  return (
    <>
      <div className="bg-primary-200 h-max mx-auto px-12 py-28">
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="font-label font-bold text-xs text-[#5E3407]">
              PILIHAN KURASI ROASTER
            </h2>
            <h1 className="font-headline font-bold text-[40px] text-primary-150">
              Biji Kopi Unggulan & Layanan Khusus
            </h1>
          </div>

          <h1 className="max-w-md font-body text-[13px] text-[#50453E]">
            Tersedia dalam kemasan retail siap seduh dan opsi pemesanan partai
            besar (B2B wholesale) untuk kebutuhan kafe maupun korporasi.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((item) => (
            <div key={item?.id} className="relative rounded-lg h-max overflow-hidden bg-white shadow-sm border border-gray-100">
              {/* foto */}
              <div className="group overflow-hidden w-full object-contain">
                <img
                  src={item.image}
                  alt="foto-product"
                  className="w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* peritilan dalm foto */}
              <div className="absolute top-2 left-2 rounded-xl bg-primary-150 p-1 hover:opacity-95 cursor-pointer">
                <h1 className="font-label font-medium text-[10px] text-[#FFFFFF]">
                  {item.type}
                </h1>
              </div>

              <div className="absolute top-2 right-2 rounded-full p-2 bg-[#FFFFFF]">
                <img src="/landing-product-love.svg" alt="love" />
              </div>

              {/* isi  */}
              <div className="p-6 bg-[#ffff] rounded-b-lg overflow-hidden h-max">
                <h3 className="font-label font-bold text-[10px] text-primary-10">
                  {item.location}
                </h3>
                <h1 className="font-headline font-bold text-[26px] text-primary-150">
                  {item.title}
                </h1>

                {/* looping tags rasa */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  {item.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-[#F5F3EF] rounded-xl p-1 flex items-center justify-center"
                    >
                      <h2 className="text-[#50453E] text-[13px] font-body truncate px-1">
                        {tag}
                      </h2>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  {/* Bagian Roast Level Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center text-[11px] text-primary-10 font-body mb-1.5">
                      <span>{!item.isB2b ? "Roast Level" : ""}</span>
                      <span
                        className={`font-semibold text-primary-150 ${item.isB2b ? "italic" : ""}`}
                      >
                        {item.roastLabel}
                      </span>
                    </div>

                    {/* Bar Tingkatan Roast Otomatis Sesuai Nilai Array */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }, (_, i) => i + 1).map(
                        (index) => (
                          <div
                            key={index}
                            className={`h-1.5 flex-1 rounded-sm ${
                              index <= item.roastLevel
                                ? "bg-primary-150"
                                : "bg-[#EAE7E0]"
                            }`}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  {/* Bagian Harga Retail & Tombol Pesan */}
                  <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-[10px] text-gray-400 font-body">
                        {item.isB2b ? "Harga Grosir" : "Harga Retail"}
                      </p>
                      <p className="text-[14px] font-bold text-primary-150 font-body">
                        {item.price}
                        <span className="text-[11px] font-normal text-gray-400">
                          /{item.weight}
                        </span>
                      </p>
                    </div>

                    {/* Tombol Aksi Dinamis */}
                    <a href="/">
                      <button className=" cursor-pointer bg-primary-150 text-[#ffffff] text-[12px] font-bold font-body px-5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm hover:brightness-110 hover:shadow-md active:scale-95">
                        <span className="tracking-wider">
                          {item.isB2b ? "DETAIL" : "PESAN"}
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
