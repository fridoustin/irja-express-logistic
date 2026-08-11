import Image from "next/image";
import Link from "next/link";

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
            <p style={{ marginBottom: 10 }}>Jl. Raya Logistik No. 88, Surabaya, Jawa Timur</p>
            <p style={{ marginBottom: 10 }}>+62 800-0000-0000</p>
            <p>info@irjaexpress.co.id</p>
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