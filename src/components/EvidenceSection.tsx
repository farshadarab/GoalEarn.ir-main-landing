import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES, MENTORS, TESTIMONIALS, Testimonial } from '../data/landingData.ts';
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
  Briefcase,
  Layers
} from 'lucide-react';

interface EvidenceSectionProps {
  onOpenAssessment: () => void;
}

export const EvidenceSection: React.FC<EvidenceSectionProps> = ({ onOpenAssessment }) => {
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

  // Keep index within bounds when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedTrack]);

  // Autoplay timer
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
    <section id="evidence-section" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-900 relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm font-medium text-amber-400 mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span>شواهد مستند و واقعی بازار کار</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>بدون آمار ساختگی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            اثبات توانمندی در عمل: خروجی پروژه‌ها و کارآموزان
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
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
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
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
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
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
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            پروفایل منتورهای فعال
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB: MENTEE TESTIMONIAL CAROUSEL (HIGHLIGHTED)             */}
        {/* ========================================================= */}
        {activeTab === 'mentees' && (
          <div className="space-y-8">
            
            {/* Filter Chips & Play/Pause Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 border border-slate-800/80 p-3 sm:p-4 rounded-2xl">
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-slate-400 font-medium ml-1">تخصص:</span>
                {tracks.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTrack(t.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      selectedTrack === t.id
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Navigation & Autoplay status */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'توقف پخش خودکار' : 'فعال‌سازی پخش خودکار'}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-400 hover:bg-slate-700/80 transition-colors border border-slate-700/60 cursor-pointer"
                  title={isPlaying ? 'توقف پخش خودکار' : 'فعال‌سازی پخش خودکار'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <div className="text-xs font-mono text-slate-400 px-2 py-1 rounded bg-slate-950 border border-slate-800">
                  {currentIndex + 1} / {filteredTestimonials.length}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="نظر قبلی"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700/80 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="نظر بعدی"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700/80 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Active Testimonial Card */}
            {currentTestimonial && (
              <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border-2 border-amber-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/60 transition-all">
                
                {/* Decorative amber glow in top right */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (Persian Right): Author Identity & Verified Outcome */}
                  <div className="lg:col-span-5 space-y-5 border-b lg:border-b-0 lg:border-l border-slate-800 pb-6 lg:pb-0 lg:pl-8">
                    
                    <div className="flex items-center gap-4">
                      {/* Mentee Avatar with Initials */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-black text-xl sm:text-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 border-2 border-amber-400 shrink-0">
                        {currentTestimonial.avatarInitials || currentTestimonial.author.slice(0, 2)}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                          <span className="text-xs font-mono font-bold text-amber-300 mr-1.5">۵.۰</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-white">
                          {currentTestimonial.author}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-amber-400 leading-snug">
                          {currentTestimonial.currentRole}
                        </p>
                      </div>
                    </div>

                    {/* Program & Duration Tags */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        {currentTestimonial.programType}
                      </span>
                      {currentTestimonial.duration && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                          {currentTestimonial.duration}
                        </span>
                      )}
                      {currentTestimonial.track && (
                        <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-400 border border-slate-700/60">
                          {currentTestimonial.track}
                        </span>
                      )}
                    </div>

                    {/* Journey Contrast Box */}
                    <div className="space-y-2.5 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 text-xs">
                      <div>
                        <span className="text-slate-400 block font-medium mb-0.5">وضعیت و دغدغه اولیه:</span>
                        <p className="text-slate-300 leading-relaxed">
                          {currentTestimonial.background}
                        </p>
                      </div>
                      {currentTestimonial.outcome && (
                        <div className="pt-2 border-t border-slate-800/60">
                          <span className="text-emerald-400 block font-semibold mb-0.5 flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5" />
                            دستاورد محقق‌شده:
                          </span>
                          <p className="text-emerald-300 font-medium">
                            {currentTestimonial.outcome}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Technical Skills Acquired */}
                    {currentTestimonial.skills && currentTestimonial.skills.length > 0 && (
                      <div>
                        <span className="text-[11px] text-slate-400 block mb-1.5 font-medium">
                          مهارت‌های عملی تقویت‌شده با منتور:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentTestimonial.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Right Column (Persian Left): Full Quote & Reflection */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Quote className="w-10 h-10 text-amber-400/40" />
                        <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          بازخورد تاییدشده
                        </span>
                      </div>

                      <blockquote className="text-sm sm:text-base lg:text-lg text-slate-100 font-normal leading-relaxed sm:leading-loose">
                        «{currentTestimonial.quote}»
                      </blockquote>
                    </div>

                    {/* Call to action inside testimonial */}
                    <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Briefcase className="w-4 h-4 text-amber-400" />
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

                {/* Autoplay Animated Progress Line */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800 rounded-b-3xl overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-amber-300 animate-pulse w-full" />
                  </div>
                )}
              </div>
            )}

            {/* Carousel Thumbnails / Dots Navigator */}
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
                        ? 'bg-slate-900 border-amber-400 shadow-md shadow-amber-500/10 ring-1 ring-amber-400'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-amber-400' : 'bg-slate-600'}`} />
                      <span className={`text-xs font-bold truncate ${isActive ? 'text-amber-400' : 'text-slate-300'}`}>
                        {t.author}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">
                      {t.currentRole}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Quick Evidence Trust Metric Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono mb-0.5">+۱۴۰</div>
                <div className="text-xs text-slate-300 font-medium">همراهی منتورشیپ فردی</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono mb-0.5">۹۶٪</div>
                <div className="text-xs text-slate-300 font-medium">رضایت از کیفیت کدریویوها</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono mb-0.5">۴۵ روز</div>
                <div className="text-xs text-slate-300 font-medium">میانگین زمان جذب پس از دفاع پروژه</div>
              </div>
              <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono mb-0.5">۱۰۰٪</div>
                <div className="text-xs text-slate-300 font-medium">پروژه‌های قابل دفاع روی گیت‌هاب</div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 1: CASE STUDIES                                       */}
        {/* ========================================================= */}
        {activeTab === 'cases' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="text-amber-400 font-semibold">{cs.domain}</span>
                    <span className="text-slate-400 font-mono text-[11px]">کیس واقعی</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {cs.title}
                  </h3>

                  <div className="text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800">
                    <span className="text-slate-300 font-medium">موقعیت فرد: </span>
                    {cs.menteeRole}
                  </div>

                  <div className="space-y-3 mb-6 text-xs text-slate-300">
                    <div>
                      <span className="text-slate-400 block font-medium mb-1">مسئله حل‌شده:</span>
                      <p className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 leading-relaxed">
                        {cs.problemSolved}
                      </p>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-medium mb-1">نقش و خروجی کد فرد:</span>
                      <p className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 leading-relaxed">
                        {cs.concreteContribution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cs.stack.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono text-slate-300 bg-slate-800/90 border border-slate-700 px-2 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-start gap-2 text-xs text-emerald-400 font-medium">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{cs.verifiedOutcome}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: MENTORS                                            */}
        {/* ========================================================= */}
        {activeTab === 'mentors' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {MENTORS.map((m) => (
              <div
                key={m.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center font-bold text-amber-400 text-lg mb-4">
                    {m.name.charAt(0)}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {m.name}
                  </h3>

                  <div className="text-xs text-amber-400 font-semibold mb-2">
                    {m.title}
                  </div>

                  <p className="text-xs text-slate-400 mb-4">
                    {m.companyContext}
                  </p>

                  <div className="pt-3 border-t border-slate-800 text-xs text-slate-300">
                    <span className="text-slate-400 block mb-1">حوزه تخصصی و تمرکز:</span>
                    <span className="font-medium">{m.focusArea}</span>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>سابقه صنعتی:</span>
                  <span className="text-white font-mono font-bold">+{m.experienceYears} سال</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trust verification note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-400 text-center">
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            سیاست گل ارن: هیچ داستان ساختگی، رضایت‌نامه تبلیغاتی یا آمار تضمین صددرصدی در این وب‌سایت درج نمی‌شود.
          </span>
        </div>

      </div>
    </section>
  );
};
