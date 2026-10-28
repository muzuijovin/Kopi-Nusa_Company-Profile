import { BlogListSection } from "@/features/(user)/blog-list/components/blog";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Jurnal Kopi | Kopi Nusa" };

export default function BlogListPage() {
  return <BlogListSection />;
}
