import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { evaluateUserPath, validateEvaluationForm, EvaluationResult } from '../utils/evaluation.ts';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialGoal?: string;
  initialRole?: string;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  initialGoal,
  initialRole,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [primaryGoal, setPrimaryGoal] = useState<'enter_job_market' | 'specialize_deep' | 'interview_prep' | 'resume_review' | 'international' | 'undecided'>(
    (initialGoal as any) || 'enter_job_market'
  );
  const [currentStatus, setCurrentStatus] = useState<'student' | 'job_seeker' | 'employed' | 'career_switcher' | 'other'>('job_seeker');
  const [currentLevel, setCurrentLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [targetRole, setTargetRole] = useState(initialRole || '');
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);

  if (!isOpen) return null;

  const handleNextFromStep1 = () => {
    setStep(2);
  };

  const handleNextFromStep2 = () => {
    if (!targetRole.trim()) {
      setErrors({ targetRole: 'لطفاً حوزه یا تخصص هدف را بنویسید' });
      return;
    }
    setErrors({});
    setStep(3);
  };

  const handleSubmitEvaluation = (e: React.FormEvent) => {
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

    const result = evaluateUserPath({
      fullName,
      contact,
      currentStatus,
      primaryGoal,
      targetRole,
      currentLevel,
    });

    setEvaluationResult(result);
    setStep(4);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-right animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-colors"
          aria-label="بستن پنجره"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>سیستم ارزیابی هوشمند مسیر شغلی گل ارن</span>
          </div>
          <h2 id="modal-title" className="text-xl sm:text-2xl font-black text-white">
            ارزیابی هدف و انتخاب مسیر بهینه
          </h2>
        </div>

        {/* Stepper indicator if in steps 1-3 */}
        {step < 4 && (
          <div className="flex items-center justify-between mb-8 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step === 1 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>۱</span>
              <span className={step === 1 ? 'text-white font-medium' : ''}>تعیین هدف</span>
            </div>
            <div className="h-px w-8 bg-slate-800" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step === 2 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>۲</span>
              <span className={step === 2 ? 'text-white font-medium' : ''}>سطح و تخصص</span>
            </div>
            <div className="h-px w-8 bg-slate-800" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${step === 3 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>۳</span>
              <span className={step === 3 ? 'text-white font-medium' : ''}>درخواست بررسی</span>
            </div>
          </div>
        )}

        {/* Step 1: Goal */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-white mb-2">
              مهم‌ترین اولویت و هدف فعلی شما چیست؟
            </h3>
            
            <div className="space-y-2.5">
              {[
                { id: 'enter_job_market', title: 'ورود به بازار کار ایران و استخدام پایدار', desc: 'می‌خواهم مهارت‌ها، پروژه واقعی و آمادگی مصاحبه را در یک برنامه جامع طی کنم.' },
                { id: 'specialize_deep', title: 'تعمیق عمیق در یک تخصص خاص با منتور ارشد', desc: 'مبانی را بلدم و می‌خواهم در یک حوزه تخصصی (Go، داده، کوبرنتیز و...) پروژه صنعتی بسازم.' },
                { id: 'interview_prep', title: 'رفع مشکل مصاحبه یا اصلاح تخصصی رزومه', desc: 'نیاز به منتورینگ متمرکز برای بازخوانی رزومه یا شبیه‌سازی مصاحبه فنی دارم.' },
                { id: 'international', title: 'ورود به بازارهای جهانی و جاب‌آفر بین‌المللی', desc: 'هدفم مهاجرت کاری، ریموت‌ورک دلاری یا هاب ارمنستان است.' },
                { id: 'undecided', title: 'هنوز مطمئن نیستم و نیاز به مشاوره دارم', desc: 'می‌خواهم شرایطم ابتدا توسط کارشناسان گل ارن بررسی شود.' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setPrimaryGoal(opt.id as any)}
                  className={`w-full p-4 rounded-2xl border text-right transition-all cursor-pointer flex flex-col gap-1 ${
                    primaryGoal === opt.id
                      ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="text-sm font-bold text-white">{opt.title}</span>
                  <span className="text-xs text-slate-400">{opt.desc}</span>
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 flex justify-end">
              <button
                onClick={handleNextFromStep1}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all"
              >
                <span>مرحله بعد</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Status, Level & Role */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                وضعیت تحصیلی یا کاری فعلی:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'student', label: 'دانشجو / فارغ‌التحصیل' },
                  { id: 'job_seeker', label: 'جویای کار' },
                  { id: 'employed', label: 'شاغل' },
                  { id: 'career_switcher', label: 'تغییر مسیر شغلی' },
                  { id: 'other', label: 'سایر' },
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setCurrentStatus(st.id as any)}
                    className={`p-2.5 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                      currentStatus === st.id
                        ? 'bg-amber-400 text-slate-950 font-bold border-amber-300'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                تخمین شما از سطح تسلط فنی فعلی:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'beginner', label: 'مبتدی (آشنایی کم)' },
                  { id: 'intermediate', label: 'متوسط (دارای پروژه ساده)' },
                  { id: 'advanced', label: 'پیشرفته (مسلط به مبانی)' },
                ].map((lv) => (
                  <button
                    key={lv.id}
                    type="button"
                    onClick={() => setCurrentLevel(lv.id as any)}
                    className={`p-2.5 rounded-xl border text-xs text-center transition-all cursor-pointer ${
                      currentLevel === lv.id
                        ? 'bg-amber-400 text-slate-950 font-bold border-amber-300'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {lv.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="modalTargetRole" className="block text-xs font-semibold text-slate-300 mb-1.5">
                تخصص یا نقش شغلی موردنظر: <span className="text-amber-400">*</span>
              </label>
              <input
                id="modalTargetRole"
                type="text"
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                placeholder="مثال: توسعه‌دهنده فرانت‌اند، مهندسی داده، دوآپس..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              {errors.targetRole && (
                <span className="text-[11px] text-rose-400 block mt-1">{errors.targetRole}</span>
              )}
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
              >
                <ArrowRight className="w-4 h-4" />
                <span>مرحله قبل</span>
              </button>

              <button
                onClick={handleNextFromStep2}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all"
              >
                <span>مرحله بعد</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info to finalize assessment */}
        {step === 3 && (
          <form onSubmit={handleSubmitEvaluation} className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              برای ارسال گزارش اولیه و هماهنگی جلسه ارزیابی با سرپرست مسیر، نام و اطلاعات تماس خود را وارد نمایید.
            </p>

            <div>
              <label htmlFor="modalFullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                نام و نام خانوادگی <span className="text-amber-400">*</span>
              </label>
              <input
                id="modalFullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="مثال: محمد امینی"
                className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                  errors.fullName ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {errors.fullName && (
                <span className="text-[11px] text-rose-400 block mt-1">{errors.fullName}</span>
              )}
            </div>

            <div>
              <label htmlFor="modalContact" className="block text-xs font-semibold text-slate-300 mb-1.5">
                شماره تماس یا ایمیل <span className="text-amber-400">*</span>
              </label>
              <input
                id="modalContact"
                type="text"
                dir="ltr"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="0912... یا email@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-left ${
                  errors.contact ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {errors.contact && (
                <span className="text-[11px] text-rose-400 block mt-1">{errors.contact}</span>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
              >
                <ArrowRight className="w-4 h-4" />
                <span>مرحله قبل</span>
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-md shadow-amber-500/20"
              >
                <span>مشاهده نتیجه ارزیابی هوشمند</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Instant Result */}
        {step === 4 && evaluationResult && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">درخواست با موفقیت ثبت شد</h4>
                <p className="text-xs text-slate-300">
                  اطلاعات شما ثبت شد و به زودی با شماره <strong className="text-white font-mono">{contact}</strong> هماهنگ می‌شویم.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-3">
              <span className="text-xs font-semibold text-amber-400">پیشنهاد اختصاصی گل ارن:</span>
              <h3 className="text-xl font-bold text-white">
                {evaluationResult.pathTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {evaluationResult.pathSubtitle}
              </p>

              <div className="pt-3 border-t border-slate-800 space-y-1.5">
                <span className="text-xs font-semibold text-slate-400 block mb-1">دلایل انتخاب این مسیر:</span>
                {evaluationResult.reasons.map((r, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span>{r}</span>
                  </div>
                ))}
              </div>

              {evaluationResult.isInternational && (
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <a
                    href="https://goalearnint.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500"
                  >
                    <span>انتقال به پرتال بین‌المللی</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800"
              >
                بستن پنجره
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
