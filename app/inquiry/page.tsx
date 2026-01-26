"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, MessageSquare, Clock, ArrowRight, HelpCircle } from "lucide-react";

export default function Inquiry() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] font-sans text-slate-200">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
            </div>

            {/* Glass Header (Global in layout) */}

            <main className="relative pt-[72px] min-h-screen flex flex-col lg:flex-row">

                {/* Left Content */}
                <div className="flex-1 p-12 lg:p-24 flex flex-col justify-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
                        申請諮詢 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">立即解決疑惑</span>
                    </h1>

                    <div className="space-y-12 mb-12">
                        <div className="flex gap-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                <CheckCircle2 size={32} className="text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">可以迅速解決疑惑</h3>
                                <ul className="space-y-2 text-slate-400">
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div> 留下您的聯繫方式，諮詢顧問會在上班時間30分鐘內與您聯繫。</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div> 透過與ERP專業顧問諮詢，能迅速準確地解決疑惑。</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-6 group">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                                <Clock size={32} className="text-yellow-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">大幅度縮短了解ERP的時間</h3>
                                <ul className="space-y-2 text-slate-400">
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2"></div> 可以確認如何應用到公司的業務流程。</li>
                                    <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2"></div> 能迅速判斷是否導入玩庫 ERP。</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar (Form) */}
                <div className="w-full lg:w-[480px] bg-gradient-to-b from-slate-900 to-blue-950 border-l border-white/10 relative flex flex-col justify-center p-12 shadow-2xl z-20">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                            <HelpCircle className="text-cyan-400" /> 申請諮詢
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="text-slate-300 text-sm font-bold block mb-2">公司</label>
                                <input type="text" className="w-full h-12 rounded-lg px-4 bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:bg-white/10 focus:border-cyan-500 transition-all" />
                            </div>
                            <div>
                                <label className="text-slate-300 text-sm font-bold block mb-2">窗口</label>
                                <input type="text" className="w-full h-12 rounded-lg px-4 bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:bg-white/10 focus:border-cyan-500 transition-all" />
                            </div>
                            <div>
                                <label className="text-slate-300 text-sm font-bold block mb-2">LINE ID (選填)</label>
                                <input type="text" className="w-full h-12 rounded-lg px-4 bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:bg-white/10 focus:border-cyan-500 transition-all" />
                            </div>
                            <div>
                                <label className="text-slate-300 text-sm font-bold block mb-2">聯絡電話</label>
                                <input type="tel" className="w-full h-12 rounded-lg px-4 bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:bg-white/10 focus:border-cyan-500 transition-all" />
                            </div>
                            <div>
                                <label className="text-slate-300 text-sm font-bold block mb-2">諮詢內容</label>
                                <textarea className="w-full h-32 rounded-lg p-4 bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:bg-white/10 focus:border-cyan-500 transition-all resize-none"></textarea>
                            </div>

                            <button type="button" className="w-full h-14 mt-4 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg shadow-lg hover:shadow-yellow-400/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                申請諮詢
                            </button>
                        </form>


                    </div>
                </div>

            </main>
        </div>
    );
}
