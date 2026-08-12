import { Resend } from "resend";
import {
  escapeHtml,
  isValidEmail,
  isValidPhone,
  validateFile,
  isRateLimited,
  clientKey,
} from "@/lib/security";

const resend = new Resend(process.env.RESEND_API_KEY);

const COMPANY_EMAIL = process.env.COMPANY_EMAIL!;

if (!COMPANY_EMAIL) {
  throw new Error("COMPANY_EMAIL belum dikonfigurasi.");
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(`apply:${clientKey(request)}`)) {
      return Response.json(
        { error: "Terlalu banyak percobaan. Coba lagi dalam beberapa menit." },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const position = formData.get("position")?.toString();
    const message = formData.get("message")?.toString();

    const cv = formData.get("cv") as File | null;
    const docs = formData.getAll("docs") as File[];

    if (!name || !email || !phone || !position || !cv) {
      return Response.json({ error: "Data lamaran belum lengkap." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return Response.json({ error: "Format email tidak valid." }, { status: 400 });
    }

    if (!isValidPhone(phone)) {
      return Response.json({ error: "Format nomor WhatsApp tidak valid." }, { status: 400 });
    }

    const candidateFiles = [
      { file: cv, kind: "cv" as const },
      ...docs.filter((d) => d.size > 0).map((file) => ({ file, kind: "docs" as const })),
    ];

    for (const { file, kind } of candidateFiles) {
      const err = validateFile(file, kind);
      if (err) return Response.json({ error: err }, { status: 400 });
    }

    const attachments = await Promise.all(
      candidateFiles.map(async ({ file }) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const { data, error } = await resend.emails.send({
      from: "Lamaran Pekerjaan <onboarding@resend.dev>",
      to: [COMPANY_EMAIL],
      replyTo: email,
      subject: `Lamaran Kerja - ${escapeHtml(position)} - ${escapeHtml(name)}`,
      html: `
        <h2>Lamaran Kerja Baru</h2>
        <p><strong>Nama Lengkap:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>No. WhatsApp:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Posisi yang Dilamar:</strong> ${escapeHtml(position)}</p>
        <hr />
        <h3>Pesan / Cover Letter</h3>
        <p>${message ? escapeHtml(message).replace(/\n/g, "<br />") : "-"}</p>
        <hr />
        <p>CV dan dokumen pendukung terlampir pada email ini.</p>
      `,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Gagal mengirim lamaran." }, { status: 500 });
    }

    return Response.json({ success: true, message: "Lamaran berhasil dikirim.", data });
  } catch (error) {
    console.error("Application error:", error);
    return Response.json({ error: "Terjadi kesalahan pada server." }, { status: 500 });
  }
}