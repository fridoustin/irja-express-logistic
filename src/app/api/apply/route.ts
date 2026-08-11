import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const COMPANY_EMAIL = process.env.COMPANY_EMAIL!;

if (!COMPANY_EMAIL) {
  throw new Error("COMPANY_EMAIL belum dikonfigurasi.");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const position = formData.get("position")?.toString();
    const message = formData.get("message")?.toString();

    const cv = formData.get("cv") as File | null;
    const docs = formData.getAll("docs") as File[];

    if (!name || !email || !phone || !position || !cv) {
      return Response.json(
        {
          error: "Data lamaran belum lengkap.",
        },
        {
          status: 400,
        }
      );
    }

    const attachments = [];

    // CV
    if (cv.size > 0) {
      attachments.push({
        filename: cv.name,
        content: Buffer.from(await cv.arrayBuffer()),
      });
    }

    // Dokumen pendukung
    for (const doc of docs) {
      if (doc.size > 0) {
        attachments.push({
          filename: doc.name,
          content: Buffer.from(await doc.arrayBuffer()),
        });
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Lamaran Pekerjaan <onboarding@resend.dev>",
      to: [COMPANY_EMAIL],
      replyTo: email,
      subject: `Lamaran Kerja - ${position} - ${name}`,

      html: `
        <h2>Lamaran Kerja Baru</h2>

        <p><strong>Nama Lengkap:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>No. WhatsApp:</strong> ${phone}</p>

        <p><strong>Posisi yang Dilamar:</strong> ${position}</p>

        <hr />

        <h3>Pesan / Cover Letter</h3>

        <p>
          ${message ? message.replace(/\n/g, "<br />") : "-"}
        </p>

        <hr />

        <p>
          CV dan dokumen pendukung terlampir pada email ini.
        </p>
      `,

      attachments,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "Gagal mengirim lamaran.",
        },
        {
          status: 500,
        }
      );
    }

    return Response.json({
      success: true,
      message: "Lamaran berhasil dikirim.",
      data,
    });
  } catch (error) {
    console.error("Application error:", error);

    return Response.json(
      {
        error: "Terjadi kesalahan pada server.",
      },
      {
        status: 500,
      }
    );
  }
}