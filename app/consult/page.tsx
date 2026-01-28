"use client";

import Link from "next/link";
import {
  Clock,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
  Video,
  Monitor,
  MapPin,
  Calendar,
  Users,
  Zap,
  Phone,
  MessageCircle,
  ArrowRight,
  Shield,
} from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Consult() {
  return (
    <div className="min-h-screen pt-[72px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-blue-900/10 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <ScrollAnimation>
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">
                <Phone size={16} />
                <span>免費諮詢服務</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                一小時了解系統
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                  零壓力決定是否適合
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                我們的銷售人員沒有業績獎金，只會誠實告訴您系統能不能解決您的問題
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {[
                  { value: "1 小時", label: "諮詢時間" },
                  { value: "免費", label: "無任何費用" },
                  { value: "無壓力", label: "不強迫銷售" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {stat.value}
                    </div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">為什麼選擇玩庫諮詢？</h2>
              <p className="text-slate-400">我們相信好的產品不需要靠話術推銷</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Feature 1 */}
            <ScrollAnimation delay={100}>
              <div className="group relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-cyan-500/30 transition-all duration-300 cursor-pointer">
                {/* Glow Effect */}
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Clock size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    一小時完整了解
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    透過系統演示，您可以完整了解所有功能，並即時確認您的業務流程如何對應到系統操作。
                  </p>

                  <ul className="space-y-3">
                    {[
                      "完整功能展示與說明",
                      "針對您的需求客製化演示",
                      "現場解答所有疑問",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            {/* Feature 2 */}
            <ScrollAnimation delay={200}>
              <div className="group relative h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:border-purple-500/30 transition-all duration-300 cursor-pointer">
                {/* Glow Effect */}
                <div className="absolute -right-20 -top-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                    <HeartHandshake size={28} className="text-white" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    誠實無壓力
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    我們的銷售人員沒有業績獎金。做不到的功能，我們會直接告訴您，不說謊、不畫大餅。
                  </p>

                  <ul className="space-y-3">
                    {[
                      "做不到的事情絕不承諾",
                      "專注傾聽您的實際需求",
                      "提供最適合的解決方案",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 size={18} className="text-purple-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Service Options Section */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">諮詢方式</h2>
              <p className="text-slate-400">選擇最適合您的諮詢方式</p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Option 1: On-site */}
            <ScrollAnimation delay={100}>
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">現場諮詢</h3>
                    <p className="text-cyan-400 text-sm font-medium">雙北市捷運站周邊</p>
                  </div>
                </div>

                <p className="text-slate-400 mb-6">
                  銷售人員親自到府或約在捷運站附近咖啡廳，面對面為您展示系統並解答問題。
                </p>

                <div className="flex flex-wrap gap-2">
                  {["面對面溝通", "即時解答", "實機操作"].map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Option 2: Remote */}
            <ScrollAnimation delay={200}>
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Video size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">遠端諮詢</h3>
                    <p className="text-purple-400 text-sm font-medium">全台灣皆可服務</p>
                  </div>
                </div>

                <p className="text-slate-400 mb-6">
                  透過視訊會議軟體進行線上展示，不受地理限制，同樣提供完整的系統介紹。
                </p>

                <div className="flex flex-wrap gap-2">
                  {["不限地區", "螢幕共享", "錄影回放"].map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">諮詢流程</h2>
              <p className="text-slate-400">簡單三步驟，快速了解玩庫 ERP</p>
            </div>
          </ScrollAnimation>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: MessageCircle,
                  title: "填寫表單",
                  desc: "填寫諮詢表單，簡單描述您的需求與店家類型",
                  color: "cyan",
                },
                {
                  step: "02",
                  icon: Calendar,
                  title: "預約時間",
                  desc: "銷售人員會在 1 個工作天內聯繫您，安排諮詢時間",
                  color: "blue",
                },
                {
                  step: "03",
                  icon: Monitor,
                  title: "系統展示",
                  desc: "進行約 1 小時的完整系統展示，解答所有疑問",
                  color: "purple",
                },
              ].map((item, idx) => (
                <ScrollAnimation key={idx} delay={idx * 150}>
                  <div className="relative text-center">
                    {/* Step Number */}
                    <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                      <item.icon size={32} className={`text-${item.color}-400`} />
                      <span className={`absolute -top-3 -right-3 w-8 h-8 rounded-full bg-${item.color}-500 flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                        {item.step.slice(-1)}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
        </div>

        <ScrollAnimation>
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            {/* Gradient Border Container */}
            <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-600/30 blur-xl rounded-[2rem] opacity-50"></div>

              <div className="relative rounded-[1.9rem] bg-black/80 backdrop-blur-xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="relative px-6 py-10 md:px-12 md:py-14 text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-green-300 text-sm font-medium">現正開放預約</span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-black text-white mb-3">
                    立即預約免費諮詢
                  </h2>
                  <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold mb-8">
                    1 個工作天內專人聯繫
                  </p>

                  {/* CTA Button */}
                  <Link
                    href="/inquiry"
                    className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full overflow-hidden bg-white text-black font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <span className="relative z-10">申請免費諮詢</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>

                  {/* Trust Elements */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6">
                    {[
                      { icon: Shield, text: "完全免費" },
                      { icon: Clock, text: "約 1 小時" },
                      { icon: HeartHandshake, text: "無壓力銷售" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-400">
                        <item.icon size={16} className="text-cyan-400" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Info Notes Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollAnimation>
            <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Zap size={18} className="text-cyan-400" />
                </div>
                諮詢須知
              </h3>

              <div className="space-y-4">
                {[
                  {
                    label: "預約時間",
                    content: "上班時間內由銷售人員聯繫後確認，通常於 1 個工作天內回覆。",
                  },
                  {
                    label: "服務範圍",
                    content: (
                      <>
                        <span className="text-cyan-400">雙北市捷運站周邊</span> 可安排現場諮詢，其他地區以 <span className="text-cyan-400">遠端視訊</span> 方式進行。
                      </>
                    ),
                  },
                  {
                    label: "準備設備",
                    content: "請準備可上網的電腦或平板。多人參與時建議準備投影設備並提前告知。",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="shrink-0">
                      <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
