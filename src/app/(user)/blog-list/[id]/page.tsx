import { BlogDetailSection } from "@/features/(user)/blog-list/components/blog-detail";

export default async function BlogDetailPage({ params }: PageProps<"/blog-list/[id]">) {
  const { id } = await params;
  return <BlogDetailSection id={id} />;
}
