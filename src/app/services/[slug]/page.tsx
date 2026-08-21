import Header from "@/components/Header";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import SchemeSection from "@/components/Schemesection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/data/services";
import { CheckIcon } from "@/components/Icons";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="page-banner">
          <div className="wrap">
            <span className="eyebrow on-dark">Services</span>
            <h1>{service.title}</h1>
          </div>
        </section>

        <section className="profile" style={{ paddingBottom: 24 }}>
          <div className="wrap">
            <Reveal className="section-head" style={{ maxWidth: 720 }}>
              <span className="eyebrow">Deskripsi Layanan</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </Reveal>
            <Reveal>
              <Link href="#contact" className="btn btn-primary">
                Hubungi Kami
              </Link>
            </Reveal>
          </div>
        </section>

        {service.schemes && <SchemeSection schemes={service.schemes} />}

        <section className="why">
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Keunggulan</span>
              <h2>Kenapa Memilih Layanan Ini</h2>
            </Reveal>
            <ul className="overview-points stagger">
              {service.advantages.map((a) => (
                <Reveal as="li" key={a}>
                  {CheckIcon}
                  {a}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {(service.serviceArea || (service.fleetTypes && service.fleetTypes.length > 0)) && (
          <section className="profile">
            <div className="wrap">
              {service.serviceArea && (
                <Reveal className="section-head" style={{ maxWidth: 720 }}>
                  <span className="eyebrow">Area Layanan</span>
                  <h2>Cakupan Wilayah</h2>
                  <p>{service.serviceArea}</p>
                </Reveal>
              )}
              {service.fleetTypes && service.fleetTypes.length > 0 && (
                <>
                  <Reveal className="section-head" style={{ maxWidth: 720, marginTop: 8 }}>
                    <span className="eyebrow">Jenis Armada</span>
                    <h2>Armada yang Digunakan</h2>
                  </Reveal>
                  <div className="fleet-chips">
                    {service.fleetTypes.map((f) => (
                      <span key={f} className="chip">{f}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {service.note && (
          <section className="profile">
            <div className="wrap">
              <Reveal className="section-head" style={{ maxWidth: 720 }}>
                <span className="eyebrow">{service.note.eyebrow}</span>
                <h2>{service.note.heading}</h2>
                <p>{service.note.body}</p>
              </Reveal>
            </div>
          </section>
        )}

        <section className="why">
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Proses Kerja</span>
              <h2>Tahapan Layanan</h2>
            </Reveal>
            <div className="why-grid stagger">
              {service.workProcess.map((step, i) => (
                <Reveal key={step.title} className="why-card">
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Cta />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}