/*navbar */
export interface NavItems {
    label: string;
    path: string;
  }

export const navItems: NavItems[] = [
    { label: "BERANDA", path: "/" },
    { label: "TENTANG KAMI", path: "/about-us" },
    {
      label: "LAYANAN & PRODUK",
      path: "/products-services",
    },
    { label: "TIM KAMI", path: "/teams" },
    { label: "BLOG", path: "/blog-list" },
  ];