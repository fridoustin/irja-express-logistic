"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ChristmasSnow from "./ChristmasSnow";
import NewYearFireworks from "./NewYearFireworks";
import ChineseNewYearEffect from "./ChineseNewYearEffect";
import RamadhanEffect from "./RamadhanEffect";
import IndependenceEffect from "./IndependenceEffect";
import { getSeasonalTheme, SeasonalTheme } from "@/data/seasonal";

export default function SeasonalEffects() {
  const [theme, setTheme] = useState<SeasonalTheme>("normal");
  const [isVisible, setIsVisible] = useState(true); // Control visibility
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const previewSeason = params.get("season");

    if (process.env.NODE_ENV === "development") {
      if (previewSeason === "christmas") {
        setTheme("christmas");
      } else if (previewSeason === "new-year") {
        setTheme("new-year");
      } else if (previewSeason === "chinese-new-year") {
        setTheme("chinese-new-year");
      } else if (previewSeason === "ramadhan") {
        setTheme("ramadhan");
      } else if (previewSeason === "independence") {
        setTheme("independence");
      } else {
        setTheme(getSeasonalTheme(new Date()));
      }
    } else {
      setTheme(getSeasonalTheme(new Date()));
    }

    // Timer untuk menyembunyikan efek setelah 30 detik (30000 ms)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 30000);

    return () => clearTimeout(timer); // Cleanup timer jika komponen di-unmount
  }, []);

  // Jika bukan di Home atau durasi 30 detik sudah habis, tampilkan null
  if (pathname !== "/" || !isVisible) {
    return null;
  }

  if (theme === "christmas") {
    return <ChristmasSnow />;
  }

  if (theme === "new-year") {
    return <NewYearFireworks />;
  }

  if (theme === "chinese-new-year") {
    return <ChineseNewYearEffect />;
  }

  if (theme === "ramadhan") {
    return <RamadhanEffect />;
  }

  if (theme === "independence") {
    return <IndependenceEffect />;
  }

  return null;
}