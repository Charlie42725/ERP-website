"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Globe, User, ChevronRight, LayoutGrid, Box, BarChart3, TrendingUp, Users, Settings,
  AlertCircle, CheckCircle2, Zap, Smartphone, Cloud, Printer, Gift, Video, RefreshCw, Phone, CreditCard
} from "lucide-react";
import Typewriter from "./components/Typewriter";
import ScrollAnimation from "./components/ScrollAnimation";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    { name: "核心理念", id: "concept", icon: Zap },
    { name: "POS收銀", id: "pos", icon: Smartphone },
    { name: "進貨/庫存", id: "inventory", icon: Box },
    { name: "銷售/帳款", id: "sales", icon: TrendingUp },
    { name: "財務/會計", id: "finance", icon: BarChart3 },
    { name: "特色功能", id: "special", icon: Gift },
  ];

  const featureContent: Record<string, { title: string; desc: string; items: string[] }> = {
    concept: {
      title: "簡單易用，功能完整",
      desc: "專為小型商家量身打造，無論您是零售店舖、直播帶貨團隊或電商賣家，失控ERP都能讓您的生意井井有條。",
      items: [
        "三步內完成所有操作，零學習成本",
        "庫存、成本、帳款自動計算更新",
        "一套系統解決所有經營需求",
        "手機、平板、電腦都能使用"
      ]
    },
    pos: {
      title: "POS 收銀系統",
      desc: "掃碼收銀，快速簡單。專為直播場景設計的銷售介面，快速記錄直播訂單。",
      items: [
        "支援掃碼槍/手動輸入，自動計算找零",
        "多種付款方式：現金、刷卡、轉帳",
        "找不到商品？彈窗快速建檔",
        "支援批量匯入直播訂單 (Excel/CSV)"
      ]
    },
    inventory: {
      title: "商品與進貨管理",
      desc: "建立商品庫，輕鬆記錄進貨。系統自動計算平均成本，庫存數量即時更新。",
      items: [
        "商品編碼、條碼、分類管理",
        "進價/售價設定，自動計算毛利",
        "進貨後庫存自動增加",
        "未付款自動記入應付帳款"
      ]
    },
    sales: {
      title: "銷售與應收應付",
      desc: "完整的銷售歷史追蹤，客戶欠款一目了然。逾期帳款智慧提醒。",
      items: [
        "一鍵查看哪些客戶欠錢、逾期多久",
        "收款自動分配到多筆欠款",
        "供應商貨款清清楚楚",
        "批量付款與沖銷功能"
      ]
    },
    finance: {
      title: "財務與費用管理",
      desc: "多帳戶與費用管理，經營數據一目了然。自動生成每日銷售報表。",
      items: [
        "現金/銀行/零用金多帳戶管理",
        "收支交易流水即時更新",
        "今日數據看板：銷售、毛利、淨利",
        "支援營業日日結功能"
      ]
    },
    special: {
      title: "特色功能",
      desc: "針對特殊業態的專屬功能，讓管理更輕鬆。",
      items: [
        "一番賞管理：設定 A/B 賞與組合價",
        "條碼列印：進貨後直接印標籤",
        "直播訂單快速錄入與解析",
        "出貨狀態追蹤管理"
      ]
    }
  };

  return (
    <div className="">

      {/* Glass Header (Global in layout) */}

      {/* Glass Header (Global in layout) */}

      <main className="relative pt-[72px]">
        {/* --- 1. Unified Hero Section --- */}
        <section className="relative flex justify-center overflow-hidden pt-8 pb-12">
          <div className="container max-w-[1300px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-8 items-start">

            {/* Left Box: Sidebar Menu */}
            <div className="hidden lg:block w-[260px] shrink-0 bg-[#0f1115]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl relative z-50 lg:order-first">

              {/* Mobile View: Accordion Style (< lg) */}
              <div className="lg:hidden flex flex-col">
                {menuItems.map((item) => (
                  <div key={item.id} className="border-b border-white/5 last:border-0">
                    <button
                      onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
                      className={`w-full flex items-center justify-between px-6 py-4 transition-all text-left ${activeMenu === item.id
                        ? "bg-blue-600/20 text-cyan-400 border-l-4 border-cyan-400"
                        : "text-slate-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={18} />
                        <span className="font-bold text-base">{item.name}</span>
                      </div>
                      <ChevronRight size={16} className={`transition-transform duration-300 ${activeMenu === item.id ? "rotate-90 text-cyan-400" : "opacity-30"}`} />
                    </button>

                    {/* Mobile Content Expansion */}
                    {activeMenu === item.id && featureContent[activeMenu] && (
                      <div className="bg-black/20 p-5 text-sm animate-in slide-in-from-top-2 duration-200">
                        <p className="text-slate-300 mb-4 leading-relaxed border-l-2 border-blue-500 pl-3">
                          {featureContent[activeMenu].desc}
                        </p>
                        <div className="space-y-2 mb-4">
                          {featureContent[activeMenu].items.map((sub, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-slate-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>
                              <span>{sub}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={`/${activeMenu === 'pos' ? 'pos' : activeMenu === 'inventory' ? 'features' : 'consult'}`}
                          className="block w-full py-2 text-center rounded-lg bg-blue-600/20 text-blue-300 font-bold text-xs"
                        >
                          查看詳情
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop View: Popover Style (>= lg) */}
              <div className="hidden lg:flex flex-col py-2" onMouseLeave={() => setActiveMenu(null)}>
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="group"
                    onMouseEnter={() => setActiveMenu(item.id)}
                  >
                    <div
                      className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-all border-l-4
                                         ${activeMenu === item.id
                          ? "bg-blue-600/20 text-cyan-400 border-cyan-400"
                          : "text-slate-400 hover:bg-white/5 hover:text-white border-transparent"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={18} />
                        <span className="font-bold text-base">{item.name}</span>
                      </div>
                      <ChevronRight size={16} className={`opacity-50 group-hover:translate-x-1 transition-transform ${activeMenu === item.id ? "text-cyan-400" : ""}`} />
                    </div>
                  </div>
                ))}

                {/* Desktop Popover Pane (Absolute) */}
                {activeMenu && featureContent[activeMenu] && (
                  <div className="absolute left-[260px] top-0 w-[600px] bg-[#0f1115]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 animate-in fade-in slide-in-from-left-4 duration-200 min-h-[400px] z-[60]">
                    <h3 className="text-2xl font-black text-white mb-2 flex items-center gap-3">
                      {menuItems.find(m => m.id === activeMenu)?.icon &&
                        (() => {
                          const Icon = menuItems.find(m => m.id === activeMenu)!.icon;
                          return <Icon className="text-cyan-400" size={28} />;
                        })()
                      }
                      {featureContent[activeMenu].title}
                    </h3>
                    <p className="text-slate-400 mb-8 pb-6 border-b border-white/10">
                      {featureContent[activeMenu].desc}
                    </p>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {featureContent[activeMenu].items.map((sub, idx) => (
                        <div key={idx} className="group/item flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover/item:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"></div>
                          <span className="text-slate-300 group-hover/item:text-cyan-300 transition-colors font-medium">{sub}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                      <Link
                        href={`/${activeMenu === 'pos' ? 'pos' : activeMenu === 'inventory' ? 'features' : 'consult'}`}
                        className="flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors group/link"
                      >
                        前往了解詳情 <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Hero Title & Branding */}
            <div className="flex-1 pt-10 text-center lg:text-left lg:pl-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-bold mb-8 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700 neon-border-blue">
                <Zap size={12} className="text-cyan-400 fill-cyan-400 animate-pulse" />
                <span className="tracking-wider">專為玩具店量身打造</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight min-h-[160px] md:min-h-[auto]">
                <span className="text-glow-blue">
                  <Typewriter text="7天終結" speed={150} />
                </span>
                <br className="block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow-magenta">
                  <Typewriter text="Excel亂帳問題" speed={150} startDelay={1500} />
                </span>
              </h1>

              <p className="text-xl text-slate-300 font-light mb-12 max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                專為玩具店量身打造的經營管理系統。
                <span className="block mt-2 text-cyan-200 font-medium text-glow-blue">簡單易用 · 功能完整 · 自動智慧</span>
              </p>
            </div>
          </div>
        </section>


        {/* --- 2. Pain Points (Why Now?) --- */}
        <section className="pt-0 pb-12 relative">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                <span className="block text-cyan-500 text-sm font-mono mb-2">為什麼需要ERP系統?</span>
                <span className="!text-white" style={{ color: '#ffffff' }}>玩具店目前面臨的</span> <br className="md:hidden" /><span className="text-white">經營痛點</span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "庫存亂、成本不清、預購單", desc: "每次銷售都要手動扣庫存，不知道剩多少貨，也不知道成本。", icon: Box, color: "text-red-400" },
                  { title: "帳目混亂", desc: "現金、轉帳、零用金混在一起，收支統計困難，錢去哪了？", icon: TrendingUp, color: "text-orange-400" },
                  { title: "欠款難追蹤", desc: "客戶賒帳與廠商款項，忘記催款，不知道誰逾期、逾期多久、多少金流。", icon: AlertCircle, color: "text-yellow-400" },
                  { title: "沒時間做報表", desc: "忙著賣貨，沒空計算今天的毛利和淨利，不知道真的賺了多少錢。", icon: BarChart3, color: "text-purple-400" }
                ].map((item, idx) => (
                  <ScrollAnimation key={idx} delay={idx * 150} className="h-full">
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-lg box-glow-hover neon-border-blue transition-all h-full group">
                      <item.icon size={32} className={`${item.color} mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200">{item.desc}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              <div className="mt-8 text-center">
                <div className="inline-block px-6 py-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                  💡 老闆重點：這些問題導致玩具店花太多時間在「找資料」而不是「做生意」。
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section >

        {/* --- 3. Solution --- */}
        < section className="py-24 bg-gradient-to-b from-transparent to-blue-900/10 relative overflow-hidden" >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">解決方案：<br />一套系統搞定所有需求</h2>
                  <p className="text-xl text-slate-300 mb-8">POS 收銀 + 進銷存 + 財務管理，全部整合，不用買多套軟體。</p>

                  <ul className="space-y-6">
                    {[
                      "協助 7 天內完成資料庫導入上線",
                      "解決預購、庫存、金流混亂問題",
                      "AI助手功能 → 隨問隨答分析資料"
                    ].map((text, i) => (
                      <ScrollAnimation key={i} delay={i * 200}>
                        <li className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                          <CheckCircle2 className="text-cyan-400 shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" />
                          <span className="text-lg text-white group-hover:text-cyan-100">{text}</span>
                        </li>
                      </ScrollAnimation>
                    ))}
                  </ul>
                  <div className="mt-8 p-4 border-l-4 border-cyan-500 bg-cyan-500/5">
                    <p className="text-cyan-200">💡 重點：</p>
                  </div>
                </div>
                <div className="relative h-[500px] w-full rounded-2xl border border-white/10 bg-[#15151a] shadow-2xl flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="text-center group-hover:scale-110 transition-transform duration-700">
                    <LayoutGrid size={64} className="text-slate-600 mx-auto mb-4 group-hover:text-cyan-400 transition-colors" />
                    <p className="text-slate-500 font-mono text-sm">SYSTEM INTERFACE PREVIEW</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section >






        {/* --- Statistics Section --- */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen"></div>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: "50+", label: "玩具店正在使用" },
                { value: "7 天", label: "平均上手時間" },
                { value: "80%", label: "錯帳率降低" },
                { value: "10 小時", label: "每週節省時間" },
              ].map((stat, idx) => (
                <ScrollAnimation key={idx} delay={idx * 100}>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* --- Simple Workflow Section --- */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
          <ScrollAnimation>
            <div className="max-w-5xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <span className="text-cyan-400 text-sm font-bold tracking-wider mb-4 block">超簡單流程</span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                  只要做兩件事，其他系統幫你算
                </h2>
                <p className="text-slate-400 text-lg">不需要懂會計、不需要懂進銷存</p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-12">
                {/* Step 1: 收銀 */}
                <ScrollAnimation delay={100}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                      <CreditCard className="text-white w-12 h-12 md:w-14 md:h-14" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">收銀</h3>
                    <p className="text-slate-400 text-sm">掃碼、收錢、完成</p>
                  </div>
                </ScrollAnimation>

                {/* Arrow 1 */}
                <div className="hidden md:block text-slate-600 text-2xl">→</div>
                <div className="md:hidden text-slate-600 text-2xl rotate-90">→</div>

                {/* Step 2: 進貨 */}
                <ScrollAnimation delay={200}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                      <Box className="text-white w-12 h-12 md:w-14 md:h-14" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">進貨</h3>
                    <p className="text-slate-400 text-sm">輸入數量、價格</p>
                  </div>
                </ScrollAnimation>

                {/* Arrow 2 */}
                <div className="hidden md:block text-slate-600 text-2xl">→</div>
                <div className="md:hidden text-slate-600 text-2xl rotate-90">→</div>

                {/* Step 3: 自動完成 */}
                <ScrollAnimation delay={300}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                      <Zap className="text-white w-12 h-12 md:w-14 md:h-14" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">自動完成</h3>
                    <p className="text-slate-400 text-sm">庫存、成本、帳款、報表</p>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Highlight Box */}
              <div className="max-w-2xl mx-auto">
                <div className="p-4 md:p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center">
                  <p className="text-cyan-300 font-bold text-base md:text-lg">
                    重點：只要做「收銀」和「進貨」，系統會自動幫你算好庫存和報表
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* --- Testimonials Section --- */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full"></div>
          <ScrollAnimation>
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <span className="text-cyan-400 text-sm font-bold tracking-wider mb-4 block">客戶見證</span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  聽聽其他老闆怎麼說
                </h2>
                <p className="text-slate-400">他們都已經從 Excel 轉移到玩庫 ERP</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    quote: "以前每天花 2 小時對帳，現在打開系統就知道今天賺多少。",
                    name: "王老闆",
                    company: "台北某玩具店",
                    initial: "王"
                  },
                  {
                    quote: "最怕客人問還有沒有貨，現在 3 秒就能回答。",
                    name: "林老闆",
                    company: "高雄某模型店",
                    initial: "林"
                  },
                  {
                    quote: "本來很怕用電腦系統，結果比 Excel 還簡單。",
                    name: "陳老闆",
                    company: "台中某公仔店",
                    initial: "陳"
                  }
                ].map((testimonial, idx) => (
                  <ScrollAnimation key={idx} delay={idx * 150}>
                    <div className="relative p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 h-full">
                      {/* Quote Mark */}
                      <div className="absolute top-4 right-4 text-6xl text-cyan-500/20 font-serif leading-none">"</div>

                      <p className="text-white text-base md:text-lg mb-6 relative z-10 leading-relaxed">
                        「{testimonial.quote}」
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.initial}
                        </div>
                        <div>
                          <div className="text-white font-bold">{testimonial.name}</div>
                          <div className="text-slate-400 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* --- New Section: Pricing Banner (Tech Style) --- */}
        < section className="py-12 relative overflow-hidden" >
          {/* Dynamic Background */}
          < div className="absolute inset-0" >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20"></div>
          </div >

          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-b from-white/20 to-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_80px_rgba(59,130,246,0.15)]">

              <div className="relative rounded-[1.9rem] bg-slate-900/95 backdrop-blur-xl overflow-hidden px-6 py-10 md:px-12 md:py-12 text-center shadow-inner">

                <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-2 tracking-wider font-sans">
                  零售店專用 ERP 管理平台
                </h2>
                <div className="text-slate-300 font-medium text-lg mb-6">
                  比 Excel 快 10 倍，錯帳率降低 80%
                </div>

                <div className="flex flex-col items-center justify-center gap-1 mb-6">
                  <div className="flex items-baseline gap-2 text-white font-bold mb-2">
                    <span className="text-2xl md:text-3xl">每月</span>
                    <span className="text-6xl md:text-7xl font-black text-white leading-none tracking-tighter">
                      1,500
                    </span>
                  </div>
                  <div className="text-blue-300 font-medium text-lg">
                    每天只要 50 元
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-10 text-left max-w-sm mx-auto">
                  <div className="flex items-center gap-3 text-white font-bold">
                    <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                    <span>7 天內完成導入上線</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-bold">
                    <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                    <span>3 秒看懂毛利 / 庫存 / 熱賣</span>
                  </div>
                  <div className="flex items-center gap-3 text-white font-bold">
                    <CheckCircle2 className="text-green-400 shrink-0" size={20} />
                    <span>一句提問查帳：AI 助手幫你查</span>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <Link
                    href="/contact"
                    className="group relative px-10 py-4 rounded-full overflow-hidden bg-white text-black font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      立即免費試用 <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </section >

        {/* --- Footer --- */}
        <section className="py-12 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div className="pt-10 border-t border-white/10">
              <p className="text-slate-500">© 2026 Toyflow Inc. All rights reserved. 玩庫ERP</p>
            </div>
          </div>
        </section>

      </main >
    </div >
  );
}
