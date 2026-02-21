import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profileData } from "@/data/profile";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Priyanshu Chahar",
  description: "Software Developer. Building utilitarian software.",
  metadataBase: new URL("https://priyanxhu.me"),
  icons: {
    icon: profileData.imageUrl,
  },
  openGraph: {
    title: "Priyanshu Chahar",
    description: "Software Developer. Building utilitarian software.",
    url: "https://priyanxhu.me",
    siteName: "Priyanshu Chahar",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu Chahar – Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Chahar",
    description: "Software Developer. Building utilitarian software.",
    images: ["/og-image.png"],
  },
  keywords: ["Priyanshu Chahar", "unsafezero", "Software Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased text-sm sm:text-base`}
      >
        {children}
      </body>
    </html>
  );
}
