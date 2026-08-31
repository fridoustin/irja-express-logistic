export type GalleryItem = {
  id: string;
  category: string;
  caption: string;
  image?: string;
};

// Nanti masukkan foto-foto asli ke folder public/gallery/ dan tambahkan path-nya di sini.
// Lalu kategori bisa diubah sesuai kebutuhan, misal: "Armada", "Pergudangan", "Operasional", "Pengiriman", "Kantor", dll.
// Caption bisa diubah sesuai deskripsi foto yang sebenarnya.
// Dan tinggal tambahkan image: "/gallery/xxx.jpg" jika sudah ada foto asli, biarkan kosong jika belum ada.

export const GALLERY: GalleryItem[] = [
  { id: "g1", category: "Serah Terima", caption: "Serah terima dokumen dan verifikasi Surat Tanda Terima Barang (STTB)", image: "/gallery/serahterima1.jpg" },
  { id: "g2", category: "Pengiriman", caption: "Pengangkutan kendaraan bermotor dan kargo reguler via darat", image: "/gallery/scoopy.jpg" },
  { id: "g3", category: "Internal", caption: "Kebersamaan tim PT Irja Express Logistic", image: "/gallery/internal2.jpg" },
  { id: "g4", category: "Pengiriman", caption: "Armada truk siap berangkat dengan muatan material proyek", image: "/gallery/armada1.jpg" },
  { id: "g5", category: "Operasional", caption: "Penanganan pengiriman cargo alat berat dan mesin industri", image: "/gallery/operasional2.jpg" },
  { id: "g6", category: "Internal", caption: "Acara ramah tamah dan makan malam bersama seluruh staf", image: "/gallery/internal1.jpg" },
  { id: "g7", category: "Armada", caption: "Armada siap berangkat dengan muatan material proyek", image: "/gallery/armada2.jpg" },
  { id: "g8", category: "Armada", caption: "Proses pemuatan barang ke armada untuk rute antar kota", image: "/gallery/armada5.jpg" },
  { id: "g9", category: "Serah Terima", caption: "Proses penerimaan dan serah terima kargo langsung ke tangan klien", image: "/gallery/serahterima2.jpg" },
  { id: "g10", category: "Operasional", caption: "Penanganan cargo mesin industri berat dan sensitif", image: "/gallery/operasional1.jpg" },
  { id: "g11", category: "Armada", caption: "Armada truk bak tertutup siap berangkat menuju lokasi tujuan", image: "/gallery/armada3.jpg" },
  { id: "g12", category: "Pengiriman", caption: "Pengangkutan muatan material semen terpalet sebelum distribusi", image: "/gallery/armada4.jpg" },
];