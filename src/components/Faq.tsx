"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { FAQS } from "@/data/faq";

const INITIAL_COUNT = 3;

export default function Faq() {
  const [expanded, setExpanded] = useState(false);
  const visibleFaqs = expanded ? FAQS : FAQS.slice(0, INITIAL_COUNT);

  return (
    <section className="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>Pertanyaan yang Sering Diajukan</h2>
          <p>Belum ketemu jawabannya? Hubungi tim kami langsung, kami siap bantu.</p>
        </Reveal>

        <div className="faq-list stagger">
          {visibleFaqs.map((f) => (
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

        {FAQS.length > INITIAL_COUNT && (
          <button type="button" className="faq-more" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Tampilkan Lebih Sedikit" : "Selengkapnya"}
            <ChevronDown size={15} className={`faq-more-icon${expanded ? " open" : ""}`} />
          </button>
        )}
      </div>
    </section>
  );
}