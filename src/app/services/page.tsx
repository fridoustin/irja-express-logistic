import Header from "@/components/Header";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { SERVICES } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-banner">
          <div className="wrap">
            <span className="eyebrow on-dark">Services</span>
            <h1>Layanan Logistik Kami</h1>
          </div>
        </section>

        <section className="profile">
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Semua Layanan</span>
              <h2>Solusi Pengiriman untuk Setiap Kebutuhan</h2>
              <p>Setiap layanan memiliki halaman detail: deskripsi, keunggulan, area layanan, armada, dan proses kerja.</p>
            </Reveal>
            <div className="why-grid stagger">
              {SERVICES.map((s) => (
                <Reveal key={s.slug} className="why-card">
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
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}