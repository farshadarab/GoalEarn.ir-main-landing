import React, { useState } from 'react';
import { FAQS } from '../data/landingData.ts';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Keep first open by default for immediate context
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq-section" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>پاسخ به ابهامات متداول</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>شفافیت بی‌تعارف</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            پرسش‌های متداول درباره مدل همکاری گل ارن
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            اگر سوالی دارید که در این بخش به آن پاسخ داده نشده است، می‌توانید در فرم ارزیابی انتهای صفحه آن را مطرح فرمایید.
          </p>
        </div>

        {/* Collapsible Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-right p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/90 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-amber-400 text-slate-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
