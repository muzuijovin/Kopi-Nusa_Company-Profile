import { Steep, SteepItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/data";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="bg-primary-50 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Suara komunitas & mitra"
          title="Dipercaya Lebih dari 250+ Pemilik Kedai Kopi"
          description="Konsistensi rasa sangrai dan komitmen pada kualitas rantai pasok adalah alasan utama para pemilik usaha mempercayakan bar kopinya pada Kopi Nusa."
        />

        <Steep className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <SteepItem key={item.id} className="h-full">
              <figure className="relative flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-8 shadow-sm">
                <Quote className="absolute right-7 top-7 size-10 text-sand" aria-hidden />
                <div>
                  <div className="mb-4 flex gap-1" role="img" aria-label={`Rating ${item.rating} dari 5`}>
                    {Array.from({ length: item.rating }, (_, i) => (
                      <Star key={i} className="size-5 fill-star text-star" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="text-[15px] italic leading-relaxed text-body">
                    “{item.quote}”
                  </blockquote>
                </div>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    quality={90}
                    className="size-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-primary-150">{item.name}</p>
                    <p className="text-xs text-primary-10">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            </SteepItem>
          ))}
        </Steep>
      </div>
    </section>
  );
}
