"use client";
import { GetBlogsApi, type Blog } from "@/api/blogApi";
import { FilterTabs } from "@/components/filter-tabs";
import { SectionHeading } from "@/components/section-heading";
import { categoriesArticle } from "@/data/data";
import { isOptimizableImage } from "@/lib/images";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RotateCw, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { BlogAuthor, BlogMeta, blogImage } from "./blog-meta";

function BlogCard({ blog, isHero, index }: { blog: Blog; isHero: boolean; index: number }) {
  const src = blogImage(blog);
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 40, rotateX: 12, transformPerspective: 900 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 140, damping: 20, delay: index * 0.05 }}
      className={isHero ? "md:col-span-2" : ""}
    >
      <article
        className={`group relative grid h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-md ${
          isHero ? "md:grid-cols-2" : ""
        }`}
      >
        <div className={`relative w-full overflow-hidden bg-primary-100 ${isHero ? "aspect-4/3 md:aspect-auto md:min-h-96" : "aspect-16/10"}`}>
          <Image
            src={src}
            alt={blog.judul}
            fill
            quality={90}
            preload={isHero}
            unoptimized={!isOptimizableImage(src)}
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {blog.featured && (
              <span className="rounded-full bg-primary-150 px-2.5 py-1 font-label text-xs font-semibold uppercase tracking-wider text-white shadow-sm">
                ★ Sorotan Utama
              </span>
            )}
            <span className="rounded-full border border-line bg-white/90 px-2.5 py-1 font-label text-xs font-semibold uppercase tracking-wider text-primary-150 shadow-sm backdrop-blur-sm">
              {blog.category}
            </span>
          </div>
        </div>

        <div className={`flex flex-col justify-between ${isHero ? "p-6 md:p-10" : "p-6"}`}>
          <div>
            <BlogMeta blog={blog} />
            <h2
              className={`mb-3 mt-4 line-clamp-3 font-headline font-bold leading-tight text-ink transition-colors group-hover:text-primary-150 ${
                isHero ? "text-2xl md:text-3xl" : "text-xl"
              }`}
            >
              <Link href={`/blog-list/${blog.objectId}`} className="after:absolute after:inset-0">
                {blog.judul}
              </Link>
            </h2>
            <p className="mb-6 line-clamp-3 text-[15px] leading-relaxed text-body">{blog.ringkasan}</p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
            <BlogAuthor blog={blog} />
            <span
              aria-hidden
              className="flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-primary-150 px-4 font-label text-xs font-bold tracking-wide text-white transition-colors group-hover:bg-brand-dark"
            >
              BACA <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </article>
    </motion.li>
  );
}

export function BlogListSection() {
  const [activeTab, setActiveTab] = useState<string>("Semua");
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const { data: blogs = [], isPending, isError, refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: GetBlogsApi,
  });

  const filtered = blogs.filter(
    (b) =>
      (activeTab === "Semua" || b.category === activeTab) &&
      (!deferredSearch ||
        `${b.judul} ${b.ringkasan} ${b.tagar}`.toLowerCase().includes(deferredSearch)),
  );

  return (
    <section className="bg-primary-50 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          as="h1"
          eyebrow="Wawasan & catatan sangrai"
          title="Jurnal & Cerita Kopi Nusantara"
          description="Eksplorasi wawasan seputar teknik seduh manual, catatan sangrai, kisah para petani kopi, dan tren industri specialty coffee Indonesia."
        />

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-2">
          <label htmlFor="blog-search" className="sr-only">
            Cari artikel
          </label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary-10" aria-hidden />
            <input
              id="blog-search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari judul, ringkasan, atau #tagar…"
              className="input min-h-12 w-full rounded-full border-line bg-white pl-11 text-base focus:border-primary-150"
            />
          </div>
        </div>

        <FilterTabs
          label="Filter kategori artikel"
          tabs={categoriesArticle}
          active={activeTab}
          onChange={setActiveTab}
          className="mb-12 mt-6 justify-center border-b border-line pb-5"
        />

        {isError ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-white p-10 text-center">
            <p className="text-body">Artikel gagal dimuat. Periksa koneksi Anda.</p>
            <button
              type="button"
              onClick={() => refetch()}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-lg bg-primary-150 px-5 font-label text-sm text-white hover:bg-brand-dark"
            >
              <RotateCw className="size-4" aria-hidden /> Coba lagi
            </button>
          </div>
        ) : isPending ? (
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2" aria-busy>
            {Array.from({ length: 3 }, (_, i) => (
              <li key={i} className={`overflow-hidden rounded-2xl bg-white ${i === 0 ? "md:col-span-2" : ""}`}>
                <div className="aspect-16/10 w-full animate-pulse bg-primary-100 md:aspect-21/9" />
                <div className="space-y-3 p-6">
                  <div className="h-4 w-1/3 animate-pulse rounded bg-primary-100" />
                  <div className="h-7 w-3/4 animate-pulse rounded bg-primary-100" />
                  <div className="h-12 w-full animate-pulse rounded bg-primary-100" />
                </div>
              </li>
            ))}
          </ul>
        ) : filtered.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-line bg-white p-10 text-center text-body">
            Belum ada artikel yang cocok dengan pencarian Anda.
          </p>
        ) : (
          <motion.ul layout className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((blog, i) => (
                <BlogCard key={blog.objectId} blog={blog} index={i} isHero={i === 0} />
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </div>
    </section>
  );
}
