import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Pengiriman Darat",
    desc: "Layanan trucking antar kota dan antar pulau dengan berbagai pilihan kapasitas armada.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="18" width="24" height="14" />
        <path d="M27 22h10l6 6v4H27z" />
        <circle cx="13" cy="36" r="3.2" />
        <circle cx="35" cy="36" r="3.2" />
      </svg>
    ),
  },
  {
    title: "Ekspedisi Laut",
    desc: "Pengiriman kargo via jalur laut untuk volume besar dengan efisiensi biaya optimal.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 30h36l-4 10H10z" />
        <path d="M14 30V14h12l6 16" />
      </svg>
    ),
  },
  {
    title: "Ekspedisi Udara",
    desc: "Pengiriman cepat via kargo udara untuk barang bernilai tinggi dan mendesak.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M24 6l6 14 16 6-16 3-6 15-6-15-16-3 16-6z" />
      </svg>
    ),
  },
  {
    title: "Pergudangan",
    desc: "Fasilitas penyimpanan aman dengan manajemen inventaris yang rapi dan terpantau.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16l20-10 20 10-20 10z" />
        <path d="M4 16v18l20 10 20-10V16" />
        <path d="M24 26v18" />
      </svg>
    ),
  },
  {
    title: "Distribusi & Cargo",
    desc: "Distribusi rutin untuk kebutuhan rantai pasok bisnis retail dan manufaktur.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="10" width="32" height="28" rx="2" />
        <path d="M8 18h32M18 10v8" />
      </svg>
    ),
  },
  {
    title: "Freight Forwarding",
    desc: "Pengurusan dokumen dan kepabeanan untuk pengiriman domestik maupun internasional.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="24" cy="24" r="18" />
        <path d="M8 24h32M24 6c5 5 5 31 0 36M24 6c-5 5-5 31 0 36" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Layanan Kami</span>
          <h2>Solusi Pengiriman untuk Setiap Kebutuhan</h2>
          <p>
            Dari pengiriman lokal hingga lintas pulau, kami sediakan moda
            transportasi yang sesuai dengan skala bisnis Anda.
          </p>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="service-row stagger">
          {SERVICES.map((s) => (
            <Reveal key={s.title} className="service-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#" className="service-link">
                Selengkapnya
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="services-more">
          <a href="#" className="btn btn-outline">
            Lihat Semua Layanan
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
