"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Mail } from "lucide-react";
import { getWhatsAppLink, contactData } from "@/data/contact";
import { Button } from "@/components/ui/Button";
import { SoftLeaf, LittleHeartDoodle, SparkleStar } from "@/components/ui/OrganicDecorations";

export const EmotionalBreak: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F2EFFA]/60 via-[#E8E4F7]/40 to-white relative overflow-hidden">
      {/* Background soft ambient glowing circles */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Charming Vector Children Illustration with Floating Heart */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/3] rounded-3xl overflow-hidden bg-white/80 p-3 shadow-xs border border-white">
              {/* Little Floating Heart above children */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 animate-soft-float">
                <LittleHeartDoodle className="w-5 h-5 text-[#8B7FD1]" />
              </div>
              <Image
                src="/images/decorative/children-playing.jpg"
                alt="Niños interactuando y jugando en Centro Terapéutico Empiria"
                fill
                sizes="320px"
                className="object-contain object-center rounded-2xl"
              />
            </div>
          </div>

          {/* Center: Title, Description and Dual CTAs */}
          <div className="lg:col-span-5 text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2D2D3A] tracking-tight leading-tight">
              Cada pequeño avance cuenta.
            </h2>

            <p className="text-sm sm:text-base text-[#3E3B52] leading-relaxed max-w-md mx-auto">
              Estamos aquí para acompañarte a comprender las necesidades de tu hijo o hija y construir juntos un proceso pensado para él o ella.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="whatsapp"
                size="md"
                href={getWhatsAppLink("Hola, deseo conversar sobre el proceso de mi hijo/a con el equipo de Empiria.")}
                isExternal
                className="w-full sm:w-auto shadow-sm"
                leftIcon={<MessageCircle className="w-4 h-4 fill-white/20" />}
              >
                Conversemos por WhatsApp
              </Button>

              <Button
                variant="outline"
                size="md"
                href="/contacto"
                className="w-full sm:w-auto border-[#8B7FD1]/50 text-[#5B4B9E] bg-white shadow-xs"
                leftIcon={<Mail className="w-4 h-4 text-[#5B8FD4]" />}
              >
                Escríbenos
              </Button>
            </div>
          </div>

          {/* Right: Floating Speech Bubble with Script Accent and Botanical Leaves */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end relative">
            <div className="relative">
              {/* Botanical leaves around badge */}
              <div className="absolute -top-6 -right-4 pointer-events-none opacity-80">
                <SoftLeaf className="w-10 h-10" color="#8B7FD1" />
              </div>
              <div className="absolute -bottom-6 -left-4 pointer-events-none opacity-80">
                <SoftLeaf className="w-8 h-8" color="#5B8FD4" flip />
              </div>
              <div className="absolute top-1/2 -right-6 pointer-events-none">
                <SparkleStar className="w-3.5 h-3.5" color="#B4C4EA" />
              </div>

              {/* Speech bubble badge */}
              <div className="bg-white/95 backdrop-blur-xs p-5 sm:p-6 rounded-3xl shadow-sm border border-[#E8E4F7] text-center max-w-[220px]">
                <p className="font-script text-xl sm:text-2xl text-[#5B4B9E] font-bold leading-snug">
                  Comunicar también es crecer
                </p>
                <div className="mt-2 flex justify-center">
                  <LittleHeartDoodle className="w-4 h-4 text-[#8B7FD1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
