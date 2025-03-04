import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const primary = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400"],
});

export const metadata = {
  title: "Hi, I'm Priyanshu Chahar",
  description:
    "Hi, I'm Priyanshu Chahar, a developer and a competitive programmer.",
  keywords:
    "Priyanshu Chahar, Portfolio, Developer, Priyanshu Chahar Portfolio, Priyanshu Chahar Developer, Priyannxhuu, Bluetooxth, Priyanxhu, Priyanxhu.me",
  openGraph: {
    title: "Hi, I'm Priyanshu Chahar",
    description:
      "Hi, I'm Priyanshu Chahar, a developer and a competitive programmer.",
    type: "website",
    url: "https://priyanxhu.me",
    image: "https://avatars.githubusercontent.com/u/165533860?v=4",
    site_name: "Priyanshu Chahar",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={primary.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
