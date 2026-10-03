import { FooterSection } from "@/components/footer";
import { NavbarSection } from "@/components/navbar";
import MainLandingPage from "./(user)/landing-user/page";

export default function LandingPage() {
  return (
    <>
      <NavbarSection />
      <MainLandingPage/>
      <FooterSection />
    </>
  );
}
