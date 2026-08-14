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
  { id: "g1", category: "Armada", caption: "Armada truk siap operasional" },
  { id: "g2", category: "Armada", caption: "Pemeriksaan kendaraan sebelum berangkat" },
  { id: "g3", category: "Pergudangan", caption: "Area penyimpanan dan penataan barang" },
  { id: "g4", category: "Pergudangan", caption: "Proses bongkar muat di gudang" },
  { id: "g5", category: "Operasional", caption: "Tim operasional menyiapkan pengiriman" },
  { id: "g6", category: "Operasional", caption: "Koordinasi jadwal pengiriman harian" },
  { id: "g7", category: "Pengiriman", caption: "Pengangkutan kontainer menuju pelabuhan" },
  { id: "g8", category: "Pengiriman", caption: "Proses serah terima barang ke klien" },
  { id: "g9", category: "Kantor", caption: "Ruang kerja tim PT Irja Express Logistic" },
  { id: "g10", category: "Kantor", caption: "Tim customer support melayani klien" },
  { id: "g11", category: "Armada", caption: "Perawatan rutin armada pengiriman" },
  { id: "g12", category: "Pengiriman", caption: "Pengiriman project cargo skala besar" },
];