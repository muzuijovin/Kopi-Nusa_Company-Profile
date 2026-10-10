import { faqItems } from "@/data/data";

export default function NewsletterAndFaq() {
  return (
    <section className="bg-[#F5F3EF] px-12 py-24 md:px-24 w-full min-h-screen flex flex-col lg:flex-row gap-12 items-start justify-center">
      
      {/* KIRI: SEKSI BULETIN / KARTU LANGGANAN */}
      <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm max-w-136 w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold tracking-wider text-primary-10 uppercase font-label">
            Buletin Rasa Nusantara
          </span>
          <h2 className="text-[28px] font-bold leading-9 text-primary-150 font-headline">
            Dapatkan Diskon 15% untuk Pesanan Pertama Anda
          </h2>
          <p className="text-[15px] leading-6 text-[#50453E] font-body mt-2">
            Daftar ke buletin mingguan kami untuk jadwal rilis lot panen mikro terbaru, panduan seduh manual dari Q-Grader, serta voucher eksklusif.
          </p>
        </div>

        {/* Form Menggunakan daisyUI Fieldset & Input Text Legend */}
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <fieldset className="fieldset relative w-full border border-base-300 rounded-lg px-3 pb-2 pt-1 focus-within:border-primary-150">
            <legend className="fieldset-legend text-xs px-1 text-base-content/60 font-body">
              Masukkan alamat email Anda
            </legend>
            <div className="flex w-full items-center justify-between gap-2 mt-1">
              <input 
                type="email" 
                placeholder="email@contoh.com" 
                className="input input-ghost w-full focus:bg-transparent focus:outline-none p-0 h-9 text-[15px] font-body" 
              />
              <button 
                type="submit" 
                className="btn bg-primary-150 hover:bg-[#40291a] text-white border-none rounded px-6 min-h-0 h-10 font-medium tracking-wider text-xs uppercase font-label"
              >
                Langganan
              </button>
            </div>
          </fieldset>
        </form>

        <p className="text-xs leading-5 text-base-content/50 font-body">
          Kami menghargai privasi Anda. Tanpa spam. Anda dapat berhenti berlangganan kapan saja.
        </p>

        {/* Fitur / Benefit Mini */}
        <div className="flex flex-wrap gap-6 pt-4 border-t border-base-100 text-xs text-[#50453E] font-body">
          <div className="flex items-center gap-2">
            <svg xmlns="http://w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span>Bebas Ongkir se-Jawa</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>Garansi Sangrai Baru</span>
          </div>
        </div>
      </div>

      {/* KANAN: SEKSI FAQ (PERTANYAAN UMUM) */}
      <div className="max-w-137.5 w-full flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold tracking-wider text-primary-10 uppercase font-label">
            Pertanyaan Umum
          </span>
          <h2 className="text-[28px] font-bold text-primary-150 font-headline">
            Hal yang Sering Ditanyakan
          </h2>
        </div>

        {/* Daftar Accordion daisyUI */}
        <div className="flex flex-col gap-3 w-full">
           {faqItems.map((item, index) => (
            <div 
              key={item.id} 
              className="collapse collapse-arrow bg-white rounded-xl border border-base-100 shadow-sm transition-all duration-200"
            >
              {/* Radio input dengan name yang sama agar efek accordion (hanya 1 terbuka) bekerja */}
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} /> 
              <div className="collapse-title text-[14px] font-bold ext-primary-150 font-label tracking-[0.56px] py-4">
                {item.pertanyaan}
              </div>
              <div className="collapse-content text-[15px] text-[#50453E] font-body leading-6">
                <p>{item.jawaban}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}