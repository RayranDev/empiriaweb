import { Metadata } from "next";
import { TeamSection } from "@/components/sections/TeamSection";
import { WhyEmpiriaSection } from "@/components/sections/WhyEmpiriaSection";
import { EmotionalBreak } from "@/components/sections/EmotionalBreak";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/contact";
import { MessageCircle, Heart, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Enfoque y Equipo Profesional",
  description:
    "Conoce al equipo fonoaudiológico de Centro Terapéutico Empiria en Bogotá. Fonoaudiología infantil basada en la calidez, la evidencia y el respeto al desarrollo de cada niño.",
};

export default function NosotrosPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center max-w-3xl">
        <Badge variant="lavender">Nuestra Identidad y Enfoque</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] mt-4 tracking-tight">
          Un espacio donde el cuidado y la ciencia se dan la mano
        </h1>
        <p className="text-base sm:text-lg text-[#3E3B52] mt-4 leading-relaxed">
          Centro Terapéutico Empiria nace de la convicción de que los procesos fonoaudiológicos infantiles son, ante todo, una construcción de confianza y acompañamiento sensible junto a las familias.
        </p>
      </div>

      <TeamSection />
      <WhyEmpiriaSection />
      <EmotionalBreak />

      {/* Philosophy callout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#5B4B9E]">
          ¿Quieres agendar una reunión virtual de acercamiento?
        </h2>
        <p className="text-base text-[#3E3B52]">
          Conoce a la profesional que podría acompañar a tu hijo y resuelve tus preguntas antes de iniciar cualquier valoración.
        </p>
        <Button
          variant="whatsapp"
          size="lg"
          href={getWhatsAppLink("Hola, quisiera agendar una reunión virtual de acercamiento con el equipo de Empiria.")}
          isExternal
          leftIcon={<MessageCircle className="w-5 h-5" />}
        >
          Conversar con el equipo por WhatsApp
        </Button>
      </div>
    </div>
  );
}
