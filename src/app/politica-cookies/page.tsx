import { Metadata } from "next";
import Link from "next/link";
import { CookieIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Política de Cookies | Centro Terapéutico Empiria",
  description:
    "Información transparente sobre el uso de cookies técnicas y analíticas en el sitio web de Centro Terapéutico Empiria.",
};

export default function PoliticaCookiesPage() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#3E3B52] leading-relaxed">
        <div>
          <span className="text-xs font-bold text-[#8B7FD1] uppercase tracking-wider">
            Transparencia Digital
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight mt-1">
            Política de Cookies
          </h1>
          <p className="text-xs text-[#3E3B52] mt-2">
            Centro Terapéutico Empiria · Bogotá, Colombia
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#F2EFFA] border border-[#D4C9EE] text-xs sm:text-sm flex items-start gap-3">
          <CookieIcon size={20} className="text-[#5B4B9E] shrink-0 mt-0.5" />
          <p>
            En Centro Terapéutico Empiria creemos en una web limpia y respetuosa: no utilizamos cookies publicitarias de rastreo cruzado invasivas ni compartimos perfiles de navegación de menores.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">1. ¿Qué es una cookie?</h2>
          <p>
            Una cookie es un pequeño archivo de texto que un sitio web almacena en el navegador del usuario al visitarlo. Facilita recordar preferencias como el consentimiento de privacidad o ajustar la navegación técnica.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">2. Tipos de Cookies que Utilizamos</h2>
          <div className="space-y-3 text-sm">
            <div className="p-4 rounded-xl bg-white border border-[#E8E4F7]">
              <p className="font-bold text-[#5B4B9E]">Cookies Técnicas y Estrictamente Necesarias:</p>
              <p className="mt-1 text-xs">
                Permiten la navegación segura por el portal web, la visualización responsiva en dispositivos móviles y la retención de la preferencia sobre el banner de cookies.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E4F7]">
              <p className="font-bold text-[#5B4B9E]">Cookies Analíticas (Opcionales):</p>
              <p className="mt-1 text-xs">
                Se activan únicamente con el consentimiento expreso del usuario y recopilan datos estadísticos agregados y anónimos (p. ej., páginas más visitadas) para mejorar la usabilidad del sitio.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">3. ¿Cómo configurar o eliminar las cookies?</h2>
          <p>
            Usted puede modificar sus preferencias en cualquier momento a través del banner de configuración en el pie de página o directamente desde los ajustes de su navegador web (Google Chrome, Safari, Mozilla Firefox, Microsoft Edge).
          </p>
        </section>

        <div className="pt-6 border-t border-[#E8E4F7] flex flex-wrap gap-4 text-xs font-semibold text-[#5B4B9E]">
          <Link href="/politica-de-privacidad" className="underline hover:text-[#5B8FD4]">
            Política de Privacidad
          </Link>
          <Link href="/politica-tratamiento-datos" className="underline hover:text-[#5B8FD4]">
            Tratamiento de Datos Personales
          </Link>
          <Link href="/" className="underline hover:text-[#5B8FD4]">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
