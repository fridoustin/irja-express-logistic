"use client";

import { useEffect, useRef } from "react";
import { Fireworks } from "fireworks-js";

export default function NewYearFireworks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const fireworks = new Fireworks(containerRef.current, {
      autoresize: true,
    
      opacity: 0.5,

      particles: 60,
      explosion: 5,

      intensity: 40,
      traceLength: 3,
      traceSpeed: 10,

      gravity: 1.5,
      friction: 0.95,
      acceleration: 1,

      delay: {
        min: 30,
        max: 60,
      },

      rocketsPoint: {
        min: 50,
        max: 50,
      },

      mouse: {
        click: false,
        move: false,
        max: 1,
      },

      sound: {
        enabled: false,
      },
    });

    fireworks.start();

    return () => {
      fireworks.stop(true);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="new-year-fireworks"
      aria-hidden="true"
    />
  );
}