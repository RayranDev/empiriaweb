"use client";

import React from "react";
import { HeartHandshake, Home, MessageSquareQuote, School, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const ParentsSection: React.FC = () => {
  const parentalPillars = [
    {
      icon: <MessageSquareQuote className="w-6 h-6 text-[#5B8FD4]" />,
      title: "Retroalimentación al final de cada sesión",
      description:
        "Dedicamos un espacio reservado para dialogar sobre los descubrimientos de la sesión, resolver inquietudes y compartir logros sin prisas.",
    },
    {
      icon: <Home className="w-6 h-6 text-[#8B7FD1]" />,
      title: "Orientaciones prácticas para el hogar",
      description:
        "Brindamos pautas sencillas y respetuosas para que el juego y las rutinas cotidianas se conviertan en los mejores aliados del desarrollo comunicativo.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#5B4B9E]" />,
      title: "Un equipo que camina a tu lado",
      description:
        "Entendemos la incertidumbre de los cuidadores. Nuestro propósito es escucharte y construir juntos un camino de comprensión y serenidad.",
    },
    {
      icon: <School className="w-6 h-6 text-[#5B8FD4]" />,
      title: "Articulación con el colegio",
      description:
        "Cuando el caso lo amerita, establecemos contacto con docentes y orientadores para alinear estrategias que favorezcan su bienestar escolar.",
    },
  ];

  return (
    <section id="familias" className="py-16 sm:py-24 bg-[#F2EFFA]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lavender">Acompañamiento a Cuidadores</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            Tu participación también hace parte del proceso
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            La terapia no ocurre en un entorno aislado: florece cuando la familia cuenta con la orientación y la tranquilidad necesarias para acompañar con amor y confianza.
          </p>
        </div>

        {/* 4 Collaborative Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {parentalPillars.map((pillar, i) => (
            <Card
              key={i}
              variant="default"
              className="p-6 sm:p-7 bg-white border-[#E8E4F7] hover:border-[#8B7FD1]/40 shadow-sm transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F2EFFA] flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-[#2D2D3A] leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Reassurance Callout Box */}
        <div className="mt-12 max-w-3xl mx-auto rounded-3xl bg-white p-6 sm:p-8 border border-[#D4C9EE]/60 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-[#E8E4F7] text-[#5B4B9E] shrink-0 mt-1">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
            <p className="font-bold text-[#5B4B9E] text-base">
              Una mirada que suma, nunca que culpabiliza
            </p>
            <p className="mt-1">
              Las dificultades en el habla o el aprendizaje no son responsabilidad de un descuido familiar ni de una falta de dedicación. En Empiria te acompañamos a comprender lo que tu hijo o hija necesita para desplegar todo su potencial en un clima de afecto y seguridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
