"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { count: 15, suffix: "+", label: "Tahun Pengalaman" },
  { count: 120, suffix: "+", label: "Armada Aktif" },
  { count: 500, suffix: "+", label: "Pelanggan Puas" },
  { count: 34, suffix: "", label: "Provinsi Terlayani" },
  { count: 50, suffix: "rb+", label: "Total Pengiriman" },
];

function Counter({ count, suffix }: { count: number; suffix: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1400;
            const start = performance.now();
            function tick(now: number) {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.floor(eased * count));
              if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  return (
    <div className="num" ref={ref}>
      {value}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-route">
        <svg preserveAspectRatio="none" viewBox="0 0 1240 60">
          <path d="M0 30 C 200 0, 300 60, 500 30 S 800 0, 1000 30 S 1150 50, 1240 30" />
        </svg>
      </div>
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stop" />
              <Counter count={s.count} suffix={s.suffix} />
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
