import React from 'react';
import { ExternalLink, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CONSULTING_FORM_URL } from '../../data/landingData.ts';

export const LightHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80">
      {/* Subtle modern warm ambient background blur */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/10 blur-[120px] rounded-full" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center flex flex-col items-center">
        
        {/* Topic metadata */}
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs sm:text-sm font-semibold text-amber-800 mb-6 shadow-xs">
          <span>همراهی و منتورینگ اختصاصی شغلی</span>
          <span aria-hidden="true" className="text-amber-400">·</span>
          <span>بازار کار فناوری ایران</span>
        </div>

        {/* Main H1 Headline */}
        <h1 
          style={{ textWrap: 'balance' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.3] sm:leading-[1.25] tracking-tight mb-6"
        >
          برای ورود یا پیشرفت در بازار کار، فقط یادگیری کافی نیست؛ <span className="text-amber-600 underline decoration-amber-400/50 decoration-wavy underline-offset-8">مسیر لازم داری.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl font-normal">
          گل ارن به تو کمک می‌کند با توجه به هدف، سطح و شرایطت، یا یک برنامه خصوصی در تخصص موردنظرت انتخاب کنی، یا از طریق یک مسیر جامع برای آمادگی شغلی و اقدام در بازار کار ایران پیش بروی.
        </p>

        {/* Action Buttons: Direct link to consulting-form */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-6 w-full sm:w-auto">
          <a
            href={CONSULTING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap cursor-pointer group"
          >
            <span>کمک کن مسیر مناسبم را پیدا کنم</span>
            <ExternalLink className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#two-pillars-light"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>مشاهده دو برنامه اصلی</span>
            <Compass className="w-4 h-4 text-slate-500" />
          </a>
        </div>

        {/* Micro-Trust Note */}
        <div className="flex items-center justify-center gap-2.5 text-xs text-slate-600 max-w-xl bg-white border border-slate-200/90 rounded-xl px-4 py-3 mb-10 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            ابتدا تناسب مسیر بررسی می‌شود؛ جزئیات همکاری، مدت و هزینه پیش از شروع روشن می‌شوند.
          </span>
        </div>

        {/* Core Realities */}
        <div className="pt-8 border-t border-slate-200 w-full max-w-2xl flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>بدون دوره‌ها و ویدیوهای عمومی ضبط‌شده</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>خروجی پروژه صنعتی قابل دفاع</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>منتورینگ فعال بازار کار ایران</span>
          </div>
        </div>

      </div>
    </section>
  );
};
