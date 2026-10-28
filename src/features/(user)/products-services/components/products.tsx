"use client";
import { CountUp, Pour } from "@/components/motion";
import { FilterTabs } from "@/components/filter-tabs";
import { SectionHeading } from "@/components/section-heading";
import { categories, productsData } from "@/data/data";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ProserProductsSection() {
  const [activeTab, setActiveTab] = useState<string>("Semua");
  const filtered =
    activeTab === "Semua" ? productsData : productsData.filter((p) => p.category === activeTab);

  return (
    <section className="relative overflow-hidden bg-primary-50 px-4 py-20 md:px-6 md:py-24">
      <div className="pointer-events-none absolute -right-40 top-20 h-125 w-175 rounded-full bg-[radial-gradient(circle,rgba(244,218,207,0.45)_0%,rgba(244,218,207,0.1)_60%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="Kurasi biji kopi & solusi kafe"
            title="Layanan & Produk Sangrai Unggulan"
            description="Dari lereng vulkanik Nusantara langsung ke roastery kami di Bandung. Pilihan single origin berkarakter kuat, house blend presisi, dan kemitraan wholesale berstandar specialty."
          />

          <Pour delay={0.2} className="flex min-w-70 items-center justify-between gap-8 rounded-2xl border border-line bg-white/70 p-6 backdrop-blur-sm">
            <div className="flex flex-col">
              <CountUp value="14+" className="font-headline text-[32px] font-medium text-primary-150" />
              <span className="mt-1 font-label text-xs font-bold uppercase tracking-wide text-primary-10">
                Origin Terpilih
              </span>
            </div>
            <div className="h-10 w-px bg-line" />
            <div className="flex flex-col">
              <CountUp value="120+" className="font-headline text-[32px] font-medium text-primary-150" />
              <span className="mt-1 font-label text-xs font-bold uppercase tracking-wide text-primary-10">
                Mitra Kafe B2B
              </span>
            </div>
          </Pour>
        </div>

        <FilterTabs
          label="Filter kategori produk"
          tabs={categories}
          active={activeTab}
          onChange={setActiveTab}
          className="mb-10 border-b border-line pb-5"
        />

        <motion.ul layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.li
                key={item.title}
                layout
                initial={{ opacity: 0, y: 40, rotateX: 14, transformPerspective: 900 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 140, damping: 20, delay: i * 0.05 }}
                className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="group relative mb-4 aspect-4/3 w-full overflow-hidden rounded-xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute left-3 top-3 flex gap-1.5">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tag}
                        className={`rounded px-2 py-1 font-label text-xs font-bold uppercase tracking-wide ${
                          tagIdx === 0 ? "bg-primary-150 text-white" : "bg-white/90 text-primary-150 backdrop-blur-sm"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-primary-150 shadow-sm backdrop-blur-sm">
                    <Star className="size-3.5 fill-star text-star" aria-hidden />
                    <span className="font-label text-xs font-bold">
                      <span className="sr-only">Rating </span>
                      {item.rating}
                    </span>
                  </span>
                </div>

                <div className="mb-2 flex items-center justify-between gap-2 px-1">
                  <span className="font-label text-xs font-bold uppercase tracking-wide text-primary-10">
                    {item.origin}
                  </span>
                  <span className="shrink-0 text-xs font-medium text-cocoa">{item.status}</span>
                </div>

                <h2 className="mb-3 px-1 font-headline text-[22px] font-semibold leading-7 text-ink">{item.title}</h2>

                <ul className="mb-6 flex flex-wrap gap-1.5 px-1">
                  {item.notes.map((note) => (
                    <li key={note} className="rounded-md border border-line bg-primary-50 px-2.5 py-1 text-xs font-medium text-body">
                      {note}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex w-full items-end justify-between border-t border-line px-1 pt-3">
                  <div className="flex flex-col">
                    <span className="font-label text-xs font-bold uppercase tracking-wider text-primary-10">
                      Harga / {item.unit}
                    </span>
                    <span className="mt-1 font-label text-base font-bold text-primary-150">{item.price}</span>
                  </div>
                  <Link
                    href="#detail-produk"
                    aria-label={`Lihat detail ${item.title}`}
                    className="group/btn flex min-h-11 items-center gap-1 rounded-lg px-3 font-label text-xs font-bold tracking-wide text-primary-150 transition-colors hover:bg-primary-100"
                  >
                    Lihat Detail
                    <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
                  </Link>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
