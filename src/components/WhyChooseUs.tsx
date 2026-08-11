import Reveal from "./Reveal";

const ITEMS = [
  {
    idx: "01",
    title: "Tepat Waktu",
    desc: "Setiap jadwal pengiriman direncanakan dan dipantau agar sampai sesuai estimasi.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="25" r="16" />
        <path d="M24 16v9l7 4" />
        <path d="M18 6h12" />
      </svg>
    ),
  },
  {
    idx: "02",
    title: "Armada Lengkap",
    desc: "Tersedia berbagai jenis kendaraan sesuai kapasitas dan kebutuhan pengiriman.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="20" width="24" height="14" />
        <path d="M28 24h10l6 6v4H28z" />
        <circle cx="14" cy="38" r="3.4" />
        <circle cx="36" cy="38" r="3.4" />
      </svg>
    ),
  },
  {
    idx: "03",
    title: "Harga Kompetitif",
    desc: "Tarif transparan dan bersaing tanpa mengurangi kualitas layanan.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6v36M32 14c0-3.3-3.6-6-8-6s-8 2.4-8 5.4c0 7.6 16 3.8 16 11.4 0 3-3.6 5.4-8 5.4s-8-2.7-8-6" />
      </svg>
    ),
  },
  {
    idx: "04",
    title: "Driver Profesional",
    desc: "Pengemudi berpengalaman, terlatih, dan memahami standar keamanan.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="7" />
        <path d="M10 40c0-8 6-13 14-13s14 5 14 13" />
      </svg>
    ),
  },
  {
    idx: "05",
    title: "Support Responsif",
    desc: "Tim customer service siap membantu dan merespons kebutuhan Anda dengan cepat.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 26a16 16 0 0 1 32 0v8a4 4 0 0 1-4 4h-2v-12h6M8 34v-8h6v12H10a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    idx: "06",
    title: "Keamanan Terjamin",
    desc: "Barang diasuransikan dan ditangani sesuai prosedur keamanan yang ketat.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 5l16 6v11c0 10-7 17-16 21C15 39 8 32 8 22V11z" />
        <path d="M18 24l4 4 8-8" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Keunggulan Kami</span>
          <h2>Kenapa Memilih Irja Express</h2>
          <p>Kepercayaan klien kami dibangun dari konsistensi layanan, bukan sekadar janji.</p>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="why-grid stagger">
          {ITEMS.map((item) => (
            <Reveal key={item.idx} className="why-card">
              <span className="idx">{item.idx}</span>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
