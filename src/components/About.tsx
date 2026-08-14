import Reveal from "./Reveal";
import { CheckIcon } from "./Icons";
import { HISTORY, MISSION, VALUES } from "@/data/about";

export default function About() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <span className="eyebrow on-dark">About Us</span>
          <h1>Tentang PT Irja Express Logistic</h1>
        </div>
      </section>

      <section className="profile">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Company Profile</span>
            <h2>Sejarah, Latar Belakang &amp; Profil Perusahaan</h2>
            <p>
              PT Irja Express Logistic hadir sebagai mitra ekspedisi dan logistik 
              yang menghubungkan kebutuhan distribusi barang ke berbagai wilayah Indonesia, 
              dengan pengalaman dan keunggulan utama dalam melayani pengiriman menuju Papua dan Indonesia Timur.
            </p>
              
          </Reveal>
          {HISTORY.map((item) => (
            <div key={item.title} className={`history-row ${item.imageSide === "right" ? "reverse" : ""}`}>
              <div
                className="history-figure"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <Reveal className="history-text">
                <h3>{item.title}</h3>
                {item.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="vm">
        <div className="wrap vm-grid">
          <Reveal className="vm-block">
            <div className="vm-figure"/>
            <span className="eyebrow on-dark">Vision</span>
            <h2>Visi Perusahaan</h2>
            <p>
              Menjadi perusahaan logistik terdepan dan terpercaya yang mampu
              menghubungkan berbagai wilayah Indonesia melalui layanan
              ekspedisi yang aman, profesional, efisien, serta berorientasi
              pada kebutuhan pelanggan.
            </p>
          </Reveal>
          <Reveal className="vm-block">
            <span className="eyebrow on-dark">Mission</span>
            <h2>Misi Perusahaan</h2>
            <ul className="vm-list">
              {MISSION.map((m) => (
                <li key={m}>
                  {CheckIcon}
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="why">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Company Values</span>
            <h2>Nilai-Nilai Perusahaan</h2>
            <p>
              Di balik setiap pengiriman, terdapat kepercayaan yang harus
              dijaga. IRJA menjadikan integritas, responsivitas, kerja sama,
              dan keandalan sebagai fondasi dalam memberikan layanan logistik
              terbaik bagi pelanggan.
            </p>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="values-grid stagger">
            {VALUES.map((item) => (
              <Reveal key={item.letter} className="value-card">
                <span className="value-letter">{item.letter}</span>
                <h3>{item.title}</h3>
                <p className="value-tagline">{item.tagline}</p>
                <p className="value-desc">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="profile">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Legalitas</span>
            <h2>Company License &amp; Certification</h2>
            <p>Legal • Licensed • Compliant</p>
            <p>
              Beroperasi secara legal, profesional, dan sesuai ketentuan yang berlaku.
            </p>
            <p>
              PT Irja Express Logistic didukung oleh kelengkapan legalitas, perizinan usaha, dan dokumen pendukung sebagai bagian dari komitmen kami dalam memberikan layanan logistik yang terpercaya.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}