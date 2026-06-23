import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mayorshirley.com"),
  title: {
    default: "Mayor Ryan Shirley · Holly Springs, Georgia",
    template: "%s · Mayor Ryan Shirley",
  },
  description:
    "The official website of Ryan Shirley, Mayor of Holly Springs, Georgia. City updates, press releases, projects, events, and a direct line to your mayor.",
  keywords: [
    "Holly Springs",
    "Georgia",
    "Mayor",
    "Ryan Shirley",
    "City Government",
    "Cherokee County",
  ],
  openGraph: {
    title: "Mayor Ryan Shirley · Holly Springs, Georgia",
    description:
      "Moving Holly Springs Forward — growth, transparency, and community.",
    url: "https://www.mayorshirley.com",
    siteName: "Mayor Ryan Shirley",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayor Ryan Shirley · Holly Springs, Georgia",
    description:
      "Moving Holly Springs Forward — growth, transparency, and community.",
  },
};

export const viewport: Viewport = {
  themeColor: "#27408b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
