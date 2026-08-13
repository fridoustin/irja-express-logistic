import Image from "next/image";
import Link from "next/link";
import { BRANCHES } from "@/data/branches";

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

const SOCIALS = [
  { label: "Instagram", username: "@irjaexpress", href: "https://instagram.com/irjaexpress", icon: instagramIcon },
  { label: "TikTok", username: "@irjaexpress", href: "https://tiktok.com/@irjaexpress", icon: tiktokIcon },
];

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              <Image src="/images/logo.png" alt="Irja Express Logistic" width={44} height={44} />
              <b>Irja Express Logistic</b>
            </div>
            <p>
              Mitra logistik terpercaya untuk pengiriman darat, laut, dan
              udara ke seluruh Indonesia — berbasis di Surabaya.
            </p>
          </div>
          <div>
            <h4>Navigasi</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Layanan</h4>
            <ul>
              <li><Link href="/services/trucking">Pengiriman Darat</Link></li>
              <li><Link href="/services/sea-freight">Ekspedisi Laut</Link></li>
              <li><Link href="/services/air-freight">Ekspedisi Udara</Link></li>
              <li><Link href="/services/warehousing">Pergudangan</Link></li>
            </ul>
          </div>
          <div>
            <h4>Kontak</h4>
            <p style={{ marginBottom: 10 }}>+62 800-0000-0000</p>
            <p style={{ marginBottom: 20 }}>info@irjaexpress.co.id</p>
            <div className="foot-contact-social">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  <span className="foot-contact-social-icon">{s.icon}</span>
                  {s.username}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Lokasi</h4>
            <div className="foot-branches">
              {BRANCHES.map((b) => (
                <div key={b.name} className="foot-branch">
                  <span>{b.name}</span>
                  <p>{b.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 PT Irja Express Logistic. Seluruh hak cipta dilindungi.</span>
          <span className="mono" style={{ letterSpacing: "0.06em" }}>
            SURABAYA · INDONESIA
          </span>
        </div>
      </div>
    </footer>
  );
}