export const CONSULTING_FORM_URL = 'https://goalearn.ir/consulting-form/';
export const VIDEO_URL = 'https://goalearn.ir/wp-content/uploads/2026/10/GoalEarn-introduction-video-goalearn_ir.mp4';
export const VIDEO_POSTER_URL = 'https://goalearn.ir/wp-content/uploads/2026/10/GoalEarn-Career-Pathway-Banner.webp';

export interface ProgramItem {
  id: string;
  code: string;
  title: string;
  englishTitle: string;
  isNew?: boolean;
  link: string;
  categoryId: string;
  categoryName: string;
  description: string;
  duration: string;
  mentorRole: string;
}

export interface ProgramCategory {
  id: string;
  name: string;
}

export interface RoadmapStage {
  step: number;
  stepPersian: string;
  title: string;
  objective: string;
  deliverables: string[];
  mentorTouchpoint: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  domain: string;
  menteeRole: string;
  problemSolved: string;
  concreteContribution: string;
  stack: string[];
  verifiedOutcome: string;
}

export interface MentorProfile {
  id: string;
  name: string;
  title: string;
  companyContext: string;
  experienceYears: number;
  focusArea: string;
}

export interface Testimonial {
  id: string;
  author: string;
  currentRole: string;
  background: string;
  quote: string;
  programType: 'برنامه جامع بازار کار' | 'برنامه خصوصی تخصصی' | 'منتورینگ مصاحبه';
  track?: string;
  outcome?: string;
  rating?: number;
  duration?: string;
  skills?: string[];
  avatarInitials?: string;
}

export interface ModularService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
  estimatedSessions: string;
  ctaText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// -------------------------------------------------------------
