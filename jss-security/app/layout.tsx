import type { Metadata } from "next";
import { Comme } from "next/font/google";
import "./globals.css";
import MenuWrapper from "../components/MenuWrapper";
import { use } from "react";


const comme = Comme({
  variable: "--font-comme-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JSS",
  description: "Your Security Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <MenuWrapper />
        
        <body
          className={`${comme.variable} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
