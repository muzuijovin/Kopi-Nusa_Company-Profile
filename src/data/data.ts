/*navbar */
interface NavItems {
  label: string;
  path: string;
}

export const navItems: NavItems[] = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about-us" },
  {
    label: "PRODUCTS & SERVICES",
    path: "/products-services",
  },
  { label: "OUR TEAM", path: "/teams" },
  { label: "BLOG", path: "/blog-list" },
];

/* landingpage */
// grid main hero section
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
      imageSrc: "/herosection-grid-2.svg", // Tempat URL foto pouring coffee v60
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

// grid footer hero section
interface CoffeeQualitiesData {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const coffeeQualitiesData: CoffeeQualitiesData[] = [
  {
    id: 1,
    icon: "/herosection-footer-grid-logo-1.svg", // Tempat untuk komponen ikon daun / buah kopi (100% Petik Merah)
    title: "100% PETIK MERAH",
    description: "Hanya buah kopi masak optimal",
  },
  {
    id: 2,
    icon: "herosection-footer-grid-logo-2.svg", // Tempat untuk komponen ikon jabat tangan / kerja sama (Direct Trade Berkeadilan)
    title: "DIRECT TRADE BERKEADILAN",
    description: "Harga premium untuk petani lokal",
  },
  {
    id: 3,
    icon: "herosection-footer-grid-logo-3.svg", // Tempat untuk komponen ikon mesin sangrai / tuas (Giesen Drum Roasting)
    title: "GIESEN DRUM ROASTING",
    description: "Profil kurva digital terkalibrasi",
  },
  {
    id: 4,
    icon: "herosection-footer-grid-logo-4.svg", // Tempat untuk komponen ikon pengukur waktu / jam resting (Resting Terkontrol)
    title: "RESTING TERKONTROL",
    description: "3–5 hari untuk aroma maksimal",
  },
];

// grid aboutsection right side
interface CoffeeFeaturesData {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const coffeeFeaturesData: CoffeeFeaturesData[] = [
  {
    id: 1,
    icon: "/landing-about-daun.svg", // Tempat untuk menyimpan komponen ikon daun (Petik Merah)
    title: "Petik Merah 100%",
    description:
      "Hanya buah kopi matang sempurna untuk menjamin kemanisan alami optimal.",
  },
  {
    id: 2,
    icon: "/landing-about-grafik.svg", // Tempat untuk menyimpan komponen ikon grafik/kurva (Profil Sangrai)
    title: "Profil Sangrai Berkelanjutan",
    description:
      "Kurva suhu digital terkalibrasi presisi pada mesin Giesen roaster kami.",
  },
];

// grid footer aboutsection
interface CoffeeMilestonesData {
  id: number;
  icon: string;
  value: string;
  label: string;
  description: string;
}

export const coffeeMilestonesData: CoffeeMilestonesData[] = [
  {
    id: 1,
    icon: "/landing-about-icon-1.svg", // Tempat untuk ikon lingkaran pohon/perkebunan
    value: "15+",
    label: "MITRA PERKEBUNAN",
    description: "Kerja sama langsung di 4 pulau utama",
  },
  {
    id: 2,
    icon: "/landing-about-icon-2.svg", // Tempat untuk ikon tabung/alat sangrai (roaster)
    value: "48",
    label: "TON KOPI TERSANGRAI/THN",
    description: "Batch kecil untuk menjaga kesegaran",
  },
  {
    id: 3,
    icon: "/landing-about-icon-3.svg", // Tempat untuk ikon toko/kedai kopi
    value: "250+",
    label: "MITRA COFFEE SHOP",
    description: "Menyajikan Kopi Nusa di seluruh nusantara",
  },
  {
    id: 4,
    icon: "/landing-about-icon-4.svg", // Tempat untuk ikon senyum (smile)
    value: "98%",
    label: "INDEKS KEPUASAN",
    description: "Rating dari mitra kafe & ritel",
  },
];

// grid product section
interface Products {
  id: number;
  type: string;
  image: string;
  location: string;
  title: string;
  tags: string[];
  roastLabel: string;
  roastLevel: number;
  price: string;
  weight: string;
  isB2b: boolean;
}

export const products: Products[] = [
  {
    id: 1,
    type: "SINGLE ORIGIN",
    image: "/landing-product-grid-1.svg",
    location: "TAKENGON, ACEH • 1,500 MASL",
    title: "Aceh Gayo Wine Process",
    tags: ["Jackfruit", "Dark Cherry", "Red Wine"],
    roastLabel: "Light-Medium",
    roastLevel: 2, // 2 balok berwarna cokelat
    price: "Rp 135.000",
    weight: "250g",
    isB2b: false,
  },
  {
    id: 2,
    type: "SINGLE ORIGIN",
    image: "/landing-product-grid-2.svg", // ganti dengan nama file foto ke-2 kamu
    location: "BONDOWOSO, JAWA TIMUR • 1,400 MASL",
    title: "Java Ijen Honey Anaerobic",
    tags: ["Floral Jasmine", "Citrus Honey", "Bergamot"],
    roastLabel: "Light Roast",
    roastLevel: 1, // 1 balok berwarna cokelat
    price: "Rp 125.000",
    weight: "250g",
    isB2b: false,
  },
  {
    id: 3,
    type: "HOUSE BLEND",
    image: "/landing-product-grid-3.svg", // ganti dengan nama file foto ke-3 kamu
    location: "70% TORAJA • 30% DAMPIT FINE ROBUSTA",
    title: "Nusa Espresso Blend 70:30",
    tags: ["Dark Chocolate", "Roasted Hazelnut", "Brown Sugar"],
    roastLabel: "Medium-Dark",
    roastLevel: 4, // 4 balok berwarna cokelat
    price: "Rp 95.000",
    weight: "250g",
    isB2b: false,
  },
  {
    id: 4,
    type: "B2B & KEMITRAAN",
    image: "/landing-product-grid-4.svg", // ganti dengan nama file foto ke-4 kamu
    location: "WHOLESALE • PRIVATE LABEL",
    title: "B2B Custom Roasting & White Label",
    tags: ["Custom Profile", "Private Brand", "Konsultasi Bar"],
    roastLabel: "Profil Sangrai: Sesuai Permintaan Kafe", // untuk teks keterangan B2B
    roastLevel: 5, // dekorasi bar penuh khas kartu B2B
    price: "Mulai Rp 65.000",
    weight: "kg",
    isB2b: true, // Penanda khusus agar layout & teks tombol berubah jadi DETAIL
  },
];

//testimonials section
interface Testimonials {
  id: number;
  rating: number;
  quote: string;
  avatar: string;
  name: string;
  role: string;
}

export const testimonials: Testimonials[] = [
  {
    id: 1,
    rating: 5,
    quote: `"Kopi Nusa Blend telah menjadi denyut nadi di espresso bar kami sejak 3 tahun lalu. Konsistensi crema dan rasa manis alaminya membuat pelanggan kafe kami selalu kembali setiap pagi."`,
    avatar: "/landing-testi-foto-1.svg", // Sesuaikan dengan path file gambar kamu
    name: "Rian Prasetya",
    role: "Head Brewer & Owner, Ruang Teduh Coffee",
  },
  {
    id: 2,
    rating: 5,
    quote: `"Sebagai roaster skala rumahan dan home brewer, saya sangat menghargai transparansi cupping score dan profil origin Kopi Nusa. Java Ijen Honey Anaerobic mereka luar biasa aromatik!"`,
    avatar: "/landing-testi-foto-2.svg",
    name: "Dina Saraswati",
    role: "Q-Grader & Coffee Enthusiast, Jakarta",
  },
  {
    id: 3,
    rating: 5,
    quote: `"Layanan private label dari Kopi Nusa sangat membantu kami meluncurkan signature blend hotel kami. Tim sangrai mereka sangat sabar dan menguasai profil rasa hingga tercapai formula ideal."`,
    avatar: "/landing-testi-foto-3.svg",
    name: "Bambang Wicaksono",
    role: "F&B Director, Alila Hospitality Group",
  },
];

// newslater

interface FaqItems {
  id: string;
  pertanyaan: string;
  jawaban: string;
}

export const faqItems: FaqItems[] = [
  {
    id: "faq-1",
    pertanyaan: "Kapan tanggal roasting kopi yang akan saya terima?",
    jawaban:
      "Semua biji kopi kami disangrai secara segar (freshly roasted) maksimal 3-7 hari sebelum pengiriman untuk memastikan Anda mendapatkan aroma dan rasa terbaik.",
  },
  {
    id: "faq-2",
    pertanyaan: "Bisakah saya meminta biji kopi digiling langsung?",
    jawaban:
      "Bisa. Anda dapat memilih tingkat gilingan (kasar, medium, atau halus) pada opsi varian sebelum memasukkan produk ke dalam keranjang belanja.",
  },
  {
    id: "faq-3",
    pertanyaan: "Berapa batas minimum pemesanan untuk kafe / B2B wholesale?",
    jawaban:
      "Untuk kemitraan grosir atau pasokan kafe, minimum pemesanan dimulai dari 5 kg dengan harga khusus B2B. Silakan hubungi tim tim sales kami.",
  },
  {
    id: "faq-4",
    pertanyaan: "Apakah kemasan Kopi Nusa ramah lingkungan?",
    jawaban:
      "Ya, kami menggunakan kemasan ramah lingkungan yang dilengkapi dengan one-way valve untuk menjaga kesegaran kopi tanpa merusak ekosistem.",
  },
];

/*About us */
// history section
interface HistoryData {
  year: string;
  icon: string;
  title: string;
  description: string;
  footer: string;
}
export const historyData: HistoryData[] = [
  {
    year: "2018",
    icon: "/about-history-icon-1.svg",
    title: "Awal Mula di Garasi Bandung",
    description:
      "Memulai perjalanan dengan satu unit mesin roasting manual berkapasitas 1kg di teras rumah di Bandung, menguji profil seduhan bersama para sahabat terdekat.",
    footer: "Kapasitas: 1KG Batch",
  },
  {
    year: "2020",
    icon: "/about-history-icon-2.svg",
    title: "Kemitraan Petani Pertama",
    description:
      "Menginisiasi kemitraan direct-trade perdana bersama kelompok tani di dataran tinggi Gayo, Aceh dan Lembah Bajawa, Flores dengan sistem penetapan harga berkeadilan.",
    footer: "2 Koperasi Tani Mitra",
  },
  {
    year: "2022",
    icon: "/about-history-icon-3.svg",
    title: "Roastery & Sensory Lab",
    description:
      "Peresmian fasilitas roastery modern dengan mesin profil presisi dan laboratorium sensory cupping berstandar SCA untuk edukasi publik dan kalibrasi rasa.",
    footer: "SCA Certified Lab",
  },
  {
    year: "2024",
    icon: "/about-history-icon-4.svg",
    title: "250+ Mitra Coffee Shop",
    description:
      "Dipercaya menyuplai biji kopi sangrai terbaik untuk lebih dari 250 kedai kopi independen di seluruh Jawa dan Bali, merajut ekosistem kopi nusantara yang kuat.",
    footer: "Jaringan Jawa & Bali",
  },
];

// budaya section
interface BudayaData {
  icon: string;
  title: string;
  description: string;
  linkText: string;
}

export const budayaData: BudayaData[] = [
  {
    icon: "/about-budaya-icon-1.svg",
    title: "Kemitraan Berkelanjutan",
    description:
      "Kami menerapkan prinsip Direct & Fair Trade dengan membayar harga premium di atas pasar komoditas langsung kepada para petani. Langkah ini mendukung kesejahteraan keluarga petani serta mendorong pelestarian lingkungan perkebunan.",
    linkText: "DIRECT TRADE",
  },
  {
    icon: "/about-budaya-icon-2.svg",
    title: "Presisi Setiap Roasting",
    description:
      "Setiap batch disangrai dengan software profiling mutakhir dan evaluasi cupping ketat berstandar Specialty Coffee Association (SCA). Kami menjaga konsistensi kurva panas demi mengeluarkan spektrum rasa alami yang paling autentik.",
    linkText: "SCA PROTOCOL",
  },
  {
    icon: "/about-budaya-icon-3.svg",
    title: "Edukasi & Transparansi",
    description:
      "Kami membagikan informasi lengkap mengenai ketinggian tanam, varietas, proses pascapanen, hingga nama prosesor kopi di setiap kemasan. Keterbukaan rantai pasok adalah bentuk penghormatan kami kepada para pecinta kopi.",
    linkText: "100% TRACEABLE",
  },
  {
    icon: "/about-budaya-icon-4.svg",
    title: "Komunitas & Kebersamaan",
    description:
      "Kopi adalah jembatan obrolan hangat dan persahabatan tanpa sekat. Melalui lokakarya seduh rutin dan sesi sensory mingguan, kami merawat ruang berkumpul yang inklusif bagi siapa pun yang mencintai kopi Indonesia.",
    linkText: "KOMUNITAS NUSA",
  },
];

// team section
interface TeamData {
  foto: string;
  tag: string;
  role: string;
  name: string;
  description: string;
  footerText: string;
}

export const teamData: TeamData[] = [
  {
    foto: "/about-team-foto-1.svg",
    tag: "Q-GRADER CERTIFIED",
    role: "FOUNDER & MASTER ROASTER",
    name: "Raden Arya",
    description:
      "Telah mendedikasikan lebih dari 9 tahun dalam sains penyangraian kopi specialty. Arya meyakini setiap origin kopi Indonesia memiliki jiwa dan kurva sangrai unik yang pantas diperlakukan istimewa.",
    footerText: "Est. 2018 / Roasting Lab",
  },
  {
    foto: "/about-team-foto-3.svg",
    tag: "AGRONOMY & TRADE",
    role: "HEAD OF GREEN BEAN SOURCING",
    name: "Siti Nurhaliza",
    description:
      "Menjelajahi lereng pegunungan dari Aceh hingga Papua untuk membina hubungan akrab dengan para petani. Siti memastikan proses pascapanen higienis dan harga perdagangan yang adil bagi petani lokal.",
    footerText: "Origin Specialist",
  },
  {
    foto: "/about-team-foto-2.svg",
    tag: "SENSORY JUDGE",
    role: "LEAD SENSORY & CUPPING",
    name: "Bima Prasetyo",
    description:
      "Pakar evaluasi organoleptik dengan kepekaan rasa yang tajam. Bima memimpin kalibrasi harian rasa, pelatihan barista mitra, serta penyelenggaraan lokakarya cupping edukatif bagi masyarakat umum.",
    footerText: "Head of Education",
  },
];

/*Products & services */
// hero section
export const categories: string[] = [
  "Semua",
  "Single Origin",
  "House Blend",
  "Layanan B2B",
  "Pelatihan Barista",
];

// products section
interface ProductsData {
  img: string;
  tags: string[];
  rating: string;
  origin: string;
  status: string;
  title: string;
  notes: string[];
  price: string;
}

export const productsData: ProductsData[] = [
  {
    img: "/proser-hero-foto-1.svg",
    tags: ["SINGLE ORIGIN", "NATURAL"],
    rating: "4.9",
    origin: "NGADA, NTT • 1.450 MDPL",
    status: "Stok Sangrai Segar",
    title: "Flores Bajawa Natural",
    notes: ["Milk Chocolate", "Floral", "Brown Sugar"],
    price: "Rp 120.000",
  },
  {
    img: "/proser-hero-foto-2.svg",
    tags: ["SINGLE ORIGIN", "WASHED"],
    rating: "5.0",
    origin: "TAKENGON, ACEH • 1.600 MDPL",
    status: "Micro-Lot Terbatas",
    title: "Aceh Gayo Pantan Musara",
    notes: ["Blackcurrant", "Peach", "Bergamot"],
    price: "Rp 140.000",
  },
  {
    img: "/proser-hero-foto-3.svg",
    tags: ["SINGLE ORIGIN", "ANAEROBIC"],
    rating: "4.8",
    origin: "KINTAMANI, BALI • 1.300 MDPL",
    status: "Eksperimental",
    title: "Bali Kintamani Anaerobic",
    notes: ["Citrus Orange", "Jasmine", "Honey"],
    price: "Rp 130.000",
  },
  {
    img: "/proser-hero-foto-4.svg",
    tags: ["HOUSE BLEND", "ESPRESSO FOCUS"],
    rating: "4.9",
    origin: "TORAJA 70% • TEMANGGUNG 30%",
    status: "Best Seller Kafe",
    title: "Nusa Heritage Espresso Blend",
    notes: ["Roasted Almond", "Dark Cocoa", "Caramel"],
    price: "Rp 95.000",
  },
  {
    img: "/proser-hero-foto-5.svg",
    tags: ["SINGLE ORIGIN", "HONEY PROCESS"],
    rating: "4.7",
    origin: "GUNUNG TILU, JABAR • 1.500 MDPL",
    status: "Manis Alami",
    title: "Sunda Aromanis Honey",
    notes: ["Red Apple", "Cinnamon", "Molasses"],
    price: "Rp 125.000",
  },
  {
    img: "/proser-hero-foto-6.svg",
    tags: ["HOUSE BLEND", "LIGHT ROAST"],
    rating: "4.9",
    origin: "KERINCI WASHED • GAYO NATURAL",
    status: "Cocok Manual Brew",
    title: "Morning Breeze Filter Blend",
    notes: ["Tropical Fruit", "Lemongrass", "Sweet Cane"],
    price: "Rp 110.000",
  },
];
// services section
// 1. Data Spesifikasi Dasar (Ketinggian, Varietas, Pascapanen)
interface SpecsData {
  label: string;
  value: string;
  subValue: string;
}

export const specsData: SpecsData[] = [
  {
    label: "KETINGGIAN TANAM",
    value: "1.450 - 1.600 mdpl",
    subValue: "Gunung Inerie, NTT",
  },
  {
    label: "VARIETAS POHON",
    value: "Kartika & S-795",
    subValue: "Arabika Warisan",
  },
  {
    label: "METODE PASCAPANEN",
    value: "Natural Anaerobic",
    subValue: "72h Controlled Tank",
  },
];

// 2. Data Tingkat Sangrai (Roast Level)
interface RoastLevels {
  name: string;
  colorClass: string;
  isActive?: boolean;
}

export const roastLevels: RoastLevels[] = [
  { name: "LIGHT", colorClass: "bg-[#EADCCB] rounded-l-md" },
  { name: "LIGHT-MEDIUM", colorClass: "bg-[#D1BCA6]" },
  {
    name: "MEDIUM",
    colorClass: "bg-[#553722] ring-2 ring-[#553722] ring-offset-1 rounded-sm",
    isActive: true,
  },
  { name: "MED-DARK", colorClass: "bg-[#3D2514]" },
  { name: "DARK", colorClass: "bg-[#24140A] rounded-r-md" },
];

// 3. Data Rekomendasi Seduhan
interface BrewingRecommendations {
  icon: string;
  method: string;
  detail: string;
}

export const brewingRecommendations: BrewingRecommendations[] = [
  { icon: "☕", method: "V60 / Kalita", detail: "Rasio 1:15 • 92°C" },
  { icon: "🧪", method: "AeroPress", detail: "Inverted • 88°C" },
  { icon: "🍹", method: "Espresso Modern", detail: "1:2.2 • 28 detik" },
];

/*blog list */
// blog list section

export const categoriesArticle: string[] = [
  "Semua",
  "Panduan Menyeduh",
  "Catatan Roasting",
  "Kisah Petani",
  "Industri Kopi",
];
