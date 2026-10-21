import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES, MENTORS, TESTIMONIALS, Testimonial } from '../../data/landingData.ts';
import { 
  FileCode2, 
  UserCheck, 
  Quote, 
  CheckCircle, 
  ShieldCheck, 
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Star,
  Play,
  Pause,
  Award,
  TrendingUp,
  Briefcase
} from 'lucide-react';

interface LightEvidenceSectionProps {
  onOpenAssessment: () => void;
}

export const LightEvidenceSection: React.FC<LightEvidenceSectionProps> = () => {
  const [activeTab, setActiveTab] = useState<'cases' | 'mentors' | 'mentees'>('mentees');
  
  // Carousel State
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const tracks = [
    { id: 'all', label: 'همه تخصص‌ها' },
    { id: 'مهندسی نرم‌افزار و وب', label: 'مهندسی وب و نرم‌افزار' },
    { id: 'داده و هوش مصنوعی', label: 'داده و هوش مصنوعی' },
    { id: 'طراحی و محصول', label: 'طراحی و محصول' },
    { id: 'زیرساخت و امنیت', label: 'زیرساخت و امنیت' }
  ];

  const filteredTestimonials = selectedTrack === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.track === selectedTrack);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedTrack]);

  useEffect(() => {
    if (isPlaying && filteredTestimonials.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % filteredTestimonials.length);
      }, 6500);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, filteredTestimonials.length, currentIndex]);

  const handleNext = () => {
    if (filteredTestimonials.length === 0) return;
    setCurrentIndex(prev => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    if (filteredTestimonials.length === 0) return;
    setCurrentIndex(prev => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentTestimonial: Testimonial = filteredTestimonials[currentIndex] || TESTIMONIALS[0];

  return (
    <section id="evidence-section-light" className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle modern warm ambient blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs sm:text-sm font-semibold text-amber-800 mb-4 shadow-xs">
            <Award className="w-4 h-4 text-amber-600" />
            <span>شواهد مستند و واقعی بازار کار</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>بدون آمار ساختگی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            اثبات توانمندی در عمل: خروجی پروژه‌ها و کارآموزان
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            در گل ارن به جای وعده‌های مبالغه‌آمیز استخدامی، روی شواهد ملموس تمرکز می‌کنیم: پروژه‌های مهندسی‌شده در گیت‌هاب، منتورهای ارشد صنعت و تغییر موقعیت واقعی افراد.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('mentees')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'mentees'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Quote className="w-4 h-4" />
            کاروسل بازخورد افراد (تستیمونیال)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cases')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'cases'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <FileCode2 className="w-4 h-4" />
            کیس‌استادی پروژه‌های اجراشده
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('mentors')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'mentors'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            پروفایل منتورهای فعال
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB: MENTEE TESTIMONIAL CAROUSEL (LIGHT MODE)             */}
        {/* ========================================================= */}
        {activeTab === 'mentees' && (
          <div className="space-y-8">
            
            {/* Filter Chips & Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-2xl shadow-xs">
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-slate-500 font-semibold ml-1">تخصص:</span>
                {tracks.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTrack(t.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      selectedTrack === t.id
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Navigation & Autoplay */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'توقف پخش خودکار' : 'فعال‌سازی پخش خودکار'}
                  className="p-2 rounded-lg bg-white text-slate-700 hover:text-amber-600 hover:bg-slate-50 transition-colors border border-slate-200 cursor-pointer shadow-xs"
                  title={isPlaying ? 'توقف پخش خودکار' : 'فعال‌سازی پخش خودکار'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <div className="text-xs font-mono font-bold text-slate-600 px-2.5 py-1 rounded bg-white border border-slate-200 shadow-xs">
                  {currentIndex + 1} / {filteredTestimonials.length}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="نظر قبلی"
                    className="p-2 rounded-lg bg-white hover:bg-slate-50 text-slate-800 transition-colors border border-slate-200 cursor-pointer shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="نظر بعدی"
                    className="p-2 rounded-lg bg-white hover:bg-slate-50 text-slate-800 transition-colors border border-slate-200 cursor-pointer shadow-xs"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Active Testimonial Card */}
            {currentTestimonial && (
              <div className="relative rounded-3xl bg-white border-2 border-amber-300 p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/60 transition-all">
                
                {/* Decorative subtle ambient tint */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-bl-full pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (Persian Right): Author Identity */}
                  <div className="lg:col-span-5 space-y-5 border-b lg:border-b-0 lg:border-l border-slate-200 pb-6 lg:pb-0 lg:pl-8">
                    
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 text-slate-950 font-black text-xl sm:text-2xl flex items-center justify-center shadow-md shadow-amber-500/20 border-2 border-amber-300 shrink-0">
                        {currentTestimonial.avatarInitials || currentTestimonial.author.slice(0, 2)}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                          ))}
                          <span className="text-xs font-mono font-bold text-amber-700 mr-1.5">۵.۰</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                          {currentTestimonial.author}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-amber-700 leading-snug">
                          {currentTestimonial.currentRole}
                        </p>
                      </div>
                    </div>

                    {/* Program & Duration Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                        {currentTestimonial.programType}
                      </span>
                      {currentTestimonial.duration && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                          {currentTestimonial.duration}
                        </span>
                      )}
                      {currentTestimonial.track && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200">
                          {currentTestimonial.track}
                        </span>
                      )}
                    </div>

                    {/* Journey Contrast Box */}
                    <div className="space-y-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                      <div>
                        <span className="text-slate-500 block font-semibold mb-0.5">وضعیت و دغدغه اولیه:</span>
                        <p className="text-slate-700 leading-relaxed">
                          {currentTestimonial.background}
                        </p>
                      </div>
                      {currentTestimonial.outcome && (
                        <div className="pt-2 border-t border-slate-200">
                          <span className="text-emerald-700 block font-bold mb-0.5 flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                            دستاورد محقق‌شده:
                          </span>
                          <p className="text-emerald-800 font-semibold">
                            {currentTestimonial.outcome}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Technical Skills */}
                    {currentTestimonial.skills && currentTestimonial.skills.length > 0 && (
                      <div>
                        <span className="text-[11px] text-slate-500 block mb-1.5 font-semibold">
                          مهارت‌های عملی تقویت‌شده با منتور:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentTestimonial.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right Column: Quote */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Quote className="w-10 h-10 text-amber-500/50" />
                        <span className="text-[11px] font-mono font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          بازخورد تاییدشده
                        </span>
                      </div>

                      <blockquote className="text-sm sm:text-base lg:text-lg text-slate-800 font-normal leading-relaxed sm:leading-loose">
                        «{currentTestimonial.quote}»
                      </blockquote>
                    </div>

                    {/* In-Card CTA */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Briefcase className="w-4 h-4 text-amber-600" />
                        <span>می‌خواهی چنین پیشرفتی را در تخصص خودت رقم بزنی؟</span>
                      </div>
                      <a
                        href="https://goalearn.ir/consulting-form/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/10 cursor-pointer"
                      >
                        <span>بررسی شرایط در فرم مشاوره</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>

                </div>

                {/* Progress bar */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 rounded-b-3xl overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 animate-pulse w-full" />
                  </div>
                )}
              </div>
            )}

            {/* Carousel Thumbnails */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {filteredTestimonials.map((t, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setIsPlaying(false);
                    }}
                    className={`p-3 rounded-xl text-right transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-amber-50/70 border-amber-400 shadow-sm ring-1 ring-amber-400'
                        : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-amber-500' : 'bg-slate-300'}`} />
                      <span className={`text-xs font-bold truncate ${isActive ? 'text-amber-800' : 'text-slate-800'}`}>
                        {t.author}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">
                      {t.currentRole}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Quick Evidence Trust Metric Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-amber-600 font-mono mb-0.5">+۱۴۰</div>
                <div className="text-xs text-slate-700 font-medium">همراهی منتورشیپ فردی</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-amber-600 font-mono mb-0.5">۹۶٪</div>
                <div className="text-xs text-slate-700 font-medium">رضایت از کیفیت کدریویوها</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-amber-600 font-mono mb-0.5">۴۵ روز</div>
                <div className="text-xs text-slate-700 font-medium">میانگین زمان جذب پس از دفاع پروژه</div>
              </div>
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-amber-600 font-mono mb-0.5">۱۰۰٪</div>
                <div className="text-xs text-slate-700 font-medium">پروژه‌های قابل دفاع روی گیت‌هاب</div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 1: CASE STUDIES (LIGHT MODE)                          */}
        {/* ========================================================= */}
        {activeTab === 'cases' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-amber-700 font-bold">{cs.domain}</span>
                    <span className="text-slate-500 font-mono text-[11px]">کیس واقعی</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {cs.title}
                  </h3>

                  <div className="text-xs text-slate-600 mb-4 pb-3 border-b border-slate-100">
                    <span className="text-slate-800 font-medium">موقعیت فرد: </span>
                    {cs.menteeRole}
                  </div>

                  <div className="space-y-3 mb-6 text-xs text-slate-700">
                    <div>
                      <span className="text-slate-500 block font-medium mb-1">مسئله حل‌شده:</span>
                      <p className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 leading-relaxed">
                        {cs.problemSolved}
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-500 block font-medium mb-1">نقش و خروجی کد فرد:</span>
                      <p className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 leading-relaxed">
                        {cs.concreteContribution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cs.stack.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-emerald-700 font-semibold">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>{cs.verifiedOutcome}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: MENTORS (LIGHT MODE)                               */}
        {/* ========================================================= */}
        {activeTab === 'mentors' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {MENTORS.map((m) => (
              <div
                key={m.id}
                className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all shadow-xs"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center font-bold text-amber-700 text-lg mb-4">
                    {m.name.charAt(0)}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {m.name}
                  </h3>

                  <div className="text-xs text-amber-700 font-semibold mb-2">
                    {m.title}
                  </div>

                  <p className="text-xs text-slate-600 mb-4">
                    {m.companyContext}
                  </p>

                  <div className="pt-3 border-t border-slate-100 text-xs text-slate-700">
                    <span className="text-slate-500 block mb-1">حوزه تخصصی و تمرکز:</span>
                    <span className="font-medium text-slate-800">{m.focusArea}</span>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>سابقه صنعتی:</span>
                  <span className="text-slate-900 font-mono font-bold">+{m.experienceYears} سال</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust verification note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-600 text-center shadow-xs">
          <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
          <span>
            سیاست گل ارن: هیچ داستان ساختگی، رضایت‌نامه تبلیغاتی یا آمار تضمین صددرصدی در این وب‌سایت درج نمی‌شود.
          </span>
        </div>

      </div>
    </section>
  );
};
