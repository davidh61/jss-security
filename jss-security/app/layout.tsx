import type { Metadata } from "next";
import { Comme } from "next/font/google";
import "./globals.css";
import MenuWrapper from "../components/MenuWrapper";
import Footer from "../components/Footer";  


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
    <html lang="en"
    className="scroll-smooth"
    data-google-analytics-opt-out="">
      <body className={`${comme.variable} antialiased flex flex-col min-h-screen`}>
        <MenuWrapper />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
