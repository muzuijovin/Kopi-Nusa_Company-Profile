"use client";

import { navItems } from "@/data/data";
import { useSessionUser } from "@/hooks/useSessionUser";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Lock, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ScrollProgress } from "./motion";

const isActivePath = (pathname: string, path: string) =>
  path === "/" ? pathname === "/" : pathname.startsWith(path);

export function NavbarSection() {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, username, email, logout } = useSessionUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setIsScrolled(y > 12));

  // tutup menu mobile setiap pindah halaman (disesuaikan saat render, tanpa effect)
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setIsMenuOpen(false);
  }

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const initial = (username || email || "?").charAt(0).toUpperCase();

  return (
    <>
      <ScrollProgress />
      <header
        className={`sticky top-0 z-50 w-full border-b transition-[background-color,box-shadow,border-color] duration-300 ${
          isScrolled
            ? "border-line bg-white/85 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white"
        }`}
      >
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-18 md:px-6"
        >
          {/* logo dan brand */}
          <Link href="/" className="flex shrink-0 items-center gap-3 rounded-lg">
            <Image src="/navbar-kopi-nusa-logo.svg" alt="" width={36} height={36} preload />
            <span className="flex flex-col">
              <span className="font-headline text-xl font-bold leading-6 text-primary-150 md:text-[22px]">
                Kopi Nusa
              </span>
              <span className="hidden font-label text-[9px] font-bold tracking-wider text-primary-10 sm:block">
                CITA RASA NUSANTARA DI SETIAP SEDUHAN
              </span>
            </span>
          </Link>

          {/* menu desktop */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.path);
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative flex min-h-11 items-center rounded-full px-4 font-label text-xs font-semibold tracking-wide transition-colors duration-200 ${
                      isActive ? "text-primary-150" : "text-body hover:text-primary-150"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-primary-100"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* aksi kanan */}
          <div className="flex items-center gap-2">
            <Link
              href="/admin/login"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-primary-100 px-4 font-label text-xs font-semibold text-primary-150 transition-colors hover:bg-blush xl:flex"
            >
              <Lock className="size-4" aria-hidden />
              CREATE BLOG
            </Link>

            {isLoggedIn ? (
              <div className="dropdown dropdown-end">
                <button
                  type="button"
                  aria-label={`Menu akun ${username}`}
                  className="flex min-h-11 cursor-pointer items-center gap-3 rounded-full py-1 pl-1 pr-1 transition-colors hover:bg-primary-100 md:pr-3"
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-primary-150 font-label text-sm font-bold text-white">
                    {initial}
                  </span>
                  <span className="hidden max-w-36 flex-col items-start text-left md:flex">
                    <span className="truncate text-sm font-semibold leading-tight text-ink">
                      {username}
                    </span>
                    <span className="max-w-36 truncate text-xs text-primary-10">{email}</span>
                  </span>
                </button>
                <ul className="menu dropdown-content z-50 mt-3 w-56 rounded-box border border-line bg-white p-2 shadow-lg">
                  <li className="pointer-events-none px-3 py-2">
                    <span className="flex flex-col items-start gap-0 p-0">
                      <span className="text-sm font-semibold text-ink">{username}</span>
                      <span className="truncate text-xs text-primary-10">{email}</span>
                    </span>
                  </li>
                  <li className="mt-1 border-t border-line pt-1">
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="min-h-11 text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="size-4" aria-hidden />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex min-h-11 items-center rounded-full bg-primary-150 px-5 font-label text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Login
              </Link>
            )}

            <button
              type="button"
              aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex size-11 cursor-pointer items-center justify-center rounded-full text-primary-150 transition-colors hover:bg-primary-100 lg:hidden"
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* menu mobile: panel turun seperti tetesan */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
              className="border-t border-line bg-white lg:hidden"
            >
              <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
                {[...navItems, { label: "CREATE BLOG", path: "/admin/login" }].map((item, i) => {
                  const isActive = isActivePath(pathname, item.path);
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 }}
                    >
                      <Link
                        href={item.path}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex min-h-12 items-center rounded-xl px-4 font-label text-sm font-semibold ${
                          isActive ? "bg-primary-100 text-primary-150" : "text-body hover:bg-primary-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
