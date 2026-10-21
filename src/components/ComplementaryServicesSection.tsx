import React from 'react';
import { MODULAR_SERVICES, ModularService, CONSULTING_FORM_URL } from '../data/landingData.ts';
import { ArrowLeft, Clock, CheckCircle, ExternalLink } from 'lucide-react';

interface ComplementaryServicesSectionProps {
  onSelectService: (service: ModularService) => void;
}

export const ComplementaryServicesSection: React.FC<ComplementaryServicesSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section id="complementary-services" className="py-20 lg:py-28 bg-slate-900/30 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-3">
            <span>لایه خدمات ماژولار</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>اقدام متمرکز و سریع</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            برای یک مرحله مشخص، همراهی متمرکز می‌خواهی؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            اگر نیازی به کل مسیر جامع یا برنامه‌های بلندمدت ندارید و فقط روی یک گره کاری (مثل شبیه‌سازی مصاحبه، بازخوانی رزومه یا شفاف‌سازی سابقه) متوقف شده‌اید، خدمات تکمیلی برای شماست.
          </p>
        </div>

        {/* 4 Modular Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MODULAR_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                <span className="text-[11px] font-semibold text-amber-400 block mb-1">
                  {serv.tagline}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                  {serv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {serv.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs mb-6">
                  <div>
                    <span className="text-slate-400 block mb-1">خروجی و دستاورد تحویلی:</span>
                    <span className="text-slate-200 font-medium block bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
                      {serv.deliverable}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>طول خدمت: {serv.estimatedSessions}</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={CONSULTING_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-100 bg-slate-800 hover:bg-amber-400 hover:text-slate-950 border border-slate-700 hover:border-amber-400 transition-all active:scale-95"
                >
                  <span>{serv.ctaText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
