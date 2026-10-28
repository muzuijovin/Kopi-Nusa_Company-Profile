import { AuthShell } from "@/components/auth-shell";
import { FormLoginAdmin } from "@/features/(admin)/login/components/formLoginAdmin";
import { Info, ShieldCheck } from "lucide-react";

export default function LoginAdmin() {
  return (
    <AuthShell
      badge={
        <>
          <ShieldCheck className="size-3.5" aria-hidden /> PORTAL ADMINISTRATOR
        </>
      }
      title="Masuk ke Ruang Redaksi Kopi Nusa"
      description="Akses akun admin untuk menulis artikel blog dan mengelola konten roastery."
      intro={
        <>
          <Info className="mt-0.5 size-4 shrink-0 text-primary-150" aria-hidden />
          Area terbatas untuk pengelola dan staf roastery Kopi Nusa. Masukkan akun terdaftar untuk
          mengelola kurasi blog.
        </>
      }
    >
      <FormLoginAdmin />
    </AuthShell>
  );
}
