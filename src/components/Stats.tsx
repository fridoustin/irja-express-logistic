"use client";

import { useEffect, useRef, useState } from "react";

const FOUNDED_YEAR = 2017;

const CALENDAR_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <path d="M12 13.3l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z" fill="currentColor" stroke="none" />
  </svg>
);
const STAR_BADGE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3l2.5 5.4 5.9.6-4.4 4 1.3 5.8L12 15.9l-5.3 2.9 1.3-5.8-4.4-4 5.9-.6z" />
  </svg>
);
const BOX_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
  </svg>
);

type Stat = { label: string; icon: React.ReactNode } & (
  | { count: number; suffix: string; stars?: false }
  | { stars: true }
);

const STATS: Stat[] = [
  { count: new Date().getFullYear() - FOUNDED_YEAR, suffix: "+", label: "Tahun Pengalaman", icon: CALENDAR_ICON },
  { stars: true, label: "Kepuasan Pelanggan", icon: STAR_BADGE_ICON },
  { count: 120, suffix: "rb+", label: "Total Pengiriman", icon: BOX_ICON },
];

const STAR_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l2.9 6.2 6.8.7-5.1 4.6 1.5 6.7L12 17.3l-6.1 3.4 1.5-6.7-5.1-4.6 6.8-.7z" />
  </svg>
);

function Stars() {
  return (
    <div className="num stat-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{STAR_ICON}</span>
      ))}
    </div>
  );
}

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
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-badge-row">
                <span className="stat-badge">{s.icon}</span>
              </div>
              {s.stars ? <Stars /> : <Counter count={s.count} suffix={s.suffix} />}
              <span className="lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}