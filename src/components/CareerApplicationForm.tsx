"use client";

import { FormEvent, useState } from "react";
import { Job } from "@/data/careers";
import { ArrowRightIcon } from "./Icons";

export default function CareerApplicationForm({ jobs }: { jobs: Job[] }) {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Gagal mengirim lamaran.");
      }

      setSent(true);

      form.reset();
    } catch (error) {
      console.error("Submit error:", error);

      alert(
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat mengirim lamaran."
      );
    }
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
            <option value="Program Internship">Program Internship</option>
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
        {ArrowRightIcon}
      </button>

      {sent && (
        <p className="form-note">
          Lamaran berhasil dikirim. CV dan dokumen pendukung telah diteruskan ke tim HR.
        </p>
      )}
    </form>
  );
}