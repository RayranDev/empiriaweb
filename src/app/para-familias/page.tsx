import { Metadata } from "next";
import { ParentsSection } from "@/components/sections/ParentsSection";
import { EmotionalBreak } from "@/components/sections/EmotionalBreak";
import { ResourcesPreview } from "@/components/sections/ResourcesPreview";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Para Familias | Tu Participación También Hace Parte del Proceso",
  description:
    "Estrategias, retroalimentación y acompañamiento para padres en el desarrollo del habla, lenguaje y aprendizaje de sus hijos en Centro Terapéutico Empiria.",
  alternates: {
    canonical: "/para-familias",
  },
};

export default function ParaFamiliasPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center max-w-3xl">
        <Badge variant="lavender">Acompañamiento a Cuidadores</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] mt-4 tracking-tight">
          Caminamos junto a ti en cada etapa
        </h1>
        <p className="text-base sm:text-lg text-[#3E3B52] mt-4 leading-relaxed">
          En Centro Terapéutico Empiria no solo intervenimos con el niño: construimos herramientas conjuntas para que en casa se sientan respaldados, tranquilos y seguros.
        </p>
      </div>

      <ParentsSection />
      <EmotionalBreak />
      <ResourcesPreview />
    </div>
  );
}
