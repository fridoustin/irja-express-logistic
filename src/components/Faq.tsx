import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { FAQS } from "@/data/faq";

export default function Faq() {
  return (
    <section className="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Pertanyaan yang Sering Diajukan</h2>
          <p>Belum ketemu jawabannya? Hubungi tim kami langsung, kami siap bantu.</p>
        </Reveal>

        <div className="faq-list stagger">
          {FAQS.map((f) => (
            <Reveal as="details" key={f.question} className="faq-item">
              <summary className="faq-question">
                <span>{f.question}</span>
                <span className="faq-toggle">
                  <ChevronDown size={16} />
                </span>
              </summary>
              <div className="faq-answer">
                <p style={{ whiteSpace: "pre-line" }}>{f.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}