import { AuthShell } from "@/components/auth-shell";
import { FormLogin } from "@/features/login/components/formLogin";
import Link from "next/link";

export default function LoginPage() {
  return (
    <AuthShell
      activeTab="login"
      badge="KOPI NUSA ROASTERY PORTAL"
      title="Selamat Datang di Portal Komunitas Kopi Nusa"
      description="Akses akun Anda untuk mengelola pesanan wholesale dan catatan cupping lab."
      intro="Silakan masukkan kredensial akun Anda untuk mengakses dashboard."
    >
      <FormLogin />
      <p className="mt-4 text-center text-sm text-body">
        Belum memiliki akun Kopi Nusa?{" "}
        <Link href="/register" className="font-semibold text-primary-150 hover:underline">
          Daftar akun baru
        </Link>
      </p>
    </AuthShell>
  );
}
