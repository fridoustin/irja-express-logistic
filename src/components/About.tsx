import Reveal from "./Reveal";

const PROFILE = [
  {
    title: "Sejarah Perusahaan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Latar Belakang",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    title: "Profil Singkat",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
];

const MISSION = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
];

const VALUES = [
  {
    idx: "01",
    title: "Integritas",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 5l16 6v11c0 10-7 17-16 21C15 39 8 32 8 22V11z" />
        <path d="M18 24l4 4 8-8" />
      </svg>
    ),
  },
  {
    idx: "02",
    title: "Kerja Sama Tim",
    desc: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="16" r="6" />
        <circle cx="33" cy="16" r="6" />
        <path d="M6 40c0-7 5-12 11-12s11 5 11 12M20 40c0-7 5-12 11-12s11 5 11 12" />
      </svg>
    ),
  },
  {
    idx: "03",
    title: "Keunggulan",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4l5.6 11.6L42 17.2l-9 8.8 2.1 12.4L24 32.6l-11.1 5.8L15 26 6 17.2l12.4-1.6z" />
      </svg>
    ),
  },
  {
    idx: "04",
    title: "Fokus Pelanggan",
    desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="9" />
        <circle cx="24" cy="24" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    idx: "05",
    title: "Keselamatan Kerja",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6v10M24 32v10M6 24h10M32 24h10" />
        <circle cx="24" cy="24" r="7" />
      </svg>
    ),
  },
  {
    idx: "06",
    title: "Tanggung Jawab",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="32" height="24" rx="2" />
        <path d="M16 14v-3a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3" />
      </svg>
    ),
  },
];

const LICENSES = [
  {
    title: "NIB — Nomor Induk Berusaha",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    title: "SIUP — Surat Izin Usaha Perdagangan",
    text: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
  },
  {
    title: "ISO 9001:2015",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    title: "Izin Usaha Angkutan Barang",
    text: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </Reveal>
          <div className="profile-grid stagger">
            {PROFILE.map((item) => (
              <Reveal key={item.title} className="profile-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="vm">
        <div className="wrap vm-grid">
          <Reveal className="vm-block">
            <span className="eyebrow on-dark">Vision</span>
            <h2>Visi Perusahaan</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </Reveal>
        </div>
        <div className="wrap">
          <div className="why-grid stagger">
            {VALUES.map((item) => (
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

      <section className="profile" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Legalitas</span>
            <h2>Company License &amp; Certification</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </Reveal>
          <div className="license-grid stagger">
            {LICENSES.map((item) => (
              <Reveal key={item.title} className="license-card">
                <div className="icon">{LICENSE_ICON}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
