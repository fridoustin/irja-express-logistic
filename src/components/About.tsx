import Reveal from "./Reveal";

const HISTORY = [
  {
    title: "Sejarah Perusahaan",
    imageSide: "left" as const,
    image: "/images/sejarah.jpg",
    paragraphs: [
      "PT Irja Express Logistic didirikan pada tahun 2017 oleh Bapak Tri Setyo Handoko, berawal dari kebutuhan akan layanan ekspedisi yang aman, terpercaya, dan mampu mendukung distribusi barang menuju wilayah Indonesia Timur, khususnya Papua.",
      "Sejak awal berdiri sebagai CV Irja Express Logistic, perusahaan telah membangun pengalaman dalam menangani berbagai jenis pengiriman, mulai dari bahan bangunan, kendaraan pribadi dan kendaraan berat, bahan makanan, hingga berbagai kebutuhan bisnis dan komersial lainnya.",
      "Dengan pengalaman dalam melayani pengiriman menuju berbagai wilayah seperti Timika, Jayapura, Manokwari, Nabire, Merauke, Sorong, dan sebagainya, perusahaan terus memperkuat jaringan dan kemampuan operasionalnya, khususnya dalam melayani kebutuhan logistik menuju Papua dan Indonesia Timur.",
      "Pada tahun 2023, CV Irja Express Logistic bertransformasi menjadi PT Irja Express Logistic. Transformasi ini menjadi salah satu tonggak penting dalam perjalanan perusahaan, menandai langkah untuk memperkuat struktur bisnis, meningkatkan kapasitas operasional, serta mengembangkan layanan dan jaringan logistik secara lebih luas.",
      "Pada tahun yang sama, PT Irja Express Logistic membuka kantor cabang di Timika, Papua, sebagai langkah strategis untuk memperkuat kehadiran dan jaringan operasional perusahaan di kawasan Papua. Kehadiran cabang Timika juga menjadi bagian dari upaya perusahaan untuk mendekatkan layanan kepada pelanggan serta mendukung proses distribusi barang di wilayah tersebut.",
      "Seiring dengan perkembangan kebutuhan pelanggan, PT Irja Express Logistic terus memperluas cakupan layanannya dan kini melayani pengiriman ke berbagai wilayah di Indonesia, dengan Papua dan Indonesia Timur tetap menjadi salah satu fokus utama dan kekuatan perusahaan.",
      "Berbasis di Surabaya dan didukung oleh cabang di Timika, perusahaan memiliki tim administrasi dan pelayanan di kantor, tim operasional di pelabuhan dan gudang, serta jaringan tim dan mitra kerja di berbagai kota tujuan. Kolaborasi antara seluruh tim tersebut memungkinkan setiap proses pengiriman, mulai dari penerimaan dan administrasi barang, proses operasional di pelabuhan, hingga distribusi ke wilayah tujuan, dapat dikoordinasikan secara efektif.",
      "Dengan pengalaman sejak 2017 dan semangat untuk terus berkembang, PT Irja Express Logistic berkomitmen menjadi mitra logistik yang aman, terpercaya, profesional, dan dapat diandalkan bagi kebutuhan individu maupun bisnis di berbagai wilayah Indonesia.",
    ],
  },
  {
    title: "Latar Belakang",
    imageSide: "right" as const,
    image: "/images/latarbelakang.jpg",
    paragraphs: [
      "Perkembangan perdagangan dan distribusi barang di Indonesia mendorong kebutuhan akan layanan logistik yang semakin efisien, aman, dan mampu menjangkau berbagai wilayah. Sebagai negara kepulauan dengan wilayah geografis yang luas, konektivitas antarpulau menjadi bagian penting dalam mendukung kelancaran rantai pasok, baik bagi pelaku usaha maupun masyarakat.",
      "Dalam konteks tersebut, Surabaya memiliki posisi strategis sebagai salah satu pusat perdagangan, industri, dan distribusi utama di Indonesia. Didukung oleh infrastruktur perdagangan, pergudangan, serta akses pelabuhan yang menunjang aktivitas logistik, Surabaya menjadi salah satu titik penting dalam pergerakan barang antarpulau. Letaknya yang strategis juga menjadikan Surabaya sebagai salah satu pintu gerbang utama menuju kawasan Indonesia Timur.",
      "Kondisi tersebut menjadi salah satu alasan PT Irja Express Logistic menjadikan Surabaya sebagai basis operasional. Dari Surabaya, perusahaan dapat mendukung proses penerimaan, konsolidasi, penanganan, dan pengiriman barang menuju berbagai wilayah di Indonesia, khususnya Papua dan Indonesia Timur.",
      "Pengembangan jaringan perusahaan kemudian diperkuat dengan dibukanya kantor cabang Timika pada tahun 2023. Kehadiran cabang ini menjadi langkah strategis untuk memperkuat operasional di Papua, mendekatkan perusahaan dengan pelanggan, serta mendukung kelancaran distribusi barang melalui wilayah Timika dan sekitarnya.",
      "Dalam menjalankan operasionalnya, perusahaan didukung oleh tim yang terintegrasi, mulai dari tim administrasi dan pelayanan di kantor, tim operasional di gudang dan Pelabuhan Surabaya, tim cabang Timika, hingga jaringan tim dan mitra kerja di berbagai kota. Kolaborasi tersebut memungkinkan setiap tahapan pengiriman dapat dikelola secara lebih terkoordinasi, mulai dari penerimaan barang, administrasi, proses konsolidasi dan stuffing, hingga distribusi ke wilayah tujuan.",
      "Ke depan, PT Irja Express Logistic terus berupaya mengembangkan jaringan, meningkatkan efisiensi operasional, serta memanfaatkan teknologi dan sistem digital untuk memberikan pengalaman layanan yang semakin baik. Dengan pengalaman, jaringan, dan sumber daya yang dimiliki, perusahaan berkomitmen menjadi mitra strategis dalam mendukung kebutuhan logistik dan rantai pasok pelanggan di berbagai wilayah Indonesia.",
    ],
  },
];

