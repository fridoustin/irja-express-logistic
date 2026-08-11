import { ReactNode } from "react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  advantages: string[];
  serviceArea: string;
  fleetTypes: string[];
  workProcess: { title: string; desc: string }[];
  icon: ReactNode;
};

const truck = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="18" width="24" height="14" />
    <path d="M27 22h10l6 6v4H27z" />
    <circle cx="13" cy="36" r="3.2" />
    <circle cx="35" cy="36" r="3.2" />
  </svg>
);
const container = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="14" width="38" height="20" />
    <path d="M5 22h38M14 14v20M23 14v20M32 14v20" />
  </svg>
);
const road = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 42 20 6h8l6 36" />
    <path d="M24 12v6M24 24v6" />
  </svg>
);
const ship = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 30h36l-4 10H10z" />
    <path d="M14 30V14h12l6 16" />
  </svg>
);
const plane = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M24 6l6 14 16 6-16 3-6 15-6-15-16-3 16-6z" />
  </svg>
);
const warehouse = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 16l20-10 20 10-20 10z" />
    <path d="M4 16v18l20 10 20-10V16" />
    <path d="M24 26v18" />
  </svg>
);
const distribution = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="24" cy="24" r="18" />
    <path d="M8 24h32M24 6c5 5 5 31 0 36M24 6c-5 5-5 31 0 36" />
  </svg>
);
const project = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="6" y="20" width="16" height="16" />
    <rect x="26" y="10" width="16" height="26" />
    <path d="M6 20l6-8h10" />
  </svg>
);
const door = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="12" y="6" width="24" height="36" />
    <circle cx="29" cy="24" r="1.6" fill="currentColor" />
  </svg>
);
const customs = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="7" y="6" width="34" height="30" rx="2" />
    <path d="M14 16h20M14 23h20M14 30h12" />
  </svg>
);

