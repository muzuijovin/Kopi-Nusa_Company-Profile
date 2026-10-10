import { AboutBudayaSection } from "@/features/(user)/about-us/components/budaya";
import { AboutHeroSection } from "@/features/(user)/about-us/components/hero";
import { AboutHistorySection } from "@/features/(user)/about-us/components/history";
import { AboutTeamSection } from "@/features/(user)/about-us/components/teams";

export default function AbousUsPage() {
  return (
    <>
      <div>
        <AboutHeroSection/>
        <AboutHistorySection/>
        <AboutBudayaSection/>
        <AboutTeamSection/>
      </div>
    </>
  );
}
