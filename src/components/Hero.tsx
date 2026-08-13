export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-dots" />
      <div className="wrap">
        <div className="hero-content">
          <span className="eyebrow" style={{ color: "var(--tan-300)" }}>
            PT Irja Express Logistic — Surabaya
          </span>
          <h1>
            Solusi Logistik <em>Cepat, Aman,</em> dan Terpercaya
          </h1>
          <p>
            Kami hadir untuk membantu menghubungkan kebutuhan pengiriman barang Anda ke berbagai wilayah Indonesia Timur, khususnya Papua.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary">
              Hubungi Kami
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="/services" className="btn btn-outline">
              Lihat Layanan
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="line" />
      </div>
    </section>
  );
}