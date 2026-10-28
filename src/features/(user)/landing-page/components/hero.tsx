"use client";

import { Steep, SteepItem } from "@/components/motion";
import { coffeeBatchData, coffeeQualitiesData, sectionImages } from "@/data/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const headline = "Menghidupkan Cita Rasa Tanah Nusantara";
const headlineItalic = "dalam Setiap Biji Sangrai";

// setiap kata "naik" dari balik garis seperti uap kopi
function RisingWords({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 6 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.06 }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-primary-50">
      {/* background HD dengan parallax */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 h-[115vh]">
        <Image
          src={sectionImages.heroBackground}
          alt=""
          fill
          preload
          quality={90}
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary-50/40 via-primary-50/70 to-primary-50" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 pb-20 pt-16 text-center md:px-6 md:pt-24">
        {/* badge */}
        <motion.p
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 font-label text-xs font-semibold tracking-widest text-cocoa shadow-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-cocoa/50 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-cocoa" />
          </span>
          ROASTERY ARTISANAL INDONESIA • EST. 2018
        </motion.p>

        <h1 className="max-w-4xl font-headline text-4xl font-semibold leading-tight text-primary-150 md:text-[56px]">
          <RisingWords text={headline} />
          <RisingWords text={headlineItalic} className="font-normal italic" delay={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-2xl text-base leading-relaxed text-body"
        >
          Kurasi biji kopi specialty dari lereng vulkanik Gayo hingga dataran tinggi Kintamani.
          Disangrai presisi dalam mikro-batch demi memancarkan karakter jujur bumi dan kemanisan alami
          setiap origin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Link
            href="/products-services"
            className="group flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary-150 px-7 font-label text-sm font-medium text-white shadow-md transition-colors hover:bg-brand-dark"
          >
            EKSPLORASI VARIAN BIJI SANGRAI
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
          <Link
            href="/about-us"
            className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white/80 px-7 font-label text-sm font-semibold text-primary-150 backdrop-blur transition-colors hover:bg-white"
          >
            <CalendarDays className="size-4" aria-hidden />
            JADWAL CUPPING & KEMITRAAN
          </Link>
        </motion.div>

        {/* kartu batch */}
        <Steep className="mt-10 grid w-full grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {coffeeBatchData.map((item, index) => (
            <SteepItem
              key={item.id}
              className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
                <div className="flex items-center gap-2">
                  <Image src={item.header.minilogo} alt="" width={16} height={16} />
                  <h2 className="font-label text-xs font-bold text-primary-10">{item.header.title}</h2>
                </div>
                <span className="rounded-full bg-blush px-2.5 py-0.5 font-label text-xs font-bold text-cocoa">
                  {item.header.badgeText}
                </span>
              </div>

              <div className="group relative mb-4 aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  src={item.media.imageSrc}
                  alt={item.content.mainTitle}
                  fill
                  quality={90}
                  preload={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 font-label text-xs font-bold text-primary-150 backdrop-blur">
                  {item.media.imageBadge}
                </span>
              </div>

              <p className="font-label text-xs font-bold text-primary-10">{item.content.sectionTitle}</p>
              <h3 className="mt-1 font-headline text-[22px] font-bold text-primary-150">
                {item.content.mainTitle}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5 border-b border-line pb-5">
                {item.content.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-sand px-3 py-1 text-[13px] text-body">
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={item.footer.leftInfo.minilogo} alt="" width={16} height={16} />
                  <span className="text-xs font-medium text-primary-10">{item.footer.leftInfo.text}</span>
                </div>
                <span className="text-xs font-semibold text-primary-150">{item.footer.rightInfo.text}</span>
              </div>
            </SteepItem>
          ))}
        </Steep>

        {/* strip kualitas */}
        <Steep className="grid w-full grid-cols-1 gap-6 rounded-2xl bg-primary-200 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {coffeeQualitiesData.map((item) => (
            <SteepItem key={item.id} className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-2">
                <Image src={item.icon} alt="" width={20} height={20} />
                <h2 className="font-label text-xs font-bold text-primary-150">{item.title}</h2>
              </div>
              <p className="text-[13px] text-primary-10">{item.description}</p>
            </SteepItem>
          ))}
        </Steep>
      </div>
    </section>
  );
}
