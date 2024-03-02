import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { inter } from "@/config/fonts";



export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "una tienda de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
