import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { VideoIntroSection } from './components/VideoIntroSection.tsx';
import { CorePillarsSection } from './components/CorePillarsSection.tsx';
import { DifferentiatorsSection } from './components/DifferentiatorsSection.tsx';
import { SpecializedProgramsSection } from './components/SpecializedProgramsSection.tsx';
import { RoadmapFlowSection } from './components/RoadmapFlowSection.tsx';
import { EvidenceSection } from './components/EvidenceSection.tsx';
import { ComplementaryServicesSection } from './components/ComplementaryServicesSection.tsx';
import { InternationalBanner } from './components/InternationalBanner.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { ModernLightApp } from './modern-light/index.ts';
import { Sun, Moon, Sparkles } from 'lucide-react';

export default function App() {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('theme') === 'light') return 'light';
      const saved = localStorage.getItem('goalearn_theme');
      if (saved === 'light') return 'light';
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const nextTheme = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(nextTheme);
    localStorage.setItem('goalearn_theme', nextTheme);
  };

  const handleSelectPrivateOffering = () => {
    const el = document.getElementById('private-programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectComprehensiveOffering = () => {
    const el = document.getElementById('comprehensive-roadmap');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {themeMode === 'light' ? (
        <ModernLightApp onToggleTheme={toggleTheme} />
      ) : (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 overflow-x-hidden w-full">
          <main className="flex-grow">
            {/* HERO SECTION */}
            <HeroSection />

            {/* INTRODUCTORY VIDEO SECTION (Official video with interactive player) */}
            <VideoIntroSection />

            {/* CORE VALUE PILLARS (TWO PRIMARY OFFERINGS) */}
            <CorePillarsSection
              onSelectPrivate={handleSelectPrivateOffering}
              onSelectComprehensive={handleSelectComprehensiveOffering}
            />

            {/* DIFFERENTIATORS ("چرا گل ارن؟") */}
            <DifferentiatorsSection />

            {/* SPECIALIZED PROGRAMS PREVIEW (14 OFFICIAL ACTIVE PROGRAMS & LINKS) */}
            <SpecializedProgramsSection />

            {/* COMPREHENSIVE ROADMAP FLOW (6 STAGES) */}
            <RoadmapFlowSection onOpenAssessment={() => {}} />

            {/* EVIDENCE & SOCIAL PROOF WITH INTERACTIVE TESTIMONIAL CAROUSEL */}
            <EvidenceSection onOpenAssessment={() => {}} />

            {/* COMPLEMENTARY SERVICES (MODULAR LAYER) */}
            <ComplementaryServicesSection onSelectService={() => {}} />

            {/* INTERNATIONAL PATHWAY BRIDGE (BANNER) */}
            <InternationalBanner />

            {/* FAQ ACCORDION */}
            <FaqSection />

            {/* FINAL CTA SECTION (Links to consulting-form in new tab) */}
            <FinalCtaSection />
          </main>
        </div>
      )}

      {/* Floating Theme Switcher: allows user to preview Dark Slate vs Modern Light folder */}
      <aside aria-label="تغییر تم طراحی" className="fixed bottom-5 left-5 z-50">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={themeMode === 'dark' ? 'تغییر به نسخه مدرن روشن' : 'تغییر به نسخه دارک اسلیت پیش‌فرض'}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full text-xs font-bold transition-all shadow-2xl cursor-pointer border backdrop-blur-md ${
            themeMode === 'dark'
              ? 'bg-slate-900/90 text-amber-400 border-slate-700 hover:bg-slate-800 ring-2 ring-amber-400/20'
              : 'bg-white/95 text-slate-800 border-slate-300 hover:bg-slate-50 ring-2 ring-amber-500/20 shadow-slate-300'
          }`}
          title={themeMode === 'dark' ? 'مشاهده نسخه مدرن روشن (Modern Light)' : 'مشاهده نسخه دارک اسلیت (Dark Slate)'}
        >
          {themeMode === 'dark' ? (
            <>
              <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>نسخه مدرن روشن</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-slate-700" />
              <span>نسخه دارک اسلیت</span>
            </>
          )}
        </button>
      </aside>
    </>
  );
}
