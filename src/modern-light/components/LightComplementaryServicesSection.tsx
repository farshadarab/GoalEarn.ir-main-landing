import React from 'react';
import { MODULAR_SERVICES, ModularService, CONSULTING_FORM_URL } from '../../data/landingData.ts';
import { Clock, ExternalLink } from 'lucide-react';

interface LightComplementaryServicesSectionProps {
  onSelectService: (service: ModularService) => void;
}

export const LightComplementaryServicesSection: React.FC<LightComplementaryServicesSectionProps> = ({
  onSelectService,
}) => {
  return (
    <section id="complementary-services-light" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs sm:text-sm font-semibold text-amber-800 mb-3 shadow-xs">
            <span>لایه خدمات ماژولار</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>اقدام متمرکز و سریع</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            برای یک مرحله مشخص، همراهی متمرکز می‌خواهی؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            اگر نیازی به کل مسیر جامع یا برنامه‌های بلندمدت ندارید و فقط روی یک گره کاری (مثل شبیه‌سازی مصاحبه، بازخوانی رزومه یا شفاف‌سازی سابقه) متوقف شده‌اید، خدمات تکمیلی برای شماست.
          </p>
        </div>

        {/* 4 Modular Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MODULAR_SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all shadow-xs group"
            >
              <div>
                <span className="text-[11px] font-bold text-amber-700 block mb-1">
                  {serv.tagline}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                  {serv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {serv.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs mb-6">
                  <div>
                    <span className="text-slate-500 block mb-1 font-medium">خروجی و دستاورد تحویلی:</span>
                    <span className="text-slate-800 font-semibold block bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      {serv.deliverable}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>طول خدمت: {serv.estimatedSessions}</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={CONSULTING_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-amber-400 hover:text-slate-950 border border-slate-200 hover:border-amber-400 transition-all active:scale-95"
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
