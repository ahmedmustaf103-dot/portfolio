import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AppShell } from "@/components/layout/AppShell";
import { site } from "@/content/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const description = site.intro;

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description,
  keywords: [
    "Mustaf Ahmed",
    "AI Engineer",
    "Full-Stack Developer",
    "AI Engineering",
    "Next.js",
    "JobTracker AI",
    "ResearchFlow AI",
    "InsightFlow AI",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geist.variable} ${geistMono.variable} ${newsreader.variable} bg-canvas font-sans text-ink antialiased`}
      >
        <AppShell>{children}</AppShell>
        <Analytics />
      </body>
    </html>
  );
}
