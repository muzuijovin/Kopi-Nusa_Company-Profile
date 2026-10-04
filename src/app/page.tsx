"use client";

import { FooterSection } from "@/components/footer";
import { NavbarSection } from "@/components/navbar";
import MainLandingPage from "./(user)/landing/page";

import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function LandingPage() {
  const { objectId, setUserAuthStore } = useAuthStore();

  const apiUrl = "https://api.backendless.com";
  const appId = "49BC5A71-3AE3-4B65-B99F-A4F5AAD7738D";
  const restApiKey = "5650E33C-6FB3-4D44-B9E4-9CFF3E576AD1";
  const url = `${apiUrl}/${appId}/${restApiKey}`;
  // 1. Ambil data (MURNI hanya fetch & return data, tidak boleh ada set store di dalam queryFn)
  const { data } = useQuery({
    queryKey: ["session-user", objectId],
    queryFn: async () => {
      // Sesuai dokumentasi Backendless untuk mendapatkan data user aktif berdasarkan objectId
      const res = await axios.get(`${url}/users/${objectId}`);
      return res?.data;
    },
    enabled: !!objectId,
  });

  // 2. Zustand baru diperbarui di sini setelah data dari server masuk
  useEffect(() => {
    if (data) {
      setUserAuthStore(data.username, data.email, data.objectId);
    }
  }, [data, setUserAuthStore]);

  return (
    <>
      <NavbarSection />
      <MainLandingPage />
      <FooterSection />
    </>
  );
}
