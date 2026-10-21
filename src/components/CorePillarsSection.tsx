import React from 'react';
import { ArrowLeft, Target, Briefcase, Check, Users, Sparkles } from 'lucide-react';

interface CorePillarsSectionProps {
  onSelectPrivate: () => void;
  onSelectComprehensive: () => void;
}

export const CorePillarsSection: React.FC<CorePillarsSectionProps> = ({
  onSelectPrivate,
  onSelectComprehensive,
}) => {
  return (
    <section id="two-pillars" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-3">
            <span>دو پیشنهاد اصلی گل ارن</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>انتخاب مسیر با شفافیت کامل</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            دو مسیر بنیادین متناسب با نقطه آغاز و هدف شما
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            گل ارن دوره‌های عمومی آماده به شما نمی‌فروشد. تمرکز ما منحصراً بر دو شیوه همراهی عمیق است: یا تعمیق یک مهارت خاص، یا آمادگی کامل برای استخدام در بازار ایران.
          </p>
        </div>

        {/* Side-by-side comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card A: برنامه‌های خصوصی تخصصی */}
          <div className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-slate-400 border border-slate-800 bg-slate-950/60 px-3 py-1 rounded-md">
                  مسیر انفرادی و عمیق
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                برنامه‌های خصوصی تخصصی
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                تمرکز بر برنامه شخصی، تمرین/پروژه و بازخورد تخصصی متناسب با هدف و سطح فعلی شما.
              </p>

              <div className="space-y-3.5 mb-8 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>طراحی سیلابس کاملاً منطبق بر باگ‌ها و خلاءهای فنی خود شما</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>تولید یک پروژه پرچالش در سطح پروداکشن به همراه کدریویو هفتگی</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>جلسات تک‌به‌تک با مهندس ارشد شاغل در همان تخصص فنی</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>مناسب افراد شاغل یا مسلط به مبانی که خواهان جهش تخصصی هستند</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onSelectPrivate}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 transition-all active:scale-[0.99] group/btn"
              >
                <span>بررسی برنامه‌های تخصصی (۱۴ تخصص)</span>
                <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-3">
                ظرفیت ماهانه پذیرش برای منتورینگ خصوصی محدود است
              </p>
            </div>
          </div>

          {/* Card B: برنامه جامع ورود به بازار کار ایران */}
          <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/80 border-2 border-amber-500/40 p-8 sm:p-10 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 shadow-xl shadow-amber-500/5 group">
            {/* Top Badge */}
            <div className="absolute -top-3.5 right-8 bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>جامع‌ترین مسیر ورود به صنعت</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-amber-300/90 border border-amber-500/20 bg-amber-500/10 px-3 py-1 rounded-md">
                  مسیر ۶ مرحله‌ای پایان‌به‌پایان
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                برنامه جامع ورود به بازار کار ایران
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-normal">
                همراهی چندمرحله‌ای از تعیین هدف، تقویت مهارت و ساخت شواهد توانمندی تا آمادگی مصاحبه و اقدام برای استخدام.
              </p>

              <div className="space-y-3.5 mb-8 pt-4 border-t border-slate-800/80">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>زنجیره کامل: ارزیابی ➔ مسیر ➔ مهارت ➔ پروژه ➔ رزومه ➔ مصاحبه</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>تولید سند اثبات توانمندی مورد تایید کارفرمایان فناوری در ایران</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>شبیه‌سازی مصاحبه‌های رفتاری و فنی با تک‌لیدها پیش از مصاحبه واقعی</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>مناسب دانشجویان، تغییرمسیردهندگان و افرادی که در کاریابی متوقف شده‌اند</span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onSelectComprehensive}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all active:scale-[0.99] shadow-md shadow-amber-500/20 group/btn"
              >
                <span>بررسی برنامه جامع (مشاهده ۶ مرحله)</span>
                <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-3">
                شروع با ارزیابی مهارتی و تحلیل رایگان وضعیت فعلی
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
