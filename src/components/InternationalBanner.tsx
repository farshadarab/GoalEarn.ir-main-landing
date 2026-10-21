import React from 'react';
import { Globe2, ArrowLeft, ExternalLink } from 'lucide-react';

export const InternationalBanner: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-900 border border-blue-900/40 p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div 
            aria-hidden="true" 
            className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" 
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl text-right">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-3">
                <Globe2 className="w-4 h-4" />
                <span>GoalEarn International · مسیر جهانی</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                هدفت فراتر از بازار کار ایران است؟
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                برای بررسی مسیرهای جاب‌آفر بین‌المللی، مهاجرت کاری، ورود به بازارهای جهانی یا هاب ارمنستان، به GoalEarn International بروید.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://goalearnint.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap"
              >
                <span>مشاهده مسیرهای بین‌المللی</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
