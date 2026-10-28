import { Pour, Steep, SteepItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/data/data";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductSection() {
  return (
    <section className="bg-primary-200 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Pilihan kurasi roaster"
            title="Biji Kopi Unggulan & Layanan Khusus"
          />
          <Pour delay={0.2} className="max-w-md">
            <p className="text-[15px] leading-relaxed text-body">
              Tersedia dalam kemasan retail siap seduh dan opsi pemesanan partai besar (B2B
              wholesale) untuk kebutuhan kafe maupun korporasi.
            </p>
          </Pour>
        </div>

        <Steep className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <SteepItem
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
            >
              <div className="group relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-primary-150 px-2.5 py-1 font-label text-xs font-medium text-white">
                  {item.type}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-label text-xs font-bold text-primary-10">{item.location}</p>
                <h3 className="mt-1 font-headline text-2xl font-bold leading-tight text-primary-150">
                  {item.title}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-primary-100 px-3 py-1 text-[13px] text-body">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <div className="mb-1.5 flex items-center justify-between text-xs text-primary-10">
                    <span>{item.isB2b ? "Profil Sangrai" : "Roast Level"}</span>
                    <span className={`font-semibold text-primary-150 ${item.isB2b ? "italic" : ""}`}>
                      {item.isB2b ? "Sesuai Permintaan" : item.roastLabel}
                    </span>
                  </div>
                  <div
                    className="flex gap-1"
                    role="img"
                    aria-label={`Roast level ${item.roastLevel} dari 5`}
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 flex-1 rounded-sm ${i < item.roastLevel ? "bg-primary-150" : "bg-sand"}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                  <div>
                    <p className="text-xs text-primary-10">
                      {item.isB2b ? "Harga Grosir" : "Harga Retail"}
                    </p>
                    <p className="text-sm font-bold text-primary-150">
                      {item.price}
                      <span className="text-xs font-normal text-primary-10">/{item.weight}</span>
                    </p>
                  </div>
                  <Link
                    href="/products-services"
                    aria-label={`${item.isB2b ? "Detail" : "Pesan"} ${item.title}`}
                    className="group/btn flex min-h-11 items-center gap-1.5 rounded-lg bg-primary-150 px-4 font-label text-xs font-bold tracking-wider text-white transition-colors hover:bg-brand-dark"
                  >
                    {item.isB2b ? "DETAIL" : "PESAN"}
                    <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
                  </Link>
                </div>
              </div>
            </SteepItem>
          ))}
        </Steep>
      </div>
    </section>
  );
}
