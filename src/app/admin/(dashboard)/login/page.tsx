import { FormLoginAdmin } from "@/features/(admin)/login/components/formLoginAdmin";
import { GoDotFill } from "react-icons/go";

export default function LoginAdmin() {
  return (
    <>
      <div className="relative w-full min-h-screen flex flex-col justify-center items-center py-12 bg-primary-50 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-size-[16px_16px] overflow-hidden">
        {/* Lingkaran Cahaya / Shadow di Sudut Kiri Atas */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

        {/* Lingkaran Cahaya / Shadow di Sudut Kanan Bawah */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

        {/* Konten Portal Kopi Nusa Anda Mulai dari Sini */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Masukkan Logo, Judul, dan Card Login di sini */}
          <div className="flex flex-col items-center mb-6">
            <a href="/">
              <div className="p-2 bg-[#F5F3EF] rounded-lg mb-4">
                <img src="/login-logo-kopi-nusa.svg" alt="logo" />
              </div>
            </a>
            {/* tulisan */}
            <div className="flex gap-2 items-center justify-center bg-[#EFEEEA] rounded-lg shadow-sm mb-3 py-1 px-5">
              <img src="/login-logo-admin.svg" alt="logo" />
              <h2 className="font-label font-medium text-xs text-[#5E3407]">
                PORTAL ADMINISTRATOR
              </h2>
            </div>

            <h1 className="font-headline font-semibold text-[28px] text-[#1B1C1A] mb-2">
              Selamat Datang di Portal Komunitas Kopi Nusa
            </h1>

            <h3 className="font-body text-[15px] text-[#50453E] mb-6">
              Akses akun Anda untuk menulis artikel blog, mengelola pesanan
              wholesale, dan mengakses catatan cupping lab.
            </h3>
          </div>

          {/* container */}
          <div className="w-[65vh] h-max p-10 bg-[#FFFFFF] rounded-lg shadow-md">
            {/* kata-kata */}
            <div className="bg-[#F5F3EF] rounded-lg p-4 flex items-start gap-2">
              <img src="/login-admin-i-logo.svg" alt="logo" />
              <h1 className="font-body text-[13px] text-[#50453E]">
                Area otentikasi terbatas untuk pengelola dan staf roastery Kopi
                Nusa. Masukkan akun terdaftar untuk mengelola inventaris, kurasi
                blog, dan data pesanan wholesale.
              </h1>
            </div>
            {/* form input username & email & password */}
            <FormLoginAdmin />
          </div>
        </div>
      </div>
    </>
  );
}
