import { ProserProductsSection } from "@/features/(user)/products-services/components/products";
import { ProserServicesSection } from "@/features/(user)/products-services/components/services";

export default function ProductsServicesPage() {
  return (
    <>
      <div>
        <ProserProductsSection/>
        <ProserServicesSection/>
      </div>
    </>
  );
}
