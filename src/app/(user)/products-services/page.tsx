import { ProserProductsSection } from "@/features/(user)/products-services/components/products";
import { ProserServicesSection } from "@/features/(user)/products-services/components/services";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Produk & Layanan | Kopi Nusa" };

export default function ProductsServicesPage() {
  return (
    <>
      <ProserProductsSection />
      <ProserServicesSection />
    </>
  );
}
