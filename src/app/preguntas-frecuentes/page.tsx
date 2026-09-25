import { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";
import { Badge } from "@/components/ui/Badge";
import { faqData } from "@/data/faq";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Fonoaudiología Infantil Empiria",
  description:
    "Respuestas a las preguntas más frecuentes sobre valoración fonoaudiológica, duración de sesiones, remisiones y acompañamiento familiar en Bogotá.",
  alternates: {
    canonical: "/preguntas-frecuentes",
  },
};

export default function PreguntasFrecuentesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center max-w-3xl">
        <Badge variant="lavender">Claridad para Familias</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] mt-4 tracking-tight">
          Preguntas Frecuentes
        </h1>
        <p className="text-base sm:text-lg text-[#3E3B52] mt-4 leading-relaxed">
          Encuentra respuestas claras y transparentes a las dudas más comunes sobre la atención fonoaudiológica particular en Centro Terapéutico Empiria.
        </p>
      </div>

      <FAQSection showHeader={false} />
    </div>
  );
}
