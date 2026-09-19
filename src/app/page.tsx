import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FeatureHubCards } from "@/components/sections/FeatureHubCards";
import { EmotionalBreak } from "@/components/sections/EmotionalBreak";
import { InstagramFeedSection } from "@/components/sections/InstagramFeedSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <ProcessTimeline />
      <FeatureHubCards />
      <EmotionalBreak />
      <InstagramFeedSection />
      <ContactSection />
    </>
  );
}