const HISTORY_PLACEHOLDER_ICON = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="5" y="9" width="38" height="30" rx="2" />
    <path d="M5 32l10-10 8 8 8-11 12 13" />
    <circle cx="17" cy="18" r="3" />
  </svg>
);


const MISSION = [
  "Memberikan layanan ekspedisi yang aman dan terpercaya.",
  "Mengembangkan jaringan distribusi ke seluruh wilayah Indonesia.",
  "Mempertahankan keunggulan dalam pengiriman menuju Papua dan Indonesia Timur.",
  "Membangun tim yang profesional, solid, dan berorientasi pada pelayanan.",
  "Mengembangkan proses operasional dan teknologi untuk meningkatkan efisiensi.",
  "Membangun hubungan jangka panjang dengan pelanggan dan mitra bisnis.",
  "Menjadi bagian dari rantai pasok yang mendukung pertumbuhan bisnis di Indonesia.",
];

const VALUES = [
  {
    letter: "I",
    title: "Integritas",
    tagline: "Bekerja dengan jujur, bertanggung jawab, dan dapat dipercaya.",
    desc: "Kami menjunjung tinggi kejujuran dan tanggung jawab dalam setiap proses. Bagi kami, kepercayaan pelanggan bukan sekadar bagian dari bisnis, tetapi merupakan amanah yang harus dijaga.",
  },
  {
    letter: "R",
    title: "Responsif",
    tagline: "Cepat memahami, cepat bertindak, tepat memberikan solusi.",
    desc: "Kami memahami bahwa kebutuhan logistik dapat berubah dan setiap pengiriman memiliki tantangannya sendiri. Karena itu, kami mengutamakan komunikasi yang cepat, tanggap, dan solutif dalam melayani pelanggan.",
  },
  {
    letter: "J",
    title: "Jembatan",
    tagline: "Menghubungkan kebutuhan, wilayah, dan peluang.",
    desc: "Kami hadir sebagai penghubung antara pelanggan, barang, dan berbagai wilayah di Indonesia. Dari Surabaya hingga Papua dan seluruh penjuru Indonesia, kami membangun konektivitas yang mendukung kelancaran distribusi dan rantai pasok.",
  },
  {
    letter: "A",
    title: "Andal",
    tagline: "Konsisten dalam memberikan layanan yang aman dan terpercaya.",
    desc: "Keandalan dibangun melalui pengalaman, koordinasi, dan kerja sama tim. Dengan dukungan tim kantor, gudang, pelabuhan, serta jaringan operasional di berbagai daerah, kami berkomitmen memastikan setiap proses pengiriman berjalan secara terkoordinasi dan bertanggung jawab.",
  },
];

