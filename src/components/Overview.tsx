import Reveal from "./Reveal";
import { CheckIcon } from "./Icons";

const FOUNDED_YEAR = 2017;

export default function Overview() {
  return (
    <section className="overview" id="about">
      <div className="wrap">
        <Reveal className="overview-visual">
          <div className="overview-badge">
            <div className="num">{new Date().getFullYear() - FOUNDED_YEAR}+</div>
            <div className="lbl">Tahun Melayani Industri Logistik</div>
          </div>
        </Reveal>

        <Reveal className="overview-text">
          <span className="eyebrow">Tentang Perusahaan</span>
          <h2>Menghubungkan Bisnis, Menjangkau Lebih Jauh</h2>
          <p>
            PT Irja Express Logistic adalah perusahaan jasa pengiriman barang yang berdiri sejak 2017 
            dan berbasis di Surabaya. Kami melayani kebutuhan pengiriman barang menuju berbagai wilayah 
            Indonesia Timur, dengan fokus utama pada tujuan Papua.
          </p>
          <p>
            Dengan pengalaman sejak 2017, kami terus berkomitmen untuk memberikan layanan pengiriman yang aman, 
            tepat, dan dapat diandalkan. Kami memahami bahwa setiap pengiriman memiliki kebutuhan dan tantangan 
            yang berbeda, terutama untuk tujuan Indonesia Timur.
          </p>
          <ul className="overview-points">
            <li>
              {CheckIcon}
              Legalitas &amp; izin usaha lengkap dan resmi
            </li>
            <li>
              {CheckIcon}
              Sistem pelacakan pengiriman yang transparan
            </li>
            <li>
              {CheckIcon}
              Jaringan mitra di berbagai kota besar
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}