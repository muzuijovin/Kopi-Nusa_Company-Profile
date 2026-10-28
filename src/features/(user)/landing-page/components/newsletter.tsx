"use client";
import { Pour } from "@/components/motion";
import { faqItems } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ChevronDown, Truck } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function NewsletterAndFaq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Terima kasih! Voucher 15% dikirim ke ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-primary-100 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
        {/* KIRI: KARTU LANGGANAN */}
        <Pour className="flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-col gap-2">
            <span className="font-label text-xs font-semibold uppercase tracking-wider text-primary-10">
              Buletin Rasa Nusantara
            </span>
            <h2 className="font-headline text-[28px] font-bold leading-9 text-primary-150">
              Dapatkan Diskon 15% untuk Pesanan Pertama Anda
            </h2>
            <p className="mt-2 text-[15px] leading-6 text-body">
              Daftar ke buletin mingguan kami untuk jadwal rilis lot panen mikro terbaru, panduan seduh
              manual dari Q-Grader, serta voucher eksklusif.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <label htmlFor="newsletter-email" className="text-sm font-medium text-ink">
              Alamat email
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@contoh.com"
                autoComplete="email"
                className="input min-h-12 w-full rounded-lg border-line bg-primary-50 text-base focus:border-primary-150"
              />
              <button
                type="submit"
                className="min-h-12 shrink-0 cursor-pointer rounded-lg bg-primary-150 px-6 font-label text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
              >
                Langganan
              </button>
            </div>
            <p className="text-xs leading-5 text-primary-10">
              Kami menghargai privasi Anda. Tanpa spam, berhenti berlangganan kapan saja.
            </p>
          </form>

          <ul className="flex flex-wrap gap-6 border-t border-line pt-4 text-xs text-body">
            <li className="flex items-center gap-2">
              <Truck className="size-4" aria-hidden />
              Bebas Ongkir se-Jawa
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck className="size-4" aria-hidden />
              Garansi Sangrai Baru
            </li>
          </ul>
        </Pour>

        {/* KANAN: FAQ */}
        <div className="flex flex-col gap-6">
          <Pour className="flex flex-col gap-1">
            <span className="font-label text-xs font-semibold uppercase tracking-wider text-primary-10">
              Pertanyaan Umum
            </span>
            <h2 className="font-headline text-[28px] font-bold text-primary-150">
              Hal yang Sering Ditanyakan
            </h2>
          </Pour>

          <div className="flex flex-col gap-3">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-panel`}
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-label text-sm font-bold tracking-wide text-primary-150"
                    >
                      {item.pertanyaan}
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                        <ChevronDown className="size-5 shrink-0" aria-hidden />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${item.id}-panel`}
                        initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
                        animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
                        exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0, transition: { duration: 0.15 } }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-5 pb-5 text-[15px] leading-6 text-body">{item.jawaban}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
