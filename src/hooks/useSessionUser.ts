"use client";

import { GetUserApi } from "@/api/userApi";
import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Sebelumnya logic ini di-copy di app/page.tsx dan (user)/layout.tsx.
// Sekarang cukup dipanggil sekali dari navbar.
export function useSessionUser() {
  const { objectId, username, email, setUserAuthStore, clearUserAuthStore } = useAuthStore();
  // true hanya di browser, mencegah hydration mismatch karena store dibaca dari localStorage
  const isHydrated = useSyncExternalStore(subscribe, () => true, () => false);

  const { data } = useQuery({
    queryKey: ["session-user", objectId],
    queryFn: () => GetUserApi(objectId),
    enabled: isHydrated && !!objectId,
    staleTime: 5 * 60_000,
  });

  useEffect(() => {
    if (data) setUserAuthStore(data.username, data.email, data.objectId);
  }, [data, setUserAuthStore]);

  return {
    isLoggedIn: isHydrated && !!objectId,
    username,
    email,
    logout: clearUserAuthStore,
  };
}
