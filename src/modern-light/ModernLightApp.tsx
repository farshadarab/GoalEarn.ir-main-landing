import React from 'react';
import { LightHeroSection } from './components/LightHeroSection.tsx';
import { LightVideoIntroSection } from './components/LightVideoIntroSection.tsx';
import { LightCorePillarsSection } from './components/LightCorePillarsSection.tsx';
import { LightDifferentiatorsSection } from './components/LightDifferentiatorsSection.tsx';
import { LightSpecializedProgramsSection } from './components/LightSpecializedProgramsSection.tsx';
import { LightRoadmapFlowSection } from './components/LightRoadmapFlowSection.tsx';
import { LightEvidenceSection } from './components/LightEvidenceSection.tsx';
import { LightComplementaryServicesSection } from './components/LightComplementaryServicesSection.tsx';
import { LightInternationalBanner } from './components/LightInternationalBanner.tsx';
import { LightFaqSection } from './components/LightFaqSection.tsx';
import { LightFinalCtaSection } from './components/LightFinalCtaSection.tsx';

interface ModernLightAppProps {
  onToggleTheme?: () => void;
}

export const ModernLightApp: React.FC<ModernLightAppProps> = ({ onToggleTheme }) => {
  const handleSelectPrivateOffering = () => {
    const el = document.getElementById('private-programs-light');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectComprehensiveOffering = () => {
    const el = document.getElementById('comprehensive-roadmap-light');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-amber-300 selection:text-slate-950 overflow-x-hidden w-full">
      <main className="flex-grow">
        {/* HERO SECTION */}
        <LightHeroSection />

        {/* INTRODUCTORY VIDEO SECTION */}
        <LightVideoIntroSection />

        {/* CORE VALUE PILLARS */}
        <LightCorePillarsSection
          onSelectPrivate={handleSelectPrivateOffering}
          onSelectComprehensive={handleSelectComprehensiveOffering}
        />

        {/* DIFFERENTIATORS */}
        <LightDifferentiatorsSection />

        {/* SPECIALIZED PROGRAMS PREVIEW (14 OFFICIAL ACTIVE PROGRAMS & LINKS) */}
        <LightSpecializedProgramsSection />

        {/* COMPREHENSIVE ROADMAP FLOW (6 STAGES) */}
        <LightRoadmapFlowSection onOpenAssessment={() => {}} />

        {/* EVIDENCE & SOCIAL PROOF WITH TESTIMONIAL CAROUSEL */}
        <LightEvidenceSection onOpenAssessment={() => {}} />

        {/* COMPLEMENTARY SERVICES (MODULAR LAYER) */}
        <LightComplementaryServicesSection onSelectService={() => {}} />

        {/* INTERNATIONAL PATHWAY BRIDGE (BANNER) */}
        <LightInternationalBanner />

        {/* FAQ ACCORDION */}
        <LightFaqSection />

        {/* FINAL CTA SECTION */}
        <LightFinalCtaSection />
      </main>
    </div>
  );
};

export default ModernLightApp;
