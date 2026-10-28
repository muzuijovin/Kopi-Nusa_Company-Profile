// Seed dummy data ke Backendless (tabel `Team` dan `blog`).
// Jalankan: node scripts/seed-backendless.mjs
// Aman dijalankan berulang: data dengan judul / nama yang sama akan di-update, bukan diduplikasi.

const BASE_URL =
  "https://api.backendless.com/A73033C9-9473-4F00-8873-C91B67EEA0F4/5B9272C5-AA16-45BD-B422-F21BB7E83DFF";

const unsplash = (id, w = 2000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

const team = [
  {
    fullName: "Raden Arya",
    role: "Founder & Master Roaster",
    category: "ROASTERY",
    description:
      "Lebih dari 9 tahun mendalami sains penyangraian specialty. Merancang setiap kurva sangrai agar karakter asli tiap origin Nusantara keluar sempurna.",
    photoUrl: unsplash("1507003211169-0a1dd7228f2d", 1200),
    sortOrder: 1,
  },
  {
    fullName: "Siti Nurhaliza",
    role: "Head of Green Bean Sourcing",
    category: "SOURCING",
    description:
      "Menjelajahi lereng Gayo hingga Bajawa untuk membina kemitraan direct-trade dan memastikan proses pascapanen higienis di tingkat petani.",
    photoUrl: unsplash("1534528741775-53994a69daeb", 1200),
    sortOrder: 2,
  },
  {
    fullName: "Bima Prasetyo",
    role: "Lead Sensory & Cupping",
    category: "SENSORY",
    description:
      "Q-Grader berlisensi yang memimpin kalibrasi rasa harian, menilai setiap batch dengan protokol cupping SCA sebelum dirilis.",
    photoUrl: unsplash("1500648767791-00dcc994a43e", 1200),
    sortOrder: 3,
  },
  {
    fullName: "Dewi Lestari",
    role: "Head Barista Trainer",
    category: "BARISTA",
    description:
      "Membimbing barista kafe mitra memahami variabel ekstraksi, kalibrasi grinder, dan teknik latte art yang konsisten.",
    photoUrl: unsplash("1488426862026-3ee34a7d66df", 1200),
    sortOrder: 4,
  },
  {
    fullName: "Galih Ramadhan",
    role: "Roast Technician",
    category: "ROASTERY",
    description:
      "Mengoperasikan drum roaster Giesen dan menjaga data Rate of Rise setiap batch tetap stabil dari musim ke musim.",
    photoUrl: unsplash("1506794778202-cad84cf45f1d", 1200),
    sortOrder: 5,
  },
  {
    fullName: "Ayu Kartika",
    role: "Quality Control Analyst",
    category: "SENSORY",
    description:
      "Mengukur kadar air, densitas, dan warna sangrai di laboratorium untuk memastikan setiap kemasan memenuhi standar Kopi Nusa.",
    photoUrl: unsplash("1544005313-94ddf0286df2", 1200),
    sortOrder: 6,
  },
  {
    fullName: "Hendra Wijaya",
    role: "B2B Partnership Manager",
    category: "BISNIS",
    description:
      "Mendampingi 250+ kafe mitra mulai dari kurasi menu kopi, pasokan rutin, hingga pengembangan private label.",
    photoUrl: unsplash("1472099645785-5658abf4ff4e", 1200),
    sortOrder: 7,
  },
  {
    fullName: "Nadia Putri",
    role: "Community & Content Lead",
    category: "BISNIS",
    description:
      "Merawat komunitas pecinta kopi lewat lokakarya seduh mingguan, jurnal kopi, dan sesi public cupping di roastery.",
    photoUrl: unsplash("1580489944761-15a19d654956", 1200),
    sortOrder: 8,
  },
];

const avatar = (id) => unsplash(id, 400);
const AUTHORS = {
  arya: { author: "Raden Arya", authorRole: "Master Roaster", authorAvatar: avatar("1507003211169-0a1dd7228f2d") },
  siti: { author: "Siti Nurhaliza", authorRole: "Head of Sourcing", authorAvatar: avatar("1534528741775-53994a69daeb") },
  dewi: { author: "Dewi Lestari", authorRole: "Barista Trainer", authorAvatar: avatar("1488426862026-3ee34a7d66df") },
  hendra: { author: "Hendra Wijaya", authorRole: "B2B Partnership", authorAvatar: avatar("1472099645785-5658abf4ff4e") },
};

const blogs = [
  {
    judul: "Menyingkap Rahasia Fermentasi Anaerobik pada Biji Kopi Flores Bajawa",
    category: "Catatan Roasting",
    tagar: "#FloresBajawa #AnaerobicFermentation #RoastingNotes",
    ringkasan:
      "Bagaimana proses fermentasi tanpa oksigen selama 96 jam mengubah profil asam malat menjadi ledakan rasa markisa, rempah hangat, dan karamel manis khas dataran tinggi Bajawa.",
    isiCerita:
      "Di dataran tinggi Bajawa, Flores, biji kopi disimpan di dalam tangki kedap udara selama kurang lebih 96 jam dengan kontrol suhu yang ketat sebelum dikeringkan di atas raised bed.\n\nMelalui pengendalian aktivitas mikroba, asam malat berubah menjadi asam laktat yang lebih lembut. Di meja sangrai, kami memperpanjang fase Maillard agar kemanisan karamel tidak tertutup aroma fermentasi.",
    image_url: unsplash("1509042239860-f550ce710b93"),
    readTime: 6,
    featured: true,
    ...AUTHORS.arya,
  },
  {
    judul: "Panduan Lengkap Menyeduh V60 untuk Pemula",
    category: "Panduan Menyeduh",
    tagar: "#V60 #ManualBrew #HomeBrewing",
    ringkasan:
      "Rasio 1:15, suhu 92°C, dan tiga tahap tuang. Langkah demi langkah menyeduh V60 yang bersih dan manis di rumah.",
    isiCerita:
      "Mulailah dengan 15 gram kopi giling medium-fine dan 225 ml air bersuhu 92°C. Lakukan blooming 30 detik dengan 40 ml air, lalu tuang sisanya dalam dua tahap dengan gerakan melingkar.\n\nTotal waktu seduh ideal berada di 2:30–3:00 menit. Jika terlalu pahit, kasarkan gilingan; jika terlalu asam, haluskan sedikit.",
    image_url: unsplash("1442512595331-e89e73853f31"),
    readTime: 5,
    featured: false,
    ...AUTHORS.dewi,
  },
  {
    judul: "Bersama Petani Gayo: Panen Petik Merah di Musim Hujan",
    category: "Kisah Petani",
    tagar: "#AcehGayo #DirectTrade #PetikMerah",
    ringkasan:
      "Cerita kunjungan tim sourcing ke Takengon saat panen raya, dan bagaimana harga premium direct-trade mengubah cara petani merawat kebunnya.",
    isiCerita:
      "Musim hujan membuat buah kopi matang tidak serentak. Petani mitra kami memetik hanya cherry berwarna merah tua, berkeliling kebun hingga empat kali dalam sebulan.\n\nDengan harga premium di atas pasar komoditas, petani dapat berinvestasi pada para-para jemur dan tangki fermentasi baru.",
    image_url: unsplash("1524350876685-274059332603"),
    readTime: 7,
    featured: false,
    ...AUTHORS.siti,
  },
  {
    judul: "Membaca Kurva Rate of Rise: Kunci Konsistensi Sangrai",
    category: "Catatan Roasting",
    tagar: "#RateOfRise #Giesen #RoastProfile",
    ringkasan:
      "Mengapa kurva RoR yang menurun stabil menghasilkan rasa yang lebih manis, dan bagaimana kami mencegah crash & flick di akhir sangrai.",
    isiCerita:
      "Rate of Rise menunjukkan kecepatan kenaikan suhu biji per menit. Kurva yang turun perlahan menandakan energi panas terdistribusi merata.\n\nDi roastery kami, setiap batch dicatat dan dibandingkan dengan profil referensi sehingga perbedaan rasa antar batch tetap minimal.",
    image_url: unsplash("1580933073521-dc49ac0d4e6a"),
    readTime: 8,
    featured: false,
    ...AUTHORS.arya,
  },
  {
    judul: "Tren Specialty Coffee Indonesia 2026: Dari Kafe ke Rumah",
    category: "Industri Kopi",
    tagar: "#SpecialtyCoffee #IndustriKopi #Tren2026",
    ringkasan:
      "Konsumsi kopi rumahan terus tumbuh. Kami merangkum perubahan perilaku konsumen dan peluang bagi kafe independen.",
    isiCerita:
      "Semakin banyak penikmat kopi yang berinvestasi pada grinder dan alat seduh manual. Kafe kini tidak hanya menjual minuman, tetapi juga edukasi dan biji sangrai untuk dibawa pulang.\n\nKafe yang menawarkan kelas seduh dan langganan biji kopi melihat loyalitas pelanggan meningkat signifikan.",
    image_url: unsplash("1501339847302-ac426a4a7cbb"),
    readTime: 4,
    featured: false,
    ...AUTHORS.hendra,
  },
  {
    judul: "Espresso yang Seimbang: Kalibrasi Grinder Setiap Pagi",
    category: "Panduan Menyeduh",
    tagar: "#Espresso #Kalibrasi #Barista",
    ringkasan:
      "Rutinitas dial-in 10 menit yang kami ajarkan ke barista mitra agar espresso pertama di pagi hari sama enaknya dengan shot terakhir.",
    isiCerita:
      "Mulai dari resep dasar 18 gram masuk, 40 gram keluar dalam 28 detik. Cicipi, lalu sesuaikan gilingan satu langkah setiap kali.\n\nCatat suhu ruangan dan kelembapan: dua variabel ini sering menjadi penyebab perubahan waktu ekstraksi.",
    image_url: unsplash("1511920170033-f8396924c348"),
    readTime: 5,
    featured: false,
    ...AUTHORS.dewi,
  },
  {
    judul: "Cupping Mingguan: Cara Kami Menilai Setiap Batch",
    category: "Industri Kopi",
    tagar: "#Cupping #SCA #QualityControl",
    ringkasan:
      "Di balik meja cupping setiap Jumat: protokol SCA, skor, dan keputusan apakah sebuah batch layak sampai ke tangan Anda.",
    isiCerita:
      "Setiap sampel disangrai ringan, digiling, lalu dinilai oleh tiga cupper secara buta. Aroma, acidity, body, sweetness, dan aftertaste diberi skor terpisah.\n\nBatch dengan skor di bawah 84 tidak kami rilis sebagai single origin.",
    image_url: unsplash("1498804103079-a6351b050096"),
    readTime: 6,
    featured: false,
    ...AUTHORS.arya,
  },
];

async function request(path, init) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json" },
  });
  const body = await res.json();
  if (!res.ok) throw new Error(`${path}: ${body.message ?? res.status}`);
  return body;
}

async function upsert(table, keyField, rows) {
  for (const row of rows) {
    const where = encodeURIComponent(`${keyField} = '${row[keyField].replace(/'/g, "''")}'`);
    let existing = [];
    try {
      existing = await request(`/data/${table}?where=${where}`);
    } catch {
      // tabel belum ada -> akan dibuat otomatis oleh POST pertama (dynamic schema)
    }
    if (existing.length) {
      await request(`/data/${table}/${existing[0].objectId}`, {
        method: "PUT",
        body: JSON.stringify(row),
      });
      console.log(`~ ${table}: ${row[keyField]}`);
    } else {
      await request(`/data/${table}`, { method: "POST", body: JSON.stringify(row) });
      console.log(`+ ${table}: ${row[keyField]}`);
    }
  }
}

await upsert("Team", "fullName", team);
await upsert("blog", "judul", blogs);
console.log("Seed selesai.");
