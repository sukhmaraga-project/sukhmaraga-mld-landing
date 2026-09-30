import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { SITE_URL, site } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.seoTitle,
  description: site.seoDescription,
  applicationName: site.academy,
  keywords: [
    "manual lymphatic drainage",
    "lymphatic drainage massage",
    "kursus MLD",
    "e-course massage",
    "pelatihan terapis",
    "SUKHMARAGA Academy",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.academy,
    title: site.seoTitle,
    description: site.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0e1b2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
