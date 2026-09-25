import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { SpaceSection } from "@/components/sections/SpaceSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FeatureHubCards } from "@/components/sections/FeatureHubCards";
import { EmotionalBreak } from "@/components/sections/EmotionalBreak";
import { InstagramFeedSection } from "@/components/sections/InstagramFeedSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <SpaceSection />
      <ProcessTimeline />
      <FeatureHubCards />
      <EmotionalBreak />
      <InstagramFeedSection />
      <ContactSection />
    </>
  );
}
