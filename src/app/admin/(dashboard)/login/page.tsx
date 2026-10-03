import { FormLoginAdmin } from "@/features/(admin)/login/components/formLoginAdmin";
import { GoDotFill } from "react-icons/go";


export default function LoginAdmin() {
  return(
    <>
    <div className="flex flex-col justify-center items-center h-max py-15 bg-primary-50">
            <div className="flex flex-col items-center mb-6">
              <div className="pb-4">
                <img src="/login-logo-kopi-nusa.svg" alt="logo" />
              </div>
              {/* tulisan */}
              <div className="flex gap-2 items-center justify-center bg-[#EFEEEA] rounded-lg">
                <GoDotFill className="w-1.5 h-1.5 text-primary-150" />
                <h2 className="font-label font-medium text-xs text-[#5E3407]">
                  KOPI NUSA ROASTERY PORTAL
                </h2>
              </div>
    
              <h1 className="font-headline font-semibold text-[28px] text-[#1B1C1A]">
                Selamat Datang di Portal Komunitas Kopi Nusa
              </h1>
    
              <h3 className="font-body text-[15px] text-[#50453E]">
                Akses akun Anda untuk menulis artikel blog, mengelola pesanan
                wholesale, dan mengakses catatan cupping lab.
              </h3>
            </div>
    
            {/* container */}
            <div className="w-[65vh] h-max p-10 bg-[#FFFFFF] rounded-lg shadow-md">
              {/* login/register */}
              <div className="grid grid-cols-2 p-0.75 rounded-lg bg-[#EFEEEA]">
                <a href="/login">
                  <div className="flex justify-center items-center rounded-lg bg-[#FFFFFF] hover:shadow-md">
                    <div className="flex gap-2">
                      <img src="/login-logo-masuk.svg" alt="logo masuk" />
                      <h1 className="font-label font-medium text-primary-150 text-[14px]">
                        Masuk
                      </h1>
                    </div>
                  </div>
                </a>
                <a href="/register">
                  <div className="flex justify-center items-center rounded-lg hover:shadow-md active:bg-white">
                    <div className="flex gap-2">
                      <img src="/login-logo-register.svg" alt="logo register" />
                      <h1 className="font-label font-medium text-primary-150 text-[14px]">
                        Daftar
                      </h1>
                    </div>
                  </div>
                </a>
              </div>
    
              {/* form input username & email & password */}
              <FormLoginAdmin/>
            </div>
          </div>
    </>
  )
}