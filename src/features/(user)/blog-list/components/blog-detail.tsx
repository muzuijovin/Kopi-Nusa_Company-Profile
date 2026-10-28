"use client";
import { GetBlogApi } from "@/api/blogApi";
import { Pour, RoastReveal } from "@/components/motion";
import { isOptimizableImage } from "@/lib/images";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogAuthor, BlogMeta, blogImage } from "./blog-meta";

export function BlogDetailSection({ id }: { id: string }) {
  const { data: blog, isPending, isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => GetBlogApi(id),
  });

  return (
    <article className="bg-primary-50 px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog-list"
          className="mb-8 inline-flex min-h-11 items-center gap-2 rounded-full px-3 font-label text-sm font-medium text-primary-10 transition-colors hover:bg-primary-100 hover:text-primary-150"
        >
          <ArrowLeft className="size-4" aria-hidden /> Kembali ke Jurnal
        </Link>

        {isError ? (
          <p className="rounded-2xl border border-line bg-white p-10 text-center text-body">
            Artikel tidak ditemukan atau gagal dimuat.
          </p>
        ) : isPending ? (
          <div className="space-y-4" aria-busy>
            <div className="h-5 w-40 animate-pulse rounded bg-primary-100" />
            <div className="h-12 w-full animate-pulse rounded bg-primary-100" />
            <div className="aspect-video w-full animate-pulse rounded-2xl bg-primary-100" />
          </div>
        ) : (
          <>
            <Pour>
              <span className="rounded-full bg-blush px-3 py-1 font-label text-xs font-bold uppercase tracking-wider text-cocoa">
                {blog.category}
              </span>
              <h1 className="mt-4 font-headline text-3xl font-bold leading-tight text-primary-150 md:text-5xl">
                {blog.judul}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-body">{blog.ringkasan}</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4">
                <BlogAuthor blog={blog} />
                <BlogMeta blog={blog} />
              </div>
            </Pour>

            <RoastReveal className="my-10 aspect-video w-full rounded-2xl" delay={0.2}>
              <Image
                src={blogImage(blog)}
                alt={blog.judul}
                fill
                preload
                quality={90}
                unoptimized={!isOptimizableImage(blogImage(blog))}
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </RoastReveal>

            <Pour delay={0.3} className="flex flex-col gap-5 text-[17px] leading-8 text-body">
              {blog.isiCerita
                .split(/\\n|\n/)
                .filter(Boolean)
                .map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
            </Pour>

            <ul className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
              {blog.tagar
                .split(/\s+/)
                .filter(Boolean)
                .map((tag) => (
                  <li key={tag} className="rounded-full bg-sand px-3 py-1 text-sm text-body">
                    {tag.startsWith("#") ? tag : `#${tag}`}
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
