"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DoorIcon, InstagramIcon, NAV_ICON, TikTokIcon, WhatsAppIcon } from "./Icons";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap">
          <Link href="/" className="brand">
            <Image src="/images/logo.png" alt="PT Irja Express Logistic" width={52} height={52} priority />
            <div className="brand-text">
              <b>Irja Express Logistic</b>
              <span>Surabaya · Timika</span>
            </div>
          </Link>
          <nav>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={isActive(item.href) ? "active" : ""}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-cta">
            <Link href="/contact" className="btn btn-primary">
              Hubungi Kami
            </Link>
          </div>
          <button
            className={`burger ${mobileOpen ? "open" : ""}`}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-nav-head">
          <Link href="/" className="mobile-nav-brand" onClick={() => setMobileOpen(false)}>
            <Image src="/images/logo.png" alt="PT Irja Express Logistic" width={40} height={40} />
            <div>
              <b>Irja Express</b>
              <span>Logistic</span>
            </div>
          </Link>
          <button className="mobile-nav-close" aria-label="Tutup menu" onClick={() => setMobileOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="mobile-nav-route">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-item ${isActive(item.href) ? "active" : ""}`}
              onClick={() => setMobileOpen(false)}
            >
              <span className="mobile-nav-stop">
                <span className="mobile-nav-dot">{NAV_ICON[item.href as keyof typeof NAV_ICON]}</span>
                {i < NAV_ITEMS.length - 1 && <span className="mobile-nav-line" />}
              </span>
              <span className="mobile-nav-label">
                {item.label}
              </span>
              <svg className="mobile-nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mobile-nav-foot">
          <a href="https://wa.me/6280000000000" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {WhatsAppIcon}
            Chat WhatsApp
          </a>
          <div className="mobile-nav-social">
            <a href="https://instagram.com/irja_expresslogistic" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              {InstagramIcon}
            </a>
            <a href="https://www.tiktok.com/@irja_express_logistic" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              {TikTokIcon}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}