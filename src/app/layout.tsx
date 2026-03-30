import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Define metadata for better SEO
export const metadata: Metadata = {
  title: "Mustaf Ahmed — Frontend Developer",
  description:
    "Junior frontend developer building clean, modern, and responsive web applications.",
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
      <body className={`${inter.variable} antialiased bg-[#0f0f0f] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
