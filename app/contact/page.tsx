"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function ContactSales() {
    return (
        <div className="min-h-screen font-sans text-slate-200 selection:bg-blue-500/30">
            {/* Glass Header */}
            <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
                <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png" alt="玩庫ERP" width={120} height={40} className="h-10 w-auto object-contain brightness-110" />
                    </Link>
                    <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                        回首頁
                    </Link>
                </div>
            </header>

            <main className="relative min-h-screen flex flex-col lg:flex-row pt-[72px]">

                {/* Left Content (Value Prop) */}
                <div className="flex-1 p-12 lg:p-24 flex flex-col justify-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
                        快速體驗 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">玩庫 ERP</span>
                    </h1>

                    <div className="space-y-8 mb-12">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">玩庫對自己有信心！</h3>
                                <p className="text-slate-400">玩庫是可以先體驗再決定是否要購買的ERP系統。<br />玩庫已開發完善的系統功能。</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                                <Clock className="text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">ERP快速上手</h3>
                                <p className="text-slate-400">內建基本資料，輕鬆體驗上百種多樣化功能。<br />體驗模擬版時，若遇到想了解的問題，請隨時與我們聯繫。</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-slate-500 text-sm border-t border-white/10 pt-8">
                        <p>模擬版為公版平台，會限制部分功能。<br />正式使用系統之後將無以上限制，可以使用所有功能。</p>
                    </div>
                </div>

                {/* Right Sidebar (Form) */}
                <div className="w-full lg:w-[480px] shrink-0 bg-blue-600 p-12 flex flex-col justify-center relative z-20 shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center">快速體驗申請</h2>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-blue-100 text-sm font-bold">E-mail</label>
                                <input type="email" className="w-full h-12 rounded-lg px-4 bg-white/20 border border-white/30 text-white placeholder:text-blue-200 focus:outline-none focus:bg-white/30 focus:border-white transition-all" placeholder="請輸入您的 Email" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-blue-100 text-sm font-bold">語言</label>
                                <div className="relative">
                                    <select className="w-full h-12 rounded-lg px-4 bg-white/20 border border-white/30 text-white focus:outline-none focus:bg-white/30 appearance-none cursor-pointer">
                                        <option className="bg-blue-900">繁體中文</option>
                                        <option className="bg-blue-900">English</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/70">▼</div>
                                </div>
                            </div>

                            <button type="button" className="w-full h-14 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-black text-lg shadow-lg hover:shadow-yellow-400/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                立即申請 <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    );
}
