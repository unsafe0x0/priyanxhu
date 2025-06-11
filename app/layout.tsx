import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/context/tanstack";
import ThemeProvider from "@/components/ThemeProvider";

const fontName = Space_Grotesk({
  weight: ["400", "500", "600"],
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Chahar | Software Developer | Full Stack & AI/ML | DSA",
  description:
    "Hey there! I am Priyanshu Chahar, a full stack developer and competitive programmer. I love building web applications and solving complex problems using modern technologies.",
  keywords: [
    "Priyanshu Chahar",
    "Full Stack Developer",
    "Competitive Programmer",
    "Web Developer",
    "Software Engineer",
    "Muxdust",
    "Priyanshu",
    "Priyanxhu",
  ],
  openGraph: {
    title: "Priyanshu Chahar | Software Developer | Full Stack & AI/ML | DSA",
    description:
      "Hey there! I am Priyanshu Chahar, a full stack developer and competitive programmer. I love building web applications and solving complex problems using modern technologies.",
    url: "https://priyanxhu.me",
    siteName: "Priyanshu Chahar Portfolio",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/165533860?v=4",
        width: 1200,
        height: 630,
        alt: "Priyanshu Chahar",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Chahar | Software Developer | Full Stack & AI/ML | DSA",
    description:
      "Hey there! I am Priyanshu Chahar, a full stack developer and competitive programmer. I love building web applications and solving complex problems using modern technologies.",
    site: "@muxdust",
    creator: "@muxdust",
    images: ["https://avatars.githubusercontent.com/u/165533860?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={fontName.className}>
        <TanStackProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
