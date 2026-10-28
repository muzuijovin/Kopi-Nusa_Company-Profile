import { Steep, SteepItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { budayaData } from "@/data/data";
import Image from "next/image";

export function AboutBudayaSection() {
  return (
    <section className="bg-primary-100 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="left"
          eyebrow="Prinsip & fondasi"
          title="Budaya & Nilai Kerja"
          description="Empat pilar komitmen kami dalam mengolah biji kopi nusantara, mulai dari bibit di kebun hingga sajian di meja Anda."
        />

        <Steep className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {budayaData.map((item, index) => (
            <SteepItem key={item.title} className="flex flex-col rounded-2xl bg-white p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-blush">
                  <Image src={item.icon} alt="" width={24} height={24} />
                </span>
                <span className="font-headline text-4xl font-bold text-sand" aria-hidden>
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-3 font-headline text-[22px] font-medium leading-7.5 text-ink">
                {item.title}
              </h3>
              <p className="mb-8 text-sm leading-relaxed text-body">{item.description}</p>
              <span className="mt-auto font-label text-xs font-bold uppercase tracking-wider text-cocoa">
                {item.linkText}
              </span>
            </SteepItem>
          ))}
        </Steep>
      </div>
    </section>
  );
}
