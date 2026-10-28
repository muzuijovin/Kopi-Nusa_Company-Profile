import { Pour, Steep, SteepItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { teamData } from "@/data/data";
import { ArrowRight, Mail, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutTeamSection() {
  return (
    <section className="bg-primary-50 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Penggerak utama"
          title="Sosok di Balik Seduhan"
          description="Kombinasi pengalaman sensory, dedikasi penjelajahan kebun kopi, dan sains penyangraian modern."
        />

        <Steep className="mb-6 mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => (
            <SteepItem key={member.name} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="group relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={member.foto}
                  alt={`Foto ${member.name}`}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 rounded-full bg-cocoa px-3 py-1 font-label text-xs font-bold uppercase tracking-wider text-white">
                  {member.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="mb-2 font-label text-xs font-bold uppercase tracking-wider text-primary-10">
                  {member.role}
                </p>
                <h3 className="mb-3 font-headline text-[22px] font-medium text-ink">{member.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-body">{member.description}</p>
                <p className="mt-auto border-t border-line pt-4 text-xs text-primary-10">{member.footerText}</p>
              </div>
            </SteepItem>
          ))}
        </Steep>

        <Pour className="mb-16 flex justify-center">
          <Link
            href="/teams"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full px-5 font-label text-sm font-semibold text-primary-150 transition-colors hover:bg-primary-100"
          >
            Lihat seluruh tim
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Pour>

        {/* CTA kemitraan */}
        <Pour className="relative flex flex-col items-start overflow-hidden rounded-[20px] bg-primary-150 p-8 shadow-lg md:p-12">
          <div className="pointer-events-none absolute -bottom-48 -right-48 size-150 rounded-full bg-[radial-gradient(circle,rgba(244,218,207,0.15)_0%,rgba(244,218,207,0.05)_50%,transparent_70%)]" />
          <div className="relative flex w-full flex-col items-start">
            <span className="mb-6 flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 font-label text-xs font-bold uppercase tracking-wider text-blush">
              <Users className="size-3.5" aria-hidden />
              Kemitraan & Lab Tour
            </span>
            <h2 className="mb-4 max-w-2xl font-headline text-3xl font-medium leading-tight text-white md:text-[36px]">
              Ingin Berkolaborasi atau Mengunjungi Roastery Kami?
            </h2>
            <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-blush/90">
              Pintu roastery kami di Bandung selalu terbuka bagi Anda yang ingin berdiskusi perihal
              pasokan biji kopi kafe, private cupping session, atau sekadar berbagi cerita hangat tentang
              kopi nusantara.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="mailto:halo@kopinusa.id"
                className="flex min-h-12 items-center gap-2 rounded-lg bg-white px-6 font-label text-xs font-bold uppercase tracking-wider text-cocoa transition-colors hover:bg-blush"
              >
                <Mail className="size-4" aria-hidden />
                Hubungi Kami Sekarang
              </Link>
              <Link
                href="tel:02158902341"
                className="flex min-h-12 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 font-label text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20"
              >
                <Phone className="size-4" aria-hidden />
                Konsultasi B2B
              </Link>
            </div>
          </div>
        </Pour>
      </div>
    </section>
  );
}
