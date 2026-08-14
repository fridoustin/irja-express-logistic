import Reveal from "./Reveal";
import CareerApplicationForm from "./CareerApplicationForm";
import { JOBS } from "@/data/careers";
import { ArrowRightIcon } from "./Icons";

export default function Career() {
  return (
    <>
      <section className="page-banner">
        <div className="wrap">
          <span className="eyebrow on-dark">Career</span>
          <h1>Karier di PT Irja Express Logistic</h1>
        </div>
      </section>

      <section className="profile">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Lowongan Pekerjaan</span>
            <h2>Bergabung Bersama Tim Kami</h2>
            <p>Kami selalu mencari individu terbaik untuk tumbuh bersama PT Irja Express Logistic.</p>
          </Reveal>

          {JOBS.length > 0 ? (
            <div className="job-list stagger">
              {JOBS.map((job) => (
                <Reveal key={job.slug} className="job-card">
                  <div className="job-card-head">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span className="chip">{job.department}</span>
                      <span className="chip">{job.location}</span>
                      <span className="chip">{job.type}</span>
                    </div>
                  </div>
                  <div className="job-card-body">
                    <div>
                      <h4>Tanggung Jawab</h4>
                      <ul>
                        {job.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Persyaratan</h4>
                      <ul>
                        {job.requirements.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a href="#lamar" className="btn btn-primary">
                    Lamar Posisi Ini
                    {ArrowRightIcon}
                  </a>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="job-empty">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="16" width="36" height="24" rx="2" />
                <path d="M17 16v-4a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4M6 26h36" />
              </svg>
              <p>
                Saat ini belum tersedia lowongan pekerjaan. Silakan kirim CV Anda melalui
                email untuk menjadi bagian dari database kandidat kami.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="why" id="lamar">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Formulir Lamaran</span>
            <h2>Kirim Lamaran Anda</h2>
            <p>Lengkapi formulir di bawah ini dan lampirkan CV serta dokumen pendukung Anda.</p>
          </Reveal>
          <Reveal>
            <CareerApplicationForm jobs={JOBS} />
          </Reveal>
        </div>
      </section>
    </>
  );
}