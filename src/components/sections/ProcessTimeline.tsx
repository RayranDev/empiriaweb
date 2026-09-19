"use client";

import React from "react";
import { FileText, Video, ClipboardCheck, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/contact";
import { SoftLeaf, LittleHeartDoodle } from "@/components/ui/OrganicDecorations";

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: "1",
      icon: <FileText className="w-5 h-5 text-[#5B8FD4]" />,
      numBg: "bg-[#5B8FD4]",
      title: "Toma de datos",
      description: "Recopilamos información básica del niño o niña y conocemos el motivo de consulta.",
    },
    {
      num: "2",
      icon: <Video className="w-5 h-5 text-[#8B7FD1]" />,
      numBg: "bg-[#8B7FD1]",
      title: "Reunión virtual de acercamiento",
      description: "Explicamos nuestra metodología, resolvemos preguntas y conocemos a la profesional.",
    },
    {
      num: "3",
      icon: <ClipboardCheck className="w-5 h-5 text-[#5B4B9E]" />,
      numBg: "bg-[#5B4B9E]",
      title: "Valoración presencial",
      description: "Evaluamos las habilidades comunicativas y de aprendizaje para identificar fortalezas y necesidades.",
    },
    {
      num: "4",
      icon: <Sparkles className="w-5 h-5 text-[#8B7FD1]" />,
      numBg: "bg-[#7385D6]",
      title: "Inicio del proceso de intervención",
      description: "Diseñamos un plan personalizado según los resultados de la valoración.",
    },
  ];

  return (
    <section id="proceso" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative leaf accents */}
      <div className="absolute top-12 left-4 pointer-events-none opacity-60">
        <SoftLeaf className="w-10 h-10" color="#8B7FD1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-[0.18em] text-[#8B7FD1] uppercase">
            NUESTRO PROCESO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight mt-1">
            Un camino compartido
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3E3B52]">
            Te acompañamos paso a paso para que te sientas informado, seguro y tranquilo.
          </p>

          {/* Floating script callout to the right */}
          <div className="hidden md:flex items-center gap-1.5 absolute -right-20 top-4 rotate-3 bg-[#F2EFFA] px-3.5 py-1.5 rounded-full border border-[#D4C9EE] shadow-xs">
            <span className="font-script text-xl text-[#5B4B9E] font-bold">
              Aquí también crecen confianzas
            </span>
            <LittleHeartDoodle className="w-3.5 h-3.5 text-[#8B7FD1]" />
          </div>
        </div>

        {/* 4 Connected Milestones with Dotted Line */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {/* Dotted path on desktop */}
          <div className="hidden lg:block absolute top-7 left-14 right-14 border-t-2 border-dashed border-[#C3B8E8] -z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Badge with step number and icon */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className={`w-9 h-9 rounded-full ${step.numBg} text-white font-black text-sm flex items-center justify-center shadow-xs`}
                >
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8E4F7] shadow-xs flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#2D2D3A] leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm text-[#3E3B52] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Central CTA: Quiero iniciar el proceso */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            href={getWhatsAppLink("Hola, deseo iniciar el proceso fonoaudiológico en Centro Terapéutico Empiria.")}
            isExternal
            className="bg-[#5B4B9E] hover:bg-[#4E3F88] shadow-md shadow-[#5B4B9E]/20"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Quiero iniciar el proceso
          </Button>
        </div>
      </div>
    </section>
  );
};
