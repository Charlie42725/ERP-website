"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, User, Check, Smartphone, MessageCircle, Globe2, ShoppingCart, FileText, Headphones, CreditCard } from "lucide-react";

export default function Pricing() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] font-sans text-slate-200 selection:bg-blue-500/30">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
            </div>

            {/* Glass Header (Global in layout) */}

            <main className="relative pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">價格方案</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Pricing Table */}
                <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-5xl mx-auto">
                    {/* Standard Plan */}
                    <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="bg-[#0f1115]/90 rounded-[22px] h-full p-8 flex flex-col">
                            <h2 className="text-3xl font-bold text-white mb-2">ERP</h2>
                            <div className="text-cyan-400 text-sm font-mono mb-6">企業資源規劃</div>

                            <div className="text-5xl font-black text-white mb-4">
                                NT$1,500 <span className="text-lg text-slate-500 font-medium">/ 月</span>
                            </div>
                            <p className="text-slate-400 text-sm mb-8">適合各類型企業，完整功能一次到位</p>

                            <div className="space-y-4 flex-1">
                                <div className="flex justify-between py-3 border-b border-white/5">
                                    <span className="text-slate-300">用戶數量</span>
                                    <span className="text-white font-bold">無限制</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/5">
                                    <span className="text-slate-300">容量</span>
                                    <span className="text-white font-bold">無限制</span>
                                </div>
                                <div className="py-4">
                                    <div className="text-slate-300 mb-2">主要功能:</div>
                                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                                        <span>• POS 收銀系統</span>
                                        <span>• 進銷存管理</span>
                                        <span>• 應收/應付帳款</span>
                                        <span>• 帳戶/費用管理</span>
                                        <span>• 財務/經營報表</span>
                                        <span>• 一番賞/直播功能</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <button className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors shadow-lg shadow-blue-900/50">
                                    提供ERP全模組功能
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Custom Plan (Renamed from Admin) */}
                    <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/10 overflow-hidden group">
                        <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="bg-[#0f1115]/90 rounded-[22px] h-full p-8 flex flex-col">
                            <h2 className="text-3xl font-bold text-white mb-2">諮詢客製化</h2>
                            <div className="text-purple-400 text-sm font-mono mb-6">Consulting Customization</div>

                            <div className="text-4xl font-black text-white mb-4 leading-tight py-2">
                                價格另計 <span className="text-lg text-slate-500 font-medium"></span>
                            </div>
                            <p className="text-slate-400 text-sm mb-8">針對特殊需求量身打造</p>

                            <div className="space-y-4 flex-1">
                                <div className="flex justify-between py-3 border-b border-white/5">
                                    <span className="text-slate-300">用戶數量</span>
                                    <span className="text-white font-bold">依專案規劃</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/5">
                                    <span className="text-slate-300">容量</span>
                                    <span className="text-white font-bold">依需求配置</span>
                                </div>
                                <div className="py-4">
                                    <div className="text-slate-300 mb-2">主要服務:</div>
                                    <div className="space-y-2 text-sm text-slate-400">
                                        <div className="flex gap-2"><Check size={16} className="text-purple-400" /> 特殊報表客製化</div>
                                        <div className="flex gap-2"><Check size={16} className="text-purple-400" /> 原包含：電子簽核/共用記事</div>
                                        <div className="flex gap-2"><Check size={16} className="text-purple-400" /> 專屬顧問導入服務</div>
                                        <div className="flex gap-2"><Check size={16} className="text-purple-400" /> 員工教育訓練</div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                    <button className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-colors shadow-lg shadow-purple-900/50">
                                        自動連動ERP資料
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Free Added Services */}
                <div className="mb-24">
                    <h3 className="text-3xl font-bold text-white mb-2">免費附加服務</h3>
                    <p className="text-slate-400 mb-12">玩庫提供多樣免費的附加功能。</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "銀行存摺整合管理",
                                desc: "即時查詢存摺交易明細，收付款明細能轉成會計憑證",
                                icon: CreditCard
                            },
                            {
                                title: "電子發票",
                                desc: "不限開立張數，免費上傳至「財政部電子發票整合服務平台」",
                                icon: FileText
                            },
                            {
                                title: "網路商店管理",
                                desc: "可以將網路商店的訂單收集至ERP，並能產生ERP的訂貨單/銷貨單",
                                icon: ShoppingCart
                            },
                            {
                                title: "手機APP",
                                desc: "與電腦相同，所有功能皆可使用，提供可以用行動裝置相機掃描條碼的功能",
                                icon: Smartphone
                            },
                            {
                                title: "客戶線上下單系統",
                                desc: "無限制作戶帳號的新增數量，提供訂貨、採購、外包生產、記事板等功能",
                                icon: Globe2
                            },
                            {
                                title: "線上薪資查詢系統 (UserPay)",
                                desc: "職員在線上確認個人薪資明細，可以申請休假與確認請假紀錄",
                                icon: User
                            },
                            {
                                title: "企業Messenger",
                                desc: "利用公務用聊天室、群組，提供備份聊天記錄功能，能共享ERP資料",
                                icon: MessageCircle
                            },
                            {
                                title: "支援多國語言",
                                desc: "中/英/日/韓/西/越/泰/印尼，每位用戶可設定不同語言",
                                icon: Globe
                            },
                            {
                                title: "客服支援",
                                desc: "支援電話諮詢與線上留言諮詢，支援遠端服務、操作文檔、教學影片",
                                icon: Headphones
                            }
                        ].map((service, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon className="text-blue-400" size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Footer Buttons */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16">
                    <button className="px-12 py-5 rounded-full bg-[#cf2e2e] hover:bg-red-600 text-white text-lg font-bold shadow-2xl hover:scale-105 transition-all w-full md:w-auto">
                        立即試用
                    </button>
                    <button className="px-12 py-5 rounded-full bg-[#cf2e2e] hover:bg-red-600 text-white text-lg font-bold shadow-2xl hover:scale-105 transition-all w-full md:w-auto">
                        免費諮詢
                    </button>
                </div>

                {/* Correction per user request inside the code generation logic: 
              "申請帳號換成立即試用" 
              I put '申請帳號' above to catch myself. I will fix it now in the actual output.
           */}
            </main>
        </div>
    );
}
