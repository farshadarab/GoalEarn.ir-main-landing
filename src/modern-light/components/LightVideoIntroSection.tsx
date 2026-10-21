import React, { useRef, useState } from 'react';
import { VIDEO_URL, VIDEO_POSTER_URL, CONSULTING_FORM_URL } from '../../data/landingData.ts';
import { Play, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

export const LightVideoIntroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((err) => {
        console.log('Video playback error', err);
      });
    }
  };

  return (
    <section id="intro-video-light" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs sm:text-sm font-semibold text-amber-800 mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>ویدیوی معرفی رویکرد گل ارن</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span>آمادگی ورود و ارتقا در بازار کار</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            چرا دوره‌های سنتی دیگر جواب نمی‌دهند؟
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            در این ویدیو، تفاوت مدل منتورشیپ فردی و مبتنی بر پروژه گل ارن با پکیج‌های آموزشی متداول و نحوه آماده‌سازی شما برای مصاحبه‌های استخدامی توضیح داده شده است.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl group">
          
          <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
            
            {/* HTML5 Video Element */}
            <video
              ref={videoRef}
              src={VIDEO_URL}
              poster={VIDEO_POSTER_URL}
              controls
              playsInline
              preload="metadata"
              onPlay={() => {
                setIsPlaying(true);
                setHasStarted(true);
              }}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-contain bg-black"
            >
              مرورگر شما از پخش مستقیم ویدیو پشتیبانی نمی‌کند. می‌توانید ویدیو را از لینک دانلود مشاهده کنید.
            </video>

            {/* Custom Overlay with Official Poster Banner */}
            {!hasStarted && (
              <div 
                onClick={handleTogglePlay}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer group/overlay overflow-hidden"
              >
                <img 
                  src={VIDEO_POSTER_URL}
                  alt="کاور معرفی برنامه مسیر شغلی گل ارن"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/overlay:scale-105"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-slate-900/35 group-hover/overlay:bg-slate-900/20 transition-colors backdrop-blur-[1px]"></div>

                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/40 transition-all duration-300 group-hover/overlay:scale-110 mb-4 ring-4 ring-amber-400/30">
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 fill-slate-950 translate-x-0.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white bg-slate-900/90 px-4 py-2 rounded-full border border-slate-700/80 shadow-lg backdrop-blur-sm">
                    مشاهده ویدیوی معرفی رویکرد گل ارن
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Key Chapters strip */}
          <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5">بخش اول:</strong>
                <span className="text-slate-600">چرا گواهی‌نامه بدون پروژه قابل دفاع ارزش استخدامی ندارد؟</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5">بخش دوم:</strong>
                <span className="text-slate-600">تفاوت ساختاری برنامه خصوصی با مسیر جامع ورود به بازار کار</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block mb-0.5">بخش سوم:</strong>
                <span className="text-slate-600">فرآیند مرحله‌به‌مرحله ارزیابی اولیه تا معرفی به فرصت‌های شغلی</span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA below Video */}
        <div className="mt-8 text-center">
          <a
            href={CONSULTING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/15"
          >
            <span>ورود به فرم مشاوره و ارزیابی مسیر</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