// 14 OFFICIAL SPECIALIZED PROGRAMS & LINKS
// -------------------------------------------------------------

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  { id: 'all', name: 'همه برنامه‌ها (۱۴ تخصص)' },
  { id: 'data-ai', name: 'داده و هوش مصنوعی' },
  { id: 'software', name: 'مهندسی نرم‌افزار و وب' },
  { id: 'infra-security', name: 'زیرساخت و امنیت' },
  { id: 'design-product', name: 'طراحی و محصول' },
  { id: 'marketing', name: 'دیجیتال مارکتینگ' },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'data-engineering',
    code: 'DE',
    title: 'مهندسی داده - (DE)',
    englishTitle: 'Data Engineering',
    isNew: true,
    link: 'https://goalearn.ir/intro/data-engineering/',
    categoryId: 'data-ai',
    categoryName: 'داده و هوش مصنوعی',
    description: 'پایپ‌لاین‌های کلان‌داده، پردازش‌های جریانی و دیتالیک با ابزارهای Airflow، Spark و Kafka.',
    duration: '۸ الی ۱۲ هفته',
    mentorRole: 'استاف انجینیر داده در سامانه‌های پرترافیک'
  },
  {
    id: 'data-science',
    code: 'DS',
    title: 'علم داده - (DS)',
    englishTitle: 'Data Science',
    isNew: true,
    link: 'https://goalearn.ir/intro/data-science/',
    categoryId: 'data-ai',
    categoryName: 'داده و هوش مصنوعی',
    description: 'تحلیل آماری، یادگیری ماشین پیشرفته و حل مسائل کلان داده‌های تجاری و استنتاج آماری.',
    duration: '۱۰ الی ۱۲ هفته',
    mentorRole: 'دیتاساینتیست ارشد در شرکت‌های تکنولوژی'
  },
  {
    id: 'system-administration',
    code: 'SA',
    title: 'مدیر سیستم - (SA)',
    englishTitle: 'System Administration',
    isNew: false,
    link: 'https://goalearn.ir/intro/system-administration/',
    categoryId: 'infra-security',
    categoryName: 'زیرساخت و امنیت',
    description: 'مدیریت حرفه‌ای لینوکس سرورها، مجازی‌سازی، اتوماسیون شل اسکریپت و بهینه‌سازی زیرساخت سازمانی.',
    duration: '۸ الی ۱۰ هفته',
    mentorRole: 'مدیر ارشد زیرساخت و لینوکس ادمین'
  },
  {
    id: 'cyber-security',
    code: 'CS',
    title: 'امنیت سایبری - (CS)',
    englishTitle: 'Cyber Security',
    isNew: false,
    link: 'https://goalearn.ir/intro/cyber-security/',
    categoryId: 'infra-security',
    categoryName: 'زیرساخت و امنیت',
    description: 'تست نفوذ وب، ارزیابی آسیب‌پذیری، استانداردهای OWASP و پیکربندی امنیتی سیستم‌های شبکه.',
    duration: '۱۰ الی ۱۴ هفته',
    mentorRole: 'مشاور ارشد امنیت و سرپرست تیم ارزیابی نفوذ'
  },
  {
    id: 'frontend-development',
    code: 'FE',
    title: 'برنامه نویسی فرانت اند - (FE)',
    englishTitle: 'Frontend Development',
    isNew: false,
    link: 'https://goalearn.ir/intro/frontend-development/',
    categoryId: 'software',
    categoryName: 'مهندسی نرم‌افزار و وب',
    description: 'توسعه وب‌اپ‌های مدرن و مقیاس‌پذیر با React، Next.js، TypeScript و معماری پرفورمنس.',
    duration: '۸ الی ۱۲ هفته',
    mentorRole: 'تک‌لید فرانت‌اند سامانه‌های پرترافیک'
  },
  {
    id: 'backend-development',
    code: 'BE',
    title: 'برنامه نویسی بک اند - (BE)',
    englishTitle: 'Backend Development',
    isNew: false,
    link: 'https://goalearn.ir/intro/backend-development/',
    categoryId: 'software',
    categoryName: 'مهندسی نرم‌افزار و وب',
    description: 'معماری میکروسرویس، طراحی APIهای پرفورمنس بالا، پایگاه‌های داده توزیع‌شده و امنیت سرویس‌ها.',
    duration: '۱۰ الی ۱۴ هفته',
    mentorRole: 'مهندس ارشد بک‌اند و معمار سیستم'
  },
  {
    id: 'full-stack-development',
    code: 'FS',
    title: 'توسعه دهنده فول استک - (FS)',
    englishTitle: 'Full-Stack Development',
    isNew: false,
    link: 'https://goalearn.ir/intro/full-stack-development/',
    categoryId: 'software',
    categoryName: 'مهندسی نرم‌افزار و وب',
    description: 'تسلط یکپارچه بر فرانت‌اند مدرن، معماری بک‌اند و پایگاه داده با اجرای محصولات پایان‌به‌پایان.',
    duration: '۱۲ الی ۱۶ هفته',
    mentorRole: 'توسعه‌دهنده ارشد فول‌استک'
  },
  {
    id: 'ui-design',
    code: 'UI',
    title: 'طراحی رابط کاربری - (UI)',
    englishTitle: 'UI Design',
    isNew: false,
    link: 'https://goalearn.ir/intro/ui-design/',
    categoryId: 'design-product',
    categoryName: 'طراحی و محصول',
    description: 'سیستم‌های طراحی مقیاس‌پذیر (Design Systems)، تایپوگرافی، پروتوتایپ‌های تعاملی و ابزار Figma.',
    duration: '۶ الی ۸ هفته',
    mentorRole: 'طراح ارشد رابط کاربری'
  },
  {
    id: 'ux-design',
    code: 'UX',
    title: 'طراحی تجربه کاربری - (UX)',
    englishTitle: 'UX Design',
    isNew: false,
    link: 'https://goalearn.ir/intro/ux-design/',
    categoryId: 'design-product',
    categoryName: 'طراحی و محصول',
    description: 'پژوهش کاربر، معماری اطلاعات، تست کاربردپذیری و حل اصولی چالش‌های تجربه کاربری.',
    duration: '۸ الی ۱۰ هفته',
    mentorRole: 'محقق و استراتژیست ارشد تجربه کاربری'
  },
  {
    id: 'product-design',
    code: 'PD',
    title: 'طراحی محصول - (PD)',
    englishTitle: 'Product Design',
    isNew: false,
    link: 'https://goalearn.ir/intro/product-design/',
    categoryId: 'design-product',
    categoryName: 'طراحی و محصول',
    description: 'پیوند طراحی با اهداف بیزنس و محصول، تدوین استراتژی دیزاین و ساخت پورتفولیوی قابل دفاع.',
    duration: '۸ الی ۱۲ هفته',
    mentorRole: 'لید دیزاینر در اپلیکیشن‌های مقیاس‌ملی'
  },
  {
    id: 'business-intelligence',
    code: 'BI',
    title: 'هوش تجاری - (BI)',
    englishTitle: 'Business Intelligence',
    isNew: false,
    link: 'https://goalearn.ir/intro/business-intelligence/',
    categoryId: 'data-ai',
    categoryName: 'داده و هوش مصنوعی',
    description: 'طراحی انبار داده، داشبوردهای استراتژیک سازمانی با Power BI، کوئری‌های پیشرفته SQL و DAX.',
    duration: '۸ الی ۱۰ هفته',
    mentorRole: 'لید هوش تجاری و تحلیل داده'
  },
  {
    id: 'ai-ml',
    code: 'ML',
    title: 'یادگیری ماشین - (ML)',
    englishTitle: 'Machine Learning & AI',
    isNew: false,
    link: 'https://goalearn.ir/intro/ai-ml/',
    categoryId: 'data-ai',
    categoryName: 'داده و هوش مصنوعی',
    description: 'مدل‌سازی کاربردی، آموزش و استقرار الگوریتم‌های یادگیری ماشین در پروداکشن به همراه MLOps.',
    duration: '۱۰ الی ۱۲ هفته',
    mentorRole: 'سرپرست تیم هوش مصنوعی و دیتاساینس'
  },
  {
    id: 'data-analysis',
    code: 'DA',
    title: 'تحلیل داده - (DA)',
    englishTitle: 'Data Analysis',
    isNew: false,
    link: 'https://goalearn.ir/intro/data-analysis/',
    categoryId: 'data-ai',
    categoryName: 'داده و هوش مصنوعی',
    description: 'تحلیل اکتشافی، مصورسازی حرفه‌ای داده، فرموله‌سازی شاخص‌های کسب‌وکار و آمار کاربردی.',
    duration: '۶ الی ۸ هفته',
    mentorRole: 'تحلیل‌گر ارشد داده و کسب‌وکار'
  },
  {
    id: 'digital-marketing',
    code: 'DM',
    title: 'دیجیتال مارکتینگ - (DM)',
    englishTitle: 'Digital Marketing',
    isNew: false,
    link: 'https://goalearn.ir/intro/digital-marketing/',
    categoryId: 'marketing',
    categoryName: 'دیجیتال مارکتینگ',
    description: 'پرفورمنس مارکتینگ، تحلیل رفتار کاربر با GA4، تست‌های A/B و بهینه‌سازی نرخ تبدیل (CRO).',
    duration: '۸ الی ۱۰ هفته',
    mentorRole: 'مدیر رشد و دیجیتال مارکتینگ'
  }
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    step: 1,
    stepPersian: '۱',
    title: 'ارزیابی هدف و سطح فعلی',
    objective: 'بررسی شفاف خلاءهای فنی، نقاط قوت، زمان در دسترس و شناخت دقیق نیازمندی واقعی بازار کار هدف.',
    deliverables: ['سند تحلیل وضعیت مهارتی فرد', 'شناسایی پوزیشن‌های استخدامی تطبیق‌پذیر', 'تعیین سطح ورودی بدون تعارف'],
    mentorTouchpoint: 'جلسه ارزیابی انفرادی با سرپرست مسیر برای انتخاب رویکرد شخصی‌سازی‌شده'
  },
  {
    step: 2,
    stepPersian: '۲',
    title: 'طراحی مسیر اختصاصی',
    objective: 'ایجاد نقشه راه ملموس و دارای زمان‌بندی شفاف به جای سرفصل‌های عمومی و دوره‌های فرسایشی.',
    deliverables: ['تقویم اجرایی تسک‌ها و مایلستون‌ها', 'منابع مرجع فنی گزینش‌شده', 'مشخص شدن منتور همراه مسیر'],
    mentorTouchpoint: 'نهایی‌سازی نقشه راه و توافق بر روی انتظارات دوجانبه قبل از شروع اجرا'
  },
  {
    step: 3,
    stepPersian: '۳',
    title: 'تقویت مهارت‌های لازم',
    objective: 'تمرکز بر یادگیری تسک‌محور؛ فراگیری دقیق همان مسائلی که در پروژه‌های صنعتی به آنها نیاز است.',
    deliverables: ['انجام مینی‌پروژه‌های استاندارد', 'کدریویو و تصحیح ساختار تفکر حل مسئله', 'تسلط بر ابزارهای اصلی محیط کار'],
    mentorTouchpoint: 'جلسات هفتگی منظم بازخورد و رفع باگ‌های مفهومی با منتور'
  },
  {
    step: 4,
    stepPersian: '۴',
    title: 'پروژه و شواهد توانمندی',
    objective: 'ساخت خروجی قابل لمس؛ کارفرمایان به گواهی‌نامه اعتماد ندارند، به اثبات توانمندی اعتماد دارند.',
    deliverables: ['یک پروژه واقعی پروداکشن با مستندات کامل', 'ریپازیتوری مرتب و مهندسی‌شده با تست', 'لایودمو یا فایل مستندات شفاف'],
    mentorTouchpoint: 'جلسه شبیه‌سازی جلسه دفاع از پروژه و ارزیابی معماری فنی'
  },
  {
    step: 5,
    stepPersian: '۵',
    title: 'رزومه و ارائه حرفه‌ای',
    objective: 'تبدیل تجارب و پروژه‌ها به یک زبان استاندارد که در سیستم‌های غربالگری و دید کارفرما بدرخشد.',
    deliverables: ['رزومه تک‌صفحه‌ای هدفمند منطبق بر فرمت‌های مدرن', 'بهینه‌سازی پروفایل لینکدین و گیت‌هاب', 'داستان‌سرایی حرفه‌ای حول تجارب فرد'],
    mentorTouchpoint: 'بررسی خط‌به‌خط رزومه و پاکسازی عبارت‌های کلیشه‌ای'
  },
  {
    step: 6,
    stepPersian: '۶',
    title: 'آمادگی مصاحبه و اقدام',
    objective: 'ورود مطمئن به فرآیند کاریابی؛ از نحوه جست‌وجو تا شبیه‌سازی مصاحبه‌های سخت فنی و HR.',
    deliverables: ['حضور در مصاحبه شبیه‌سازی‌شده (Mock Interview)', 'آمادگی برای چالش‌های زنده و تسک‌های خانگی', 'استراتژی مذاکره پیشنهاد شغلی'],
    mentorTouchpoint: 'شبیه‌سازی مصاحبه با لیدهای فنی و ارائه فیدبک جامع کتبی'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-fintech',
    title: 'پیاده‌سازی موتور پردازش و تطبیق تراکنش‌های آنی',
    domain: 'فین‌تک و پرداخت',
    menteeRole: 'تغییر مسیر از پشتیبانی به مهندس بک‌اند جونیور',
    problemSolved: 'نیاز به سامانه‌ای با تاخیر کم برای بررسی تراکنش‌های همزمان بدون رخداد Race Condition و مسدودسازی دیتابیس.',
    concreteContribution: 'طراحی ساختار صف با Kafka، قفل‌گذاری بهینه در PostgreSQL و تست بار تا ۵۰۰۰ درخواست بر ثانیه.',
    stack: ['Go', 'PostgreSQL', 'Kafka', 'Docker'],
    verifiedOutcome: 'استخدام به عنوان مهندس بک‌اند در یکی از پرداخت‌یارهای رسمی شبکه بانکی ایران'
  },
  {
    id: 'cs-logistics',
    title: 'کاهش زمان بارگذاری پنل عملیات توزیع کالا',
    domain: 'لجستیک و زنجیره تامین',
    menteeRole: 'فرانت‌اند دولوپر تازه فارغ‌التحصیل',
    problemSolved: 'پنل متراکم با ده‌ها جدول بزرگ که دچار لگ حرکتی شدید و مصرف بالای حافظه مرورگر بود.',
    concreteContribution: 'بازطراحی معماری با TanStack Virtual، تفکیک باندل‌ها و پیاده‌سازی سیستم مدیریت کش کلاینت.',
    stack: ['React', 'TypeScript', 'TanStack Table', 'Vite'],
    verifiedOutcome: 'دریافت آفر شغلی رسمی در یک شرکت لجستیکی مقیاس‌ملی پس از ارائه معماری در مصاحبه'
  },
  {
    id: 'cs-ecommerce',
    title: 'بازطراحی فرآیند تسویه‌حساب (Checkout) موبایل',
    domain: 'تجارت الکترونیک',
    menteeRole: 'طراح جونیور با سابقه گرافیک',
    problemSolved: 'ریزش بالای کاربران در مرحله انتخاب آدرس و شیوه ارسال مرسوله‌های چندگانه.',
    concreteContribution: 'انجام تست کاربردپذیری با ۵ کاربر واقعی، بازطراحی پروتوتایپ در Figma و ساخت دیزاین‌سیستم کامپوننت‌ها.',
    stack: ['Figma', 'Usability Testing', 'Design Tokens'],
    verifiedOutcome: 'جذب در تیم محصول یک پلتفرم خرید آنلاین با پورتفولیوی مستندشده'
  }
];

