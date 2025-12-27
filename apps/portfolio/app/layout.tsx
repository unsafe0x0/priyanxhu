import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Chahar",
  description:
    "Priyanshu Chahar – Software Developer. Building things that works.",
  metadataBase: new URL("https://priyanxhu.me"),
  openGraph: {
    title: "Priyanshu Chahar",
    description:
      "Priyanshu Chahar – Software Developer. Building things that works.",
    url: "https://priyanxhu.me",
    siteName: "Priyanshu Chahar",
    images: [
      {
        url: "https://priyanxhu.me/og-image.png",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
