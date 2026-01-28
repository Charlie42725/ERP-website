"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-cyan-500/20 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20 shadow-[0_2px_15px_rgba(34,211,238,0.1)]">
            <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
                <div className="flex items-center gap-4 lg:gap-12">
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-slate-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <Image
                                src="/logo.png"
                                alt="玩庫ERP"
                                width={120}
                                height={40}
                                className="relative h-8 lg:h-10 w-auto object-contain brightness-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                            />
                        </div>
                    </Link>
                    <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-300">
                        <Link href="/" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">產品功能</Link>
                        <Link href="/consult" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">試用及諮詢</Link>
                        <Link href="/pricing" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">價格方案</Link>
                        <Link href="/services" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">提供服務</Link>
                        <Link href="/faq" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">常見問題</Link>
                        <Link href="#" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">關於我們</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-3">
                        <Link href="/contact" className="relative overflow-hidden rounded-full border border-blue-500/30 bg-blue-600/20 px-5 py-1.5 text-sm font-bold text-blue-100 backdrop-blur-md transition-all hover:bg-blue-600/40 hover:border-blue-400">
                            聯繫業務
                        </Link>
                        <Link href="/inquiry" className="relative overflow-hidden group rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-1.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105">
                            <span className="relative z-10">申請免費試用</span>
                            <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 ml-2 text-slate-400 border-l border-white/10 pl-4">
                        <button className="p-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all"><Globe size={18} /></button>
                        <button className="hidden sm:block p-1.5 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all"><User size={18} /></button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#0a0a0f] border-t border-white/10 p-6 flex flex-col gap-6 lg:hidden overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
                    <nav className="flex flex-col gap-6 text-lg font-medium text-slate-300">
                        <Link href="/" className="py-2 border-b border-white/5 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>產品功能</Link>
                        <Link href="/consult" className="py-2 border-b border-white/5 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>試用及諮詢</Link>
                        <Link href="/pricing" className="py-2 border-b border-white/5 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>價格方案</Link>
                        <Link href="/services" className="py-2 border-b border-white/5 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>提供服務</Link>
                        <Link href="/faq" className="py-2 border-b border-white/5 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>常見問題</Link>
                        <Link href="#" className="py-2 border-b border-white/5 hover:text-cyan-400" onClick={() => setIsMobileMenuOpen(false)}>關於我們</Link>
                    </nav>
                    <div className="flex flex-col gap-4 mt-auto">
                        <Link href="/contact" className="w-full py-3 rounded-xl border border-blue-500/30 bg-blue-600/20 text-blue-100 font-bold text-center" onClick={() => setIsMobileMenuOpen(false)}>
                            聯繫業務
                        </Link>
                        <Link href="/inquiry" className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-center" onClick={() => setIsMobileMenuOpen(false)}>
                            申請免費試用
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
