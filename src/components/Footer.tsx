import Image from "next/image";
import Link from "next/link";
import { BRANCHES } from "@/data/branches";
import { InstagramIcon, TikTokIcon } from "./Icons";

const SOCIALS = [
  { label: "Instagram", username: "@irja_expresslogistic", href: "https://instagram.com/irja_expresslogistic", icon: InstagramIcon },
  { label: "TikTok", username: "@irja_express_logistic", href: "https://www.tiktok.com/@irja_express_logistic", icon: TikTokIcon },
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
              Mitra logistik terpercaya untuk pengiriman barang ke Indonesia Timur, khususnya Papua.
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