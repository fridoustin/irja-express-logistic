import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "PT Irja Express Logistic — Solusi Logistik Cepat, Aman & Terpercaya",
  description:
    "PT Irja Express Logistic adalah perusahaan jasa ekspedisi dan pengiriman barang berbasis di Surabaya, melayani rute darat, laut, dan udara ke seluruh Indonesia.",
  keywords: [
    "logistik surabaya",
    "ekspedisi surabaya",
    "jasa pengiriman barang",
    "cargo surabaya",
    "irja express",
  ],
  openGraph: {
    title: "PT Irja Express Logistic",
    description: "Solusi Logistik Cepat, Aman, dan Terpercaya.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body
        className={`${barlow.variable} ${workSans.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}