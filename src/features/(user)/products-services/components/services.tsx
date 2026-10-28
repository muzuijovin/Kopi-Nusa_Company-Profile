"use client";
import { Pour, Steep, SteepItem } from "@/components/motion";
import { brewingRecommendations, flavorRadar, roastLevels, specsData } from "@/data/data";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

// titik radar dihitung dari skor (0–10), bukan lagi koordinat hard-code
const CENTER = 50;
const RADIUS = 40;
const pointAt = (index: number, value: number) => {
  const angle = (Math.PI * 2 * index) / flavorRadar.length - Math.PI / 2;
  const r = (value / 10) * RADIUS;
  return `${CENTER + r * Math.cos(angle)},${CENTER + r * Math.sin(angle)}`;
};
const ring = (scale: number) => flavorRadar.map((_, i) => pointAt(i, 10 * scale)).join(" ");
const shape = flavorRadar.map((f, i) => pointAt(i, f.score)).join(" ");

const panelClass = "rounded-xl border border-blush/40 bg-primary-50 p-5";
const labelClass = "font-label text-xs font-bold tracking-wide text-primary-10";

export function ProserServicesSection() {
  return (
    <section id="detail-produk" className="scroll-mt-20 bg-primary-50 px-4 pb-24 md:px-6">
      <Pour className="mx-auto flex max-w-6xl flex-col gap-10 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:p-12">
        {/* KIRI: profil & radar */}
        <div className="flex flex-1 flex-col justify-between gap-8">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1.5">
              <Sparkles className="size-3.5 text-cocoa" aria-hidden />
              <span className="font-label text-xs font-bold tracking-wide text-cocoa">
                PROFIL SPESIFIKASI SANGRAI
              </span>
            </span>
            <h2 className="mb-4 font-headline text-[28px] font-bold leading-9 text-primary-150">
              Flores Bajawa Natural Anaerobic
            </h2>
            <p className="text-[15px] leading-relaxed text-body">
              Diproses dengan fermentasi anaerobik tertutup selama 72 jam sebelum dijemur lambat di atas
              raised beds. Menghasilkan rasa manis kental menyerupai cokelat susu dengan aroma harum
              rempah khas tanah Nusa Tenggara.
            </p>
          </div>

          <figure className={`${panelClass} flex flex-col items-center`}>
            <figcaption className={`${labelClass} mb-2 w-full`}>FLAVOR RADAR & CUPPING METRICS</figcaption>
            <div className="relative w-full max-w-72">
              {/* svg yang dipantau viewport-nya, polygon ikut lewat variants
                  (polygon ber-scale 0 tidak punya ukuran sehingga tidak pernah dianggap terlihat) */}
              <motion.svg
                viewBox="-24 -6 148 112"
                className="w-full"
                role="img"
                aria-label="Grafik radar profil rasa"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {[1, 0.66, 0.33].map((s) => (
                  <polygon key={s} points={ring(s)} fill="none" stroke="#E6DFD9" strokeWidth="0.6" />
                ))}
                <motion.polygon
                  points={shape}
                  fill="#553722"
                  fillOpacity="0.22"
                  stroke="#553722"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                  variants={{ hidden: { scale: 0, opacity: 0 }, show: { scale: 1, opacity: 1 } }}
                  transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.3 }}
                  style={{ transformOrigin: "50px 50px" }}
                />
                {flavorRadar.map((f, i) => {
                  const [x, y] = pointAt(i, 12.6).split(",").map(Number);
                  return (
                    <text
                      key={f.label}
                      x={x}
                      y={y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-primary-10 font-label text-[5px] font-bold"
                    >
                      {f.label} ({f.score.toFixed(1)})
                    </text>
                  );
                })}
              </motion.svg>
            </div>
          </figure>
        </div>

        {/* KANAN: detail */}
        <div className="flex flex-1 flex-col gap-5">
          <Steep className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {specsData.map((spec) => (
              <SteepItem key={spec.label} className="rounded-xl border border-blush/40 bg-primary-50 p-4">
                <p className={`${labelClass} mb-1`}>{spec.label}</p>
                <p className="text-sm font-bold leading-5 text-primary-150">{spec.value}</p>
                <p className="text-xs text-primary-10">{spec.subValue}</p>
              </SteepItem>
            ))}
          </Steep>

          <div className={panelClass}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-label text-xs font-bold tracking-wide text-primary-150">
                TINGKAT SANGRAI: MEDIUM ROAST
              </h3>
              <span className="text-xs text-primary-10">
                Development Ratio: <b className="text-primary-150">13.8%</b>
              </span>
            </div>
            <motion.ol
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-5 gap-1 text-center font-label text-[10px] font-bold tracking-wide text-primary-10 sm:text-xs"
            >
              {roastLevels.map((level, i) => (
                <li key={level.name} aria-current={level.isActive ? "true" : undefined}>
                  <motion.div
                    variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    style={{ backgroundColor: level.color, originX: 0 }}
                    className={`mb-1.5 h-2 ${i === 0 ? "rounded-l-md" : ""} ${i === roastLevels.length - 1 ? "rounded-r-md" : ""} ${
                      level.isActive ? "rounded-sm ring-2 ring-primary-150 ring-offset-1" : ""
                    }`}
                  />
                  <span className={level.isActive ? "text-primary-150" : ""}>{level.name}</span>
                </li>
              ))}
            </motion.ol>
          </div>

          <div className={panelClass}>
            <p className={`${labelClass} mb-4`}>REKOMENDASI SEDUHAN OPTIMAL</p>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {brewingRecommendations.map(({ icon: Icon, method, detail }) => (
                <li key={method} className="flex gap-2">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blush">
                    <Icon className="size-4 text-cocoa" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-tight text-primary-150">{method}</p>
                    <p className="mt-0.5 text-xs text-primary-10">{detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className="flex items-start gap-3 rounded-xl border border-blush/60 bg-blush/30 p-4">
            <Quote className="size-5 shrink-0 text-primary-150" aria-hidden />
            <div>
              <blockquote className="mb-1.5 text-sm italic leading-relaxed text-body">
                Flores Bajawa Natural dari Kopi Nusa memiliki konsistensi luar biasa. Kadar sweetness brown
                sugar dan aroma floral bertahan stabil hingga tetes terakhir saat dingin.
              </blockquote>
              <figcaption className="font-label text-xs font-bold text-primary-10">
                — Rian Pratama, Q-Arabika Grader & Roastery Lab Lead
              </figcaption>
            </div>
          </figure>
        </div>
      </Pour>
    </section>
  );
}
