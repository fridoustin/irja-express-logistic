import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { BRANCHES } from "@/data/branches";
import { ClockIcon, InstagramIcon, MailIcon, PhoneIcon, PinIcon, TikTokIcon, WhatsAppIcon } from "./Icons";
import { WHATSAPP_URL } from "@/lib/whatsapp";


const CONTACT_INFO = [
  {
    title: "Alamat Kantor Pusat",
    icon: PinIcon,
    value: "Jl. Demak Timur X No.1, Gundih, Kec. Bubutan, Surabaya, Jawa Timur 60172",
  },
  {
    title: "Telepon",
    icon: PhoneIcon,
    value: "+62 813 5958 5989",
    href: "tel:+6281359585989",
  },
  {
    title: "WhatsApp",
    icon: WhatsAppIcon,
    value: "+62 813 5958 5989",
    href: WHATSAPP_URL,
  },
  {
    title: "Email",
    icon: MailIcon,
    value: "irjaexpresslogistic17@gmail.com",
    href: "mailto:irjaexpresslogistic17@gmail.com",
  },
  {
    title: "Jam Operasional",
    icon: ClockIcon,
    value: "Senin – Jumat, 09.00 – 16.00 WIB\nSabtu, 09.00 – 14.00 WIB",
  },
  {
    title: "Media Sosial",
    icon: InstagramIcon,
    links: [
      { label: "Instagram", href: "https://instagram.com/irja_expresslogistic", icon: InstagramIcon },
      { label: "TikTok", href: "https://www.tiktok.com/@irja_express_logistic", icon: TikTokIcon },
    ],
  },
];

export default function Contact() {
  return (
    <>
      <section className="page-banner page-banner-contact">
        <div className="wrap">
          <span className="eyebrow on-dark">Contact</span>
          <h1>Hubungi PT Irja Express Logistic</h1>
        </div>
      </section>

      <section className="profile">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Informasi Kontak</span>
            <h2>Kami Siap Membantu Kebutuhan Logistik Anda</h2>
            <p>Hubungi kami melalui kontak di bawah, atau kunjungi langsung kantor kami di Surabaya.</p>
          </Reveal>

          <div className="contact-info-grid stagger">
            {CONTACT_INFO.map((item) => (
              <Reveal key={item.title} className="contact-card">
                <div className="icon">{item.icon}</div>
                <h4>{item.title}</h4>
                {item.links ? (
                  <div className="social-links">
                    {item.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.label}>
                        {l.icon}
                      </a>
                    ))}
                  </div>
                ) : item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <p style={{ whiteSpace: "pre-line" }}>{item.value}</p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">Cabang Kami</span>
            <h2>Lokasi Kantor &amp; Titik Stuffing</h2>
          </Reveal>
          <div className="branch-grid stagger">
            {BRANCHES.map((b) => (
              <Reveal key={b.name} className="branch-card">
                <h4>{b.name}</h4>
                <p>{b.address}</p>
                <div className="branch-map">
                  {b.mapSrc ? (
                    <iframe
                      src={b.mapSrc}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Lokasi ${b.name}`}
                    />
                  ) : (
                    <div className="branch-map-placeholder">
                      {PinIcon}
                      <span>Peta menyusul</span>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="why">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Formulir Kontak</span>
            <h2>Kirim Pesan ke Tim Kami</h2>
            <p>Isi formulir di bawah ini, tim kami akan menghubungi Anda kembali secepatnya.</p>
          </Reveal>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}