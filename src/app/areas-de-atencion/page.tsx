import { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StagesSection } from "@/components/sections/StagesSection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Áreas de Atención | Habla, Lenguaje, Comunicación y Aprendizaje",
  description:
    "Descubre nuestras 5 áreas de valoración e intervención fonoaudiológica infantil en Bogotá: Habla, Lenguaje, Comunicación, Lectoescritura y Aprendizaje.",
};

export default function AreasPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center max-w-3xl">
        <Badge variant="lavender">Servicios Fonoaudiológicos</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] mt-4 tracking-tight">
          Acompañamiento especializado en el desarrollo infantil
        </h1>
        <p className="text-base sm:text-lg text-[#3E3B52] mt-4 leading-relaxed">
          Cada una de nuestras áreas de atención está estructurada con bases clínicas y un enfoque pedagógico cálido, individual y respetuoso.
        </p>
      </div>

      <ServicesSection />
      <StagesSection />
    </div>
  );
}
