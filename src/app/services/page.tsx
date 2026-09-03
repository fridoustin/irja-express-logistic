import Header from "@/components/Header";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { SERVICES, CARGO_CATEGORIES, CARGO_CATEGORIES_INTRO, CARGO_CATEGORIES_NOTE } from "@/data/services";
import { ArrowRightIcon } from "@/components/Icons";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-banner page-banner-services">
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
                <Reveal key={s.slug} className="why-card services-index-card">
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
          </div>
        </section>

        <section>
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Kategori Barang Kiriman</span>
              <h2>Barang yang Kami Layani</h2>
              <p>{CARGO_CATEGORIES_INTRO}</p>
            </Reveal>
            <div className="cargo-grid stagger">
              {CARGO_CATEGORIES.map((cat, i) => (
                <Reveal key={cat.title} className="cargo-card">
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </Reveal>
              ))}
            </div>
            <p className="cargo-note">{CARGO_CATEGORIES_NOTE}</p>
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}