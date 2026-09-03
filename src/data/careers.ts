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

export const INTERNSHIP = {
  title: "Internship at IRJA Express Logistic",
  tagline: "Start Your Learning Journey with IRJA",
  intro:
    "Sedang mencari tempat untuk mengembangkan pengalaman dan pengetahuan di dunia kerja? IRJA Express Logistics membuka kesempatan bagi mahasiswa yang ingin mendapatkan pengalaman langsung di industri logistik melalui program internship.",
  learn: [
    "Mengenal proses operasional dan administrasi logistik",
    "Memahami alur pengiriman cargo dari origin hingga destination",
    "Mendukung aktivitas marketing, sales, dan business development",
    "Belajar mengenai customer service dan koordinasi pengiriman",
    "Mengembangkan kemampuan komunikasi, teamwork, problem solving, dan professional skills",
  ],
  whoCanApply:
    "Program ini terbuka bagi mahasiswa aktif yang ingin mendapatkan pengalaman kerja dan memiliki semangat untuk belajar serta berkembang bersama IRJA.",
  cta:
    "Kirimkan CV dan informasi internship dari kampusmu melalui kontak yang tersedia, dan ceritakan kepada kami bagaimana kamu ingin belajar dan berkontribusi.",
};