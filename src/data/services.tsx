import { ReactNode } from "react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  advantages: string[];
  serviceArea?: string;
  fleetTypes?: string[];
  /** Pickup & Delivery only — Door/CY combination schemes. */
  schemes?: {
    name: string;
    flow: string;
    customerHandles?: string;
    irjaHandles?: string;
    suitable: string;
    blurb: string;
  }[];
  /** Insurance only — risk-coverage note. */
  note?: { eyebrow: string; heading: string; body: string };
  workProcess: { title: string; desc: string }[];
  icon: ReactNode;
};

const containerIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="14" width="38" height="20" />
    <path d="M5 22h38M14 14v20M23 14v20M32 14v20" />
  </svg>
);
const boxesIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="24" width="16" height="16" />
    <rect x="27" y="24" width="16" height="16" />
    <rect x="16" y="6" width="16" height="16" />
  </svg>
);
const truckIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="18" width="24" height="14" />
    <path d="M27 22h10l6 6v4H27z" />
    <circle cx="13" cy="36" r="3.2" />
    <circle cx="35" cy="36" r="3.2" />
  </svg>
);
const flatRackIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 30h34" />
    <rect x="10" y="14" width="20" height="16" strokeDasharray="3 3" />
    <path d="M37 30h4l4 5v3H37z" />
    <circle cx="13" cy="38" r="3.2" />
    <circle cx="34" cy="38" r="3.2" />
  </svg>
);
const trailerIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="16" width="30" height="16" />
    <path d="M34 24h6l4 5v3h-10z" />
    <circle cx="12" cy="38" r="3.2" />
    <circle cx="26" cy="38" r="3.2" />
    <circle cx="40" cy="38" r="3.2" />
  </svg>
);
const pinRouteIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 44s10-9 10-18a10 10 0 1 0-20 0c0 9 10 18 10 18Z" />
    <circle cx="12" cy="26" r="3.5" />
    <path d="M22 30c8 4 12-2 20 2" strokeDasharray="3 4" />
    <path d="M42 24v10" />
    <path d="M38 30l4 4 4-4" />
  </svg>
);
const shieldIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M24 4l16 6v11c0 10-7 17-16 21C15 38 8 31 8 21V10z" />
    <path d="M17 23l5 5 9-10" />
  </svg>
);

