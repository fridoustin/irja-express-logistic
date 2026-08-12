import { NextRequest, NextResponse } from "next/server";
import { escapeHtml, isValidEmail, isRateLimited, clientKey } from "@/lib/security";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const COMPANY_EMAIL = process.env.COMPANY_EMAIL;

if (!COMPANY_EMAIL) {
  throw new Error("COMPANY_EMAIL belum dikonfigurasi.");
}

export async function POST(req: NextRequest) {
  if (isRateLimited(`contact:${clientKey(req)}`)) {
    return NextResponse.json(
      { error: "Terlalu banyak percobaan. Coba lagi dalam beberapa menit." },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Data formulir tidak valid." }, { status: 400 });
  }

  const { name, company, email, phone, service, message } = body;

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: "Mohon lengkapi semua kolom wajib." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Format email tidak valid." }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    console.error(
      "RESEND_API_KEY belum diatur. Tambahkan di .env.local (lokal) atau Vercel Project Settings > Environment Variables (production)."
    );
    return NextResponse.json(
      { error: "Formulir belum terhubung ke email admin. Silakan hubungi kami langsung via WhatsApp." },
      { status: 500 }
    );
  }

  const html = `
    <h2>Pesan Baru dari Formulir Kontak Website</h2>
    <p><b>Nama:</b> ${escapeHtml(name)}</p>
    <p><b>Perusahaan:</b> ${escapeHtml(company || "-")}</p>
    <p><b>Email:</b> ${escapeHtml(email)}</p>
    <p><b>No. Telepon:</b> ${escapeHtml(phone)}</p>
    <p><b>Jenis Layanan:</b> ${escapeHtml(service || "-")}</p>
    <p><b>Pesan:</b></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Formulir Kontak Irja Express <onboarding@resend.dev>`,
        to: [COMPANY_EMAIL],
        reply_to: email,
        subject: `Pesan Baru: ${service || "Kontak"} - ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      console.error("Resend API error:", await res.text());
      return NextResponse.json({ error: "Gagal mengirim pesan. Coba lagi nanti." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Terjadi kesalahan pada server. Coba lagi nanti." }, { status: 500 });
  }
}