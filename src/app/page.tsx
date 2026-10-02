import { NavbarSection } from "@/components/navbar";
import { FooterSection } from "@/components/footer";
import { MainLandingPage } from "@/features/landing/components/main-landing-page";

export default function LandingPage() {
  return (
    <>
      <NavbarSection />
      <MainLandingPage />
      <FooterSection />
    </>
  );
}
