"use client";

import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Irja Express jadi mitra logistik utama toko kami. Barang selalu sampai tepat waktu dan tim support-nya sangat mudah dihubungi.",
    name: "Hendra Wijaya",
    role: "Pemilik — Toko Makmur Jaya, Surabaya",
  },
  {
    quote:
      "Proses pengiriman ke luar pulau jadi jauh lebih mudah. Harga bersaing dan armadanya benar-benar terawat.",
    name: "Siti Rahmawati",
    role: "Manajer Operasional — PT Sinar Abadi",
  },
  {
    quote:
      "Yang paling saya suka adalah transparansi status pengiriman. Kami selalu tahu posisi barang tanpa perlu bertanya berkali-kali.",
    name: "Budi Santoso",
    role: "Founder — Kopi Nusantara Group",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testi" id="gallery">
      <div className="wrap">
        <div className="section-head" style={{ margin: "0 auto 56px", textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Testimoni
          </span>
          <h2>Kata Klien &amp; Mitra Kami</h2>
        </div>
        <div className="testi-wrap">
          <svg className="testi-quote" viewBox="0 0 48 48" fill="currentColor">
            <path d="M14 24c-4 0-6-3-6-7 0-6 4-11 11-13l2 4c-5 2-7 5-7 8 3 0 6 2 6 6s-3 6-6 6zm20 0c-4 0-6-3-6-7 0-6 4-11 11-13l2 4c-5 2-7 5-7 8 3 0 6 2 6 6s-3 6-6 6z" />
          </svg>
          <div className="testi-track">
            {TESTIMONIALS.map((t, i) => (
              <div className={`testi-slide ${i === active ? "active" : ""}`} key={t.name}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="testi-who">
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="testi-dots">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                className={i === active ? "active" : ""}
                onClick={() => setActive(i)}
                aria-label={`Testimoni ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
