import Reveal from "./Reveal";

export default function Overview() {
  return (
    <section className="overview" id="about">
      <div className="wrap">
        <Reveal className="overview-visual">
          <svg viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg">
            <circle className="glob-ring" cx="200" cy="180" r="130" />
            <circle className="glob-ring" cx="200" cy="180" r="95" opacity=".6" />
            <circle cx="200" cy="180" r="4" fill="#d8c3a0" />
            <path
              d="M60 300 C 140 340, 260 280, 350 330"
              fill="none"
              stroke="rgba(216,195,160,.5)"
              strokeWidth="1.4"
              strokeDasharray="4 8"
            />
          </svg>
          <div className="overview-badge">
            <div className="num">15+</div>
            <div className="lbl">Tahun Melayani Industri Logistik</div>
          </div>
        </Reveal>

        <Reveal className="overview-text">
          <span className="eyebrow">Tentang Perusahaan</span>
          <h2>Mitra logistik yang tumbuh bersama bisnis Anda</h2>
          <p>
            PT Irja Express Logistic adalah perusahaan jasa ekspedisi dan
            pengiriman barang yang berbasis di Surabaya, melayani rute darat,
            laut, dan udara ke seluruh wilayah Indonesia. Sejak awal berdiri,
            kami berkomitmen menghadirkan layanan logistik yang efisien,
            transparan, dan dapat diandalkan.
          </p>
          <p>
            Didukung armada yang terawat dan tim operasional berpengalaman,
            kami memastikan setiap barang sampai tepat waktu dalam kondisi
            terbaik — mulai dari UMKM hingga perusahaan skala nasional.
          </p>
          <ul className="overview-points">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Legalitas &amp; izin usaha lengkap dan resmi
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Sistem pelacakan pengiriman yang transparan
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Jaringan mitra di berbagai kota besar
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
