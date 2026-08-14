import { ArrowRightIcon } from "./Icons";

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
              {ArrowRightIcon}
            </a>
            <a href="/services" className="btn btn-outline">
              Lihat Layanan
              {ArrowRightIcon}
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