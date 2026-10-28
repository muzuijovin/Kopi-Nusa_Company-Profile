import type { Blog } from "@/api/blogApi";
import { sectionImages } from "@/data/data";
import { isOptimizableImage } from "@/lib/images";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";

export const blogImage = (blog: Blog) => blog.image_url || sectionImages.blogFallback;

export const formatDate = (timestamp: number) =>
  new Date(timestamp).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

// estimasi ~200 kata per menit bila kolom readTime kosong
export const readTimeOf = (blog: Blog) =>
  blog.readTime ?? Math.max(1, Math.round(blog.isiCerita.split(/\s+/).length / 200));

export function BlogMeta({ blog }: { blog: Blog }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-xs text-primary-10">
      <span className="flex items-center gap-1.5">
        <Clock className="size-3.5" aria-hidden /> {readTimeOf(blog)} menit baca
      </span>
      <span className="flex items-center gap-1.5">
        <Calendar className="size-3.5" aria-hidden />
        <time dateTime={new Date(blog.created).toISOString()}>{formatDate(blog.created)}</time>
      </span>
    </div>
  );
}

export function BlogAuthor({ blog }: { blog: Blog }) {
  const name = blog.author || "Tim Kopi Nusa";
  return (
    <div className="flex items-center gap-3">
      {blog.authorAvatar ? (
        <Image
          src={blog.authorAvatar}
          alt=""
          width={40}
          height={40}
          quality={90}
          unoptimized={!isOptimizableImage(blog.authorAvatar)}
          className="size-10 rounded-full object-cover"
        />
      ) : (
        <span className="flex size-10 items-center justify-center rounded-full bg-primary-150 font-label text-sm font-bold text-white">
          {name.charAt(0)}
        </span>
      )}
      <div>
        <p className="text-sm font-bold text-ink">{name}</p>
        <p className="font-label text-xs font-semibold uppercase tracking-wider text-primary-10">
          {blog.authorRole || "Kontributor"}
        </p>
      </div>
    </div>
  );
}
