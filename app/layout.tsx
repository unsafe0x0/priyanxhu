import type { Metadata } from "next";
import Head from "next/head";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/context/tanstack";

const fontName = Space_Grotesk({
  weight: ["400", "500", "600"],
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Chahar | Full Stack Developer & Competitive Programmer",
  description:
    "Priyanshu Chahar is a skilled full stack developer and competitive programmer specializing in building efficient, scalable web applications and solving complex algorithmic problems.",
  keywords: [
    "Priyanshu Chahar",
    "Full Stack Developer",
    "Competitive Programmer",
    "Web Developer",
    "Software Engineer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "Programming Portfolio",
    "Algorithm Expert",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Priyanshu Chahar | Full Stack Developer & Competitive Programmer",
    description:
      "Explore the portfolio of Priyanshu Chahar, a full stack developer and competitive programmer focused on modern web technologies and problem solving.",
    url: "https://priyanxhu.me",
    siteName: "Priyanshu Chahar Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/165533860?v=4",
        width: 1200,
        height: 630,
        alt: "Priyanshu Chahar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Chahar | Full Stack Developer & Competitive Programmer",
    description:
      "Showcasing Priyanshu Chahar’s expertise in full stack development and competitive programming.",
    site: "@muxdust",
    creator: "@muxdust",
    images: ["https://avatars.githubusercontent.com/u/165533860?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={fontName.className}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
