"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData } from "@/data/faq";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/contact";
import { FAQIcon, WhatsAppGlyph } from "@/components/icons";

interface FAQSectionProps {
  /** Hide the built-in badge/title/intro when the host page already renders its own heading. */
  showHeader?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ showHeader = true }) => {
  const [openId, setOpenId] = useState<string | null>("remision-medica");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className={`${showHeader ? "py-16 sm:py-24" : "pb-16 sm:pb-24"} bg-[#E8E4F7]/25 relative`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
        <div className="text-center space-y-4">
          <Badge
            variant="lavender"
            icon={<HelpCircle size={14} className="text-[#8B7FD1]" />}
          >
            Respuestas Claras
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Resolvemos las principales dudas sobre el inicio de las sesiones, metodología y acompañamiento familiar.
          </p>
        </div>
        )}

        {/* Accordions List */}
        <div className={`${showHeader ? "mt-12" : "mt-0"} space-y-3.5`}>
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-[20px] bg-white border border-[#E8E4F7] overflow-hidden transition-all duration-200 shadow-xs hover:border-[#8B7FD1]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#F2EFFA]/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8FD4]"
                >
                  <span className="text-base sm:text-lg font-bold text-[#2D2D3A]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#F2EFFA] flex items-center justify-center shrink-0 text-[#5B4B9E] transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#E8E4F7]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-[#3E3B52] leading-relaxed border-t border-[#F2EFFA] pt-3 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Post-FAQ WhatsApp conversion CTA */}
        <div className="mt-14 rounded-[28px] bg-white p-8 border border-[#E8E4F7] shadow-sm text-center space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-[#E8E4F7] text-[#5B4B9E]">
            <FAQIcon size={30} className="text-[#5B4B9E]" strokeWidth={2.2} />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D3A]">
            ¿Tienes otra pregunta sobre el proceso de tu hijo o hija?
          </h3>
          <p className="text-sm sm:text-base text-[#3E3B52] max-w-lg mx-auto">
            Ninguna duda es pequeña cuando se trata de su desarrollo. Escríbenos y con gusto te orientamos.
          </p>
          <div className="pt-2">
            <Button
              variant="whatsapp"
              size="md"
              href={getWhatsAppLink("Hola, tengo una duda específica sobre la atención fonoaudiológica en Empiria.")}
              isExternal
              leftIcon={<WhatsAppGlyph size={18} className="text-white" />}
            >
              Preguntar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
