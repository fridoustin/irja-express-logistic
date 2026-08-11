import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section className="cta" id="career">
      <div className="wrap cta-inner">
        <Reveal as="h2">Siap Kirim Barang Anda Bersama Kami?</Reveal>
        <Reveal as="p">
          Hubungi tim kami sekarang untuk konsultasi gratis dan penawaran
          harga terbaik sesuai kebutuhan bisnis Anda.
        </Reveal>
        <Reveal className="cta-actions">
          <a
            href="https://wa.me/6280000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ background: "#fff", color: "var(--green-800)" }}
          >
            Chat via WhatsApp
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            Isi Formulir Kontak
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
