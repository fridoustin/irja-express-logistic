import Reveal from "./Reveal";
import CareerApplicationForm from "./CareerApplicationForm";
import { INTERNSHIP, JOBS } from "@/data/careers";
import { ArrowRightIcon, BriefcaseIcon } from "./Icons";

export default function Career() {
  return (
    <>
      <section className="page-banner page-banner-career">
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
          <div className="job-list stagger">
            {JOBS.length === 0 && (
              <Reveal className="job-empty">
                {BriefcaseIcon}
                <p>
                  Saat ini belum ada posisi reguler lainnya yang dibuka. Program
                  Internship di bawah selalu terbuka bagi mahasiswa yang ingin
                  bergabung.
                </p>
              </Reveal>
            )}

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

            <Reveal className="job-card">
              <div className="job-card-head">
                <h3>{INTERNSHIP.title}</h3>
                <div className="job-meta">
                  <span className="chip">Internship</span>
                </div>
              </div>
              <p className="internship-tagline">{INTERNSHIP.tagline}</p>
              <p className="internship-intro">{INTERNSHIP.intro}</p>
              <div className="job-card-body">
                <div>
                  <h4>What You Can Learn</h4>
                  <ul>
                    {INTERNSHIP.learn.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Who Can Apply?</h4>
                  <p>{INTERNSHIP.whoCanApply}</p>
                </div>
              </div>
              <p className="internship-cta-text">{INTERNSHIP.cta}</p>
              <a href="#lamar" className="btn btn-primary">
                Lamar Program Internship
                {ArrowRightIcon}
              </a>
            </Reveal>
          </div>
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