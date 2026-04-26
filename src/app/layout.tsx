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
    "Full-Stack Developer (React) who built and deployed a full-stack ecommerce app with Firebase, authentication, databases, and APIs, and also ships frontend projects with strong API integration.",
  keywords: ["Mustaf Ahmed", "Full-Stack Developer (React)", "Web Developer", "React", "Firebase", "APIs", "Portfolio"],
  authors: [{ name: "Mustaf Ahmed" }],
  creator: "Mustaf Ahmed",
  openGraph: {
    title: "Mustaf Ahmed — Full-Stack Developer (React)",
    description:
      "Full-Stack Developer (React) who built and deployed a full-stack ecommerce app with Firebase, authentication, databases, and APIs, and also ships frontend projects with strong API integration.",
    siteName: "Mustaf Ahmed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustaf Ahmed — Full-Stack Developer (React)",
    description:
      "Full-Stack Developer (React) who built and deployed a full-stack ecommerce app with Firebase, authentication, databases, and APIs, and also ships frontend projects with strong API integration.",
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
