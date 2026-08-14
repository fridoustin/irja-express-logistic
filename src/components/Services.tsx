import Link from "next/link";
import Reveal from "./Reveal";
import { SERVICES } from "@/data/services";
import { ArrowRightIcon } from "./Icons";

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
                {ArrowRightIcon}
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="services-more">
          <Link href="/services" className="btn btn-outline">
            Lihat Semua Layanan
            {ArrowRightIcon}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}