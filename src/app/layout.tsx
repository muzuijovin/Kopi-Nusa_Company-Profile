import AppProviders from "@/providers/app-providers";
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Kopi Nusa",
  description: "Roastery kopi artisanal Nusantara — cita rasa Nusantara di setiap seduhan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-theme="light"
      className={`${playfair.variable} ${jakarta.variable} ${grotesk.variable}`}
    >
      <body className="bg-primary-50 text-ink antialiased selection:bg-primary-150 selection:text-white">
        <AppProviders>{children}</AppProviders>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
