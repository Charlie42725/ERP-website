import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export const metadata: Metadata = {
  title: "玩庫ERP | 專為玩具店量身打造",
  description: "簡單易用、功能完整的玩具店專用ERP系統。POS收銀、進銷存、財務管理一次搞定。",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" style={{ backgroundColor: "#0b0b0b" }}>
      <body
        style={{ backgroundColor: "#0b0b0b" }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0a0a0f] font-sans text-slate-200 selection:bg-blue-500/30`}
      >
        {/* Global Background Ambience */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
          <ParticleBackground />
        </div>

        <CustomCursor />
        <Header />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
