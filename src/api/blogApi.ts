import { dataApi } from "@/lib/backendless";

// tabel `blog` di Backendless
export interface Blog {
  objectId: string;
  judul: string;
  category: string;
  tagar: string;
  ringkasan: string;
  isiCerita: string;
  image_url?: string;
  author?: string;
  authorRole?: string;
  authorAvatar?: string;
  readTime?: number;
  featured?: boolean;
  created: number;
}

export type NewBlog = Omit<Blog, "objectId" | "created">;

export async function GetBlogsApi() {
  const res = await dataApi.get<Blog[]>("/data/blog", {
    // artikel sorotan selalu di atas, sisanya terbaru dulu
    params: { sortBy: "featured desc,created desc", pageSize: 100 },
  });
  return res.data;
}

export async function GetBlogApi(objectId: string) {
  const res = await dataApi.get<Blog>(`/data/blog/${objectId}`);
  return res.data;
}

export async function CreateBlogApi(blog: NewBlog) {
  const res = await dataApi.post<Blog>("/data/blog", blog);
  return res.data;
}
