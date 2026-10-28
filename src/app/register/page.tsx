import { AuthShell } from "@/components/auth-shell";
import { FormRegister } from "@/features/register/components/formRegister";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <AuthShell
      activeTab="register"
      badge="KOPI NUSA ROASTERY PORTAL"
      title="Bergabung dengan Komunitas Kopi Nusa"
      description="Buat akun untuk mengelola pesanan wholesale dan mengakses catatan cupping lab."
      intro="Daftarkan diri Anda untuk mendapatkan hak akses penuh ke halaman dashboard."
    >
      <FormRegister />
      <p className="mt-4 text-center text-sm text-body">
        Sudah punya akun?{" "}
        <Link href="/login" className="font-semibold text-primary-150 hover:underline">
          Masuk di sini
        </Link>
      </p>
    </AuthShell>
  );
}
