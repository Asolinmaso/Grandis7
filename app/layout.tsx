import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Grandis7",
  description: "Grandis7 helps buyers and investors discover verified residential, commercial, and plot opportunities with clarity and trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
