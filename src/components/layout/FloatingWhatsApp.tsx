"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { getWhatsAppLink } from "@/data/contact";
import { WhatsAppIcon } from "@/components/icons";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show friendly tooltip after 3 seconds on page, unless dismissed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Friendly conversational bubble */}
      {showTooltip && (
        <div className="pointer-events-auto mb-3 max-w-[260px] sm:max-w-xs bg-white text-[#2D2D3A] p-3.5 rounded-2xl shadow-xl border border-[#E8E4F7] animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute -top-2 -left-2 bg-white text-[#3E3B52] hover:text-red-500 rounded-full p-1 border border-[#E8E4F7] shadow-sm transition-colors"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] mt-1.5 shrink-0 animate-pulse" />
            <div className="text-xs leading-relaxed">
              <p className="font-bold text-[#5B4B9E]">¿Dudas sobre el desarrollo de tu hijo?</p>
              <p className="text-[#3E3B52] mt-0.5">
                Escríbenos directamente por WhatsApp. Estamos listas para orientarte.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-[#E8E4F7] transform rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar con una fonoaudióloga por WhatsApp"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <WhatsAppIcon size={32} className="text-white transition-transform duration-200 group-hover:scale-110" />
        <span className="sr-only">Contactar por WhatsApp al +57 312 736 6606</span>
      </a>
    </div>
  );
};
