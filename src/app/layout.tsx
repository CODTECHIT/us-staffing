import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HiringPopup from "@/components/ui/HiringPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maxera Talent | Contingent Recruitment & Staffing Solutions",
    template: "%s | Maxera Talent",
  },
  description:
    "Maxera Talent connects top-tier professionals with industry-leading companies. Expert contingent recruitment, contract staffing, and direct hire solutions across the United States.",
  keywords: [
    "staffing",
    "recruitment",
    "contingent staffing",
    "contract staffing",
    "direct hire",
    "talent acquisition",
    "staffing agency",
    "US staffing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Maxera Talent",
    title: "Maxera Talent | Contingent Recruitment & Staffing Solutions",
    description:
      "Expert staffing solutions connecting exceptional talent with top companies across the United States.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <HiringPopup />
      </body>
    </html>
  );
}
