import * as z from "zod";
import { categoriesArticle } from "@/data/data";

const blogCategories = categoriesArticle.filter((c) => c !== "Semua") as [string, ...string[]];

export const blogSchema = z.object({
  judul: z.string().trim().min(10, "judul minimal 10 karakter").max(150, "judul maksimal 150 karakter"),
  category: z.enum(blogCategories, "pilih salah satu kategori"),
  tagar: z.string().trim().min(1, "tagar wajib diisi, contoh: #V60 #ManualBrew"),
  image_url: z.union([z.url("URL foto tidak valid"), z.literal("")]),
  ringkasan: z.string().trim().min(20, "ringkasan minimal 20 karakter").max(300, "ringkasan maksimal 300 karakter"),
  isiCerita: z.string().trim().min(50, "isi cerita minimal 50 karakter"),
  author: z.string().trim().min(1, "nama penulis wajib diisi"),
  authorRole: z.string().trim(),
  featured: z.boolean(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