export const SERVICES: Service[] = [
  {
    slug: "trucking",
    title: "Trucking",
    summary: "Layanan angkutan darat dengan truk untuk pengiriman antar kota dan antar provinsi.",
    description:
      "Layanan trucking kami melayani pengangkutan barang dalam berbagai skala muatan, mulai dari LTL (Less than Truckload) hingga FTL (Full Truckload), untuk rute antar kota dan antar provinsi di seluruh Indonesia.",
    advantages: [
      "Jadwal keberangkatan yang fleksibel dan konsisten",
      "Estimasi waktu tempuh yang jelas untuk setiap rute",
      "Muatan dipantau sejak keberangkatan hingga tiba",
    ],
    serviceArea: "Melayani rute darat di seluruh Pulau Jawa, Sumatra, Bali, dan Sulawesi, dengan pengembangan rute baru sesuai permintaan.",
    fleetTypes: ["Truk Engkel", "Truk CDD", "Truk Fuso", "Truk Tronton"],
    workProcess: [
      { title: "Konfirmasi Muatan", desc: "Tim kami mengecek jenis, volume, dan tujuan barang." },
      { title: "Penjadwalan", desc: "Armada dan rute disusun sesuai jadwal pengiriman." },
      { title: "Pengangkutan", desc: "Barang diangkut dan dipantau selama perjalanan." },
      { title: "Serah Terima", desc: "Barang diserahkan dan dikonfirmasi ke penerima." },
    ],
    icon: truck,
  },
  {
    slug: "container-transportation",
    title: "Container Transportation",
    summary: "Pengangkutan peti kemas dari dan menuju pelabuhan untuk kebutuhan ekspor-impor.",
    description:
      "Kami menyediakan layanan pengangkutan kontainer (trucking kontainer) dari dan menuju pelabuhan maupun depo, mendukung kebutuhan ekspor-impor dan distribusi kargo skala besar.",
    advantages: [
      "Armada chassis sesuai ukuran kontainer 20ft dan 40ft",
      "Koordinasi jadwal dengan pihak pelabuhan dan depo",
      "Penanganan dokumen pengangkutan kontainer",
    ],
    serviceArea: "Melayani rute dari dan menuju pelabuhan-pelabuhan utama di Jawa dan Sulawesi.",
    fleetTypes: ["Trailer 20ft", "Trailer 40ft", "Chassis Flatbed"],
    workProcess: [
      { title: "Booking Kontainer", desc: "Koordinasi jadwal dengan pelabuhan/depo terkait." },
      { title: "Penjemputan", desc: "Kontainer diambil sesuai jadwal yang disepakati." },
      { title: "Pengiriman", desc: "Kontainer diantar ke lokasi tujuan." },
      { title: "Dokumentasi", desc: "Bukti serah terima dan dokumen diselesaikan." },
    ],
    icon: container,
  },
  {
    slug: "land-freight",
    title: "Land Freight",
    summary: "Jasa freight darat untuk distribusi barang antar wilayah dengan jadwal terjadwal.",
    description:
      "Land Freight adalah layanan distribusi darat terjadwal untuk kebutuhan pengiriman rutin, cocok untuk bisnis yang membutuhkan jadwal pengiriman yang konsisten setiap minggu atau bulan.",
    advantages: [
      "Jadwal pengiriman rutin dan dapat diandalkan",
      "Biaya lebih efisien untuk pengiriman berulang",
      "Dukungan konsolidasi muatan dari beberapa pengirim",
    ],
    serviceArea: "Mencakup rute darat lintas provinsi di Indonesia bagian barat dan tengah.",
    fleetTypes: ["Truk CDD", "Truk Fuso", "Van Box"],
    workProcess: [
      { title: "Perencanaan Rute", desc: "Jadwal dan rute disusun sesuai kebutuhan rutin." },
      { title: "Konsolidasi Muatan", desc: "Barang dari beberapa pengirim digabung bila perlu." },
      { title: "Pengangkutan", desc: "Pengiriman dijalankan sesuai jadwal tetap." },
      { title: "Pelaporan", desc: "Status pengiriman dilaporkan secara berkala." },
    ],
    icon: road,
  },
  {
    slug: "sea-freight",
    title: "Sea Freight",
    summary: "Pengiriman kargo melalui jalur laut untuk volume besar dengan biaya efisien.",
    description:
      "Sea Freight adalah solusi pengiriman melalui jalur laut yang cocok untuk muatan bervolume besar antar pulau, dengan biaya yang lebih efisien dibanding moda transportasi lain.",
    advantages: [
      "Kapasitas muat besar untuk kargo bervolume tinggi",
      "Biaya per unit lebih efisien untuk jarak jauh",
      "Pilihan LCL (Less than Container Load) dan FCL",
    ],
    serviceArea: "Melayani rute antar pulau di seluruh Indonesia, termasuk wilayah Indonesia Timur.",
    fleetTypes: ["Kontainer 20ft", "Kontainer 40ft", "Kapal Kargo Mitra"],
    workProcess: [
      { title: "Booking Ruang Kapal", desc: "Ruang muat dipesan sesuai jadwal keberangkatan." },
      { title: "Stuffing Muatan", desc: "Barang dikemas dan dimuat ke dalam kontainer." },
      { title: "Pelayaran", desc: "Kargo dikirim melalui jalur laut yang dipilih." },
      { title: "Unstuffing & Serah Terima", desc: "Barang dibongkar dan diserahkan di tujuan." },
    ],
    icon: ship,
  },
  {
    slug: "air-freight",
    title: "Air Freight",
    summary: "Pengiriman kargo udara untuk barang mendesak dan bernilai tinggi.",
    description:
      "Air Freight adalah layanan pengiriman tercepat kami, ideal untuk barang mendesak, bernilai tinggi, atau mudah rusak yang memerlukan waktu tempuh sesingkat mungkin.",
    advantages: [
      "Waktu tempuh tercepat dibanding moda lain",
      "Cocok untuk barang mendesak dan bernilai tinggi",
      "Penanganan khusus untuk kargo sensitif",
    ],
    serviceArea: "Melayani rute domestik antar kota besar dengan bandara kargo aktif.",
    fleetTypes: ["Kargo Udara Reguler", "Kargo Udara Charter"],
    workProcess: [
      { title: "Reservasi Ruang Kargo", desc: "Slot kargo dipesan pada penerbangan terdekat." },
      { title: "Pemeriksaan & Pengemasan", desc: "Barang diperiksa dan dikemas sesuai standar." },
      { title: "Penerbangan", desc: "Kargo dikirim melalui jalur udara terpilih." },
      { title: "Penjemputan di Tujuan", desc: "Barang diambil dan diteruskan ke penerima." },
    ],
    icon: plane,
  },
  {
    slug: "warehousing",
    title: "Warehousing",
    summary: "Fasilitas penyimpanan barang dengan manajemen inventaris yang rapi dan terpantau.",
    description:
      "Layanan pergudangan kami menyediakan ruang penyimpanan sementara maupun jangka panjang, dilengkapi manajemen inventaris agar stok barang Anda tetap tertata dan mudah dipantau.",
    advantages: [
      "Sistem pencatatan stok masuk dan keluar",
      "Area penyimpanan yang aman dan terkontrol",
      "Fleksibel untuk penyimpanan jangka pendek maupun panjang",
    ],
    serviceArea: "Fasilitas gudang tersedia di titik distribusi utama kami.",
    fleetTypes: ["Rak Penyimpanan", "Forklift", "Alat Bongkar Muat"],
    workProcess: [
      { title: "Penerimaan Barang", desc: "Barang diperiksa dan dicatat saat masuk gudang." },
      { title: "Penyimpanan", desc: "Barang disusun dan ditempatkan sesuai kategori." },
      { title: "Manajemen Stok", desc: "Stok dipantau secara berkala dan dilaporkan." },
      { title: "Pengeluaran Barang", desc: "Barang disiapkan dan dikirim sesuai permintaan." },
    ],
    icon: warehouse,
  },
  {
    slug: "distribution",
    title: "Distribution",
    summary: "Distribusi rutin untuk kebutuhan rantai pasok bisnis retail dan manufaktur.",
    description:
      "Layanan distribusi kami mendukung rantai pasok bisnis retail dan manufaktur dengan pengiriman rutin ke berbagai titik tujuan, menjaga ketersediaan stok di setiap lokasi.",
    advantages: [
      "Jadwal distribusi rutin sesuai kebutuhan bisnis",
      "Pengiriman ke banyak titik dalam satu perjalanan",
      "Koordinasi langsung dengan tim gudang pengirim",
    ],
    serviceArea: "Mencakup jaringan distribusi retail dan manufaktur di berbagai kota.",
    fleetTypes: ["Truk Box", "Van Distribusi", "Truk CDD"],
    workProcess: [
      { title: "Perencanaan Distribusi", desc: "Titik tujuan dan jadwal pengiriman disusun." },
      { title: "Pemuatan Barang", desc: "Barang dimuat sesuai urutan titik pengiriman." },
      { title: "Pengiriman Multi-titik", desc: "Barang diantar ke setiap lokasi tujuan." },
      { title: "Konfirmasi Penerimaan", desc: "Setiap titik mengonfirmasi barang diterima." },
    ],
    icon: distribution,
  },
  {
    slug: "project-cargo",
    title: "Project Cargo",
    summary: "Penanganan pengiriman untuk muatan berukuran besar, berat, atau non-standar.",
    description:
      "Project Cargo adalah layanan khusus untuk pengiriman muatan berukuran besar, berat, atau non-standar seperti alat berat dan komponen proyek, dengan perencanaan pengangkutan yang disesuaikan per kasus.",
    advantages: [
      "Perencanaan pengangkutan disesuaikan per proyek",
      "Penanganan muatan berat dan berukuran non-standar",
      "Koordinasi izin angkutan khusus bila diperlukan",
    ],
    serviceArea: "Melayani proyek pengiriman di berbagai wilayah sesuai kebutuhan klien.",
    fleetTypes: ["Trailer Lowbed", "Truk Crane", "Flatbed Multi-axle"],
    workProcess: [
      { title: "Survey & Perencanaan", desc: "Tim meninjau muatan dan menyusun rencana angkut." },
      { title: "Perizinan", desc: "Izin angkutan khusus diurus bila diperlukan." },
      { title: "Pengangkutan", desc: "Muatan diangkut dengan armada dan metode khusus." },
      { title: "Penempatan di Lokasi", desc: "Muatan ditempatkan sesuai titik proyek." },
    ],
    icon: project,
  },
  {
    slug: "door-to-door",
    title: "Door to Door Service",
    summary: "Pengiriman langsung dari lokasi pengirim hingga ke alamat penerima.",
    description:
      "Layanan Door to Door menangani seluruh proses pengiriman mulai dari penjemputan barang di lokasi pengirim hingga diserahkan langsung ke alamat penerima, tanpa perlu penanganan tambahan dari pelanggan.",
    advantages: [
      "Penjemputan dan pengantaran langsung ke alamat",
      "Satu titik koordinasi untuk seluruh proses",
      "Cocok untuk pengiriman B2B maupun B2C",
    ],
    serviceArea: "Tersedia di kota-kota dengan jaringan operasional kami.",
    fleetTypes: ["Truk Box", "Van", "Motor Kurir (kota tertentu)"],
    workProcess: [
      { title: "Penjemputan", desc: "Barang dijemput langsung dari lokasi pengirim." },
      { title: "Konsolidasi & Pengiriman", desc: "Barang diproses dan dikirim ke tujuan." },
      { title: "Pelacakan", desc: "Status pengiriman dapat dipantau berkala." },
      { title: "Serah Terima di Alamat", desc: "Barang diserahkan langsung ke penerima." },
    ],
    icon: door,
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance",
    summary: "Bantuan pengurusan dokumen kepabeanan untuk kelancaran proses ekspor-impor.",
    description:
      "Layanan Customs Clearance membantu pengurusan dokumen dan prosedur kepabeanan agar proses ekspor-impor barang berjalan lancar dan sesuai dengan ketentuan yang berlaku.",
    advantages: [
      "Pendampingan dokumen ekspor-impor",
      "Koordinasi dengan pihak bea cukai terkait",
      "Meminimalkan risiko keterlambatan akibat dokumen",
    ],
    serviceArea: "Tersedia untuk pengiriman internasional melalui pelabuhan dan bandara mitra.",
    fleetTypes: ["Tidak menggunakan armada — layanan dokumentasi & kepabeanan"],
    workProcess: [
      { title: "Pengecekan Dokumen", desc: "Dokumen ekspor-impor diperiksa kelengkapannya." },
      { title: "Pengurusan Kepabeanan", desc: "Proses bea cukai diajukan dan dikoordinasikan." },
      { title: "Verifikasi", desc: "Status pengurusan dipantau hingga disetujui." },
      { title: "Barang Siap Dikirim", desc: "Barang dapat dilanjutkan ke proses pengiriman." },
    ],
    icon: customs,
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}