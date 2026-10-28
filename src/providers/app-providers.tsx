"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MotionConfig } from "framer-motion";
import { useState } from "react";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  // dibuat sekali per sesi browser; data dianggap segar 1 menit agar tidak refetch tiap pindah halaman
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 60_000, refetchOnWindowFocus: false } },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* reducedMotion="user" -> animasi otomatis dimatikan bila OS user meminta reduced motion */}
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </QueryClientProvider>
  );
}
