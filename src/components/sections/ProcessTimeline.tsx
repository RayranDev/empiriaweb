"use client";

import React from "react";
import { ArrowRight, MessageCircle, FileText, Video, ClipboardCheck, Sparkles } from "lucide-react";
import { processSteps } from "@/data/process";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/contact";

export const ProcessTimeline: React.FC = () => {
  const getStepIcon = (num: number) => {
    const props = { className: "w-5 h-5 text-white" };
    switch (num) {
      case 1:
        return <FileText {...props} />;
      case 2:
        return <Video {...props} />;
      case 3:
        return <ClipboardCheck {...props} />;
      case 4:
        return <Sparkles {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="proceso" className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F2EFFA]/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lavender">Ruta de Atención Clara y Transparente</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            ¿Cómo iniciamos?
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Un proceso paso a paso diseñado para brindar tranquilidad a las familias desde el primer contacto hasta el desarrollo continuo de las sesiones.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-[#5B8FD4] via-[#8B7FD1] to-[#5B4B9E] -z-0" />

          {processSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="relative z-10 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-7 border border-[#E8E4F7] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Step badge with circle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5B8FD4] to-[#8B7FD1] flex items-center justify-center shadow-md">
                    {getStepIcon(step.stepNumber)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E8E4F7] text-[#5B4B9E]">
                    Paso {step.stepNumber}
                  </span>
                </div>

                <span className="text-[11px] font-semibold tracking-wider text-[#8B7FD1] uppercase">
                  {step.tagline}
                </span>

                <h3 className="mt-1 text-lg sm:text-xl font-bold text-[#2D2D3A]">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-5 pt-4 border-t border-[#F2EFFA]">
                  <ul className="space-y-1.5 text-xs text-[#3E3B52]">
                    {step.detailPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#5B8FD4] font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E8E4F7] flex items-center justify-between text-[11px] text-[#3E3B52]">
                <span className="font-semibold text-[#5B4B9E]">Modalidad: {step.modality}</span>
                <span>{step.estimatedDuration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center space-y-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={getWhatsAppLink("Hola, deseo iniciar el proceso para la valoración fonoaudiológica de mi hijo/a en Centro Terapéutico Empiria.")}
              isExternal
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Quiero iniciar el proceso
            </Button>

            <Button
              variant="whatsapp"
              size="lg"
              href={getWhatsAppLink()}
              isExternal
              leftIcon={<MessageCircle className="w-5 h-5" />}
            >
              Hablar por WhatsApp
            </Button>
          </div>
          <p className="text-xs text-[#3E3B52]">
            Atendemos de manera particular en Modelia, Bogotá. No requieres remisión previa.
          </p>
        </div>
      </div>
    </section>
  );
};
