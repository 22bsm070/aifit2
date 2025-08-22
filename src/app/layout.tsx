import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Fit",
  description: "BE READY, TO IMPROVE YOUR LIFESTYLE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            
            <Navbar/>
              {/*Grid background*/} 
              <div className="fixed inset-0 -z-1">
              <div className="absolute inset-0 bg-gradient-to-b from-[#c9c1d2] via-[#5b7f82] to-[#253f03]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(#00bfff_1px,transparent_1px),linear-gradient(90deg,#00bfff_1px,transparent_1px)] bg-[size:8px_8px]"></div>
              </div>
              <main className="pt-24 flex-grow">
                {children}
              </main>
            <Footer/>
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
