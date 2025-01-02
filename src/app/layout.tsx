import type { Metadata } from "next";
import { Geist, Geist_Mono, Asul } from "next/font/google";
import "../assets/css/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const asul = Asul({
  variable: "--font-asul",
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Tod app allows users to add, edit, delete their todo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${asul.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
