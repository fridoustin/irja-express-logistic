import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const pinIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 44s14-12.6 14-23a14 14 0 1 0-28 0c0 10.4 14 23 14 23z" />
    <circle cx="24" cy="21" r="5" />
  </svg>
);
const phoneIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 8h5l2 8-4 3c2 6 6 10 12 12l3-4 8 2v5c0 2-2 4-4 4C22 38 10 26 10 12c0-2 2-4 5-4z" />
  </svg>
);
const whatsappIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.6 14.2c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4.2.5.7 1.8.8 1.9.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.7 1.7.3.2.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.7-.1.3.1 1.7.8 2 .9.3.2.5.2.6.4.1.2.1.7-.1 1.3z" />
  </svg>
);
const mailIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="10" width="36" height="28" rx="2" />
    <path d="M8 12l16 14 16-14" />
  </svg>
);
const clockIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="17" />
    <path d="M24 14v10l7 4" />
  </svg>
);
const instagramIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
const tiktokIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.5 3v11.6a3.4 3.4 0 1 1-2.9-3.4" />
    <path d="M13.5 3c.5 2.6 2.5 4.2 4.5 4.4" />
  </svg>
);

const CONTACT_INFO = [
  {
    title: "Alamat Kantor Pusat",
    icon: pinIcon,
    value: "Jl. Raya Logistik No. 88, Surabaya, Jawa Timur, Indonesia",
  },
  {
    title: "Telepon",
    icon: phoneIcon,
    value: "+62 31 000-0000",
    href: "tel:+62310000000",
  },
  {
    title: "WhatsApp",
    icon: whatsappIcon,
    value: "+62 800-0000-0000",
    href: "https://wa.me/6280000000000",
  },
  {
    title: "Email",
    icon: mailIcon,
    value: "info@irjaexpress.co.id",
    href: "mailto:info@irjaexpress.co.id",
  },
  {
    title: "Jam Operasional",
    icon: clockIcon,
    value: "Senin – Sabtu, 08.00 – 17.00 WIB",
  },
  {
    title: "Media Sosial",
    icon: instagramIcon,
    links: [
      { label: "Instagram", href: "https://instagram.com/irjaexpress", icon: instagramIcon },
      { label: "TikTok", href: "https://tiktok.com/@irjaexpress", icon: tiktokIcon },
    ],
  },
];

export default function Contact() {
  return (
    <>
      <section className="page-banner">
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
                  <p>{item.value}</p>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="map-embed">
            <iframe
              src="https://www.google.com/maps?q=Surabaya,Jawa+Timur&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi PT Irja Express Logistic"
            />
          </Reveal>
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