export const MENTORS: MentorProfile[] = [
  {
    id: 'm-1',
    name: 'علیرضا رضوانی',
    title: 'مهندس ارشد نرم‌افزار و معمار سیستم',
    companyContext: 'با سابقه در شرکت‌های بزرگ فناوری ایران',
    experienceYears: 9,
    focusArea: 'معماری مایکروسرویس، سیستم‌های توزیع‌شده و Go'
  },
  {
    id: 'm-2',
    name: 'مهسا کاظمی',
    title: 'سرپرست تیم تجربه و طراحی محصول',
    companyContext: 'هدایت محصول در پلتفرم‌های خدمت‌رسان میلیون‌کاربره',
    experienceYears: 7,
    focusArea: 'طراحی سیستم، کشف نیاز کاربر و استراتژی دیزاین'
  },
  {
    id: 'm-3',
    name: 'پویا نادری',
    title: 'استاف انجینیر زیرساخت و دوآپس',
    companyContext: 'طراحی زیرساخت پلتفرم‌های داده‌ای و ابری',
    experienceYears: 11,
    focusArea: 'Kubernetes، پایش پیشرفته و پایداری سامانه‌ها (SRE)'
  },
  {
    id: 'm-4',
    name: 'نگین شمس',
    title: 'تک‌لید فرانت‌اند و مشاور مهندسی وب',
    companyContext: 'توسعه وب‌اپ‌های سازمانی و داشبوردهای مالی',
    experienceYears: 8,
    focusArea: 'React، Next.js، معماری پرفورمنس و تست نرم‌افزار'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'امیرحسین فلاح',
    currentRole: 'مهندس بک‌اند ارشد در ابر آروان',
    background: 'فارغ‌التحصیل مهندسی مکانیک، سردرگم در چرخه‌های تئوری و ویدیوهای بدون خروجی',
    quote: 'بزرگترین مشکل من دوره‌های ویدیویی بی‌انتهایی بود که تمام نمی‌شدند. در گل ارن به جای تئوری، منتور من دقیقا کدهای پروژه من را نقد کرد و کمک کرد بفهمم یک تک‌لید در مصاحبه چه سوالی می‌پرسد. تفاوت منتورینگ با پکیج آموزشی، مثل رانندگی واقعی در خیابان در مقایسه با مطالعه کتاب آیین‌نامه است.',
    programType: 'برنامه جامع بازار کار',
    track: 'مهندسی نرم‌افزار و وب',
    outcome: 'استخدام به عنوان مهندس بک‌اند با ارتقای دریافتی ۱۶۰٪',
    rating: 5,
    duration: '۴ ماه مسیر جامع',
    skills: ['Go', 'PostgreSQL', 'Docker', 'REST API', 'Redis'],
    avatarInitials: 'اف'
  },
  {
    id: 't-2',
    author: 'زهرا موسوی',
    currentRole: 'لید پروداکت دیزاینر در سوپراپ اسنپ',
    background: '۳ سال سابقه دیزاین در شرکت‌های سنتی و نیازمند به‌روزرسانی پورتفولیو برای تیم‌های محصولی مدرن',
    quote: 'من پروژه داشتم اما توان ارائه و تفکر پشت دیزاین را در پورتفولیوی خود نشان نداده بودم. برنامه خصوصی به من کمک کرد روی یک کیس‌استادی پرچالش با متریک‌های واقعی تمرکز کنم. در جلسه مصاحبه مدیران محصول دقیقا همان سوالاتی را پرسیدند که با منتورم تحلیل کرده بودیم.',
    programType: 'برنامه خصوصی تخصصی',
    track: 'طراحی و محصول',
    outcome: 'انتقال به تیم ارشد محصول پلتفرم با ترافیک میلیون‌کاربره',
    rating: 5,
    duration: '۱۰ هفته برنامه خصوصی',
    skills: ['Figma', 'Design Systems', 'Usability Testing', 'Product Analytics'],
    avatarInitials: 'زم'
  },
  {
    id: 't-3',
    author: 'سینا پناهی',
    currentRole: 'مهندس دوآپس و زیرساخت در تپسی',
    background: 'کارشناس شبکه سنتی که در ورود به مصاحبه‌های کوبرنتیز و کلود مکرراً رد می‌شد',
    quote: 'جلسه شبیه‌سازی مصاحبه و کدریویوی کانفیگ‌های کوبرنتیز من توسط منتور، نقطه عطف من بود. دقیقا نقاط ضعفی که در مصاحبه‌ها به من گوشزد نمی‌کردند را اینجا بی‌تعارف فهمیدم و اصلاح کردم. ظرف ۴۵ روز بعد از پایان مسیر، ۲ پیشنهاد شغلی قطعی روی میز داشتم.',
    programType: 'منتورینگ مصاحبه',
    track: 'زیرساخت و امنیت',
    outcome: 'دریافت ۲ پیشنهاد شغلی رسمی و استخدام در شرکت پیشرو حمل‌ونقل هوشمند',
    rating: 5,
    duration: '۳ جلسه شبیه‌سازی فشرده',
    skills: ['Kubernetes', 'CI/CD GitLab', 'Prometheus', 'Terraform'],
    avatarInitials: 'سپ'
  },
  {
    id: 't-4',
    author: 'نیلوفر رادمهر',
    currentRole: 'مهندس داده (Data Engineer) در دیجیکالا',
    background: 'کارشناس آمار و هوش تجاری سنتی با تسلط به SQL اما بدون دانش پایپ‌لاین‌های کلان‌داده',
    quote: 'ورود به مهندسی داده نیازمند درک عمیق از معماری‌های جریانی و دیتالیک است؛ چیزی که در آموزش‌های سطحی وب پیدا نمی‌شود. منتور گل ارن گام‌به‌گام در پیاده‌سازی پایپ‌لاین با Airflow و Spark در کنارم بود تا جایی که در تسک خانگی مصاحبه، بالاترین نمره فنی را کسب کردم.',
    programType: 'برنامه خصوصی تخصصی',
    track: 'داده و هوش مصنوعی',
    outcome: 'ورود موفق به موقعیت شغلی مهندسی داده با افزایش چشمگیر دریافتی',
    rating: 5,
    duration: '۱۲ هفته منتورینگ خصوصی',
    skills: ['Apache Spark', 'Airflow', 'Kafka', 'PostgreSQL', 'Python'],
    avatarInitials: 'نر'
  },
  {
    id: 't-5',
    author: 'پرهام شایان‌مهر',
    currentRole: 'مهندس فرانت‌اند در یک استارتاپ بین‌المللی ریموت',
    background: 'توسعه‌دهنده جونیور فرانت‌اند با تسلط پایه‌ای به جاوااسکریپت و بدون تجربه پرفورمنس و تست',
    quote: 'تفاوت گل ارن این بود که پروژه‌ای که ساختیم یک کلون ساده از یک سایت دیگر نبود؛ بلکه یک سیستم واقعی با تست‌نویسی، رندرینگ سمت سرور Next.js و معماری ماژولار بود. وقتی در مصاحبه لینک گیت‌هاب و لایودمو را باز کردم، روند مصاحبه کاملاً دگرگون شد.',
    programType: 'برنامه جامع بازار کار',
    track: 'مهندسی نرم‌افزار و وب',
    outcome: 'کسب پیشنهاد همکاری دلاری تمام‌وقت به عنوان فرانت‌اند دولوپر ریموت',
    rating: 5,
    duration: '۱۴ هفته مسیر جامع شغلی',
    skills: ['Next.js App Router', 'TypeScript', 'Tailwind', 'Vitest', 'Zustand'],
    avatarInitials: 'پش'
  },
  {
    id: 't-6',
    author: 'الهام سمیعی',
    currentRole: 'دیتاساینتیست و تحلیل‌گر ارشد در هلدینگ مالی',
    background: 'تحصیلات مهندسی صنایع، به دنبال ورود حرفه‌ای به حوزه یادگیری ماشین و تحلیل داده پیشرفته',
    quote: 'ارزنده‌ترین ویژگی منتورشیپ این بود که هر هفته با کسی حرف می‌زدم که سال‌ها در صنعت تجربه عملی داشت. منتور من به جای فرمول‌های ریاضی بی‌استفاده، مدل‌سازی بیزنسی و حل مسئله با داده‌های واقعی بازار ایران را به من آموخت.',
    programType: 'برنامه خصوصی تخصصی',
    track: 'داده و هوش مصنوعی',
    outcome: 'ارتقای موقعیت شغلی به سرپرستی تیم تحلیل و پیش‌بینی داده',
    rating: 5,
    duration: '۱۰ هفته برنامه تخصصی',
    skills: ['Python', 'Scikit-Learn', 'Power BI', 'SQL Server', 'Predictive Modeling'],
    avatarInitials: 'اس'
  }
];

