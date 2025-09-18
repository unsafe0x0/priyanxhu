import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/github-dark.css";

const bodyFont = Inter({
  variable: "--font-bodyFont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Chahar",
  description:
    "Priyanshu Chahar – Software Developer. Building innovative solutions and solving complex problems.",
  metadataBase: new URL("https://priyanxhu.me"),
  openGraph: {
    title: "Priyanshu Chahar",
    description:
      "Priyanshu Chahar – Software Developer. Building innovative solutions and solving complex problems.",
    url: "https://priyanxhu.me",
    siteName: "Priyanshu Chahar",
    images: [
      {
        url: "https://priyanxhu.me/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Priyanshu Chahar – Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: ["Priyanshu Chahar", "unsafezero", "unsafe0x0", "priyanxhu.me"],
  authors: [{ name: "Priyanshu Chahar", url: "https://priyanxhu.me" }],
  creator: "Priyanshu Chahar",
  publisher: "Priyanshu Chahar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="shortcut icon"
        href="https://avatars.githubusercontent.com/u/165533860?v=4"
        type="image/x-icon"
      />
      <body className={bodyFont.className}>{children}</body>
    </html>
  );
}
