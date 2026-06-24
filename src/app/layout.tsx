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
  title: "Mustaf Ahmed — Full-Stack Developer (React)",
  description:
    "Full-Stack Developer (React) building and deploying SaaS and full-stack web apps with authentication, PostgreSQL, Firebase, APIs, and AI integrations.",
  keywords: ["Mustaf Ahmed", "Full-Stack Developer (React)", "SaaS", "Web Developer", "React", "PostgreSQL", "Firebase", "APIs", "Portfolio"],
  authors: [{ name: "Mustaf Ahmed" }],
  creator: "Mustaf Ahmed",
  openGraph: {
    title: "Mustaf Ahmed — Full-Stack Developer (React)",
    description:
      "Full-Stack Developer (React) building and deploying SaaS and full-stack web apps with authentication, PostgreSQL, Firebase, APIs, and AI integrations.",
    siteName: "Mustaf Ahmed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustaf Ahmed — Full-Stack Developer (React)",
    description:
      "Full-Stack Developer (React) building and deploying SaaS and full-stack web apps with authentication, PostgreSQL, Firebase, APIs, and AI integrations.",
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
