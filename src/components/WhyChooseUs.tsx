import Reveal from "./Reveal";
import { ClockIcon, TruckIcon, UserCheckIcon, HeadsetIcon, ShieldCheckIcon, DollarIcon } from "./Icons";

const ITEMS = [
  { idx: "01", title: "Tepat Waktu", desc: "Setiap jadwal pengiriman direncanakan dan dipantau agar sampai sesuai estimasi.", icon: ClockIcon },
  { idx: "02", title: "Armada Lengkap", desc: "Tersedia berbagai jenis kendaraan sesuai kapasitas dan kebutuhan pengiriman.", icon: TruckIcon },
  { idx: "03", title: "Harga Kompetitif", desc: "Tarif transparan dan bersaing tanpa mengurangi kualitas layanan.", icon: DollarIcon },
  { idx: "04", title: "Driver Profesional", desc: "Pengemudi berpengalaman, terlatih, dan memahami standar keamanan.", icon: UserCheckIcon },
  { idx: "05", title: "Support Responsif", desc: "Tim customer service siap membantu dan merespons kebutuhan Anda dengan cepat.", icon: HeadsetIcon },
  { idx: "06", title: "Keamanan Terjamin", desc: "Barang diasuransikan dan ditangani sesuai prosedur keamanan yang ketat.", icon: ShieldCheckIcon },
];

export default function WhyChooseUs() {
  return (
    <section className="why">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Keunggulan Kami</span>
          <h2>Kenapa Memilih Irja Express</h2>
          <p>Kepercayaan klien kami dibangun dari konsistensi layanan, bukan sekadar janji.</p>
        </Reveal>
      </div>
      <div className="wrap">
        <div className="why-grid stagger">
          {ITEMS.map((item) => (
            <Reveal key={item.idx} className="why-card">
              <span className="idx">{item.idx}</span>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}