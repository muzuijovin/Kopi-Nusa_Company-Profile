import { Steep, SteepItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { historyData } from "@/data/data";
import Image from "next/image";

export function AboutHistorySection() {
  return (
    <section id="sejarah" className="scroll-mt-20 bg-primary-50 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Langkah demi langkah"
          title="Sejarah & Jejak Perjalanan"
          description="Dari garasi sederhana hingga menjadi wadah kolaborasi pecinta kopi dan komunitas petani di pelosok tanah air."
        />

        {/* timeline: garis penghubung antar tahun di desktop */}
        <div className="relative mt-14">
          <div aria-hidden className="absolute left-0 right-0 top-11 hidden h-px bg-line lg:block" />
          <Steep className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {historyData.map((item) => (
              <SteepItem key={item.year} className="relative flex flex-col rounded-2xl border border-line bg-white p-8">
                <div className="mb-4 flex w-full items-center justify-between">
                  <span className="rounded-full bg-blush px-3 py-1 font-label text-xs font-semibold text-cocoa">
                    {item.year}
                  </span>
                  <Image src={item.icon} alt="" width={24} height={24} />
                </div>
                <h3 className="mb-3 font-headline text-[22px] font-medium leading-7.5 text-ink">
                  {item.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-body">{item.description}</p>
                <p className="mt-auto w-full border-t border-line pt-4 font-label text-xs font-bold uppercase tracking-wider text-primary-10">
                  {item.footer}
                </p>
              </SteepItem>
            ))}
          </Steep>
        </div>
      </div>
    </section>
  );
}
