import { NavbarUserSection } from "@/components/(user)/navbar-user";
import { FooterSection } from "@/components/footer";

export default function UserLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <div>
        <NavbarUserSection />
        <div>{children}</div>
        <FooterSection />
      </div>
    </>
  );
}
