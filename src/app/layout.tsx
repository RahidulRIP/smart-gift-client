import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Requirement 2: SEO and Project Identity
export const metadata: Metadata = {
  title: "SmartGift | AI-Powered Personalized Gifting Experience",
  description:
    "Discover the perfect gift with SmartGift's AI assistant. Personalized recommendations, seamless gifting, and smart shopping all in one place.",
  icons: {
    // icon: "/favicon.ico", // আপনার যদি আইকন থাকে
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300`}
      >
        {/* Requirement 3: Navbar Setup */}
        <Navbar />

        {/* Main Content Area */}
        {/* pt-16 ensures content doesn't hide behind fixed navbar */}
        <main className="grow pt-16">{children}</main>

        {/* Requirement 3: Footer Setup */}
        <Footer />
      </body>
    </html>
  );
}
