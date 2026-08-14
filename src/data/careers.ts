export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  responsibilities: string[];
  requirements: string[];
};

// Tambahkan lowongan baru di sini kapan pun tersedia, contoh:
// {
//   slug: "staff-admin-logistik",
//   title: "Staff Admin Logistik",
//   department: "Operasional",
//   location: "Surabaya",
//   type: "Full-time",
//   responsibilities: ["Input data pengiriman harian", "Koordinasi dengan tim gudang"],
//   requirements: ["Min. D3 semua jurusan", "Menguasai Ms. Excel", "Teliti dan disiplin"],
// },
//
// Selama array ini kosong, halaman Career otomatis menampilkan pesan
// "belum ada lowongan" beserta formulir lamaran umum.
export const JOBS: Job[] = [];