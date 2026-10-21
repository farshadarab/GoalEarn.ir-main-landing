/**
 * Pure evaluation logic for GoalEarn.ir assessment funnel.
 * Determines the ideal pathway for a learner based on current status,
 * primary goal, domain, and experience level.
 */

export interface EvaluationInput {
  fullName: string;
  contact: string; // Phone or email
  currentStatus: 'student' | 'job_seeker' | 'employed' | 'career_switcher' | 'other';
  primaryGoal: 'enter_job_market' | 'specialize_deep' | 'interview_prep' | 'resume_review' | 'international' | 'undecided';
  targetRole: string;
  currentLevel: 'beginner' | 'intermediate' | 'advanced';
}

export interface EvaluationResult {
  recommendedPath: 'comprehensive' | 'private_specialized' | 'modular_service' | 'international';
  pathTitle: string;
  pathSubtitle: string;
  reasons: string[];
  estimatedStages: string[];
  suggestedAction: string;
  isInternational: boolean;
}

export function evaluateUserPath(input: Partial<EvaluationInput>): EvaluationResult {
  const goal = input.primaryGoal || 'undecided';
  const status = input.currentStatus || 'job_seeker';
  const level = input.currentLevel || 'beginner';

  // 1. International Goal
  if (goal === 'international') {
    return {
      recommendedPath: 'international',
      pathTitle: 'مسیر بین‌المللی (GoalEarn International)',
      pathSubtitle: 'جاب‌آفر خارجی، مهاجرت کاری و ورود به بازارهای جهانی',
      reasons: [
        'تمرکز بر استانداردسازی رزومه بین‌المللی و پورتفولیوی گلوبال',
        'آمادگی برای مصاحبه‌های انگلیسی و فنی شرکت‌های خارجی',
        'بررسی امکان همکاری یا اعزام از طریق هاب ارمنستان و ریموت‌ورک'
      ],
      estimatedStages: ['ارزیابی سطح زبان و رزومه', 'تطبیق تخصص با استانداردهای جهانی', 'شبکه‌سازی لینکدین و اپلای هدفمند'],
      suggestedAction: 'انتقال به پرتال بین‌المللی GoalEarn International (goalearnint.com)',
      isInternational: true
    };
  }

  // 2. Focused Single Needs (Resume / Interview prep)
  if (goal === 'interview_prep' || goal === 'resume_review') {
    return {
      recommendedPath: 'modular_service',
      pathTitle: 'خدمات مکمل و هدفمند',
      pathSubtitle: 'همراهی متمرکز روی یک مرحله معین (رزومه، شبیه‌سازی مصاحبه یا سابقه کار)',
      reasons: [
        'عدم نیاز به دوره‌های طولانی؛ تمرکز ۱۰۰٪ روی گلوگاه فعلی شما',
        'اصلاح تخصصی رزومه و پورتفولیو توسط لیدهای فنی بازار کار ایران',
        'جلسات شبیه‌سازی مصاحبه فنی و رفتار سازمانی (Mock Interview) با بازخورد بی‌تعارف'
      ],
      estimatedStages: ['تحلیل رزومه و تجارب فعلی', 'شبیه‌سازی مصاحبه و تست زنده', 'برنامه اصلاحی و معرفی به شبکه کارفرمایی'],
      suggestedAction: 'رزرو جلسه بررسی رزومه و شبیه‌سازی مصاحبه',
      isInternational: false
    };
  }

  // 3. Deep Specialization for intermediate/advanced or employed individuals
  if (goal === 'specialize_deep' || (status === 'employed' && level !== 'beginner')) {
    return {
      recommendedPath: 'private_specialized',
      pathTitle: 'برنامه‌های خصوصی تخصصی',
      pathSubtitle: 'تمرکز بر برنامه شخصی، منتور ارشد اختصاصی، تمرین/پروژه و بازخورد عمیق',
      reasons: [
        'شخصی‌سازی سرفصل‌ها متناسب با خلاءهای فنی و تسک‌های واقعی کاری شما',
        'ساخت یک پروژه عمیق و پرچالش در سطح پروداکشن به عنوان سند توانمندی',
        'منتورینگ تک‌به‌تک همراه با کدریویو (Code Review) دقیق'
      ],
      estimatedStages: ['تعیین دقیق مهارت هدف', 'طراحی سیلابس شخصی‌سازی‌شده', 'توسعه پروژه پروداکشن با بازخورد منتور', 'ارائه نهایی و مستندسازی'],
      suggestedAction: 'ارزیابی صلاحیت فنی و انتخاب منتور تخصصی',
      isInternational: false
    };
  }

  // 4. Default & Career Entry / Transition (Career-switchers, students, job seekers entering market)
  return {
    recommendedPath: 'comprehensive',
    pathTitle: 'برنامه جامع ورود به بازار کار ایران',
    pathSubtitle: 'مسیر ۶ مرحله‌ای از تعیین هدف و مهارت تا ساخت شواهد توانمندی و استخدام',
    reasons: [
      'رویکرد گام‌به‌گام و جامع: بدون سردرگمی میان انبوه منابع پراکنده',
      'ساخت پروژه واقعی و مستندات کاری معتبر برای جلب اعتماد کارفرما',
      'آمادگی کامل برای فرآیند جذب، آزمون‌های استخدامی و مصاحبه‌های HR و تکنیکال'
    ],
    estimatedStages: [
      '۱. ارزیابی هدف و سطح فعلی',
      '۲. طراحی نقشه راه اختصاصی',
      '۳. تقویت مهارت‌های کلیدی بازار کار',
      '۴. اجرای پروژه‌های ملموس و شواهد توانمندی',
      '۵. ساخت رزومه و ارائه حرفه‌ای',
      '۶. آمادگی مصاحبه، شبکه‌سازی و اقدام استخدامی'
    ],
    suggestedAction: 'ثبت‌نام در ارزیابی اولیه ورود به برنامه جامع بازار کار',
    isInternational: false
  };
}

export function validateEvaluationForm(data: {
  fullName: string;
  contact: string;
  targetRole: string;
}): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'لطفاً نام و نام خانوادگی معتبر وارد کنید (حداقل ۳ حرف)';
  }

  if (!data.contact || data.contact.trim().length < 5) {
    errors.contact = 'لطفاً شماره تماس (مثلاً ۰۹۱۲...) یا ایمیل خود را وارد کنید';
  } else {
    const isPhone = /^(\+98|0)?9\d{9}$/.test(data.contact.replace(/\s+/g, ''));
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact.trim());
    if (!isPhone && !isEmail && data.contact.trim().length < 8) {
      errors.contact = 'شماره تماس ۱۱ رقمی ایران یا آدرس ایمیل صحیح وارد نمایید';
    }
  }

  if (!data.targetRole || data.targetRole.trim().length < 2) {
    errors.targetRole = 'لطفاً حوزه تخصصی یا نقش موردنظر خود را مشخص کنید';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