export const SERVICES: Service[] = [
  {
    slug: "sea-freight-fcl",
    title: "Sea Freight — Full Container Load (FCL)",
    summary:
      "Pengiriman barang melalui jalur laut menggunakan kontainer penuh 20', 21', dan 40' untuk kebutuhan muatan dalam jumlah besar.",
    description:
      "Layanan pengiriman barang melalui jalur laut menggunakan Full Container Load (FCL), dengan pilihan kontainer 20', 21', dan 40' sesuai volume, jenis, dan kebutuhan muatan pelanggan. Layanan FCL menjadi solusi untuk pengiriman dalam jumlah besar dengan penggunaan satu kontainer secara khusus untuk satu pengiriman.",
    advantages: [
      "Pilihan kontainer 20', 21', dan 40'",
      "Kapasitas muatan besar dan lebih efisien",
      "Kontainer khusus untuk satu pengiriman",
      "Jadwal pengiriman dapat disesuaikan dengan kebutuhan",
      "Mendukung pengiriman antarpulau dan distribusi ke Indonesia Timur",
      "Monitoring proses pengiriman hingga barang tiba di tujuan",
    ],
    serviceArea:
      "Melayani pengiriman antarpulau melalui jaringan pelabuhan domestik, dengan fokus dan pengalaman dalam pengiriman menuju Indonesia Timur dan Papua.",
    fleetTypes: ["Kontainer 20'", "Kontainer 21'", "Kontainer 40'", "Trucking untuk pengangkutan kontainer"],
    workProcess: [
      { title: "Konfirmasi Muatan", desc: "Tim kami menerima informasi jenis barang, volume, berat, lokasi pickup, dan tujuan pengiriman." },
      { title: "Penentuan Kontainer", desc: "Ukuran kontainer disesuaikan dengan volume dan karakteristik barang." },
      { title: "Penjadwalan", desc: "Jadwal pickup, stuffing, dan keberangkatan disiapkan sesuai rute yang tersedia." },
      { title: "Pickup & Stuffing", desc: "Kontainer diambil dan barang dimuat sesuai prosedur pengiriman." },
      { title: "Pengiriman Laut", desc: "Kontainer diangkut menuju pelabuhan keberangkatan dan dikirim melalui jalur laut." },
      { title: "Monitoring & Delivery", desc: "Perjalanan dipantau hingga kontainer tiba di tujuan dan dilanjutkan dengan proses delivery sesuai layanan yang dipilih." },
    ],
    icon: containerIcon,
  },
  {
    slug: "sea-freight-lcl",
    title: "Sea Freight — Less Than Container Load (LCL)",
    summary:
      "Pengiriman barang melalui jalur laut untuk muatan yang tidak membutuhkan satu kontainer penuh dengan sistem konsolidasi.",
    description:
      "Layanan pengiriman barang melalui jalur laut untuk muatan yang tidak membutuhkan satu kontainer penuh. Barang dikonsolidasikan bersama muatan lainnya sehingga pelanggan dapat menggunakan ruang kontainer sesuai kebutuhan. LCL menjadi solusi bagi pelanggan dengan volume barang kecil hingga menengah yang tetap membutuhkan pengiriman antarpulau melalui jalur laut.",
    advantages: [
      "Tidak perlu memenuhi satu kontainer penuh",
      "Lebih fleksibel untuk muatan dengan volume lebih kecil",
      "Penggunaan ruang kontainer sesuai kebutuhan",
      "Cocok untuk pengiriman rutin maupun non-rutin",
      "Mendukung pengiriman ke berbagai wilayah tujuan",
      "Dapat dikombinasikan dengan layanan pickup & delivery",
    ],
    serviceArea:
      "Melayani pengiriman melalui jalur laut antarpulau dengan jaringan rute domestik dan fokus distribusi menuju Indonesia Timur dan Papua.",
    fleetTypes: ["Kontainer konsolidasi", "Trucking", "Armada pickup & delivery sesuai kebutuhan"],
    workProcess: [
      { title: "Konfirmasi Barang", desc: "Jenis, volume, berat, dan tujuan barang dikonfirmasi oleh tim kami." },
      { title: "Pickup / Penerimaan Barang", desc: "Barang dijemput dari lokasi pelanggan atau diterima di titik yang telah ditentukan." },
      { title: "Konsolidasi", desc: "Barang dipersiapkan dan dikonsolidasikan bersama muatan lainnya." },
      { title: "Pengiriman ke Pelabuhan", desc: "Muatan dikirim menuju pelabuhan keberangkatan." },
      { title: "Pengiriman Laut", desc: "Barang diberangkatkan melalui jalur laut menuju pelabuhan tujuan." },
      { title: "Monitoring & Delivery", desc: "Perjalanan dipantau hingga kontainer tiba di tujuan dan dilanjutkan dengan proses delivery sesuai layanan yang dipilih." },
    ],
    icon: boxesIcon,
  },
  {
    slug: "land-freight",
    title: "Land Freight",
    summary:
      "Layanan pengangkutan barang melalui jalur darat untuk mendukung distribusi antarkota dan antarwilayah di Pulau Jawa dengan pilihan armada sesuai kebutuhan muatan.",
    description:
      "Layanan Land Freight merupakan solusi pengangkutan barang melalui jalur darat untuk mendukung kebutuhan distribusi antarkota dan antarwilayah di Pulau Jawa. Layanan ini mencakup pengiriman barang dari lokasi pengirim menuju gudang, pelabuhan, distribution point, maupun lokasi penerima. Dengan pilihan armada yang disesuaikan dengan jenis, volume, dan karakteristik muatan, Land Freight IRJA dapat digunakan sebagai bagian dari distribusi domestik maupun sebagai penghubung dalam rangkaian pengiriman multimoda.",
    advantages: [
      "Pilihan armada disesuaikan dengan kebutuhan muatan",
      "Mendukung pengiriman antarkota dan antarwilayah",
      "Fleksibel untuk berbagai jenis dan volume barang",
      "Dapat terintegrasi dengan layanan Sea Freight",
      "Mendukung kebutuhan distribusi dari gudang hingga lokasi tujuan",
      "Penjadwalan pengiriman dapat disesuaikan dengan kebutuhan pelanggan",
    ],
    serviceArea:
      "Melayani pengiriman melalui jalur darat ke berbagai wilayah di Pulau Jawa sesuai rute operasional dan kebutuhan pelanggan, serta mendukung konektivitas dari gudang, pelabuhan, depo, kawasan industri, hingga lokasi tujuan akhir. Untuk kebutuhan pengiriman antarpulau, layanan Land Freight dapat dikombinasikan dengan Sea Freight sebagai bagian dari rangkaian transportasi multimoda.",
    fleetTypes: ["Truk Engkel", "Truk Fuso", "Armada trucking pendukung sesuai kebutuhan muatan"],
    workProcess: [
      { title: "Konfirmasi Muatan", desc: "Tim kami menerima informasi mengenai jenis barang, volume, berat, lokasi pickup, dan lokasi tujuan." },
      { title: "Penentuan Armada", desc: "Armada dipilih berdasarkan karakteristik, ukuran, volume, dan kebutuhan pengamanan muatan." },
      { title: "Penjadwalan", desc: "Waktu pickup dan estimasi perjalanan disusun berdasarkan rute dan kebutuhan pelanggan." },
      { title: "Pickup & Loading", desc: "Barang dijemput dari lokasi yang telah ditentukan dan dipersiapkan untuk proses pengangkutan." },
      { title: "Pengangkutan", desc: "Barang dikirim melalui jalur darat menuju lokasi tujuan sesuai rute yang telah ditentukan." },
      { title: "Monitoring", desc: "Perjalanan pengiriman dipantau selama proses pengangkutan hingga mencapai lokasi tujuan." },
      { title: "Delivery & Serah Terima", desc: "Barang tiba di lokasi tujuan dan dilakukan proses unloading serta serah terima kepada pihak penerima." },
    ],
    icon: truckIcon,
  },
  {
    slug: "flat-rack",
    title: "Flat Rack",
    summary:
      "Layanan pengangkutan menggunakan flat rack untuk kontainer dan berbagai jenis cargo yang membutuhkan area muatan terbuka.",
    description:
      "Layanan pengangkutan menggunakan flat rack dengan area muatan terbuka yang memberikan fleksibilitas dalam proses loading dan unloading. Layanan ini cocok untuk pengangkutan kontainer, cargo berukuran besar, maupun muatan dengan bentuk dan dimensi tertentu yang membutuhkan ruang muatan terbuka.",
    advantages: [
      "Area muatan terbuka dan fleksibel",
      "Memudahkan proses loading dan unloading",
      "Cocok untuk kontainer dan cargo berukuran besar",
      "Mendukung kebutuhan transportasi dari dan menuju pelabuhan",
      "Dapat disesuaikan dengan karakteristik muatan",
      "Mendukung rangkaian pengiriman sea freight",
    ],
    serviceArea:
      "Melayani pengangkutan dari pelabuhan, depo, gudang, lokasi proyek, maupun lokasi pelanggan menuju titik tujuan sesuai kebutuhan pengiriman.",
    fleetTypes: ["Armada trucking pendukung sesuai kebutuhan muatan"],
    workProcess: [
      { title: "Konfirmasi Muatan", desc: "Jenis, ukuran, berat, dan lokasi pengangkutan dikonfirmasi." },
      { title: "Penyesuaian Armada", desc: "Armada disiapkan sesuai karakteristik dan kebutuhan muatan." },
      { title: "Pemeriksaan Muatan", desc: "Kondisi muatan khususnya kendaraan diperiksa sebelum proses pengiriman untuk memastikan kelayakan, keamanan, dan kesiapan kendaraan selama perjalanan." },
      { title: "Penjadwalan", desc: "Pickup dan waktu pengangkutan dijadwalkan sesuai kebutuhan." },
      { title: "Loading", desc: "Barang atau kontainer dimuat dan dipastikan dalam kondisi aman untuk perjalanan." },
      { title: "Pengangkutan", desc: "Muatan diangkut menuju lokasi tujuan." },
      { title: "Unloading & Serah Terima", desc: "Muatan diturunkan dan dilakukan proses serah terima di lokasi tujuan." },
      { title: "Pemeriksaan Kondisi Muatan di Tujuan", desc: "Setibanya di kota tujuan, tim melakukan pemeriksaan kondisi kendaraan, kontainer, dan muatan, termasuk dokumentasi kondisi fisik untuk memastikan tidak terdapat kerusakan selama proses pengiriman." },
    ],
    icon: flatRackIcon,
  },
  {
    slug: "container-transportation",
    title: "Container Transportation",
    summary:
      "Transportasi kontainer dari dan menuju pelabuhan, depo, gudang, maupun lokasi pelanggan dengan armada yang sesuai.",
    description:
      "Layanan transportasi kontainer menggunakan armada darat untuk mendukung perpindahan kontainer dari pelabuhan, depo, gudang, maupun lokasi pelanggan. Layanan ini menjadi bagian penting dalam rangkaian pengiriman sea freight untuk memastikan kontainer dapat berpindah dari satu titik ke titik lainnya secara terkoordinasi.",
    advantages: [
      "Mendukung kebutuhan pengiriman FCL",
      "Memudahkan perpindahan kontainer dari dan menuju pelabuhan",
      "Pickup dan delivery dapat disesuaikan dengan jadwal kapal",
      "Armada disesuaikan dengan kebutuhan kontainer",
      "Terintegrasi dengan layanan sea freight IRJA",
      "Mendukung pengiriman dari pelabuhan hingga lokasi pelanggan",
    ],
    serviceArea:
      "Melayani transportasi kontainer dari dan menuju pelabuhan, depo kontainer, gudang, kawasan industri, lokasi pelanggan, dan lokasi tujuan lainnya.",
    fleetTypes: ["Truck Container", "Armada trucking pendukung"],
    workProcess: [
      { title: "Konfirmasi Kontainer", desc: "Detail kontainer, lokasi pickup, tujuan, dan jadwal pengiriman dikonfirmasi." },
      { title: "Penjadwalan Armada", desc: "Armada disiapkan berdasarkan lokasi dan kebutuhan pengangkutan." },
      { title: "Pickup Kontainer", desc: "Kontainer diambil dari pelabuhan, depo, atau lokasi yang telah ditentukan." },
      { title: "Pengangkutan", desc: "Kontainer diangkut menuju lokasi tujuan." },
      { title: "Monitoring", desc: "Perjalanan dipantau hingga kontainer mencapai titik tujuan." },
      { title: "Delivery & Serah Terima", desc: "Kontainer tiba di lokasi tujuan dan dilakukan proses serah terima." },
    ],
    icon: trailerIcon,
  },
  {
    slug: "pickup-delivery",
    title: "Pickup & Delivery",
    summary:
      "Layanan penjemputan dan pengantaran barang dengan pilihan skema Door → Door, Door → Port, Door → CY, CY → Door, CY → Port, dan CY → CY.",
    description:
      "Layanan Pickup & Delivery dirancang untuk memberikan fleksibilitas dalam menentukan titik awal dan akhir pengiriman. Barang dapat dijemput dari lokasi pelanggan, pelabuhan, atau container yard dan dikirim menuju titik tujuan sesuai kebutuhan.",
    schemes: [
      {
        name: "Door → Door",
        flow: "Lokasi Pelanggan → Pickup Barang → Pengangkutan → Alamat Penerima",
        blurb: "Barang dijemput dari lokasi pelanggan dan diantar langsung hingga alamat penerima.",
        suitable:
          "Pelanggan yang ingin proses pengiriman lebih praktis karena barang dijemput dari lokasi dan diantarkan langsung sampai tujuan.",
      },
      {
        name: "Door → Port",
        flow: "Lokasi Pelanggan → Pickup Barang → Pengangkutan → Pelabuhan",
        blurb: "Barang dijemput dari lokasi pelanggan dan diantar hingga pelabuhan tujuan.",
        customerHandles: "Dokumen dan administrasi yang diperlukan di pelabuhan.",
        irjaHandles: "Penjemputan barang dari lokasi pelanggan dan pengangkutannya hingga pelabuhan tujuan.",
        suitable:
          "Pelanggan yang sudah memiliki pengaturan dan dokumen pengiriman sendiri di pelabuhan, tetapi membutuhkan armada untuk membawa barang dari lokasi mereka menuju pelabuhan.",
      },
      {
        name: "Door → CY",
        flow: "Lokasi Pelanggan → Pickup oleh IRJA → Pengangkutan → Depo Kontainer Tujuan",
        blurb: "Barang atau kontainer dijemput dari lokasi pelanggan menuju depo kontainer tujuan.",
        suitable:
          "Pelanggan yang membutuhkan pengangkutan barang atau kontainer dari gudang/lokasi mereka menuju depo kontainer.",
      },
      {
        name: "CY → Door",
        flow: "Depo Kontainer Asal → Pemuatan Barang → Pengangkutan → Alamat Penerima",
        blurb: "Kontainer diambil dari depo dan diantar langsung hingga alamat penerima.",
        irjaHandles: "Pengambilan kontainer dari depo, proses pemuatan yang diperlukan, pengangkutan, hingga pengantaran ke lokasi tujuan.",
        suitable:
          "Pelanggan yang membutuhkan pengiriman kontainer dari pelabuhan/depo hingga langsung ke gudang atau lokasi penerima.",
      },
      {
        name: "CY → Port",
        flow: "Depo Kontainer Asal → Pemuatan Barang → Pengangkutan → Pelabuhan",
        blurb: "Kontainer diambil dari depo dan diangkut menuju pelabuhan tujuan.",
        customerHandles: "Dokumen dan administrasi yang diperlukan di pelabuhan tujuan.",
        irjaHandles: "Pengambilan kontainer dari depo dan pengangkutannya menuju pelabuhan.",
        suitable:
          "Pelanggan yang telah mengatur sendiri kebutuhan dokumen dan administrasi di pelabuhan tujuan, tetapi membutuhkan jasa transportasi kontainer dari depo menuju pelabuhan.",
      },
      {
        name: "CY → CY",
        flow: "Depo Kontainer Asal → Pemuatan Barang → Pengangkutan → Depo Kontainer Tujuan",
        blurb: "Kontainer diangkut dari satu depo menuju depo kontainer lainnya.",
        suitable: "Pelanggan yang hanya membutuhkan jasa transportasi kontainer dari satu depo ke depo lainnya.",
      },
    ],
    advantages: [
      "Pilihan skema pengiriman yang fleksibel",
      "Titik pickup dan delivery dapat disesuaikan",
      "Mendukung kebutuhan FCL/LCL maupun distribusi barang",
      "Terintegrasi dengan sea freight dan container transportation",
      "Memudahkan koordinasi pengiriman dari satu titik ke titik lainnya",
      "Armada disesuaikan dengan jenis dan kebutuhan muatan",
    ],
    fleetTypes: ["Truck Container", "Truk Engkel", "Truk Fuso", "Armada pendukung lainnya sesuai kebutuhan muatan"],
    workProcess: [
      { title: "Konfirmasi Titik Pengiriman", desc: "Titik pickup dan delivery ditentukan sesuai skema layanan yang dipilih." },
      { title: "Konfirmasi Muatan", desc: "Jenis, volume, berat, dan kebutuhan khusus barang diperiksa." },
      { title: "Penjadwalan", desc: "Armada dan waktu pickup disiapkan berdasarkan rute dan kebutuhan pelanggan." },
      { title: "Pickup", desc: "Barang atau kontainer diambil dari titik awal pengiriman." },
      { title: "Pengangkutan", desc: "Muatan diangkut menuju titik tujuan melalui rute yang telah ditentukan." },
      { title: "Delivery & Serah Terima", desc: "Barang atau kontainer tiba di titik tujuan sesuai skema layanan. Proses pengiriman diselesaikan dengan serah terima kepada pihak yang dituju." },
    ],
    icon: pinRouteIcon,
  },
  {
    slug: "insurance",
    title: "Insurance",
    summary:
      "Perlindungan tambahan untuk barang selama proses pengiriman dengan pilihan pertanggungan yang dapat disesuaikan dengan jenis dan nilai barang.",
    description:
      "Layanan asuransi pengiriman merupakan layanan tambahan yang membantu memberikan perlindungan terhadap barang selama proses pengiriman dari lokasi asal hingga tujuan. IRJA dapat membantu memfasilitasi pengurusan asuransi barang melalui pihak asuransi yang sesuai dengan kebutuhan pengiriman, sehingga customer dapat mengirimkan barang dengan perlindungan tambahan terhadap risiko yang tercakup dalam polis.",
    advantages: [
      "Memberikan perlindungan tambahan selama proses pengiriman",
      "Membantu mengurangi risiko kerugian akibat kejadian yang tidak terduga",
      "Pilihan perlindungan dapat disesuaikan dengan jenis dan nilai barang",
      "Proses pengurusan dapat dibantu oleh tim IRJA",
      "Cocok untuk barang dengan nilai tinggi atau memiliki risiko pengiriman tertentu",
      "Dapat digunakan untuk pengiriman melalui jalur laut maupun darat",
    ],
    note: {
      eyebrow: "Cakupan Perlindungan",
      heading: "Jenis Risiko yang Dapat Dipertanggungkan",
      body: "Perlindungan asuransi mengikuti ketentuan dan cakupan polis dari perusahaan asuransi yang digunakan. Risiko yang dapat dijamin dapat mencakup kerusakan atau kehilangan barang akibat kejadian tertentu selama proses pengiriman. Detail mengenai risiko yang ditanggung, pengecualian, nilai pertanggungan, dan ketentuan klaim akan mengikuti polis asuransi yang berlaku.",
    },
    workProcess: [
      { title: "Informasi Barang", desc: "Customer memberikan informasi mengenai jenis barang, jumlah, nilai barang, serta detail pengiriman." },
      { title: "Penentuan Perlindungan", desc: "Tim IRJA membantu menyesuaikan kebutuhan perlindungan dengan karakteristik dan nilai barang." },
      { title: "Pengurusan Asuransi", desc: "Data pengiriman diteruskan untuk proses penerbitan perlindungan melalui pihak asuransi." },
      { title: "Penerbitan Polis", desc: "Polis atau dokumen asuransi diterbitkan sesuai ketentuan dan nilai pertanggungan yang disepakati." },
      { title: "Pengiriman", desc: "Barang dikirim sesuai layanan yang dipilih dengan perlindungan asuransi yang telah disiapkan." },
      { title: "Proses Klaim", desc: "Apabila terjadi kejadian yang termasuk dalam pertanggungan, proses klaim dilakukan sesuai prosedur dan ketentuan polis yang berlaku." },
    ],
    icon: shieldIcon,
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

// ===== Kategori Barang Kiriman (ditampilkan di halaman index /services) =====

export const CARGO_CATEGORIES_INTRO =
  "PT Irja Express Logistic melayani pengiriman berbagai jenis barang dengan penanganan yang disesuaikan dengan karakteristik, ukuran, volume, serta kebutuhan masing-masing muatan. Secara garis besar, kategori barang yang dapat kami layani meliputi:";

export const CARGO_CATEGORIES = [
  {
    title: "General Cargo",
    desc: "Barang umum dan kebutuhan sehari-hari yang tidak memerlukan penanganan khusus, seperti barang retail, perlengkapan rumah tangga, peralatan usaha, dan berbagai kebutuhan lainnya.",
  },
  {
    title: "Barang Industri & Komersial",
    desc: "Peralatan, mesin, perlengkapan operasional, material usaha, serta kebutuhan industri dan komersial dengan berbagai ukuran dan volume.",
  },
  {
    title: "Material & Bahan Bangunan",
    desc: "Berbagai kebutuhan konstruksi dan pembangunan, termasuk material bangunan, perlengkapan proyek, serta material pendukung lainnya.",
  },
  {
    title: "Kendaraan",
    desc: "Pengiriman berbagai jenis kendaraan, baik kendaraan pribadi maupun kendaraan operasional dan komersial, dengan proses pemeriksaan kondisi sebelum dan setelah pengiriman. Pemeriksaan mencakup kondisi fisik kendaraan serta dokumentasi sebagai bagian dari proses pengawasan dan serah terima untuk memastikan kondisi kendaraan tetap terpantau selama proses pengiriman.",
  },
  {
    title: "Makanan & Produk Konsumsi",
    desc: "Produk makanan, minuman, bahan pangan, serta berbagai produk konsumsi yang dapat dikirim dengan penanganan sesuai karakteristik barang.",
  },
  {
    title: "Barang Pindahan & Perlengkapan",
    desc: "Perabotan, perlengkapan rumah, barang pribadi, serta kebutuhan pindahan rumah maupun usaha.",
  },
  {
    title: "Barang Berukuran Besar & Project Cargo",
    desc: "Barang dengan ukuran, berat, atau volume yang membutuhkan perencanaan pengangkutan dan penyesuaian armada, termasuk kebutuhan proyek dan muatan berukuran besar.",
  },
  {
    title: "Barang Khusus",
    desc: "Barang dengan karakteristik atau kebutuhan penanganan tertentu yang memerlukan koordinasi dan penyesuaian proses pengiriman.",
  },
];

export const CARGO_CATEGORIES_NOTE =
  "Setiap pengiriman akan melalui proses identifikasi dan konfirmasi karakteristik barang untuk menentukan metode pengangkutan, armada, serta penanganan yang paling sesuai. Untuk barang dengan karakteristik khusus, ketentuan pengiriman akan disesuaikan berdasarkan jenis dan kondisi muatan.";