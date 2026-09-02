"use client";

import { FormEvent, useRef, useState } from "react";
import { SERVICES } from "@/data/services";
import { ArrowRightIcon } from "./Icons";
import { UseFormDraft } from "@/hooks/UseFormDraft";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const { clearDraft } = UseFormDraft("contact", formRef);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      phone: data.get("phone"),
      service: data.get("service"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(result.error || "Gagal mengirim pesan.");
        return;
      }

      setStatus("success");
      form.reset();
      clearDraft();
    } catch {
      setStatus("error");
      setErrorMsg("Tidak dapat terhubung ke server. Periksa koneksi internet Anda.");
    }
  }

  return (
    <form ref={formRef} className="career-form contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Nama *</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="company">Nama Perusahaan</label>
          <input id="company" name="company" type="text" />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Nomor Telepon *</label>
          <input id="phone" name="phone" type="tel" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="service">Jenis Layanan *</label>
        <select id="service" name="service" required defaultValue="">
          <option value="" disabled>
            Pilih jenis layanan
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Pesan *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Ceritakan kebutuhan pengiriman Anda..."
        />
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
        {ArrowRightIcon}
      </button>

      {status === "success" && (
        <p className="form-note">
          Pesan Anda berhasil terkirim. Tim kami akan segera menghubungi Anda kembali.
        </p>
      )}
      {status === "error" && <p className="form-note form-note-error">{errorMsg}</p>}
    </form>
  );
}