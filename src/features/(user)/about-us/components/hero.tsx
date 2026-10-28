import { Pour, RoastReveal } from "@/components/motion";
import { sectionImages } from "@/data/data";
import { ArrowDown, BookOpen, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary-150 px-4 py-20 text-white md:px-6 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-luminosity">
        <Image
          src={sectionImages.aboutBackground}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary-150/80 to-primary-150" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-14 lg:flex-row">
        <div className="flex w-full max-w-xl flex-col gap-6">
          <Pour className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
            <BookOpen className="size-3.5 text-white/80" aria-hidden />
            <span className="font-label text-xs font-semibold uppercase tracking-wider text-white/90">
              Tentang Kopi Nusa
            </span>
          </Pour>

          <Pour delay={0.1}>
            <h1 className="font-headline text-4xl font-bold leading-[1.15] md:text-5xl">
              Kisah di Balik Setiap Butir Kopi Nusa
            </h1>
          </Pour>

          <Pour delay={0.2}>
            <p className="text-base leading-7 text-white/85">
              Sebuah dedikasi tulus dari dataran tinggi Nusantara. Menghubungkan jerih payah para petani
              tanah air dengan teknik penyangraian artisanal presisi untuk secangkir kopi berkarakter
              murni.
            </p>
          </Pour>

          <Pour delay={0.3} className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#sejarah"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-6 font-label text-xs font-bold uppercase tracking-wider text-primary-150 transition-colors hover:bg-blush"
            >
              Pelajari Perjalanan Kami
              <ArrowDown className="size-4" aria-hidden />
            </Link>
            <Link
              href="/teams"
              className="inline-flex min-h-12 items-center rounded-lg border border-white/30 bg-white/10 px-6 font-label text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20"
            >
              Temui Para Pengrajin
            </Link>
          </Pour>
        </div>

        <div className="relative aspect-4/3 w-full max-w-xl">
          <RoastReveal className="h-full w-full rounded-2xl shadow-2xl" delay={0.2}>
            <Image
              src={sectionImages.aboutHero}
              alt="Perlengkapan seduh espresso dan biji kopi sangrai Kopi Nusa"
              fill
              preload
              quality={90}
              sizes="(max-width: 1024px) 100vw, 576px"
              className="object-cover"
            />
          </RoastReveal>

          <Pour
            delay={0.9}
            className="absolute -bottom-6 left-3 flex max-w-72 items-center gap-3 rounded-xl border border-line bg-white p-4 text-primary-150 shadow-xl md:-left-10"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-100">
              <ShieldCheck className="size-5 text-primary-10" aria-hidden />
            </span>
            <span className="flex flex-col">
              <span className="font-label text-xs font-bold">100% Kopi Nusantara</span>
              <span className="text-xs leading-tight text-body">
                Dari 8 kepulauan penghasil kopi terbaik.
              </span>
            </span>
          </Pour>
        </div>
      </div>
    </section>
  );
}
