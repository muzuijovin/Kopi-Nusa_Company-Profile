import QueryProvider from "@/providers/query-providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Nusa",
  description: "Kopi terenak se-Indonesia",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-[#FDFBF9] text-[#2C1E16] antialiased selection:bg-[#5C3D2E] selection:text-white">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
