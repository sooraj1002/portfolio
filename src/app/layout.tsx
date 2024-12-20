import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "../components/Navbar"; // Import the Navbar component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Enhanced metadata for SEO
export const metadata: Metadata = {
  title: "Sooraj's Portfolio",
  description: "Explore Sooraj's projects and skills in software engineering.",
  keywords: ["Sooraj Kashyap", "portfolio", "software engineering", "India"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sooraj's Portfolio",
    description:
      "Discover Sooraj's projects in software engineering, specializing in backend development.",
    // url: "https://sooraj.in",
    siteName: "Sooraj's Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
