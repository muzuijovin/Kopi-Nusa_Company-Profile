import { AboutBudayaSection } from "@/features/(user)/about-us/components/budaya";
import { AboutHeroSection } from "@/features/(user)/about-us/components/hero";
import { AboutHistorySection } from "@/features/(user)/about-us/components/history";
import { AboutTeamSection } from "@/features/(user)/about-us/components/teams";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tentang Kami | Kopi Nusa" };

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutHistorySection />
      <AboutBudayaSection />
      <AboutTeamSection />
    </>
  );
}
