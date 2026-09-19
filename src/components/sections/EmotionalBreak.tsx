"use client";

import React from "react";
import Image from "next/image";
import { getWhatsAppLink } from "@/data/contact";
import { Button } from "@/components/ui/Button";
import {
  WhatsAppIcon,
  EmailIcon,
  OrganicLeaf,
  LittleHeartDoodle,
  SparkleStar,
} from "@/components/icons";

export const EmotionalBreak: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F2EFFA]/70 via-[#E8E4F7]/45 to-white relative overflow-hidden">
      {/* Background soft ambient glowing circles */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Charming Vector Children Illustration with Floating Heart */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden bg-white/90 p-3 shadow-sm border border-[#E8E4F7]">
              {/* Little Floating Heart above children */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 animate-soft-float">
                <LittleHeartDoodle size={20} color="#8B7FD1" />
              </div>
              <Image
                src="/images/decorative/children-playing.jpg"
                alt="Niños interactuando y jugando en Centro Terapéutico Empiria"
                width={360}
                height={270}
                className="w-full h-auto object-contain rounded-2xl"
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
                leftIcon={<WhatsAppIcon size={18} className="text-white" />}
              >
                Conversemos por WhatsApp
              </Button>

              <Button
                variant="outline"
                size="md"
                href="/contacto"
                className="w-full sm:w-auto border-[#8B7FD1]/50 text-[#5B4B9E] bg-white shadow-xs"
                leftIcon={<EmailIcon size={16} className="text-[#5B8FD4]" />}
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
                <OrganicLeaf size={36} color="#8B7FD1" />
              </div>
              <div className="absolute -bottom-6 -left-4 pointer-events-none opacity-80">
                <OrganicLeaf size={32} color="#5B8FD4" flip />
              </div>
              <div className="absolute top-1/2 -right-6 pointer-events-none">
                <SparkleStar size={14} color="#B4C4EA" />
              </div>

              {/* Speech bubble badge */}
              <div className="bg-white/95 backdrop-blur-xs p-5 sm:p-6 rounded-3xl shadow-sm border border-[#E8E4F7] text-center max-w-[220px]">
                <p className="font-script text-xl sm:text-2xl text-[#5B4B9E] font-bold leading-snug">
                  Comunicar también es crecer
                </p>
                <div className="mt-2 flex justify-center">
                  <LittleHeartDoodle size={18} color="#8B7FD1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
