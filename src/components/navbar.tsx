import { navItems } from "@/data/data";
import { FaUser } from "react-icons/fa";

export function NavbarSection() {
  return (
    <>
      <nav className="navbar bg-[#ffffff] shadow-md lg:px-12">
        {/* start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-primary-900 hover:shadow-md lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="">Beranda</a>
              </li>
              <li>
                <a href="">Tentang Kami</a>
              </li>
              <li>
                <a href="">Layanan & Produk</a>
              </li>
              <li>
                <a href="">Tim Kami</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>

          <div className="flex gap-3 ml-2">
            <img
              src="/navbar-kopi-nusa-logo.svg"
              alt="logo"
              className="cursor-pointer"
            />
            <div className="flex flex-col gap-0">
              <h1 className="font-bold font-headline text-[22px] text-primary-150 cursor-pointer">
                Kopi Nusa
              </h1>
              <h2 className="font-label font-bold text-[10px] text-primary-10 cursor-pointer">
                CITA RASA NUSANTARA DI SETIAP SEDUHAN
              </h2>
            </div>
          </div>
        </div>
        {/* center */}
        <div className="hidden lg:navbar-center lg:flex gap-2">
          {navItems.map((item) => {
            return (
              <a key={item.label} href={item.path}>
                <button className="btn font-label bg-[#ffff] border-none shadow-none hover:shadow-md">
                  {item.label}
                </button>
              </a>
            );
          })}
          <a href="" className="ml-4 flex gap-2">
            <button className="btn font-label bg-[#F5F3EF] border-none shadow-none hover:shadow-sm rounded-3xl">
              <img src="/navbar-gembok.svg" alt="gembok" />
              <span>TULIS BLOG</span>
            </button>
          </a>
        </div>
        {/* end */}
        <div className="navbar-end">
          <div className="flex flex-col items-center gap-1">
             <h1 className="hidden font-body font-semibold text-xs text-shadow-black">jovin nanti di edit</h1>
          </div>
            <a href="/login" className="ml-4 gap-2 ">
              <button className="btn font-label bg-[#F5F3EF] border-none shadow-none hover:shadow-sm rounded-3xl py-1">
                <span>Masuk</span>
              </button>
            </a>

          <div className="rounded-full w-9 h-9 overflow-hidden flex justify-center items-center bg-slate-200 ml-2">
            <FaUser />
          </div>
        </div>
      </nav>
    </>
  );
}
