"use client";

import { useEffect, useRef, useState } from "react";
import { BoxIcon, CalendarIcon, StarBadgeIcon, StarIcon } from "./Icons";

const FOUNDED_YEAR = 2017;

type Stat = { label: string; icon: React.ReactNode } & (
  | { count: number; suffix: string; stars?: false }
  | { stars: true }
);

const STATS: Stat[] = [
  { count: new Date().getFullYear() - FOUNDED_YEAR, suffix: "+", label: "Tahun Pengalaman", icon: CalendarIcon },
  { stars: true, label: "Kepuasan Pelanggan", icon: StarBadgeIcon },
  { count: 120, suffix: "rb+", label: "Total Pengiriman", icon: BoxIcon },
];


function Stars() {
  return (
    <div className="num stat-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{StarIcon}</span>
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