const LICENSE_ICON = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="6" width="34" height="30" rx="2" />
    <path d="M14 16h20M14 23h20M14 30h12" />
    <circle cx="24" cy="41" r="1.6" fill="currentColor" />
  </svg>
);

export default function About() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <span className="eyebrow on-dark">About Us</span>
          <h1>Tentang PT Irja Express Logistic</h1>
        </div>
      </section>

      <section className="profile">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Company Profile</span>
            <h2>Sejarah, Latar Belakang &amp; Profil Perusahaan</h2>
            <p>
              PT Irja Express Logistic hadir sebagai mitra ekspedisi dan logistik 
              yang menghubungkan kebutuhan distribusi barang ke berbagai wilayah Indonesia, 
              dengan pengalaman dan keunggulan utama dalam melayani pengiriman menuju Papua dan Indonesia Timur.
            </p>
              
          </Reveal>
          {HISTORY.map((item) => (
            <div key={item.title} className={`history-row ${item.imageSide === "right" ? "reverse" : ""}`}>
              <div
                className="history-figure"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <Reveal className="history-text">
                <h3>{item.title}</h3>
                {item.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="vm">
        <div className="wrap vm-grid">
          <Reveal className="vm-block">
            <div className="vm-figure"/>
            <span className="eyebrow on-dark">Vision</span>
            <h2>Visi Perusahaan</h2>
            <p>
              Menjadi perusahaan logistik terdepan dan terpercaya yang mampu
              menghubungkan berbagai wilayah Indonesia melalui layanan
              ekspedisi yang aman, profesional, efisien, serta berorientasi
              pada kebutuhan pelanggan.
            </p>
          </Reveal>
          <Reveal className="vm-block">
            <span className="eyebrow on-dark">Mission</span>
            <h2>Misi Perusahaan</h2>
            <ul className="vm-list">
              {MISSION.map((m) => (
                <li key={m}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="why">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Company Values</span>
            <h2>Nilai-Nilai Perusahaan</h2>
            <p>
              Di balik setiap pengiriman, terdapat kepercayaan yang harus
              dijaga. IRJA menjadikan integritas, responsivitas, kerja sama,
              dan keandalan sebagai fondasi dalam memberikan layanan logistik
              terbaik bagi pelanggan.
            </p>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="values-grid stagger">
            {VALUES.map((item) => (
              <Reveal key={item.letter} className="value-card">
                <span className="value-letter">{item.letter}</span>
                <h3>{item.title}</h3>
                <p className="value-tagline">{item.tagline}</p>
                <p className="value-desc">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="profile">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Legalitas</span>
            <h2>Company License &amp; Certification</h2>
            <p>Legal • Licensed • Compliant</p>
            <p>
              Beroperasi secara legal, profesional, dan sesuai ketentuan yang berlaku.
            </p>
            <p>
              PT Irja Express Logistic didukung oleh kelengkapan legalitas, perizinan usaha, dan dokumen pendukung sebagai bagian dari komitmen kami dalam memberikan layanan logistik yang terpercaya.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}