"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  HelpCircle,
  Package,
  CreditCard,
  Settings,
  Users,
  Zap,
  BarChart3,
  Shield,
  Phone,
} from "lucide-react";
import ScrollAnimation from "../components/ScrollAnimation";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: "general",
    title: "基本問題",
    icon: HelpCircle,
    color: "cyan",
    items: [
      {
        question: "玩庫 ERP 是什麼？",
        answer:
          "玩庫 ERP 是專為玩具店、模型店、公仔店量身打造的經營管理系統。整合 POS 收銀、進銷存管理、財務帳款於一體，讓您只需做「收銀」和「進貨」兩個動作，系統就會自動計算庫存、成本、帳款和報表。",
      },
      {
        question: "適合哪些類型的店家使用？",
        answer:
          "玩庫 ERP 特別適合：玩具零售店、模型專賣店、公仔店、一番賞店、卡牌遊戲店、直播帶貨團隊、以及有批發和零售混合業務的商家。無論是實體店面或網路賣家都適用。",
      },
      {
        question: "需要有電腦或技術背景才能使用嗎？",
        answer:
          "完全不需要！玩庫 ERP 的設計理念就是「三步內完成所有操作」。介面直覺簡單，比 Excel 還容易上手。我們也提供完整的教學影片和客服支援，確保您能快速上線。",
      },
      {
        question: "可以在哪些裝置上使用？",
        answer:
          "玩庫 ERP 是雲端系統，支援電腦、平板、手機等任何有瀏覽器的裝置。您可以在店裡用電腦收銀，外出時用手機查庫存，回家用平板看報表，資料即時同步。",
      },
    ],
  },
  {
    id: "features",
    title: "功能相關",
    icon: Package,
    color: "blue",
    items: [
      {
        question: "POS 收銀系統有哪些功能？",
        answer:
          "POS 收銀支援：掃碼槍快速結帳、多種付款方式（現金、刷卡、轉帳）、自動計算找零、找不到商品時彈窗快速建檔、批量匯入直播訂單（Excel/CSV）、以及專為直播場景設計的快速銷售介面。",
      },
      {
        question: "庫存管理如何運作？",
        answer:
          "系統採用「自動化」設計：進貨時庫存自動增加，銷售時自動扣減，並即時計算平均成本。您可以設定庫存警示，當商品低於安全庫存時自動提醒。支援商品編碼、條碼、分類等完整管理功能。",
      },
      {
        question: "帳款管理可以追蹤哪些項目？",
        answer:
          "應收帳款：客戶賒帳記錄、逾期提醒、收款自動分配到多筆欠款。應付帳款：供應商貨款追蹤、付款期限提醒、批量付款與沖銷。一鍵查看哪些客戶欠錢、逾期多久。",
      },
      {
        question: "有什麼特色功能？",
        answer:
          "一番賞管理：設定 A/B 賞、組合價、剩餘賞品追蹤。條碼列印：進貨後直接列印商品標籤。直播訂單：快速錄入與解析觀眾下單。出貨追蹤：管理訂單狀態與物流。AI 助手：用自然語言查詢資料，如「這個月賣最好的商品是什麼」。",
      },
      {
        question: "可以產生哪些報表？",
        answer:
          "系統自動生成：每日銷售報表、毛利分析、庫存週轉率、熱銷商品排行、客戶消費分析、供應商進貨統計等。所有報表都可匯出 Excel，也可透過 AI 助手用問答方式快速取得。",
      },
    ],
  },
  {
    id: "pricing",
    title: "價格與付款",
    icon: CreditCard,
    color: "green",
    items: [
      {
        question: "費用是多少？",
        answer:
          "玩庫 ERP 採月費制，每月 1,500 元（每天只要 50 元）。包含所有功能模組、雲端儲存、系統更新、以及基本客服支援。沒有隱藏費用，不需要額外購買模組。",
      },
      {
        question: "有免費試用嗎？",
        answer:
          "有的！我們提供免費試用期，讓您完整體驗所有功能。試用期間會有專人協助您導入資料和熟悉操作，確保系統符合您的需求後再決定是否訂閱。",
      },
      {
        question: "付款方式有哪些？",
        answer:
          "支援銀行轉帳、信用卡自動扣款。可選擇月繳或年繳，年繳享有優惠折扣。開立電子發票，方便您報帳使用。",
      },
      {
        question: "中途取消訂閱怎麼處理？",
        answer:
          "您可以隨時取消訂閱，當月費用計算至取消日止。取消後您的資料會保留 30 天，期間可隨時恢復訂閱。超過保留期後資料將被刪除，但您可以在取消前匯出所有資料。",
      },
    ],
  },
  {
    id: "setup",
    title: "導入與支援",
    icon: Settings,
    color: "purple",
    items: [
      {
        question: "導入需要多久時間？",
        answer:
          "我們承諾 7 天內完成導入上線。包含：商品資料匯入、初始庫存設定、帳戶建立、人員教育訓練。如果您有現成的 Excel 商品清單，導入時間可以更短。",
      },
      {
        question: "可以匯入舊有資料嗎？",
        answer:
          "可以！支援從 Excel、CSV 批量匯入商品資料、客戶名單、供應商資訊。我們的客服團隊會協助您整理和匯入資料，確保資料完整轉移。",
      },
      {
        question: "有教學資源嗎？",
        answer:
          "我們提供：完整的線上教學影片、圖文操作手冊、常見問題文件、以及定期舉辦的線上教學課程。新用戶還會有專人一對一視訊教學。",
      },
      {
        question: "遇到問題如何取得支援？",
        answer:
          "客服管道：LINE 官方帳號（最快回覆）、電話客服、Email 支援。服務時間：週一至週五 9:00-18:00，週六 9:00-12:00。緊急問題可透過 LINE 留言，我們會盡快回覆。",
      },
    ],
  },
  {
    id: "security",
    title: "資料安全",
    icon: Shield,
    color: "orange",
    items: [
      {
        question: "資料儲存在哪裡？安全嗎？",
        answer:
          "所有資料儲存在台灣的雲端伺服器，採用銀行等級的 SSL 加密傳輸。每日自動備份，異地備援機制確保資料不會遺失。伺服器有 24 小時監控和防火牆保護。",
      },
      {
        question: "員工權限如何管理？",
        answer:
          "支援多帳號管理，可為不同員工設定不同權限。例如：收銀員只能使用 POS、會計可以查看報表、老闆擁有完整權限。所有操作都有紀錄，方便追蹤。",
      },
      {
        question: "網路斷線時還能使用嗎？",
        answer:
          "POS 收銀功能支援離線模式，網路恢復後自動同步資料。建議使用穩定的網路環境以確保即時資料同步。重要操作建議在連線狀態下進行。",
      },
    ],
  },
  {
    id: "other",
    title: "其他問題",
    icon: Users,
    color: "pink",
    items: [
      {
        question: "可以多店使用嗎？",
        answer:
          "可以！支援多分店管理，每間分店獨立記帳，總部可查看所有分店的彙總報表。分店間可設定庫存調撥功能，方便連鎖經營。",
      },
      {
        question: "可以跟其他系統串接嗎？",
        answer:
          "目前支援 Excel 匯入匯出。如有特殊串接需求（如電商平台、會計軟體），歡迎與我們洽談客製化方案。",
      },
      {
        question: "系統會持續更新嗎？",
        answer:
          "是的！我們持續根據用戶回饋優化系統，定期推出新功能。所有更新自動部署，您不需要手動操作。更新內容會透過公告和 Email 通知。",
      },
      {
        question: "如何開始使用？",
        answer:
          "點擊網站上的「申請免費試用」按鈕，填寫基本資料後，我們的業務人員會在 1 個工作天內與您聯繫，安排線上展示和試用帳號。",
      },
    ],
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left group cursor-pointer"
      >
        <span className={`font-medium transition-colors ${isOpen ? "text-cyan-400" : "text-white group-hover:text-cyan-300"}`}>
          {item.question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 ml-4 transition-all duration-300 ${
            isOpen ? "rotate-180 text-cyan-400" : "text-slate-500 group-hover:text-slate-300"
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-400 leading-relaxed pl-1 pr-8">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryId: string, index: number) => {
    const key = `${categoryId}-${index}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentCategory = faqData.find((cat) => cat.id === activeCategory);

  return (
    <div className="min-h-screen pt-[72px]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-6">
              <HelpCircle size={16} />
              <span>常見問題</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              有任何疑問？
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                我們來解答
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              瀏覽常見問題，了解玩庫 ERP 如何幫助您的玩具店更有效率地經營
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Sidebar */}
            <ScrollAnimation className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 lg:p-6">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
                    問題分類
                  </h3>
                  <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-2 px-2 lg:mx-0 lg:px-0">
                    {faqData.map((category) => {
                      const Icon = category.icon;
                      const isActive = activeCategory === category.id;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                            isActive
                              ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                              : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                          }`}
                        >
                          <Icon size={18} className={isActive ? "text-cyan-400" : ""} />
                          <span className="font-medium">{category.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </ScrollAnimation>

            {/* FAQ Items */}
            <div className="flex-1">
              <ScrollAnimation>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                  {currentCategory && (
                    <>
                      <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                          <currentCategory.icon size={24} className="text-cyan-400" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{currentCategory.title}</h2>
                          <p className="text-slate-400 text-sm">{currentCategory.items.length} 個問題</p>
                        </div>
                      </div>
                      <div>
                        {currentCategory.items.map((item, index) => (
                          <FAQAccordion
                            key={index}
                            item={item}
                            isOpen={openItems[`${currentCategory.id}-${index}`] || false}
                            onToggle={() => toggleItem(currentCategory.id, index)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Style */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20"></div>
        </div>

        <ScrollAnimation>
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            {/* Gradient Border Container */}
            <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-[0_0_60px_rgba(34,211,238,0.15)]">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-600/30 blur-xl rounded-[2rem] opacity-50"></div>

              {/* Inner Content */}
              <div className="relative rounded-[1.9rem] bg-black/80 backdrop-blur-xl overflow-hidden">
                {/* Top Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

                <div className="relative px-6 py-10 md:px-12 md:py-14">
                  {/* Badge */}
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-cyan-300 text-sm font-medium">專人即時回覆</span>
                    </div>
                  </div>

                  {/* Heading */}
                  <h2 className="text-2xl md:text-4xl font-black text-center mb-3">
                    <span className="text-white">還有其他問題？</span>
                  </h2>
                  <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold text-center mb-6">
                    免費諮詢，專人為您解答
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
                    {[
                      { icon: Phone, text: "LINE 即時客服" },
                      { icon: Users, text: "一對一視訊教學" },
                      { icon: Zap, text: "1 個工作天內回覆" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300">
                        <item.icon size={16} className="text-cyan-400" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/inquiry"
                      className="group relative px-10 py-4 rounded-full overflow-hidden bg-white text-black font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Zap size={20} className="text-blue-600" />
                        申請免費試用
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>

                    <Link
                      href="/contact"
                      className="group px-10 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-lg hover:bg-white/10 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Phone size={18} className="group-hover:text-cyan-400 transition-colors" />
                      聯繫業務
                    </Link>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-slate-500 text-sm">
                      已有 <span className="text-cyan-400 font-bold">50+</span> 間玩具店正在使用玩庫 ERP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, value: "50+", label: "店家使用中" },
              { icon: Zap, value: "7 天", label: "快速上線" },
              { icon: BarChart3, value: "80%", label: "錯帳率降低" },
              { icon: Shield, value: "99.9%", label: "系統穩定度" },
            ].map((stat, idx) => (
              <ScrollAnimation key={idx} delay={idx * 100}>
                <div className="text-center">
                  <stat.icon size={24} className="text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
