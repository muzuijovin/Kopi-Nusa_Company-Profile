import { navItems } from "@/data/data";
import { Globe, Handshake, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const socials = [
  { label: "Instagram Kopi Nusa", href: "https://instagram.com", icon: FaInstagram },
  { label: "Website Kopi Nusa", href: "/", icon: Globe },
  { label: "Email Kopi Nusa", href: "mailto:halo@kopinusa.id", icon: Mail },
];

const locations = [
  { title: "Roastery & Lab Bandung", detail: "Jl. Riau No. 128, Cihapit, Bandung, Jawa Barat" },
  { title: "Creative Space & Bar Jakarta", detail: "Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan" },
  { title: "Jam Operasional", detail: "Senin - Minggu: 07.30 - 21.00 WIB" },
];

const contacts = [
  { label: "halo@kopinusa.id", href: "mailto:halo@kopinusa.id", icon: Mail },
  { label: "(021) 5890 2341", href: "tel:02158902341", icon: Phone },
  { label: "Kemitraan Kafe & B2B Roasting", href: "/products-services", icon: Handshake },
];

const headingClass = "font-label text-sm font-bold uppercase tracking-wider text-primary-150";
const linkClass =
  "inline-flex min-h-8 items-center gap-2 transition-colors hover:text-primary-150 hover:underline";

export function FooterSection() {
  return (
    <footer className="w-full border-t border-line bg-white px-4 py-14 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col">
        <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/navbar-kopi-nusa-logo.svg" alt="" width={30} height={30} />
              <p className="font-headline text-[22px] font-bold text-primary-150">Kopi Nusa</p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-body">
              Roastery kopi artisanal yang memadukan dedikasi pada single-origin Nusantara, relasi
              langsung dengan petani lokal, dan proses sangrai presisi.
            </p>
            <div className="mt-1 flex items-center gap-2 text-body">
              {socials.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full bg-primary-100 transition-colors hover:bg-blush hover:text-primary-150"
                >
                  <Icon className="size-4" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          {/* navigasi */}
          <nav aria-label="Navigasi footer" className="flex flex-col gap-4">
            <h2 className={headingClass}>Navigasi</h2>
            <ul className="flex flex-col gap-1 text-sm text-body">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className={linkClass}>
                    {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admin/login" className={linkClass}>
                  Publikasi artikel
                </Link>
              </li>
            </ul>
          </nav>

          {/* lokasi */}
          <div className="flex flex-col gap-4">
            <h2 className={headingClass}>Fasilitas Roastery</h2>
            <dl className="flex flex-col gap-3 text-sm">
              {locations.map((loc) => (
                <div key={loc.title}>
                  <dt className="font-semibold text-ink">{loc.title}</dt>
                  <dd className="mt-0.5 text-body">{loc.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* kontak */}
          <div className="flex flex-col gap-4">
            <h2 className={headingClass}>Kontak & Kerjasama</h2>
            <ul className="flex flex-col gap-1 text-sm text-body">
              {contacts.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Link href={href} className={linkClass}>
                    <Icon className="size-4 text-primary-150" aria-hidden />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-line pt-6 text-xs text-primary-10 sm:flex-row">
          <p>© {new Date().getFullYear()} Kopi Nusa Roastery. Seluruh hak cipta dilindungi.</p>
          <p className="font-headline italic">Cita Rasa Nusantara di Setiap Seduhan</p>
        </div>
      </div>
    </footer>
  );
}
