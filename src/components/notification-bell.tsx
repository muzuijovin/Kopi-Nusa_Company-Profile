"use client";

import { GetBlogsApi } from "@/api/blogApi";
import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, BookOpen, CheckCheck, Tag } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  href: string;
  createdAt: number;
  kind: "article" | "promo";
}

interface ReadState {
  lastSeen: number; // semua notifikasi sebelum waktu ini dianggap sudah dibaca
  readIds: string[];
}

// notifikasi promo statis; artikel baru diambil dari tabel `blog` di Backendless
const PROMO: NotificationItem = {
  id: "promo-first-order",
  title: "Diskon 15% pesanan pertama",
  description: "Langganan buletin Rasa Nusantara dan dapatkan voucher untuk biji kopi pilihanmu.",
  href: "/#newsletter-email",
  createdAt: new Date("2026-10-20T08:00:00+07:00").getTime(),
  kind: "promo",
};

const MAX_ARTICLES = 5;
const storageKey = (userId: string) => `kopi-nusa:notif-read:${userId}`;

function loadReadState(userId: string): ReadState {
  try {
    const raw = localStorage.getItem(storageKey(userId));
    if (raw) return JSON.parse(raw) as ReadState;
  } catch {
    // localStorage bisa diblokir (mode privat) — anggap belum ada yang dibaca
  }
  return { lastSeen: 0, readIds: [] };
}

function saveReadState(userId: string, state: ReadState) {
  try {
    localStorage.setItem(storageKey(userId), JSON.stringify(state));
  } catch {
    // abaikan; status baca hanya bertahan selama sesi ini
  }
}

const relativeTime = new Intl.RelativeTimeFormat("id", { numeric: "auto" });
function timeAgo(timestamp: number) {
  const minutes = Math.round((timestamp - Date.now()) / 60_000);
  if (Math.abs(minutes) < 60) return relativeTime.format(minutes, "minute");
  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) return relativeTime.format(hours, "hour");
  return relativeTime.format(Math.round(hours / 24), "day");
}

