import { navItems } from "@/data/data";
import { useAuthStore } from "@/store/useAuthStore";

export function NavbarUserSection() {
  const { email, username } = useAuthStore();
  const handleLogout = () => {
    // Hapus data dari localStorage
    localStorage.clear();

    // Arahkan user ke halaman login atau beranda
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="navbar bg-[#ffffff] shadow-md lg:px-6 z-70">
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
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="/about-us">Tentang Kami</a>
              </li>
              <li>
                <a href="/products-services">Layanan & Produk</a>
              </li>
              <li>
                <a href="/teams">Tim Kami</a>
              </li>
              <li>
                <a href="/blog-list">Blog</a>
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
              <h2 className="font-label font-bold text-[8px] text-primary-10 cursor-pointer">
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
          <a href="/admin/login" className="ml-4 flex gap-2">
            <button className="btn font-label bg-[#F5F3EF] border-none shadow-none hover:shadow-sm rounded-3xl">
              <img src="/navbar-gembok.svg" alt="gembok" />
              <span>TULIS BLOG</span>
            </button>
          </a>
        </div>
        {/* end */}
        <div className="navbar-end">
          <div className="flex flex-col gap-0 justify-center pr-2">
            {/* Detail Info Pengguna */}
            <div className="flex flex-col items-end text-right">
              <span className="font-body font-semibold text-sm text-gray-800 leading-tight">
                {username}
              </span>
              <span className="font-body text-[9px] text-gray-400 tracking-wide mt-0.5 max-w-35 truncate">
                {email}
              </span>
            </div>
          </div>

          {/* Pembungkus dropdown dengan class dropdown-end */}
          <div className="dropdown dropdown-end">
            {/* BAGIAN TRIGGER (Foto Profil menggantikan SVG) */}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="rounded-full w-9 h-9 overflow-hidden flex justify-center items-center bg-slate-200">
                <img src="/foto-jovin-najwan.jpg" alt="foto jovin najwan" />
              </div>
            </div>

            {/* BAGIAN MENU DROPDOWN */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="flex flex-col text-right border-b border-base-200 pointer-events-none gap-0 items-start px-4 py-2 ">
                  <span className="font-body font-semibold text-sm text-gray-800 leading-tight">
                    {username}
                  </span>
                  <span className="font-body text-[9px] text-gray-400 tracking-wide mt-0.5 max-w-35 truncate">
                    {email}
                  </span>
                </div>
              </li>
              <li>
                <a href="/profile">Profil Saya</a>
              </li>
              <li className="mt-1 border-t border-base-200 pt-1">
                {/* Tombol Logout dengan Event Handler onClick */}
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:bg-red-50 active:bg-red-100!important"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
