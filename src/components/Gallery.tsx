"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { GALLERY } from "@/data/gallery";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, prev, next]);

  return (
    <section className="profile">
      <div className="wrap">
        <div className="gallery-grid stagger">
          {GALLERY.map((item, i) => (
            <Reveal key={item.id} as="button" className="gallery-tile" onClick={() => setOpenIndex(i)}>
              {item.image ? (
                <Image src={item.image} alt={item.caption} fill sizes="(max-width: 720px) 50vw, 25vw" style={{ objectFit: "cover" }} />
              ) : (
                <span className="gallery-placeholder" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="6" y="10" width="36" height="28" rx="2" />
                    <circle cx="17" cy="20" r="4" />
                    <path d="M6 32l10-9 8 7 8-8 10 10" />
                  </svg>
                </span>
              )}
              <span className="gallery-tag mono">{item.category}</span>
              <span className="gallery-caption">{item.caption}</span>
            </Reveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={GALLERY[openIndex].caption} onClick={close}>
          <button className="lightbox-close" aria-label="Tutup" onClick={close}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <button
            className="lightbox-arrow left"
            aria-label="Sebelumnya"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
          </button>

          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            {GALLERY[openIndex].image ? (
              <Image
                src={GALLERY[openIndex].image as string}
                alt={GALLERY[openIndex].caption}
                width={1400}
                height={1000}
                className="lightbox-img"
                priority
              />
            ) : (
              <div className="lightbox-placeholder">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="6" y="10" width="36" height="28" rx="2" />
                  <circle cx="17" cy="20" r="4" />
                  <path d="M6 32l10-9 8 7 8-8 10 10" />
                </svg>
              </div>
            )}
            <div className="lightbox-caption">
              <span className="mono">{GALLERY[openIndex].category}</span>
              <p>{GALLERY[openIndex].caption}</p>
            </div>
          </div>

          <button
            className="lightbox-arrow right"
            aria-label="Berikutnya"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>

          <span className="lightbox-count mono">{openIndex + 1} / {GALLERY.length}</span>
        </div>
      )}
    </section>
  );
}