import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Semua foto HD diambil dari Unsplash lalu dioptimasi Next ke AVIF/WebP sesuai ukuran layar
    // format objek (bukan new URL) agar query string Unsplash seperti ?w=2000 tetap diizinkan
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com", pathname: "/**" }],
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
};

export default nextConfig;
