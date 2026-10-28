"use client";
import { CreateBlogApi } from "@/api/blogApi";
import { SubmitButton } from "@/components/form-field";
import { Pour } from "@/components/motion";
import { categoriesArticle } from "@/data/data";
import { blogSchema, type BlogSchema } from "@/features/validation/blog-schema";
import { isOptimizableImage } from "@/lib/images";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";

const fieldClass =
  "w-full rounded-lg border border-line bg-primary-50 px-4 py-3 text-base text-ink placeholder:text-primary-10/70 focus:border-primary-150 focus:outline-none aria-invalid:border-red-600";
const labelClass = "font-label text-xs font-bold uppercase tracking-wide text-primary-150";

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function CreateBlogSection() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BlogSchema>({
    resolver: zodResolver(blogSchema),
    defaultValues: { image_url: "", authorRole: "", featured: false },
  });

  const imageUrl = useWatch({ control, name: "image_url" });
  const isValidImage = /^https?:\/\/\S+$/.test(imageUrl ?? "");

  const { mutate, isPending } = useMutation({
    mutationFn: (values: BlogSchema) =>
      CreateBlogApi({
        ...values,
        image_url: values.image_url || undefined,
        // estimasi waktu baca ~200 kata per menit
        readTime: Math.max(1, Math.round(values.isiCerita.split(/\s+/).length / 200)),
      }),
    onSuccess(blog) {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("Artikel berhasil diterbitkan");
      router.push(`/blog-list/${blog.objectId}`);
    },
    onError(error) {
      toast.error(isAxiosError(error) ? error.response?.data?.message : "Gagal menerbitkan artikel");
    },
  });

  return (
    <main className="min-h-screen bg-primary-50 px-4 py-12 md:px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/blog-list"
          className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 font-label text-sm font-medium text-primary-10 transition-colors hover:bg-primary-100 hover:text-primary-150"
        >
          <ArrowLeft className="size-4" aria-hidden /> Kembali ke Blog
        </Link>

        <Pour className="my-6">
          <h1 className="mb-3 font-headline text-4xl font-bold text-primary-150 md:text-[40px]">
            Tulis Cerita Kopi Baru
          </h1>
          <p className="text-[15px] text-body">
            Bagikan catatan sangrai, cerita kebun, resep seduhan, atau pengalaman kopi Anda kepada
            komunitas.
          </p>
        </Pour>

        <form
          onSubmit={handleSubmit((values) => mutate(values))}
          noValidate
          className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm md:p-10"
        >
          <Field id="judul" label="Judul artikel" error={errors.judul?.message}>
            <input id="judul" className={fieldClass} placeholder="Tuliskan judul artikel" aria-invalid={!!errors.judul} {...register("judul")} />
          </Field>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field id="category" label="Kategori" error={errors.category?.message}>
              <select id="category" className={fieldClass} defaultValue="" aria-invalid={!!errors.category} {...register("category")}>
                <option value="" disabled>
                  Pilih kategori
                </option>
                {categoriesArticle
                  .filter((c) => c !== "Semua")
                  .map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </Field>
            <Field id="tagar" label="Tagar" error={errors.tagar?.message}>
              <input id="tagar" className={fieldClass} placeholder="#V60 #ManualBrew" aria-invalid={!!errors.tagar} {...register("tagar")} />
            </Field>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field id="author" label="Nama penulis" error={errors.author?.message}>
              <input id="author" className={fieldClass} placeholder="Raden Arya" aria-invalid={!!errors.author} {...register("author")} />
            </Field>
            <Field id="authorRole" label="Jabatan penulis (opsional)">
              <input id="authorRole" className={fieldClass} placeholder="Master Roaster" {...register("authorRole")} />
            </Field>
          </div>

          <Field id="image_url" label="URL foto sampul" error={errors.image_url?.message}>
            <input
              id="image_url"
              type="url"
              className={fieldClass}
              placeholder="https://images.unsplash.com/…"
              aria-invalid={!!errors.image_url}
              {...register("image_url")}
            />
            <p className="text-xs text-primary-10">
              Gunakan foto resolusi tinggi (min. lebar 1600px). Link Unsplash otomatis dioptimasi.
            </p>
            {isValidImage && (
              <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-xl bg-primary-100">
                <Image
                  src={imageUrl}
                  alt="Pratinjau foto sampul"
                  fill
                  unoptimized={!isOptimizableImage(imageUrl)}
                  sizes="(max-width: 896px) 100vw, 800px"
                  className="object-cover"
                />
              </div>
            )}
          </Field>

          <Field id="ringkasan" label="Ringkasan" error={errors.ringkasan?.message}>
            <textarea
              id="ringkasan"
              rows={3}
              className={`${fieldClass} resize-y`}
              placeholder="Ringkasan singkat yang tampil di kartu blog"
              aria-invalid={!!errors.ringkasan}
              {...register("ringkasan")}
            />
          </Field>

          <Field id="isiCerita" label="Isi cerita" error={errors.isiCerita?.message}>
            <textarea
              id="isiCerita"
              rows={10}
              className={`${fieldClass} resize-y`}
              placeholder="Tuliskan cerita lengkap. Pisahkan paragraf dengan baris baru."
              aria-invalid={!!errors.isiCerita}
              {...register("isiCerita")}
            />
          </Field>

          <label className="flex min-h-11 cursor-pointer items-center gap-3 text-sm text-body">
            <input type="checkbox" className="checkbox checkbox-sm" {...register("featured")} />
            Jadikan sorotan utama di halaman blog
          </label>

          <div className="flex justify-end border-t border-line pt-2">
            <div className="w-full sm:w-64">
              <SubmitButton isPending={isPending}>TERBITKAN ARTIKEL</SubmitButton>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
