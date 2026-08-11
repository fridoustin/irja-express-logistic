"use client";

import { FormEvent, useState } from "react";
import { Job } from "@/data/careers";

const COMPANY_EMAIL = "hrd@irjaexpress.co.id";

export default function CareerApplicationForm({ jobs }: { jobs: Job[] }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const position = data.get("position");
    const message = data.get("message");

    const subject = `Lamaran Kerja - ${position} - ${name}`;
    const body = [
      `Nama: ${name}`,
      `Email: ${email}`,
      `No. WhatsApp: ${phone}`,
      `Posisi yang Dilamar: ${position}`,
      "",
      "Pesan:",
      message || "-",
      "",
      "(Mohon lampirkan CV & dokumen pendukung secara manual pada email ini)",
    ].join("\n");

    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="career-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Nama Lengkap *</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">No. WhatsApp *</label>
          <input id="phone" name="phone" type="tel" required />
        </div>
        <div className="field">
          <label htmlFor="position">Posisi yang Dilamar *</label>
          <select id="position" name="position" required defaultValue="">
            <option value="" disabled>
              Pilih posisi
            </option>
            {jobs.map((j) => (
              <option key={j.slug} value={j.title}>
                {j.title}
              </option>
            ))}
            <option value="Lamaran Umum">Lamaran Umum (belum ada posisi tersedia)</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Pesan / Cover Letter</label>
        <textarea id="message" name="message" rows={4} placeholder="Ceritakan singkat tentang diri Anda..." />
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="cv">
            Upload CV * <span className="hint">(PDF/DOC, maks. 5MB)</span>
          </label>
          <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" required />
        </div>
        <div className="field">
          <label htmlFor="docs">
            Dokumen Pendukung <span className="hint">(opsional, bisa lebih dari satu)</span>
          </label>
          <input id="docs" name="docs" type="file" accept=".pdf,.doc,.docx,.jpg,.png" multiple />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Kirim Lamaran
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

      {sent && (
        <p className="form-note">
          Aplikasi email Anda akan terbuka dengan data yang sudah terisi — mohon lampirkan
          file CV &amp; dokumen pendukung secara manual sebelum menekan kirim.
        </p>
      )}
    </form>
  );
}