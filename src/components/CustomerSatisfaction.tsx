import { StarIcon } from "./Icons";


export default function CustomerSatisfaction() {
  return (
    <section className="testi" id="gallery">
      <div className="wrap">
        <div className="section-head" style={{ margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Kepuasan Pelanggan
          </span>
          <h2>Komitmen Layanan Bintang 5</h2>
        </div>
        <div className="testi-wrap">
          <div className="testi-stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{StarIcon}</span>
            ))}
          </div>
          <p className="testi-satisfaction-text">
            Kami berkomitmen menghadirkan layanan pengiriman yang aman, tepat
            waktu, dan memuaskan bagi setiap pelanggan — dari UMKM hingga
            perusahaan skala nasional.
          </p>
        </div>
      </div>
    </section>
  );
}