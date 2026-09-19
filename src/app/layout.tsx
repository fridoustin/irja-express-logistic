import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SeasonalEffects from "@/components/seasonal/SeasonalEffects";

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
  metadataBase: new URL("https://irjaexpresslogistic.com"),

  title: "PT Irja Express Logistic — Solusi Logistik Cepat, Aman & Terpercaya",
  description:
    "PT Irja Express Logistic adalah perusahaan jasa ekspedisi dan pengiriman barang berbasis di Surabaya, melayani rute darat dan laut ke wilayah Indonesia Timur, khususnya Papua.",
  keywords: [
    "logistik surabaya",
    "ekspedisi surabaya",
    "jasa pengiriman barang",
    "cargo surabaya",
    "irja express",
    "ekspedisi ke papua",
    "jasa ekspedisi surabaya",
    "pengiriman barang ke papua",
    "ekspedisi murah surabaya",
    "jasa cargo surabaya",
  ],
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/images/logo-rounded.png",
  },
  openGraph: {
    title: "PT Irja Express Logistic — Solusi Logistik Cepat, Aman & Terpercaya",
    description:
      "Jasa ekspedisi dan pengiriman barang terpercaya dari Surabaya ke seluruh wilayah Indonesia Timur dan Papua.",
    url: "https://irjaexpresslogistic.com",
    siteName: "PT Irja Express Logistic",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "PT Irja Express Logistic",
      },
    ],
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
        <SeasonalEffects />
        {children}
      </body>
    </html>
  );
}