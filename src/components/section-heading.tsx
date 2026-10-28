import { Pour } from "./motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
}

// Dipakai di semua section (sebelumnya blok eyebrow + judul + deskripsi di-copy di 8 tempat)
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  as: Heading = "h2",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col gap-3 ${isCenter ? "items-center text-center mx-auto" : "items-start"} max-w-2xl`}
    >
      <Pour className="flex items-center gap-2">
        <span className={`h-px w-6 ${isDark ? "bg-blush" : "bg-cocoa"}`} />
        <span
          className={`font-label text-xs font-bold uppercase tracking-[0.15em] ${isDark ? "text-blush" : "text-cocoa"}`}
        >
          {eyebrow}
        </span>
        {isCenter && <span className={`h-px w-6 ${isDark ? "bg-blush" : "bg-cocoa"}`} />}
      </Pour>

      <Pour delay={0.08}>
        <Heading
          className={`font-headline text-3xl font-bold leading-tight tracking-tight md:text-[40px] md:leading-12 ${isDark ? "text-white" : "text-primary-150"}`}
        >
          {title}
        </Heading>
      </Pour>

      {description && (
        <Pour delay={0.16}>
          <p
            className={`font-body text-base leading-relaxed ${isDark ? "text-white/80" : "text-body"}`}
          >
            {description}
          </p>
        </Pour>
      )}
    </div>
  );
}
