const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isValidEmail(value: string) {
  return EMAIL_RE.test(value.trim());
}

export function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ALLOWED_TYPES: Record<"cv" | "docs", string[]> = {
  cv: [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
  docs: [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "image/jpeg",
    "image/png",
  ],
};

// Kembalikan null jika file valid, atau string error jika tidak valid
export function validateFile(file: File, kind: "cv" | "docs") {
  if (file.size > MAX_FILE_SIZE) return `File "${file.name}" melebihi batas 5MB.`;
  if (!ALLOWED_TYPES[kind].includes(file.type)) return `Tipe file "${file.name}" tidak didukung.`;
  return null;
}

// Rate limiting
const hits = new Map<string, number[]>();

export function isRateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > limit;
}

export function clientKey(req: Request) {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}