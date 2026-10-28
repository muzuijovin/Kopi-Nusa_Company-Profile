import { CountUp, Pour, RoastReveal, Steep, SteepItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { coffeeFeaturesData, coffeeMilestonesData, sectionImages } from "@/data/data";
import Image from "next/image";

export function AboutHomeSection() {
  return (
    <section className="bg-primary-50 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* sebelah kiri: foto */}
          <div className="relative">
            <RoastReveal className="aspect-4/3 w-full rounded-2xl lg:aspect-auto lg:h-130">
              <Image
                src={sectionImages.landingAbout}
                alt="Biji kopi sangrai dalam karung goni dari petani mitra"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </RoastReveal>

            <Pour
              delay={0.6}
              wrapperClassName="absolute inset-x-3 bottom-3"
              className="flex flex-col items-start justify-between gap-2 rounded-xl bg-white p-4 shadow-md sm:flex-row sm:items-center"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blush p-2.5">
                  <Image src="/landing-about-logo-daun.svg" alt="" width={28} height={28} />
                </div>
                <div>
                  <p className="font-label text-sm font-bold text-primary-150">Petani Mitra Binaan</p>
                  <p className="text-[13px] text-body">Dataran Tinggi Gayo & Kintamani</p>
                </div>
              </div>
              <span className="self-end rounded-full bg-blush px-3 py-1.5 font-label text-xs font-bold tracking-wider text-cocoa sm:self-auto">
                DIRECT TRADE
              </span>
            </Pour>
          </div>

          {/* sebelah kanan: cerita */}
          <div className="flex flex-col items-start gap-6">
            <SectionHeading
              align="left"
              eyebrow="Perjalanan kami sejak 2018"
              title="Dedikasi Menjaga Keaslian Rasa, Menyejahterakan Petani Nusantara"
            />
            <Pour delay={0.2} className="flex flex-col gap-4 text-base leading-relaxed text-body">
              <p>
                Berawal dari garasi kecil di Bandung, Kopi Nusa bertransformasi menjadi laboratorium
                sangrai yang menjembatani petani kopi di Aceh Gayo, Toraja, Kintamani, hingga lereng
                Gunung Ijen dengan para penikmat kopi yang haus akan transparansi rasa.
              </p>
              <p>
                Kami mempraktikkan kemitraan berkeadilan (Direct-Trade), membeli biji specialty grade
                dengan harga premium di atas pasar komoditas, serta mendampingi proses pascapanen
                secara ketat.
              </p>
            </Pour>

            <Steep className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {coffeeFeaturesData.map((item) => (
                <SteepItem key={item.id} className="flex items-start gap-3 rounded-xl bg-primary-200 px-5 py-4">
                  <Image src={item.icon} alt="" width={20} height={20} className="mt-0.5" />
                  <div>
                    <h3 className="font-label text-sm font-bold text-primary-150">{item.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-body">{item.description}</p>
                  </div>
                </SteepItem>
              ))}
            </Steep>
          </div>
        </div>

        {/* statistik */}
        <Steep className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coffeeMilestonesData.map((item) => (
            <SteepItem
              key={item.id}
              className="flex flex-col items-center rounded-2xl bg-primary-200 p-6 text-center"
            >
              <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-blush">
                <Image src={item.icon} alt="" width={28} height={28} />
              </div>
              <CountUp
                value={item.value}
                className="mb-2 font-headline text-5xl font-bold tabular-nums text-primary-150 md:text-[56px]"
              />
              <p className="font-label text-xs font-bold text-primary-10">{item.label}</p>
              <p className="mt-1 text-[13px] text-body">{item.description}</p>
            </SteepItem>
          ))}
        </Steep>
      </div>
    </section>
  );
}
