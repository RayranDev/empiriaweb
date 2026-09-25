import { Metadata } from "next";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FAQSection } from "@/components/sections/FAQSection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Nuestro Proceso | 4 Pasos Hacia el Bienestar de tu Hijo",
  description:
    "Descubre cómo iniciamos en Centro Terapéutico Empiria: toma de datos, reunión virtual de acercamiento, valoración presencial e intervención fonoaudiológica personalizada.",
  alternates: {
    canonical: "/nuestro-proceso",
  },
};

export default function ProcesoPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center max-w-3xl">
        <Badge variant="lavender">Metodología Paso a Paso</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] mt-4 tracking-tight">
          Un proceso pensado para darte tranquilidad y certidumbre
        </h1>
        <p className="text-base sm:text-lg text-[#3E3B52] mt-4 leading-relaxed">
          Desde el primer contacto hasta el seguimiento con el colegio, diseñamos una experiencia transparente, afectuosa y profesional.
        </p>
      </div>

      <ProcessTimeline />
      <FAQSection />
    </div>
  );
}