export function NotificationBell() {
  const objectId = useAuthStore((s) => s.objectId);
  const [isOpen, setIsOpen] = useState(false);
  // komponen ini hanya dirender setelah login (di client), jadi aman membaca localStorage di sini
  const [readState, setReadState] = useState<ReadState>(() => loadReadState(objectId));
  const containerRef = useRef<HTMLDivElement>(null);

  // memakai cache query yang sama dengan halaman blog, jadi tidak ada request tambahan
  const { data: blogs = [], isPending } = useQuery({ queryKey: ["blogs"], queryFn: GetBlogsApi });

  const articles: NotificationItem[] = [...blogs]
    .sort((a, b) => b.created - a.created)
    .slice(0, MAX_ARTICLES)
    .map((blog) => ({
      id: blog.objectId,
      title: blog.judul,
      description: `Artikel baru di ${blog.category}`,
      href: `/blog-list/${blog.objectId}`,
      createdAt: blog.created,
      kind: "article",
    }));
  const items = [...articles, PROMO].sort((a, b) => b.createdAt - a.createdAt);

  const isUnread = (item: NotificationItem) =>
    item.createdAt > readState.lastSeen && !readState.readIds.includes(item.id);
  const unreadCount = items.filter(isUnread).length;

  const updateReadState = (next: ReadState) => {
    setReadState(next);
    saveReadState(objectId, next);
  };
  const markAllRead = () => updateReadState({ lastSeen: Date.now(), readIds: [] });
  const markRead = (id: string) => {
    if (!readState.readIds.includes(id)) {
      updateReadState({ ...readState, readIds: [...readState.readIds, id] });
    }
    setIsOpen(false);
  };

  // tutup panel saat klik di luar atau tekan Escape
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={unreadCount ? `Notifikasi, ${unreadCount} belum dibaca` : "Notifikasi"}
        aria-expanded={isOpen}
        aria-controls="notification-panel"
        onClick={() => setIsOpen((open) => !open)}
        className={`relative flex size-11 cursor-pointer items-center justify-center rounded-full text-primary-150 transition-colors hover:bg-primary-100 ${
          isOpen ? "bg-primary-100" : ""
        }`}
      >
        {/* lonceng "berdenting" berkala selama masih ada notifikasi belum dibaca */}
        <motion.span
          className="flex origin-top"
          animate={unreadCount ? { rotate: [0, -16, 13, -9, 5, 0] } : { rotate: 0 }}
          transition={
            unreadCount ? { duration: 0.9, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" } : undefined
          }
        >
          <Bell className="size-5" aria-hidden />
        </motion.span>
        <AnimatePresence>
          {unreadCount > 0 && (
            <motion.span
              key={unreadCount}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 22 }}
              aria-hidden
              className="absolute right-1 top-1 flex min-w-5 items-center justify-center rounded-full bg-red-700 px-1 font-label text-[10px] font-bold leading-5 text-white ring-2 ring-white"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="notification-panel"
            role="dialog"
            aria-label="Notifikasi"
            initial={{ clipPath: "inset(0% 0% 100% 0% round 16px)", opacity: 0 }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 16px)", opacity: 1 }}
            exit={{ clipPath: "inset(0% 0% 100% 0% round 16px)", opacity: 0, transition: { duration: 0.18 } }}
            transition={{ duration: 0.35, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-x-3 top-18 z-50 overflow-hidden rounded-2xl border border-line bg-white shadow-xl sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-3 sm:w-96"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div>
                <p className="font-headline text-lg font-bold text-primary-150">Notifikasi</p>
                <p className="text-xs text-primary-10">
                  {unreadCount ? `${unreadCount} belum dibaca` : "Semua sudah dibaca"}
                </p>
              </div>
              {unreadCount > 0 && (
                <button
                  type="button"
                  onClick={markAllRead}
                  className="flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full px-3 font-label text-xs font-semibold text-primary-150 transition-colors hover:bg-primary-100"
                >
                  <CheckCheck className="size-4" aria-hidden />
                  Tandai semua dibaca
                </button>
              )}
            </div>

            <ul className="max-h-[min(70vh,26rem)] overflow-y-auto py-1">
              {isPending && !blogs.length
                ? Array.from({ length: 3 }, (_, i) => (
                    <li key={i} className="flex gap-3 px-5 py-3">
                      <span className="size-9 shrink-0 animate-pulse rounded-full bg-primary-100" />
                      <span className="flex-1 space-y-2">
                        <span className="block h-3.5 w-4/5 animate-pulse rounded bg-primary-100" />
                        <span className="block h-3 w-1/2 animate-pulse rounded bg-primary-100" />
                      </span>
                    </li>
                  ))
                : items.map((item, i) => {
                    const unread = isUnread(item);
                    const Icon = item.kind === "article" ? BookOpen : Tag;
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12 + i * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => markRead(item.id)}
                          className={`flex gap-3 px-5 py-3 transition-colors hover:bg-primary-50 ${unread ? "bg-blush/25" : ""}`}
                        >
                          <span
                            className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                              unread ? "bg-primary-150 text-white" : "bg-primary-100 text-primary-10"
                            }`}
                          >
                            <Icon className="size-4" aria-hidden />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className={`line-clamp-2 text-sm leading-snug ${unread ? "font-semibold text-ink" : "text-body"}`}>
                              {item.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-primary-10">
                              {item.description} · {timeAgo(item.createdAt)}
                            </span>
                          </span>
                          {unread && (
                            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-cocoa">
                              <span className="sr-only">Belum dibaca</span>
                            </span>
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}
            </ul>

            <Link
              href="/blog-list"
              onClick={() => setIsOpen(false)}
              className="flex min-h-12 items-center justify-center border-t border-line font-label text-xs font-semibold text-primary-150 transition-colors hover:bg-primary-50"
            >
              Lihat semua artikel
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
