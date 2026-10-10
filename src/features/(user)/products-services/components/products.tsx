"use client";
import { productsData } from "@/data/data";
import { categories } from "@/data/data";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export function ProserProductsSection() {
  // State untuk melacak kategori filter yang aktif saat diklik
  const [activeTab, setActiveTab] = useState("Semua");

  return (
    <>
      <div className="p-12 bg-primary-50 h-max mx-auto">
        {/* 1. Efek Pendaran Cahaya BG Lembut (Menciptakan gradasi estetik di pojok kanan atas) */}
        <div className="absolute top-40 right-0 w-175 h-125 rounded-full bg-[radial-gradient(circle,rgba(244,218,207,0.35)_0%,rgba(244,218,207,0.1)_60%,transparent_100%)] pointer-events-none z-0" />

        {/* Wrapper Konten Utama */}
        <div className="relative z-10 w-full flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12">
          {/* Kolom Kiri: Teks Heading dan Deskripsi */}
          <div className="flex flex-col items-start max-w-161.25">
            {/* Badge Tagline Atas */}
            <div className="flex items-center gap-1.5 bg-[#F4DACF]/60 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#725F56]" />
              <span className="font-label font-bold text-[10px] text-[#725F56] tracking-[1px] uppercase leading-3.5">
                Kurasi Biji Kopi & Solusi Kafe
              </span>
            </div>

            {/* Judul Utama Section */}
            <h1 className="font-headline font-semibold text-[40px] text-primary-150 leading-12 tracking-[-1px] mb-4">
              Layanan & Produk Sangrai Unggulan
            </h1>

            {/* Deskripsi Tubuh Teks */}
            <p className="font-body font-normal text-[18px] text-[#50453E] leading-7 tracking-normal">
              Dari lereng vulkanik Nusantara langsung ke roastery kami di
              Bandung. Pilihan single origin berkarakter kuat, house blend
              presisi, dan ekosistem kemitraan wholesale berstandar specialty.
            </p>
          </div>

          {/* Kolom Kanan: Kotak Ringkasan Statistik (Stats Card B2B) */}
          <div className="bg-[#FAF4EE]/70 backdrop-blur-sm border border-[#EFE5DC] rounded-xl p-6 flex items-center justify-between gap-8 min-w-70">
            {/* Statistik 1 */}
            <div className="flex flex-col items-start">
              <span className="font-headline font-medium text-[32px] text-primary-150 leading-9.5">
                14+
              </span>
              <span className="font-label font-bold text-[10px] text-primary-10 tracking-[0.5px] uppercase leading-3.5 mt-1">
                Origin Terpilih
              </span>
            </div>

            {/* Garis Pembatas Vertikal Ringan */}
            <div className="h-10 w-px bg-[#E2D4C9]" />

            {/* Statistik 2 */}
            <div className="flex flex-col items-start">
              <span className="font-headline font-medium text-[32px] text-primary-150 leading-9.5">
                120+
              </span>
              <span className="font-label font-bold text-[10px] text-primary-10 tracking-[0.5px] uppercase leading-3.5 mt-1">
                Mitra Kafe B2B
              </span>
            </div>
          </div>
        </div>

        {/* 2. Menu Navigasi Filter Kategori Kopi (Looping Array) */}
        <div className="relative z-10 flex flex-wrap gap-3 items-center w-full border-b border-[#EFE5DC] pb-4 mb-12">
          {categories.map((tab) => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-8 py-6 bg-[#FCF8F4]">
          {productsData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#EFE5DC] rounded-2xl overflow-hidden flex flex-col p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* 1. Bagian Foto & Badge Atas */}
              <div className="group relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Sisi Kiri Atas: Kumpulan Badge */}
                <div className="absolute top-3 left-3 flex gap-1.5 z-10">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className={`text-[9px] font-label font-bold tracking-[0.5px] px-2 py-1 rounded uppercase ${
                        tagIdx === 0
                          ? "bg-primary-150 text-white"
                          : "bg-white/80 text-primary-150 backdrop-blur-sm"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Sisi Kanan Bawah: Rating Bintang */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm z-10 text-primary-150">
                  <FaStar className="w-3 h-3 text-[#D9A05B]" />
                  <span className="font-label font-bold text-[11px] leading-none pt-px">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* 2. Informasi Origin & Ketinggian */}
              <div className="flex justify-between items-center w-full mb-2 px-1">
                <span className="font-label text-[10px] font-bold text-[#8C847E] tracking-[0.5px] uppercase">
                  {item.origin}
                </span>
                <span className="font-body text-[10px] font-medium text-[#A69C95]">
                  {item.status}
                </span>
              </div>

              {/* 3. Judul Utama Kopi */}
              <h3 className="font-headline font-semibold text-[22px] text-[#2C1F17] leading-7 mb-3 px-1">
                {item.title}
              </h3>

              {/* 4. Notes Karakter Rasa (Tasting Notes) */}
              <div className="flex flex-wrap gap-1.5 mb-6 px-1">
                {item.notes.map((note, noteIdx) => (
                  <span
                    key={noteIdx}
                    className="bg-[#FAF4EE] border border-[#EFE5DC] text-[#726156] font-body text-[11px] font-medium px-2.5 py-1 rounded-md"
                  >
                    {note}
                  </span>
                ))}
              </div>

              {/* 5. Bagian Footer Card: Harga & Tombol */}
              <div className="mt-auto pt-3 border-t border-[#F2ECE6] flex justify-between items-end w-full px-1">
                <div className="flex flex-col items-start">
                  <span className="font-label text-[9px] font-bold text-[#A69C95] tracking-[1px] uppercase">
                    HARGA 250GR
                  </span>
                  <span className="font-label font-bold text-[16px] text-primary-150 leading-none mt-1">
                    {item.price}
                  </span>
                </div>

                <button className="flex items-center gap-1 font-label text-[11px] font-bold text-primary-150 tracking-[0.5px] hover:text-[#D9A05B] transition-colors cursor-pointer group">
                  Lihat Detail
                  <span className="transform group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
