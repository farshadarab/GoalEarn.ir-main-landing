import React from 'react';
import { Route, Layers, MessagesSquare, Award } from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const differentiators = [
    {
      icon: Route,
      num: '۰۱',
      title: 'مسیر متناسب با هدف و نقطه شروع',
      description:
        'هیچ دو نفری پیشینه و زمان یکسان ندارند. به جای دوره‌های قالبی و یک‌دست، ابتدا نقطه شروع، خلاءها و هدف شغلی شما با دقت سنجیده شده و مسیر اختصاصی شما ترسیم می‌شود.',
      contrastPoint: 'پایان سرفصل‌های انبوه و دوره‌های طولانی بی‌تناسب با بازار کار',
    },
    {
      icon: Layers,
      num: '۰۲',
      title: 'تمرین و خروجی قابل ارائه (پروژه ملموس)',
      description:
        'کارفرمایان به گواهی‌نامه اعتماد ندارند، بلکه کد تمیز، تفکر حل مسئله و پروژه قابل دفاع می‌خواهند. در گل ارن خروجی شما یک محصول یا تسک صنعتی معتبر است که روی گیت‌هاب می‌درخشد.',
      contrastPoint: 'جایگزینی تئوری‌زدگی با تسک‌های پروداکشن واقعی',
    },
    {
      icon: MessagesSquare,
      num: '۰۳',
      title: 'بازخورد و همراهی تخصصی',
      description:
        'یادگیری خودآموز به دلیل نبود بازخورد به بیراهه می‌رود. منتورهای گل ارن از میان متخصصان فعال اکوسیستم فناوری ایران هستند که کدهای شما را نقد کرده و موانع فکری‌تان را باز می‌کنند.',
      contrastPoint: 'جلسات تک‌به‌تک و کدریویوهای ریزبینانه به جای چت‌بات‌ها یا ویدیوهای ضبط‌شده',
    },
    {
      icon: Award,
      num: '۰۴',
      title: 'پیوند توسعه مهارت با آمادگی شغلی',
      description:
        'مهارت فنی به تنهایی ضامن استخدام نیست. ما یادگیری فنی را مستقیماً به استانداردهای رزومه، مهارت‌های نرم، توانمندی حل مسئله در جلسه مصاحبه و نحوه مذاکره حقوق متصل می‌کنیم.',
      contrastPoint: 'اتصال مستقیم مهارت‌آموزی به نقطه استخدام و قبولی در مصاحبه',
    },
  ];

  return (
    <section id="why-goalearn" className="py-20 lg:py-28 bg-slate-900/40 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-amber-400 mb-3">
            <span>تمایز گل ارن</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>رویکرد منتورشیپ مدرن</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            چرا گل ارن؟ ۴ اصل کلیدی در رویکرد ما
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            گل ارن یک آموزشگاه عمومی یا کانال دوره‌فروشی نیست. مدل ما بر پایه منتورشیپ فردی و اتصال بی‌واسطه به نیاز واقعی استخدام‌کنندگان استوار است.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-amber-300/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <span>{item.contrastPoint}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
