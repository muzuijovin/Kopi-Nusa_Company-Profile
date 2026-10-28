"use client";

import { GetTeamApi } from "@/api/teamApi";
import { FilterTabs } from "@/components/filter-tabs";
import { SectionHeading } from "@/components/section-heading";
import { isOptimizableImage } from "@/lib/images";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCw } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

const CATEGORY_LABEL: Record<string, string> = {
  ROASTERY: "Roastery",
  SOURCING: "Sourcing",
  SENSORY: "Sensory",
  BARISTA: "Barista",
  BISNIS: "Bisnis",
};

export function TeamsSectionOne() {
  const [activeTab, setActiveTab] = useState("Semua");
  const { data: team = [], isPending, isError, refetch } = useQuery({
    queryKey: ["team"],
    queryFn: GetTeamApi,
  });

  // tab dibentuk dari kategori yang benar-benar ada di database
  const tabs = useMemo(
    () => ["Semua", ...new Set(team.map((m) => CATEGORY_LABEL[m.category] ?? m.category))],
    [team],
  );
  const filtered =
    activeTab === "Semua"
      ? team
      : team.filter((m) => (CATEGORY_LABEL[m.category] ?? m.category) === activeTab);

  return (
    <section className="bg-primary-50 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          as="h1"
          eyebrow="Kolektif rasa & dedikasi"
          title="Bertemu dengan Para Pengrajin Kopi Nusa"
          description="Dedikasi roaster, barista, dan kurator rasa yang memastikan kualitas tertinggi dari ladang ke cangkir Anda melalui riset presisi dan rasa hormat terhadap tanah Nusantara."
        />

        <FilterTabs
          label="Filter tim berdasarkan divisi"
          tabs={tabs}
          active={activeTab}
          onChange={setActiveTab}
          className="mb-10 mt-10 justify-center"
        />

        {isError ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-white p-10 text-center">
            <p className="text-body">Data tim gagal dimuat. Periksa koneksi Anda.</p>
            <button
              type="button"
              onClick={() => refetch()}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-primary-150 px-5 font-label text-sm text-white hover:bg-brand-dark"
            >
              <RotateCw className="size-4" aria-hidden /> Coba lagi
            </button>
          </div>
        ) : (
          <motion.ul layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" aria-busy={isPending}>
            {isPending
              ? Array.from({ length: 8 }, (_, i) => (
                  <li key={i} className="overflow-hidden rounded-2xl bg-white p-4">
                    <div className="aspect-4/5 w-full animate-pulse rounded-xl bg-primary-100" />
                    <div className="mt-4 h-4 w-1/3 animate-pulse rounded bg-primary-100" />
                    <div className="mt-3 h-6 w-2/3 animate-pulse rounded bg-primary-100" />
                    <div className="mt-3 h-12 w-full animate-pulse rounded bg-primary-100" />
                  </li>
                ))
              : (
                  <AnimatePresence mode="popLayout">
                    {filtered.map((member, i) => (
                      <motion.li
                        key={member.objectId}
                        layout
                        initial={{ opacity: 0, y: 40, rotateX: 14, transformPerspective: 900 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        transition={{ type: "spring", stiffness: 140, damping: 20, delay: i * 0.05 }}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl bg-primary-100">
                          <Image
                            src={member.photoUrl}
                            alt={`Foto ${member.fullName}`}
                            fill
                            quality={90}
                            unoptimized={!isOptimizableImage(member.photoUrl)}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          {/* deskripsi muncul dari bawah saat hover (desktop) */}
                          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-linear-to-t from-primary-150/95 to-primary-150/70 p-4 transition-transform duration-500 ease-out group-hover:translate-y-0 motion-reduce:transition-none">
                            <p className="text-sm leading-relaxed text-white">{member.description}</p>
                          </div>
                        </div>
                        <span className="mt-4 self-start rounded-full bg-primary-150 px-3 py-1 font-label text-xs font-bold text-white">
                          {CATEGORY_LABEL[member.category] ?? member.category}
                        </span>
                        <h2 className="mt-2 font-headline text-[22px] font-semibold text-ink">
                          {member.fullName}
                        </h2>
                        <p className="text-sm font-medium text-primary-10">{member.role}</p>
                        {/* di layar sentuh deskripsi tetap terlihat */}
                        <p className="mt-2 text-sm leading-relaxed text-body lg:hidden">{member.description}</p>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                )}
          </motion.ul>
        )}
      </div>
    </section>
  );
}
