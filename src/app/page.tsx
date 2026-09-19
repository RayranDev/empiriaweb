import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyEmpiriaSection } from "@/components/sections/WhyEmpiriaSection";
import { StagesSection } from "@/components/sections/StagesSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { EmotionalBreak } from "@/components/sections/EmotionalBreak";
import { TeamSection } from "@/components/sections/TeamSection";
import { ParentsSection } from "@/components/sections/ParentsSection";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { InstagramFeedSection } from "@/components/sections/InstagramFeedSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyEmpiriaSection />
      <StagesSection />
      <ProcessTimeline />
      <EmotionalBreak />
      <TeamSection />
      <ParentsSection />
      <ResourcesPreview />
      <InstagramFeedSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
