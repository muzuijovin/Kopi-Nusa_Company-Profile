import { FooterSection } from "@/components/footer";
import { NavbarSection } from "@/components/navbar";

// Server component: sinkronisasi sesi user sekarang ditangani di dalam NavbarSection
export default function UserLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <NavbarSection />
      <main>{children}</main>
      <FooterSection />
    </>
  );
}
