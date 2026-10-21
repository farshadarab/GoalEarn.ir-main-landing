import React, { useState } from 'react';
import { evaluateUserPath, validateEvaluationForm, EvaluationResult } from '../utils/evaluation.ts';
import { ArrowLeft, CheckCircle2, ShieldCheck, RefreshCw, Send, Sparkles } from 'lucide-react';

interface FinalAssessmentSectionProps {
  prefilledPath?: string;
}

export const FinalAssessmentSection: React.FC<FinalAssessmentSectionProps> = ({ prefilledPath }) => {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [primaryGoal, setPrimaryGoal] = useState<'enter_job_market' | 'specialize_deep' | 'interview_prep' | 'resume_review' | 'international' | 'undecided'>(
    (prefilledPath as any) || 'enter_job_market'
  );
  const [currentStatus, setCurrentStatus] = useState<'student' | 'job_seeker' | 'employed' | 'career_switcher' | 'other'>('job_seeker');
  const [targetRole, setTargetRole] = useState('');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<EvaluationResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateEvaluationForm({
      fullName,
      contact,
      targetRole,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Realistic processing
    setTimeout(() => {
      const result = evaluateUserPath({
        fullName,
        contact,
        currentStatus,
        primaryGoal,
        targetRole,
        currentLevel: currentStatus === 'employed' ? 'intermediate' : 'beginner',
      });
      setSubmissionResult(result);
      setIsSubmitting(false);
    }, 400);
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFullName('');
    setContact('');
    setTargetRole('');
    setNotes('');
  };

  return (
    <section id="assessment-form" className="py-20 lg:py-28 bg-slate-900/60 border-b border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-3">
            <Sparkles className="w-4 h-4" />
            <span>ارزیابی اولیه و تعیین مسیر</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>بدون تعهد مالی</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            هنوز مطمئن نیستی کدام مسیر برایت مناسب است؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            هدف و شرایطت را کوتاه توضیح بده. پس از بررسی اولیه، گام مناسب بعدی مشخص می‌شود.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative">
          
          {submissionResult ? (
            /* Result Screen */
            <div className="text-right space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    درخواست ارزیابی شما با موفقیت ثبت شد!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    اطلاعات شما برای سرپرست مسیر ارسال گردید. بر اساس تحلیل هوشمند ورودی‌های شما، مناسب‌ترین مسیر برای شما مشخص شده است:
                  </p>
                </div>
              </div>

              {/* Recommendation Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-400">نتیجه ارزیابی اولیه</span>
                  <span className="text-xs text-slate-400 font-mono">نام متقاضی: {fullName}</span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-white">
                  {submissionResult.pathTitle}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {submissionResult.pathSubtitle}
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">
                    چرا این مسیر برای شما پیشنهاد شده است؟
                  </span>
                  {submissionResult.reasons.map((r, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">
                    گام‌های بعدی این مسیر:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {submissionResult.estimatedStages.map((st, i) => (
                      <div key={i} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                        {st}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-300">
                  <span className="font-bold block mb-1">اقدام پیشنهادی گام بعدی:</span>
                  <span>{submissionResult.suggestedAction}</span>
                </div>
              </div>

              {/* Contact Confirmation */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
                <span>همکاران ما ظرف ۲۴ ساعت کاری با شماره/ایمیل <strong className="text-white font-mono">{contact}</strong> جهت هماهنگی تماس خواهند گرفت.</span>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:underline cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>ثبت ارزیابی مجدد</span>
                </button>
              </div>
            </div>
          ) : (
            /* 4-Field Embedded Form */
            <form onSubmit={handleSubmit} className="space-y-6 text-right">
              
              {/* Field 1: Name and Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-2">
                    نام و نام خانوادگی <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="مثال: علی رضایی"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      errors.fullName ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-rose-400 block mt-1.5">{errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="contact" className="block text-xs font-semibold text-slate-300 mb-2">
                    شماره تماس یا ایمیل <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="contact"
                    type="text"
                    dir="ltr"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="0912... یا email@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all text-left ${
                      errors.contact ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.contact && (
                    <span className="text-[11px] text-rose-400 block mt-1.5">{errors.contact}</span>
                  )}
                </div>
              </div>

              {/* Field 2: Favorite Path */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  مسیر مورد علاقه شما <span className="text-amber-400">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'enter_job_market', label: 'برنامه جامع بازار کار' },
                    { id: 'specialize_deep', label: 'برنامه خصوصی تخصصی' },
                    { id: 'interview_prep', label: 'خدمات مکمل (رزومه/مصاحبه)' },
                    { id: 'international', label: 'مسیر بین‌المللی' },
                    { id: 'undecided', label: 'هنوز مطمئن نیستم / نیاز به راهنمایی' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setPrimaryGoal(option.id as any)}
                      className={`p-3 rounded-xl border text-xs font-medium text-right transition-all cursor-pointer ${
                        primaryGoal === option.id
                          ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-bold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 3: Current Status */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  وضعیت فعلی شما <span className="text-amber-400">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {[
                    { id: 'student', label: 'دانشجو / تازه فارغ‌التحصیل' },
                    { id: 'job_seeker', label: 'جویای کار' },
                    { id: 'employed', label: 'شاغل (نیازمند ارتقا)' },
                    { id: 'career_switcher', label: 'تغییر مسیر شغلی' },
                    { id: 'other', label: 'سایر موارد' },
                  ].map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => setCurrentStatus(st.id as any)}
                      className={`p-2.5 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                        currentStatus === st.id
                          ? 'bg-slate-100 text-slate-950 font-bold border-white'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field 4: Target Role & Main Goal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="targetRole" className="block text-xs font-semibold text-slate-300 mb-2">
                    تخصص یا نقش شغلی هدف <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="targetRole"
                    type="text"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    placeholder="مثال: بک‌اند Go، مهندسی داده، طراح محصول..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      errors.targetRole ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.targetRole && (
                    <span className="text-[11px] text-rose-400 block mt-1.5">{errors.targetRole}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold text-slate-300 mb-2">
                    مهم‌ترین هدف یا چالش فعلی شما (اختیاری)
                  </label>
                  <input
                    id="notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="مثال: در مصاحبه‌ها رد می‌شوم / پروژه ندارم"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-500/20 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>در حال تحلیل شرایط شما...</span>
                  ) : (
                    <>
                      <span>شروع ارزیابی مسیر</span>
                      <Send className="w-5 h-5 -rotate-90" />
                    </>
                  )}
                </button>
              </div>

              {/* Micro Trust Guardrail */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>اطلاعات شما محرمانه تلقی شده و فقط برای بررسی فنی مسیر استفاده خواهد شد.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
