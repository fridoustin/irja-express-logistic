export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "Apakah IRJA melayani pengiriman ke seluruh Indonesia?",
    answer:
      "Ya. IRJA melayani pengiriman ke berbagai wilayah Indonesia juga selain wilayah Indonesia Timur. Untuk mengetahui ketersediaan layanan ke wilayah lain di luar Papua, silakan hubungi tim IRJA melalui kontak yang tersedia untuk mendapatkan informasi lebih lanjut.",
  },
  {
    question: "Apa perbedaan FCL dan LCL?",
    answer:
      "FCL (Full Container Load) adalah pengiriman dengan menggunakan satu container untuk cargo customer.\nLCL (Less than Container Load) adalah pengiriman ketika cargo customer digabungkan dengan cargo customer lainnya dalam satu container.\nSecara umum, FCL cocok untuk cargo dengan skala (jumlah) besar, sedangkan LCL dapat menjadi pilihan untuk cargo dengan volume lebih kecil.",
  },
  {
    question: "Ukuran container apa saja yang tersedia?",
    answer:
      "IRJA melayani pengiriman menggunakan beberapa ukuran container, seperti:\n20 ft | 21 ft | 40 ft\nPemilihan ukuran container disesuaikan dengan volume, berat, dimensi, dan karakteristik cargo.",
  },
  {
    question: "Apakah IRJA melayani pengiriman barang dalam jumlah besar?",
    answer:
      "Ya. IRJA melayani pengiriman cargo dengan berbagai ukuran dan kebutuhan armada sesuai karakteristik barang.",
  },
  {
    question: "Apakah IRJA melayani pengiriman kendaraan?",
    answer:
      "Ya. IRJA dapat melayani pengiriman kendaraan seperti mobil, motor, dan jenis kendaraan lainnya, dengan persyaratan yang disesuaikan dengan jenis kendaraan, kondisi kendaraan, rute, dan ketentuan carrier.\nCustomer perlu memberikan informasi dan dokumen lengkap berisikan data jenis kendaraan (misalnya BPKB & STNK), dimensi, berat, nomor rangka/VIN, kondisi kendaraan, serta jenis bahan bakar atau baterai.",
  },
  {
    question: "Apakah IRJA bisa mengambil barang dari lokasi customer?",
    answer: "Ya. IRJA menyediakan layanan pickup sesuai area dan layanan yang dipilih.",
  },
  {
    question: "Berapa lama waktu pengiriman cargo?",
    answer:
      "Waktu pengiriman bergantung pada asal pengiriman, tujuan pengiriman, jadwal kapal, transit, kondisi operasional, cuaca dan kondisi pelabuhan, proses unloading, serta proses delivery.\nKarena itu, estimasi transit time akan diinformasikan berdasarkan rute dan jadwal yang tersedia pada saat booking.",
  },
  {
    question: "Bagaimana cara mendapatkan harga pengiriman?",
    answer:
      "Customer dapat menghubungi tim IRJA untuk mendapatkan penawaran harga.\nInformasi yang sebaiknya disiapkan: Asal → Tujuan → Jenis Cargo → Quantity → Berat/Dimensi → FCL/LCL → Kebutuhan Pickup/Delivery.\nSemakin lengkap informasi yang diberikan, semakin akurat estimasi biaya yang dapat diberikan.",
  },
  {
    question: "Apakah cargo perlu menggunakan packaging khusus?",
    answer:
      "Jenis packing perlu disesuaikan dengan karakteristik cargo:\nKarung/Sak — untuk barang yang tidak mudah rusak.\nKarton/Box — untuk barang umum dengan perlindungan memadai.\nPallet/Krat — untuk barang yang membutuhkan handling lebih mudah dan stabil, seperti besi, material bangunan, dan cargo sejenis.\nBubble Wrap/Foam — sebagai perlindungan tambahan dari benturan.\nPeti Kayu — direkomendasikan untuk barang fragile atau mudah pecah, seperti kaca, keramik, equipment, dan barang lainnya yang membutuhkan perlindungan ekstra.",
  },
  {
    question: "Apakah cargo saya bisa diasuransikan?",
    answer:
      "Ya. Customer dapat mempertimbangkan asuransi cargo untuk memberikan perlindungan finansial terhadap risiko tertentu selama proses pengiriman.\nCakupan perlindungan, pengecualian, dan proses klaim mengikuti ketentuan polis asuransi yang dipilih.",
  },
  {
    question: "Bagaimana jika barang saya rusak atau jumlahnya tidak sesuai?",
    answer:
      "Customer dapat segera menghubungi tim IRJA dan menyampaikan detail permasalahan.\nTim akan melakukan investigasi berdasarkan dokumen, kondisi cargo, STTB (Surat Tanda Terima Barang), foto/video, BA (Berita Acara), dan informasi operasional lainnya untuk menentukan tindak lanjut.\nUntuk proses klaim, ketentuan akan mengikuti hasil pemeriksaan dan persyaratan yang berlaku.",
  },
  {
    question: "Apa saja informasi yang harus disiapkan sebelum booking?",
    answer:
      "Untuk proses booking, customer sebaiknya menyiapkan: nama pengirim, nama penerima, asal pengiriman, tujuan pengiriman, jenis cargo, quantity, berat, dimensi, jenis packaging, FCL/LCL, kebutuhan pickup/delivery, dan informasi khusus cargo jika ada.\nUntuk cargo khusus seperti DG atau kendaraan, diperlukan informasi tambahan.",
  },
  {
    question: "Apakah barang fragile seperti kaca dapat dikirim?",
    answer:
      "Barang fragile dapat diterima dengan catatan harus dipacking secara proper, dan untuk barang seperti kaca sangat disarankan menggunakan peti kayu/packing yang memberikan perlindungan ekstra.\nIRJA menerima cargo dalam kondisi sudah terpacking dan tidak melakukan pembukaan isi packing. Kerusakan akibat packing yang tidak memadai menjadi tanggung jawab pengirim.",
  },
  {
    question: "Apakah saya bisa meminta konsultasi sebelum mengirim barang?",
    answer:
      "Tentu. Tim IRJA siap membantu memberikan informasi dan rekomendasi layanan berdasarkan jenis cargo, kebutuhan, serta tujuan pengiriman.",
  },
];