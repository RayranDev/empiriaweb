"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Settings } from "lucide-react";
import { CookieIcon, PrivacyIcon } from "@/components/icons";

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    // Check if consent has already been registered
    const storedConsent = localStorage.getItem("empiria_cookie_consent");
    if (!storedConsent) {
      // Delay display slightly to avoid layout jump
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "empiria_cookie_consent",
      JSON.stringify({ essential: true, analytics: true, timestamp: new Date().toISOString() })
    );
    setVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(
      "empiria_cookie_consent",
      JSON.stringify({ essential: true, analytics: false, timestamp: new Date().toISOString() })
    );
    setVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      "empiria_cookie_consent",
      JSON.stringify({ essential: true, analytics: analyticsAllowed, timestamp: new Date().toISOString() })
    );
    setVisible(false);
    setShowConfig(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Gestión de cookies y privacidad"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-[#E8E4F7] shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
        {/* Info text */}
        <div className="flex items-start gap-3.5 max-w-3xl">
          <div className="p-2.5 rounded-2xl bg-[#E8E4F7] text-[#5B4B9E] shrink-0 mt-0.5">
            <CookieIcon size={22} className="text-[#5B4B9E]" />
          </div>
          <div className="text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
            <p className="font-bold text-[#2D2D3A] text-sm sm:text-base">
              Privacidad y Cookies en Centro Terapéutico Empiria
            </p>
            <p className="mt-1">
              Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y, con tu consentimiento, cookies analíticas para comprender cómo se utiliza la web y mejorar la experiencia de las familias. No utilizamos cookies publicitarias invasivas ni vendemos datos personales.
            </p>
            <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold text-[#5B4B9E]">
              <Link href="/politica-cookies" className="underline hover:text-[#5B8FD4]">
                Política de Cookies
              </Link>
              <Link href="/politica-de-privacidad" className="underline hover:text-[#5B8FD4]">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>

        {/* Action Buttons (No dark patterns: Accept and Reject have equal visibility and accessibility) */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-end">
          <button
            type="button"
            onClick={() => setShowConfig(!showConfig)}
            className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#3E3B52] bg-[#F2EFFA] hover:bg-[#E8E4F7] border border-[#C3B8E8]/60 transition-colors flex items-center gap-1.5"
          >
            <Settings className="w-4 h-4 text-[#8B7FD1]" />
            <span>Configurar</span>
          </button>

          <button
            type="button"
            onClick={handleRejectAll}
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#2D2D3A] bg-white hover:bg-[#F2EFFA] border border-[#C3B8E8] transition-colors"
          >
            Rechazar opcionales
          </button>

          <button
            type="button"
            onClick={handleAcceptAll}
            className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#5B8FD4] to-[#8B7FD1] shadow-sm hover:shadow transition-all"
          >
            Aceptar todas
          </button>
        </div>
      </div>

      {/* Modal / drawer of detailed configuration if requested */}
      {showConfig && (
        <div className="max-w-4xl mx-auto mt-4 pt-4 border-t border-[#E8E4F7] text-xs sm:text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-[#F2EFFA] border border-[#E8E4F7]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#2D2D3A] flex items-center gap-1.5">
                  <PrivacyIcon size={16} className="text-[#5B4B9E]" />
                  Cookies Técnicas y Esenciales
                </span>
                <span className="text-[11px] font-bold text-[#5B4B9E] uppercase">Siempre activas</span>
              </div>
              <p className="mt-1 text-xs text-[#3E3B52]">
                Requeridas para la navegación segura, preferencia de cookies y visualización adaptada. No pueden desactivarse.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E8E4F7]">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#2D2D3A]">Cookies Analíticas</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsAllowed}
                    onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#5B8FD4]"></div>
                </label>
              </div>
              <p className="mt-1 text-xs text-[#3E3B52]">
                Nos permiten medir visitas de forma anónima y agregada para mejorar el contenido y la usabilidad.
              </p>
            </div>
          </div>

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              onClick={handleSaveCustom}
              className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#5B4B9E] hover:bg-[#4E3F88] transition-colors"
            >
              Guardar preferencias
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
