"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, User, Phone, MessageSquare, MonitorPlay, RefreshCw, BookOpen } from "lucide-react";

export default function Services() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] font-sans text-slate-200 selection:bg-blue-500/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
            </div>

            {/* Glass Header */}
            <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
                <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <Image
                                    src="/logo.png"
                                    alt="玩庫ERP"
                                    width={120}
                                    height={40}
                                    className="relative h-10 w-auto object-contain brightness-110 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                />
                            </div>
                        </Link>
                        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-300">
                            <Link href="/" className="hover:text-cyan-400 transition-all">產品功能</Link>
                            <Link href="/consult" className="hover:text-cyan-400 transition-all">試用及諮詢</Link>
                            <Link href="/pricing" className="hover:text-cyan-400 transition-all">價格方案</Link>
                            <Link href="/services" className="text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">提供服務</Link>
                            <Link href="#" className="hover:text-cyan-400 transition-all">關於我們</Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">

                        <div className="flex items-center gap-3">
                            <button className="relative overflow-hidden rounded-full border border-blue-500/30 bg-blue-600/20 px-5 py-1.5 text-sm font-bold text-blue-100 backdrop-blur-md transition-all hover:bg-blue-600/40 hover:border-blue-400">
                                聯繫業務
                            </button>
                            <button className="relative overflow-hidden group rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-1.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105">
                                <span className="relative z-10">申請免費試用</span>
                                <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative pt-[100px] pb-24 px-6 max-w-[1400px] mx-auto min-h-screen flex gap-8">

                {/* Left Sidebar */}
                <aside className="w-64 shrink-0 hidden lg:block">
                    <div className="sticky top-[100px] space-y-2">
                        {[
                            { name: "客戶諮詢服務", icon: Phone, active: true },
                            { name: "顧問培訓", icon: BookOpen },
                            { name: "教學影片", icon: MonitorPlay },
                            { name: "系統升級更新", icon: RefreshCw },
                        ].map((item, idx) => (
                            <div key={idx} className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                                <item.icon size={18} />
                                <span className="font-medium">{item.name}</span>
                            </div>
                        ))}


                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-white mb-8 border-b border-white/10 pb-8 flex items-center gap-4">
                        客戶諮詢服務
                        <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></div>
                    </h1>

                    <div className="space-y-12">
                        {/* Service Block 1 */}
                        <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center shrink-0">
                                    <Phone size={32} className="text-blue-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">專業ERP顧問電話諮詢服務</h2>
                                    <ul className="space-y-4 text-slate-300 leading-relaxed">
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5"></div>
                                            <span>可以與玩庫ERP的顧問進行電話諮詢。</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5"></div>
                                            <span>在使用玩庫ERP的過程中遇到問題時，透過申請電話諮詢，就會有專業的客服顧問與您聯繫。</span>
                                        </li>
                                        <li className="flex gap-3 items-center">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            <span>電話諮詢服務時間：工作日 09點 ~ 18點</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Service Block 2 */}
                        <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-purple-600/20 flex items-center justify-center shrink-0">
                                    <MessageSquare size={32} className="text-purple-400" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4">在線留言諮詢服務</h2>
                                    <ul className="space-y-4 text-slate-300 leading-relaxed">
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5"></div>
                                            <span>在使用玩庫ERP的過程中遇到疑問時，可使用系統內提供的在線留言諮詢平台進行諮詢。</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5"></div>
                                            <span>在工作日會即時解答您提交的問題。</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2.5"></div>
                                            <span>固定假日期間，會在假日結束後回覆或電話與您聯繫進行說明。</span>
                                        </li>
                                        <li className="flex gap-3 items-center">
                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                            <span>在线諮詢服務時間：工作日 09點 ~ 18點</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
