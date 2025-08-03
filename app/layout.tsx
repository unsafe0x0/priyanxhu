import type { Metadata } from "next";
import { Doto, Fira_Code } from "next/font/google";
import "./globals.css";
import TanStackProvider from "@/context/TanstackProvider";

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});

const bodyFont = Fira_Code({
  variable: "--font-bodyFont",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Chahar",
  description:
    "Priyanshu Chahar – Software Developer & Competitive Programmer. Building innovative solutions and solving complex problems.",
  metadataBase: new URL("https://priyanxhu.me"),
  openGraph: {
    title: "Priyanshu Chahar",
    description:
      "Priyanshu Chahar – Software Developer & Competitive Programmer. Building innovative solutions and solving complex problems.",
    url: "https://priyanxhu.me",
    siteName: "Priyanshu Chahar",
    images: [
      {
        url: "https://priyanxhu.me/image.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu Chahar – Software Developer & Competitive Programmer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Priyanshu Chahar",
    "Software Developer",
    "Competitive Programmer",
    "Portfolio",
    "priyanxhu.me",
    "Web Developer",
    "Programming",
    "Coding",
  ],
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${doto.variable} ${bodyFont.variable} antialiased`}>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
