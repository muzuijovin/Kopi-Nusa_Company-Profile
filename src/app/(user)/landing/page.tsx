import { AboutHomeSection } from "@/features/(user)/landing-page/components/about";
import { HeroSection } from "@/features/(user)/landing-page/components/hero";
import NewsletterAndFaq from "@/features/(user)/landing-page/components/newsletter";
import { ProductSection } from "@/features/(user)/landing-page/components/product-hightlight";
import { TestimonialsSection } from "@/features/(user)/landing-page/components/testimonials";

export default function MainLandingPage() {
  return (
    <>
      <div>
        <HeroSection />
        <AboutHomeSection />
        <ProductSection />
        <TestimonialsSection/>
        <NewsletterAndFaq/>
      </div>
    </>
  );
}