export const MODULAR_SERVICES: ModularService[] = [
  {
    id: 'serv-consulting',
    title: 'مشاوره و طراحی مسیر شغلی',
    tagline: 'هدف‌گذاری دقیق و رفع سردرگمی',
    description: 'تحلیل رزومه، پیشینه تحصیلی/کاری و تعریف دقیق ایستگاه‌های یادگیری و نقشه راه برای ورود به حوزه مطلوب.',
    deliverable: 'گزارش مکتوب عارضه‌یابی مهارت و نقشه راه اختصاصی ۳ الی ۶ ماهه',
    estimatedSessions: '۱ تا ۲ جلسه اختصاصی',
    ctaText: 'درخواست ارزیابی مسیر'
  },
  {
    id: 'serv-mock-interview',
    title: 'منتورینگ رزومه و مصاحبه',
    tagline: 'آمادگی بی‌تعارف برای جلسه مصاحبه',
    description: 'شبیه‌سازی مصاحبه فنی و HR متناسب با موقعیت‌های واقعی، بررسی زنده چالش‌های فنی و استانداردسازی رزومه.',
    deliverable: 'فیدبک‌شیت جامع عملکرد در مصاحبه + رزومه اصلاح‌شده',
    estimatedSessions: '۲ تا ۳ جلسه متمرکز',
    ctaText: 'تنظیم شبیه‌سازی مصاحبه'
  },
  {
    id: 'serv-job-hunting',
    title: 'کمک اجرایی در جست‌وجوی کار',
    tagline: 'استراتژی درخواست کار و شبکه‌سازی',
    description: 'شناخت کانال‌های پنهان استخدام، ارتباط موثر با مدیران جذب در لینکدین و نحوه ارسال درخواست‌های با نرخ پاسخ بالا.',
    deliverable: 'چک‌لیست شخصی‌سازی‌شده کانال‌های استخدام و تمپلیت مکاتبات حرفه‌ای',
    estimatedSessions: 'همراهی گام‌به‌گام در فاز اپلای',
    ctaText: 'بررسی همراهی استخدامی'
  },
  {
    id: 'serv-experience-doc',
    title: 'بررسی و مستندسازی سابقه کار',
    tagline: 'ارائه شفاف تجارب و پروژه‌ها',
    description: 'بازخوانی پروژه‌های قبلی شما، تدوین Readme مهندسی‌شده و مستندسازی دقیق دستاوردهای فنی برای ارائه معتبر به کارفرما.',
    deliverable: 'پورتفولیو و گیت‌هاب ساختاریافته با ادبیات حرفه‌ای کارفرمایی',
    estimatedSessions: '۱ الی ۲ جلسه کدریویو و اصلاح مستندات',
    ctaText: 'ارزیابی مستندات پروژه'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'تفاوت برنامه خصوصی تخصصی با برنامه جامع بازار کار چیست؟',
    answer: 'برنامه خصوصی تخصصی بر روی یک حوزه معین (مانند مهندسی داده، بک‌اند، فرانت‌اند یا محصول) با منتور اختصاصی و تمرکز بر رفع خلاءهای فنی و ساخت پروژه متمرکز است. در مقابل، برنامه جامع بازار کار ایران یک مسیر پایان‌به‌پایان ۶ مرحله‌ای است که از ارزیابی اولیه و تقویت مهارت شروع شده و تا ساخت پورتفولیو، رزومه‌نویسی حرفه‌ای، شبیه‌سازی مصاحبه و همراهی تا استخدام ادامه می‌یابد.'
  },
  {
    id: 'faq-2',
    question: 'چطور بفهمم کدام مسیر برای من مناسب است؟',
    answer: 'اگر مبانی تخصص خود را بلد هستید و فقط می‌خواهید روی یک مهارت عمیق شوید یا پروژه استاندارد بسازید، برنامه خصوصی مناسب شماست. اما اگر به تازگی می‌خواهید وارد بازار کار شوید، تغییر مسیر شغلی دارید یا مصاحبه‌های شما به نتیجه نمی‌رسند، برنامه جامع با کل زنجیره آمادگی شغلی توصیه می‌شود. با کلیک بر روی فرم مشاوره می‌توانید بررسی اولیه را انجام دهید.'
  },
  {
    id: 'faq-3',
    question: 'آیا برنامه‌ها شخصی‌سازی می‌شوند؟',
    answer: 'بله، صد درصد. در گل ارن هیچ سرفصل کلی و ثابتی به همه افراد تحمیل نمی‌شود. نقطه شروع، سرعت پیشرفت، چالش‌های پروژه‌ها و تعداد جلسات متناسب با سطح فعلی، زمان آزاد هفتگی و هدف کاری شما در ابتدای کار توسط سرپرست مسیر طراحی و شخصی‌سازی می‌شود.'
  },
  {
    id: 'faq-4',
    question: 'نحوه برگزاری برنامه‌ها و ارتباط با منتور به چه صورت است؟',
    answer: 'برنامه‌ها به صورت آنلاین و از طریق پلتفرم ارتباطی اختصاصی، جلسات تعاملی تک‌به‌تک ویدیویی، کدریویوهای مکتوب بر روی ریپازیتوری‌های گیت‌هاب و پشتیبانی مستمر پیگیری می‌شوند. جلسات ضبط شده و بازخوردها به شکل مستند و قابل بازبینی ذخیره می‌گردند.'
  },
  {
    id: 'faq-5',
    question: 'شرایط و نحوه‌ی ارزیابی اولیه چگونه است؟ آیا هزینه‌ای دارد؟',
    answer: 'ارزیابی اولیه از طریق ثبت اطلاعات در فرم مشاوره انجام می‌شود. شرایط، رزومه و هدف شما توسط تیم فنی گل ارن بررسی شده و در صورت داشتن تناسب، جلسه معارفه و تعیین مسیر برگزار می‌گردد. پیش از تایید نهایی و روشن شدن تمام جزئیات مسیر و تعهدات، هیچ هزینه‌ای دریافت نمی‌شود.'
  }
];
