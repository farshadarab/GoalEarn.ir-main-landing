import React from 'react';
import { ExternalLink, Sparkles, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { CONSULTING_FORM_URL } from '../../data/landingData.ts';

export const LightFinalCtaSection: React.FC = () => {
  return (
    <section id="assessment-cta-light" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="rounded-3xl bg-gradient-to-b from-amber-50/50 via-white to-white border-2 border-amber-300 p-8 sm:p-14 text-center relative overflow-hidden shadow-xl shadow-amber-500/5">
          
          {/* Subtle background glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" 
          />

          <div className="relative z-10 flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-800 bg-amber-100/70 border border-amber-300 px-4 py-1.5 rounded-full mb-6 shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>ارزیابی اولیه و تعیین نقشه راه شغلی</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 max-w-2xl">
              هنوز مطمئن نیستی کدام مسیر برایت مناسب است؟
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl font-normal">
              هدف و شرایطت را کوتاه توضیح بده. پس از بررسی اولیه توسط سرپرست فنی مسیر، گام مناسب بعدی و برنامه شخصی به شما پیشنهاد می‌شود.
            </p>

            {/* Main Action Button */}
            <a
              href={CONSULTING_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-xl shadow-amber-500/25 cursor-pointer mb-6 group"
            >
              <MessageSquare className="w-5 h-5" />
              <span>دریافت مشاوره و ارزیابی مسیر</span>
              <ExternalLink className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </a>

            {/* Micro-trust Assurance */}
            <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>ارزیابی و مشاوره اولیه کاملاً رایگان، شفاف و بدون تعهد مالی است.</span>
            </div>

            {/* Quick Benefits row */}
            <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600 w-full max-w-lg font-medium">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>بررسی توسط لید فنی</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>پاسخگویی ظرف ۲۴ ساعت</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>حفظ محرمانگی سوابق</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
