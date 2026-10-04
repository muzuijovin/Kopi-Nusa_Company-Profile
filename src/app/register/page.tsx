import { FormRegister } from "@/features/register/components/formRegister";
import { GoDotFill } from "react-icons/go";

export default function RegisterPage() {
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
            <div className="flex gap-2 items-center justify-center bg-[#EFEEEA] rounded-lg shadow-sm mb-3">
              <GoDotFill className="w-1.5 h-1.5 text-primary-150" />
              <h2 className="font-label font-medium text-xs text-[#5E3407]">
                KOPI NUSA ROASTERY PORTAL
              </h2>
            </div>

            <h1 className="font-headline font-semibold text-[28px] text-[#1B1C1A] mb-2">
              Selamat Datang di Portal Komunitas Kopi Nusa
            </h1>

            <h3 className="font-body text-[15px] text-[#50453E] mb-6">
              Akses akun Anda untuk mengelola pesanan
              wholesale, dan mengakses catatan cupping lab.
            </h3>
          </div>

          {/* container */}
          <div className="w-[70vh] md:w-[50vh] lg:w-[80vh] h-max p-10 bg-[#FFFFFF] rounded-lg shadow-md">
            {/* login/register */}
            <div className="grid grid-cols-1 gap-2 md:gap-1 md:grid-cols-2 p-0.75 rounded-lg bg-[#EFEEEA] mb-8">
              <a href="/login">
                <div className="flex justify-center items-center rounded-lg hover:shadow-md active:bg-white py-2.5">
                  <div className="flex gap-2">
                    <img src="/login-logo-masuk.svg" alt="logo masuk" />
                    <h1 className="font-label font-medium text-primary-150 text-[14px]">
                      Masuk
                    </h1>
                  </div>
                </div>
              </a>
              <a href="/register">
                <div className="flex justify-center items-center rounded-lg bg-[#FFFFFF] hover:shadow-md  py-2.5">
                  <div className="flex gap-2">
                    <img src="/login-logo-register.svg" alt="logo register" />
                    <h1 className="font-label font-medium text-primary-150 text-[14px]">
                      Daftar Akun Baru
                    </h1>
                  </div>
                </div>
              </a>
            </div>

            {/* kata-kata */}
            <div className="bg-[#F5F3EF] rounded-lg p-4">
              <h1 className="font-body text-[13px] text-[#50453E]">
                Silakan masukkan kredensial akun Anda untuk mengakses dashboard,
              </h1>
            </div>

            {/* form input username & email & password */}
            <FormRegister />
          </div>
        </div>
      </div>
    </>
  );
}
