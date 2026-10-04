/*navbar */
interface NavItems {
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

/* landingpage */
// herosection
interface CoffeeBatchData {
  id: number;
  header: {
    minilogo: string;
    title: string;
    badgeText: string;
  };
  media: {
    imageSrc: string;
    imageBadge: string;
  };
  content: {
    sectionTitle: string;
    mainTitle: string;
    tags: string[];
  };
  footer: {
    leftInfo: {
      minilogo: string;
      text: string;
    };
    rightInfo: {
      text: string;
    };
  };
}

export const coffeeBatchData: CoffeeBatchData[] = [
  {
    // === CONTAINER 1: SENSORY TASTING ===
    id: 1,
    header: {
      minilogo: "/herosection-grid-logokecil-1.svg", // Tempat ikon cangkir/tasting
      title: "SENSORY TASTING",
      badgeText: "SCA 86.5",
    },
    media: {
      imageSrc: "/herosection-grid-1.svg", // Tempat URL foto pouring coffee v60
      imageBadge: "LIGHT-MEDIUM",
    },
    content: {
      sectionTitle: "ORIGIN PILIHAN MINGGU INI",
      mainTitle: "Kintamani Natural Anaerobic",
      tags: ["Jackfruit", "Wild Honey", "Bergamot"],
    },
    footer: {
      leftInfo: {
        minilogo: "/herosection-grid-logokecil-bawah-1.svg", // Tempat ikon gunung/ketinggian
        text: "1.550MASL",
      },
      rightInfo: {
        text: "Petik Merah Optimal",
      },
    },
  },
  {
    // === CONTAINER 2: KURASI BATCH ===
    id: 2,
    header: {
      minilogo: "/herosection-grid-logokecil-2.svg", // Tempat ikon teko/kurasi
      title: "KURASI BATCH",
      badgeText: "Batch #109",
    },
    media: {
      imageSrc: "/herosection-grid-1.svg", // Tempat URL foto pouring coffee v60
      imageBadge: "DIRECT TRADE 2025",
    },
    content: {
      sectionTitle: "METODE & PROFIL ROASTING",
      mainTitle: "Penyeduhan Manual V60",
      tags: ["Q-Grader Certified", "Giesen Roaster", "Single Origin"],
    },
    footer: {
      leftInfo: {
        minilogo: "/herosection-grid-logokecil-bawah-2.svg", // Tempat ikon jam/status roasted
        text: "FreshlyRoasted",
      },
      rightInfo: {
        text: "Mikro-Batch Presisi",
      },
    },
  },
  {
    // === CONTAINER 3: ROAST PROFILE ===
    id: 3,
    header: {
      minilogo: "/herosection-grid-logokecil-3.svg", // Tempat ikon grafik/profil
      title: "ROAST PROFILE",
      badgeText: "Kurva RoR",
    },
    media: {
      imageSrc: "/herosection-grid-3.svg", // Tempat URL foto pouring coffee v60
      imageBadge: "",
    }, // Kontainer ketiga tidak memiliki foto tengah, digantikan panel rasio

    content: {
      sectionTitle: "STANDAR KALIBRASI MUTU",
      mainTitle: "Spesifikasi Teknis Sangrai",
      tags: ["Resting 3-5 Hari", "Air Flow Stabil", "Drum Digital"],
    },
    footer: {
      leftInfo: {
        minilogo: "/herosection-grid-logokecil-bawah-3.svg", // Tempat ikon ceklis/jaminan mutu
        text: "JaminanMutu",
      },
      rightInfo: {
        text: "Detail Batch",
      },
    },
  },
];
