import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Chahar - Blogs",
  description:
    "Technical blogs about software development, AI, and programming.",
  authors: [{ name: "Priyanshu Chahar", url: "https://priyanxhu.me" }],
  openGraph: {
    title: "Priyanshu Chahar - Blogs",
    description:
      "Technical blogs about software development, AI, and programming.",
    url: "https://priyanxhu.me",
    siteName: "Priyanshu Chahar",
    images: [
      {
        url: "https://blogs.priyanxhu.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu Chahar",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Chahar - Blogs",
    description:
      "Technical blogs about software development, AI, and programming.",
    creator: "@unsafezero",
    images: ["https://blogs.priyanxhu.me/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
