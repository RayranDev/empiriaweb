"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowRight, Sparkles, Heart, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getWhatsAppLink } from "@/data/contact";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F2EFFA]/70 via-white to-white pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Decorative organic background elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-[#E8E4F7]/60 via-[#A8C5E8]/20 to-[#C3B8E8]/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-[#B4C4EA]/25 rounded-full blur-2xl -z-10 pointer-events-none animate-soft-float" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-[#D4C9EE]/35 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Emotion, Authority, and Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="lavender" icon={<Sparkles className="w-3.5 h-3.5 text-[#5B8FD4]" />}>
                Centro Terapéutico Especializado · Modelia, Bogotá
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#2D2D3A] tracking-tight leading-[1.12]">
              Fonoaudiología Infantil{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B8FD4] via-[#8B7FD1] to-[#5B4B9E]">
                en Bogotá
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#5B4B9E] max-w-2xl mx-auto lg:mx-0 leading-snug">
              Convertimos las dificultades de comunicación y aprendizaje en confianza, autonomía y éxito escolar.
            </p>

            <p className="text-base sm:text-lg text-[#3E3B52] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Trabajamos con población infantil en procesos de habla, lenguaje, lectoescritura y aprendizaje, con atención individual y personalizada en cada sesión.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#proceso"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Quiero conocer el proceso
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={getWhatsAppLink("Hola, quisiera recibir información sobre el proceso de valoración fonoaudiológica infantil en Centro Terapéutico Empiria.")}
                isExternal
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                Hablar por WhatsApp
              </Button>
            </div>

            {/* Trust and reassurance badges */}
            <div className="pt-6 border-t border-[#E8E4F7] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-[#3E3B52]">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5B8FD4] shrink-0" />
                <span>Sesiones 100% individuales</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Heart className="w-4 h-4 text-[#8B7FD1] shrink-0" />
                <span>Acompañamiento a la familia</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Shield className="w-4 h-4 text-[#5B4B9E] shrink-0" />
                <span>Espacio seguro y respetuoso</span>
              </div>
            </div>
          </div>

          {/* Right Column: Organic Therapeutic Visual Composition */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Organic card with therapeutic illustration elements */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white via-[#F2EFFA] to-[#E8E4F7] p-8 shadow-xl border border-white/80 overflow-hidden">
                {/* Floating soft elements */}
                <div className="absolute -top-6 -right-6 w-28 h-28 bg-[#A8C5E8]/40 rounded-full blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#C3B8E8]/40 rounded-full blur-xl" />

                {/* Central Emblem Representation */}
                <div className="text-center space-y-5 relative z-10">
                  <div className="inline-flex p-5 rounded-3xl bg-white/95 shadow-lg border border-[#E8E4F7] animate-soft-float">
                    <Image
                      src="/logo/logo.png"
                      alt="Logo Oficial Centro Terapéutico Empiria"
                      width={240}
                      height={240}
                      className="w-44 sm:w-52 h-auto object-contain"
                      priority
                    />
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#5B4B9E]">
                      Centro Terapéutico Empiria
                    </h2>
                    <p className="text-xs sm:text-sm text-[#3E3B52] mt-1">
                      Un espacio seguro, profesional y humano para el desarrollo infantil.
                    </p>
                  </div>

                  {/* Micro reassurance card */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-left shadow-sm border border-[#E8E4F7] space-y-2 text-xs">
                    <p className="font-bold text-[#5B4B9E] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#5B8FD4]" />
                      Nuestro compromiso con tu familia:
                    </p>
                    <p className="text-[#3E3B52]">
                      “Comprendemos que cada niño aprende y se comunica de manera única. Diseñamos un camino pensado para él o ella.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating auxiliary stat pills */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-[#E8E4F7] items-center gap-2 text-xs font-bold text-[#2D2D3A]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5B8FD4]" />
                <span>Atención clínica + pedagógica</span>
              </div>

              <div className="hidden sm:flex absolute -top-4 -left-4 bg-white px-4 py-2 rounded-2xl shadow-lg border border-[#E8E4F7] items-center gap-2 text-xs font-bold text-[#5B4B9E]">
                <span className="w-2 h-2 rounded-full bg-[#8B7FD1]" />
                <span>Sin remisión médica previa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
