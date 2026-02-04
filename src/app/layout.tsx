import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// Initialize the Geist font with Latin subset
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Initialize the Geist Mono font with Latin subset
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for better SEO
export const metadata: Metadata = {
  title: "Mustaf Ahmed — Frontend Developer",
  description: "Frontend developer building fast, polished web experiences. View my projects and get in touch.",
  keywords: ["Mustaf Ahmed", "Frontend Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Mustaf Ahmed" }],
  creator: "Mustaf Ahmed",
  openGraph: {
    title: "Mustaf Ahmed — Frontend Developer",
    description: "Frontend developer building fast, polished web experiences. View my projects and get in touch.",
    siteName: "Mustaf Ahmed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustaf Ahmed — Frontend Developer",
    description: "Frontend developer building fast, polished web experiences. View my projects and get in touch.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-100`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
