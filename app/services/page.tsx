"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, User, Phone, MessageSquare, MonitorPlay, RefreshCw, BookOpen, Smartphone, BarChart3, Users, CreditCard, TrendingUp, Gift } from "lucide-react";

export default function Services() {
    return (
        <div className="min-h-screen font-sans text-slate-200 selection:bg-blue-500/30">

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
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow-magenta mb-8 border-b border-white/10 pb-8 flex items-center gap-4">
                        產品功能介紹
                        <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse box-shadow-glow"></div>
                    </h1>

                    <div className="space-y-12">
                        {/* Feature Group 1: Operations */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Smartphone className="text-cyan-400" /> 門市與銷售
                            </h3>
                            <div className="space-y-6">
                                <div className="p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-cyan-500/30 transition-all">
                                    <h4 className="text-lg font-bold text-white mb-2">POS 收銀系統</h4>
                                    <p className="text-slate-400 text-sm">掃碼收銀，支援多種付款方式。商品快速建檔，直播銷售模式可批量匯入訂單。</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-cyan-500/30 transition-all">
                                    <h4 className="text-lg font-bold text-white mb-2">商品與進貨管理</h4>
                                    <p className="text-slate-400 text-sm">建立商品庫，條碼管理。輕鬆記錄進貨，系統自動更新庫存與平均成本。</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-black/20 border border-white/5 hover:border-cyan-500/30 transition-all">
                                    <h4 className="text-lg font-bold text-white mb-2">銷售紀錄追蹤</h4>
                                    <p className="text-slate-400 text-sm">完整的銷售歷史，依日期、客戶篩選，一鍵匯出資料分析。</p>
                                </div>
                            </div>
                        </div>

                        {/* Feature Group 2: Finance */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <BarChart3 className="text-yellow-400" /> 財務與報表
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 shrink-0"><Users size={20} /></div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">應收/應付帳款</h4>
                                        <p className="text-slate-400 text-sm">欠款一目了然，逾期智慧提醒。支援批量收款與付款沖銷。</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 shrink-0"><CreditCard size={20} /></div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">帳戶與費用管理</h4>
                                        <p className="text-slate-400 text-sm">現金/銀行多帳戶管理，交易流水即時更新。記錄薪資、租金等各項費用。</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0"><TrendingUp size={20} /></div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">儀表板與日結</h4>
                                        <p className="text-slate-400 text-sm">即時經營數據看板，今日營收、毛利分析。支援營業日日結功能。</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0"><Gift size={20} /></div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">特色功能</h4>
                                        <p className="text-slate-400 text-sm">一番賞管理系統、條碼列印、直播訂單與出貨管理。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
