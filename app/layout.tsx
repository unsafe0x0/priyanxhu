import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/context/tanstack";

const firaCode = Poppins({
  weight: ["400"],
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi, I'm Priyanshu",
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
      <body className={firaCode.className}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
