"use client";

import { motion } from "framer-motion";
import { LogIn, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AuthShellProps {
  badge: React.ReactNode;
  title: string;
  description: string;
  intro: React.ReactNode;
  // tab Masuk / Daftar hanya untuk portal komunitas
  activeTab?: "login" | "register";
  children: React.ReactNode;
}

const tabs = [
  { key: "login", href: "/login", label: "Masuk", icon: LogIn },
  { key: "register", href: "/register", label: "Daftar Akun Baru", icon: UserPlus },
] as const;

export function AuthShell({ badge, title, description, intro, activeTab, children }: AuthShellProps) {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-primary-50 bg-[radial-gradient(#d6cfc8_1px,transparent_1px)] bg-size-[16px_16px] px-4 py-12">
      <div className="pointer-events-none absolute left-0 top-0 size-96 -translate-x-1/4 -translate-y-1/4 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-96 translate-x-1/4 translate-y-1/4 rounded-full bg-amber-200/40 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 32, rotateX: 10, transformPerspective: 900 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative z-10 flex w-full max-w-lg flex-col items-center"
      >
        <Link href="/" aria-label="Kembali ke beranda" className="mb-4 rounded-xl bg-primary-100 p-2 transition-shadow hover:shadow-lg">
          <Image src="/login-logo-kopi-nusa.svg" alt="" width={48} height={48} preload />
        </Link>
        <div className="mb-3 flex items-center gap-2 rounded-full bg-sand px-4 py-1 font-label text-xs font-medium text-cocoa shadow-sm">
          {badge}
        </div>
        <h1 className="mb-2 text-center font-headline text-[28px] font-semibold leading-tight text-ink">{title}</h1>
        <p className="mb-6 text-center text-[15px] text-body">{description}</p>

        <div className="w-full rounded-2xl bg-white p-6 shadow-md sm:p-10">
          {activeTab && (
            <nav aria-label="Pilih masuk atau daftar" className="mb-8 grid grid-cols-2 gap-1 rounded-xl bg-sand p-1">
              {tabs.map(({ key, href, label, icon: Icon }) => {
                const isActive = activeTab === key;
                return (
                  <Link
                    key={key}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className="relative flex min-h-11 items-center justify-center gap-2 rounded-lg font-label text-sm font-medium text-primary-150"
                  >
                    {isActive && (
                      <motion.span layoutId="auth-tab" className="absolute inset-0 rounded-lg bg-white shadow-sm" />
                    )}
                    <Icon className="relative size-4" aria-hidden />
                    <span className="relative">{label}</span>
                  </Link>
                );
              })}
            </nav>
          )}

          <div className="flex items-start gap-2 rounded-lg bg-primary-100 p-4 text-sm text-body">{intro}</div>
          {children}
        </div>
      </motion.div>
    </main>
  );
}
