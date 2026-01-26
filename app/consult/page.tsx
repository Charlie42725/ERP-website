"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, User, Clock, HeartHandshake, CheckCircle2, ChevronRight, Video, Monitor, Network } from "lucide-react";

export default function Consult() {
    return (
        <div className="min-h-screen font-sans text-slate-200 selection:bg-blue-500/30">
            {/* Glass Header (Global in layout) */}

            <main className="relative pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
                <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 text-glow-magenta">
                            免費諮詢
                        </span>
                    </h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                    {/* Feature 1 */}
                    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>

                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                            <Clock size={32} className="text-white" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-6">只需一個小時即可判斷系統合適性。</h2>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex gap-3">
                                <CheckCircle2 size={20} className="text-cyan-400 shrink-0 mt-1" />
                                <span>了解完整的系統功能後判斷是否使用玩庫。</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 size={20} className="text-cyan-400 shrink-0 mt-1" />
                                <span>透過演示系統的方式馬上就可以確認流程要如何應用在系統上。</span>
                            </li>
                        </ul>
                    </div>

                    {/* Feature 2 */}
                    <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>

                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-400 flex items-center justify-center mb-8 shadow-lg shadow-purple-500/20">
                            <HeartHandshake size={32} className="text-white" />
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-6">玩庫銷售人員沒有業績獎金。</h2>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex gap-3">
                                <CheckCircle2 size={20} className="text-purple-400 shrink-0 mt-1" />
                                <span>做不做得到，玩庫銷售人員不說謊。</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 size={20} className="text-purple-400 shrink-0 mt-1" />
                                <span>傾聽客戶需求說明符合流程的系統功能。</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 size={20} className="text-purple-400 shrink-0 mt-1" />
                                <span className="text-white font-bold">毋須用欺騙的方式銷售，現在就申請吧！</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mb-24">
                    <button className="px-16 py-6 rounded-full bg-[#cf2e2e] hover:bg-red-600 text-white text-2xl font-bold shadow-[0_0_30px_rgba(207,46,46,0.4)] hover:scale-105 transition-all hover:shadow-[0_0_50px_rgba(207,46,46,0.6)]">
                        免費諮詢
                    </button>
                </div>

                {/* Info/Notes */}
                <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <ul className="space-y-4 text-slate-400 text-sm md:text-base">
                        <li className="flex gap-3 items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                            <span><strong>訪問日期：</strong> 於上班時間內由銷售人員聯繫後確認。</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                            <span>
                                <span className="text-cyan-400">[雙北市捷運站]</span> 以外地區以
                                <span className="text-cyan-400"> [遠端服務] </span>
                                的方式詳細介紹。
                            </span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-2"></div>
                            <div>
                                <span className="block mb-1"><strong>準備設備：</strong> 網路、電腦</span>
                                <span className="text-slate-500 text-sm flex items-center gap-2">
                                    <ChevronRight size={14} /> 多人參與時請準備投影機及會議室並告知銷售人員。
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

            </main>
        </div>
    );
}
