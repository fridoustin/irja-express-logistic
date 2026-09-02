import { WhatsAppIcon } from "./Icons";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
    >
      {WhatsAppIcon}
    </a>
  );
}