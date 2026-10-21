import React, { useState } from 'react';
import { PROGRAM_CATEGORIES, PROGRAMS, ProgramItem, CONSULTING_FORM_URL } from '../data/landingData.ts';
import { ArrowLeft, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

interface SpecializedProgramsSectionProps {
  onSelectProgram?: (program: ProgramItem) => void;
}

export const SpecializedProgramsSection: React.FC<SpecializedProgramsSectionProps> = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const filteredPrograms = activeCategoryId === 'all'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.categoryId === activeCategoryId);

  return (
    <section id="private-programs" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-right">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-3">
              <span>برنامه‌های خصوصی تخصصی</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>۱۴ تخصص کلیدی بازار کار</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>منتورشیپ ۱ به ۱</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
              برنامه‌های خصوصی و عمیق گل ارن
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              با انتخاب هر برنامه، جزییات، سیلابس و معرفی اختصاصی آن را در صفحه رسمی مشاهده فرمایید.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={CONSULTING_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 px-5 py-3 rounded-xl transition-all shadow-md shadow-amber-500/15"
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
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
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
              className="relative rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-400/50 hover:bg-slate-900/90 transition-all duration-200 group"
            >
              <div>
                {/* Header row with Code & New Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-800 text-amber-400 border border-slate-700">
                    {program.code}
                  </span>
                  
                  {program.isNew && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-700/60 px-2 py-0.5 rounded-md animate-pulse">
                      <Sparkles className="w-3 h-3" />
                      <span>جدید*</span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-1.5 leading-snug">
                  {program.title}
                </h3>

                <span className="text-xs text-slate-400 font-mono block mb-3">
                  {program.englishTitle}
                </span>

                {/* Category label */}
                <span className="text-[11px] text-slate-400 block mb-3">
                  دسته‌بندی: <strong className="text-slate-300">{program.categoryName}</strong>
                </span>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6">
                  {program.description}
                </p>
              </div>

              {/* Action Button: Opens direct link in new tab */}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href={program.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-100 bg-slate-800 hover:bg-amber-400 hover:text-slate-950 border border-slate-700 hover:border-amber-400 transition-all active:scale-95 group/link"
                >
                  <span>مشاهده جزئیات برنامه</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2.5 text-right">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <span>نیاز به راهنمایی در انتخاب بین برنامه‌ها دارید یا چند مهارت را همزمان می‌خواهید؟</span>
          </div>

          <a
            href={CONSULTING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 hover:underline shrink-0"
          >
            <span>ورود به فرم مشاوره رایگان</span>
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
