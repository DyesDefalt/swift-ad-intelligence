import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../src/app/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gapah - Swift Ad Intelligence",
  description: "Generate platform-perfect ad copy from images and analyze campaign data—without leaving your browser. Built for Indonesian marketers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="antialiased font-sans">
        <div className="relative">
          <div className="grain-overlay" />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
