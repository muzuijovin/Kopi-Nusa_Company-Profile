"use client";
import { GoDotFill } from "react-icons/go";
import { categoriesArticle } from "@/data/data";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { LuClock, LuCalendar } from "react-icons/lu";

interface Blog {
  objectId?: string;
  category: string;
  image_url?: string;
  isiCerita: string;
  judul: string;
  ringkasan: string;
  tagar: string;
  ownerId?: string;
  created?: string;
}

export function BlogListSection() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [blog, setBlog] = useState<Blog[]>([]);
  const [getBlogLoading, setGetBlogLoading] = useState<boolean>(true);

  useEffect(() => {
    async () => {
      try {
        const res = await axios.get(
          "https://api.backendless.com/A73033C9-9473-4F00-8873-C91B67EEA0F4/5B9272C5-AA16-45BD-B422-F21BB7E83DFF/data/blog",
        );

        setBlog(res.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.error(error?.message);
        }
      } finally {
        setGetBlogLoading(false);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-primary-50 h-max mx-auto px-12 py-28">
        {/* Badge: Roastery Artisanal */}
        <div className="flex flex-col justify-center items-center text-center mb-10">
          <div className="flex justify-center items-center py-1.5 px-4 bg-[#F4DACF] rounded-full shadow-sm">
            <GoDotFill className="w-3 h-3 text-[#A36A4F] mr-2" />
            <h1 className="font-label font-semibold text-xs tracking-widest text-[#5E3407]">
              WAWASAN & CATATAN SANGRAI
            </h1>
          </div>

          {/* Heading Utama (H1) */}
          <div className="max-w-4xl">
            <h1 className="font-headline font-semibold text-4xl md:text-[56px] leading-tight text-primary-150">
              Jurnal & Cerita Kopi Nusantara
            </h1>
          </div>

          {/* Sub-heading (H3) */}
          <div className="max-w-2xl">
            <p className="font-body text-sm md:text-[16px] leading-relaxed text-[#50453E] opacity-90">
              Eksplorasi wawasan seputar teknik seduh manual, catatan sangrai,
              kisah para petani kopi, dan tren industri specialty coffee
              Indonesia.
            </p>
          </div>

          {/* serach */}
          <label className="input rounded-lg mt-10 w-[50%] mb-5">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>

          {/* 2. Menu Navigasi Filter Kategori Kopi (Looping Array) */}
          <div className="relative z-10 flex flex-wrap gap-3 justify-center items-center w-full border-b border-[#EFE5DC] pb-4 mb-12">
            {categoriesArticle.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full font-label text-[12px] font-semibold tracking-[0.6px] leading-4 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary-150 text-white shadow-sm"
                      : "bg-[#F2ECE6]/50 text-[#1B1C1A] hover:bg-[#EAE1D9]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
        {/* List Artikel - Diperbarui Sesuai Desain Gambar */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {getBlogLoading ? (
            <div className="flex justify-center py-10">
              <span className="loading loading-spinner loading-lg text-[#4E3629]"></span>
            </div>
          ) : (
            blog.map((item, index) => (
              <article
                key={item.objectId ?? `${item.judul}-${index}`}
                className="grid overflow-hidden rounded-2xl bg-white border border-[#EFE5DC] md:grid-cols-2 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Bagian Gambar Kiri */}
                <div className="relative w-full h-64 md:h-full min-h-75 bg-[#F9F6F0]">
                  <img
                    src={item.image_url || "https://unsplash.com"}
                    alt={item.judul}
                    className="w-full h-full object-cover"
                  />
                  {/* Badges di Atas Gambar */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-[#4E3629] text-white font-semibold text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase shadow-sm">
                      ★ SOROTAN UTAMA
                    </span>
                    <span className="bg-white/90 backdrop-blur-sm text-[#4E3629] font-semibold text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase shadow-sm border border-[#EFE5DC]">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Bagian Informasi & Teks Kanan */}
                <div className="flex flex-col justify-between p-6 md:p-10 text-[#2B1B12]">
                  <div>
                    {/* Meta Data: Waktu baca & Tanggal */}
                    <div className="flex items-center gap-4 text-xs text-[#705E52] mb-4">
                      <span className="flex items-center gap-1.5">
                        <LuClock className="w-3.5 h-3.5" /> 6 menit baca
                      </span>
                      <span className="flex items-center gap-1.5">
                        <LuCalendar className="w-3.5 h-3.5" />{" "}
                        {item.created
                          ? new Date(item.created).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })
                          : "14 Mei 2026"}
                      </span>
                    </div>

                    {/* Judul Artikel */}
                    <h2 className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-4 text-[#2B1B12] hover:text-[#7A523E] transition-colors line-clamp-3">
                      {item.judul}
                    </h2>

                    {/* Ringkasan Cerita */}
                    <p className="text-sm md:text-base text-[#5C4D43] leading-relaxed mb-6 line-clamp-4">
                      {item.ringkasan}
                    </p>
                  </div>

                  {/* Bagian Footer Card: Penulis & Tombol Aksi */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#F2ECE6] mt-auto">
                    {/* Profil Penulis (Dummy data diselaraskan dengan UI) */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-stone-200">
                        <img
                          src="https://unsplash.com"
                          alt="Author Avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#2B1B12]">
                          Raden Arya
                        </p>
                        <p className="text-[10px] tracking-wider text-[#A38A75] font-semibold uppercase">
                          MASTER ROASTER
                        </p>
                      </div>
                    </div>

                    {/* Tombol Baca Cerita */}
                    <button className="flex items-center gap-2 bg-[#4E3629] text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide hover:bg-[#3D2A20] transition-colors cursor-pointer shadow-sm">
                      BACA CERITA <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </>
  );
}
