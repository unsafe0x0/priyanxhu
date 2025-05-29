import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/context/tanstack";

const fontName = Outfit({
  weight: ["400"],
  variable: "--font-primary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Chahar",
  description:
    "Hi, I'm Priyanshu. I am a full stack developer and competitive programmer.",
  keywords: [
    "Priyanshu",
    "Full Stack Developer",
    "Competitive Programmer",
    "Priyanshu Chahar",
    "muxdust",
    "Priyanshu Chahar portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontName.className}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
