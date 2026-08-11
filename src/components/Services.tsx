import Link from "next/link";
import Reveal from "./Reveal";
import { SERVICES } from "@/data/services";

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
          {SERVICES.slice(0, 6).map((s) => (
            <Reveal key={s.slug} className="service-card">
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <Link href={`/services/${s.slug}`} className="service-link">
                Selengkapnya
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="services-more">
          <Link href="/services" className="btn btn-outline">
            Lihat Semua Layanan
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}