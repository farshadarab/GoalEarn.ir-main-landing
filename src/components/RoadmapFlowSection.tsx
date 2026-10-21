import React, { useState } from 'react';
import { ROADMAP_STAGES, RoadmapStage, CONSULTING_FORM_URL } from '../data/landingData.ts';
import { CheckCircle2, UserCheck, ArrowLeft, Layers, Compass, ExternalLink } from 'lucide-react';

interface RoadmapFlowSectionProps {
  onOpenAssessment: () => void;
}

export const RoadmapFlowSection: React.FC<RoadmapFlowSectionProps> = ({ onOpenAssessment }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const selectedStage = ROADMAP_STAGES.find((s) => s.step === activeStep) || ROADMAP_STAGES[0];

  return (
    <section id="comprehensive-roadmap" className="py-20 lg:py-28 bg-slate-900/50 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-3">
            <span>برنامه جامع بازار کار ایران</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>مسیر گام‌به‌گام ۶ مرحله‌ای</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            از نقطه صفر تا امضای قرارداد شغلی: مسیر ۶ ایستگاهی
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            یک مسیر مهندسی‌شده و یکپارچه؛ جایی که هر مرحله پیش‌نیاز مرحله بعدی است و خروجی نهایی، یک متخصص آماده و مسلط به فرآیند مصاحبه در شرکت‌های ایرانی است.
          </p>
        </div>

        {/* Stepper Navigation / Horizontal Timeline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {ROADMAP_STAGES.map((stage) => {
            const isSelected = stage.step === activeStep;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(stage.step)}
                className={`p-4 rounded-xl border text-right transition-all cursor-pointer flex flex-col justify-between h-28 ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-slate-900' : 'text-amber-400'}`}>
                    ایستگاه {stage.stepPersian}
                  </span>
                  <span className={`text-[10px] ${isSelected ? 'text-slate-800' : 'text-slate-400'}`}>
                    مرحله {stage.step}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold leading-tight ${isSelected ? 'text-slate-950' : 'text-white'}`}>
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel for the Selected Stage */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stage Core Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400 text-lg">
                  {selectedStage.stepPersian}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    ایستگاه {selectedStage.stepPersian}: {selectedStage.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    بخشی از مسیر برنامه جامع بازار کار ایران
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  هدف اصلی این مرحله:
                </h4>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                  {selectedStage.objective}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  خروجی‌ها و دستاوردهای تحویلی این ایستگاه:
                </h4>
                <div className="space-y-2.5">
                  {selectedStage.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mentor Touchpoint Card */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-900/80 border border-slate-800 rounded-xl p-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3">
                  <UserCheck className="w-4 h-4" />
                  <span>نقش منتور در این ایستگاه</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  همراهی و کنترل کیفیت خروجی‌ها
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {selectedStage.mentorTouchpoint}
                </p>

                <div className="text-xs text-slate-400 space-y-2 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <span>روش ارزیابی:</span>
                    <span className="text-slate-200 font-medium">جلسه تعاملی و بررسی مستندات</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>پیش‌نیاز عبور به ایستگاه بعد:</span>
                    <span className="text-emerald-400 font-medium">تایید رسمی منتور مسیر</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800">
                <a
                  href={CONSULTING_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all active:scale-95 shadow-md shadow-amber-500/20"
                >
                  <span>شروع ارزیابی برای ورود به این مسیر</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footnote as strictly mandated by brief */}
        <div className="mt-8 text-center text-xs text-slate-400">
          <p className="inline-block bg-slate-950/80 px-4 py-2 rounded-lg border border-slate-800/80">
            «ترکیب مراحل در پیشنهاد اختصاصی هر فرد مشخص خواهد شد.»
          </p>
        </div>

      </div>
    </section>
  );
};
