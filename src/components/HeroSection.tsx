import React from 'react';
import { ExternalLink, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CONSULTING_FORM_URL } from '../data/landingData.ts';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-900">
      {/* Background radial gradient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-amber-500/5 blur-[140px] rounded-full" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center flex flex-col items-center">
        
        {/* Topic metadata */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-6">
          <span>همراهی و منتورینگ اختصاصی شغلی</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>بازار کار فناوری ایران</span>
        </div>

        {/* Main H1 Headline */}
        <h1 
          style={{ textWrap: 'balance' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.3] sm:leading-[1.25] tracking-tight mb-6"
        >
          برای ورود یا پیشرفت در بازار کار، فقط یادگیری کافی نیست؛ <span className="text-amber-400 underline decoration-amber-400/40 decoration-wavy underline-offset-8">مسیر لازم داری.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl font-normal">
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
            href="#two-pillars"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all whitespace-nowrap cursor-pointer"
          >
            <span>مشاهده دو برنامه اصلی</span>
            <Compass className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Micro-Trust Note */}
        <div className="flex items-center justify-center gap-2.5 text-xs text-slate-400 max-w-xl bg-slate-900/60 border border-slate-800/80 rounded-xl px-4 py-3 mb-10">
          <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            ابتدا تناسب مسیر بررسی می‌شود؛ جزئیات همکاری، مدت و هزینه پیش از شروع روشن می‌شوند.
          </span>
        </div>

        {/* Core Realities */}
        <div className="pt-8 border-t border-slate-900/80 w-full max-w-2xl flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>بدون دوره‌ها و ویدیوهای عمومی ضبط‌شده</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>خروجی پروژه صنعتی قابل دفاع</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>منتورینگ فعال بازار کار ایران</span>
          </div>
        </div>

      </div>
    </section>
  );
};
