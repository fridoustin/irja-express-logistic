import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/6280000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
    >
      {WhatsAppIcon}
    </a>
  );
}