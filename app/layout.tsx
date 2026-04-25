import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Sparkle Flow — Sosyal Medyanız Artık Sizi Beklemiyor",
  description: "İçerik üretmek, zamanlamak, yayınlamak — bunların hepsi sizin yerinize halloluyor.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${bricolage.variable} ${bricolage.className}`}>
      <body>{children}</body>
    </html>
  );
}
