import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PicoBlog — Blazing Fast Markdown Blogging",
  description: "The easiest way to start a blog with Markdown. PicoBlog gives you speed, simplicity, and premium aesthetics out of the box.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {/* Glow backgrounds */}
        <div className="bg-glow bg-glow-top"></div>
        <div className="bg-glow bg-glow-bottom"></div>
        {children}
      </body>
    </html>
  );
}
