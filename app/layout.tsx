import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const primary = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hi, I'm Priyanshu Chahar",
  description: "Hi, I'm Priyanshu Chahar, a developer and a programmer.",
  keywords: [
    "Priyanshu Chahar",
    "Portfolio",
    "Developer",
    "Priyanshu Chahar Portfolio",
    "Priyanshu Chahar Developer",
    "Priyannxhuu",
    "Bluetooxth",
    "Priyanxhu",
    "Priyanxhu.me",
  ],
  openGraph: {
    title: "Hi, I'm Priyanshu Chahar",
    description:
      "Hi, I'm Priyanshu Chahar, a developer and a competitive programmer.",
    type: "website",
    url: "https://priyanxhu.me",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/165533860?v=4",
        width: 1200,
        height: 630,
        alt: "Priyanshu Chahar Avatar",
      },
    ],
    siteName: "Priyanshu Chahar",
    locale: "en_US",
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={primary.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
