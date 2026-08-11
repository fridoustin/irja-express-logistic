export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-dots" />
      <svg className="hero-route" preserveAspectRatio="none" viewBox="0 0 1240 800">
        <path d="M -50 620 C 250 560, 380 700, 620 600 S 980 420, 1300 480" />
      </svg>
      <div className="wrap">
        <div className="hero-content">
          <span className="eyebrow" style={{ color: "var(--tan-300)" }}>
            PT Irja Express Logistic — Surabaya
          </span>
          <h1>
            Solusi Logistik <em>Cepat, Aman,</em> dan Terpercaya
          </h1>
          <p>
            Kami membantu bisnis Anda mengirim barang ke seluruh Indonesia
            dengan armada lengkap, tim profesional, dan sistem pengiriman
            yang dapat diandalkan setiap saat.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Hubungi Kami
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#services" className="btn btn-outline">
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
