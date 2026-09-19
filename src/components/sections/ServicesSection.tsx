"use client";

import React from "react";
import Link from "next/link";
import {
  Volume2,
  MessageSquare,
  Users,
  BookOpen,
  Sparkles,
  ArrowRight,
  Info,
  MessageCircle,
} from "lucide-react";
import { servicesData, ServiceArea } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/contact";

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: ServiceArea["iconName"]) => {
    const iconProps = { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case "Volume2":
        return <Volume2 {...iconProps} className={`${iconProps.className} text-[#5B8FD4]`} />;
      case "MessageSquare":
        return <MessageSquare {...iconProps} className={`${iconProps.className} text-[#8B7FD1]`} />;
      case "Users":
        return <Users {...iconProps} className={`${iconProps.className} text-[#5B4B9E]`} />;
      case "BookOpen":
        return <BookOpen {...iconProps} className={`${iconProps.className} text-[#5B8FD4]`} />;
      case "Sparkles":
        return <Sparkles {...iconProps} className={`${iconProps.className} text-[#8B7FD1]`} />;
      default:
        return <Sparkles {...iconProps} className={`${iconProps.className} text-[#5B8FD4]`} />;
    }
  };

  return (
    <section id="areas" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lavender">Áreas de Atención Especializada</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            ¿Qué podemos acompañar?
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Abordamos de manera integral las habilidades comunicativas y cognitivas de la infancia, respetando el momento evolutivo de cada niño o niña.
          </p>
        </div>

        {/* Pedagogical disclaimer banner */}
        <div className="mt-8 mb-12 max-w-3xl mx-auto bg-[#F2EFFA] border border-[#D4C9EE] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
          <Info className="w-5 h-5 text-[#8B7FD1] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#5B4B9E]">Acompañamiento respetuoso y sin etiquetas</p>
            <p className="mt-0.5">
              Las dificultades mencionadas a continuación <strong>no constituyen un diagnóstico automático</strong> ni significan necesariamente un trastorno. Cada niño es único y debe ser valorado de forma individualizada.
            </p>
          </div>
        </div>

        {/* Grid of 5 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`group flex flex-col ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <Card
                variant="default"
                className="flex-1 flex flex-col justify-between p-6 sm:p-8 bg-white border-[#E8E4F7] hover:border-[#8B7FD1]/40 transition-all duration-300"
              >
                <div>
                  {/* Icon and Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2EFFA] flex items-center justify-center border border-[#E8E4F7] group-hover:bg-[#E8E4F7] transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8B7FD1]">
                      Área 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D3A] group-hover:text-[#5B4B9E] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-[#3E3B52] font-medium leading-relaxed">
                    “{service.shortDescription}”
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#3E3B52]/90 leading-relaxed line-clamp-3">
                    {service.fullDescription}
                  </p>

                  {/* Signs bullets */}
                  <div className="mt-4 pt-4 border-t border-[#F2EFFA]">
                    <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wide mb-2">
                      Señales para consultar:
                    </p>
                    <ul className="space-y-1.5 text-xs text-[#3E3B52]">
                      {service.signsToConsult.slice(0, 3).map((sign, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B7FD1] mt-1.5 shrink-0" />
                          <span className="line-clamp-2">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-4 border-t border-[#E8E4F7]">
                  <Link
                    href={`/areas-de-atencion/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Conocer esta área</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Post-Services Conversion Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#F2EFFA] via-[#E8E4F7]/60 to-[#F2EFFA] p-8 sm:p-10 border border-[#D4C9EE]/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#5B4B9E]">
              ¿Tienes dudas sobre alguna de estas señales en tu hijo o hija?
            </h3>
            <p className="text-sm sm:text-base text-[#3E3B52] max-w-2xl">
              No esperes con incertidumbre. Una conversación inicial nos permite orientarte con claridad y calidez.
            </p>
          </div>

          <Button
            variant="whatsapp"
            size="md"
            href={getWhatsAppLink("Hola, estuve leyendo las áreas de atención de Empiria y tengo dudas sobre el proceso de mi hijo/a.")}
            isExternal
            leftIcon={<MessageCircle className="w-4 h-4" />}
          >
            Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};
