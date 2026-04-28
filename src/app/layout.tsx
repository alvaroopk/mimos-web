import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import DemoBanner from "@/components/DemoBanner";
import { SITE_INDEXED } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Centro Veterinario MIMOS | Veterinario en Murcia zona norte | Desde 2015",
    template: "%s | Centro Veterinario MIMOS",
  },
  description:
    "Clínica veterinaria en Murcia con más de 9 años de experiencia. Medicina preventiva, cirugía, diagnóstico por imagen, peluquería y medicina felina especializada.",
  openGraph: {
    title: "Centro Veterinario MIMOS — Murcia",
    description:
      "Clínica veterinaria en Murcia con más de 9 años de experiencia. Equipo de 6 profesionales, laboratorio propio y medicina felina especializada.",
    type: "website",
  },
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
    googleBot: {
      index: SITE_INDEXED,
      follow: SITE_INDEXED,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <DemoBanner />
      </body>
    </html>
  );
}
