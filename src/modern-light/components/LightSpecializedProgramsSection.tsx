import React, { useState } from 'react';
import { PROGRAM_CATEGORIES, PROGRAMS, ProgramItem, CONSULTING_FORM_URL } from '../../data/landingData.ts';
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface LightSpecializedProgramsSectionProps {
  onSelectProgram?: (program: ProgramItem) => void;
}

export const LightSpecializedProgramsSection: React.FC<LightSpecializedProgramsSectionProps> = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const filteredPrograms = activeCategoryId === 'all'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.categoryId === activeCategoryId);

  return (
    <section id="private-programs-light" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs sm:text-sm font-semibold text-amber-800 mb-3 shadow-xs">
              <span>برنامه‌های خصوصی تخصصی</span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span>۱۴ تخصص کلیدی بازار کار</span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span>منتورشیپ ۱ به ۱</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              برنامه‌های خصوصی و عمیق گل ارن
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              با انتخاب هر برنامه، جزییات، سیلابس و معرفی اختصاصی آن را در صفحه رسمی مشاهده فرمایید.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={CONSULTING_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-5 py-3 rounded-xl transition-all shadow-md shadow-amber-500/15"
            >
              <span>درخواست مشاوره انتخاب برنامه</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {PROGRAM_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* 14 Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="relative rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-lg transition-all duration-200 group shadow-xs"
            >
              <div>
                {/* Header row with Code & New Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-amber-700 border border-slate-200">
                    {program.code}
                  </span>
                  
                  {program.isNew && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-md">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      <span>جدید*</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-1.5 leading-snug">
                  {program.title}
                </h3>

                <span className="text-xs text-slate-500 font-mono block mb-3">
                  {program.englishTitle}
                </span>

                {/* Category label */}
                <span className="text-[11px] text-slate-500 block mb-3">
                  دسته‌بندی: <strong className="text-slate-700">{program.categoryName}</strong>
                </span>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                  {program.description}
                </p>
              </div>

              {/* Action Button: Opens direct link in new tab */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-amber-400 hover:text-slate-950 border border-slate-200 hover:border-amber-400 transition-all active:scale-95 group/link"
                >
                  <span>مشاهده جزئیات برنامه</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2.5 text-right">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
            <span>نیاز به راهنمایی در انتخاب بین برنامه‌ها دارید یا چند مهارت را همزمان می‌خواهید؟</span>
          </div>

          <a
            href={CONSULTING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-amber-700 hover:text-amber-800 hover:underline shrink-0"
          >
            <span>ورود به فرم مشاوره رایگان</span>
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
