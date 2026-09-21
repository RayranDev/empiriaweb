import { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { contactData } from "@/data/contact";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso",
  description:
    "Términos y condiciones aplicables al acceso, navegación y uso de los contenidos del portal web de Centro Terapéutico Empiria en Bogotá.",
};

export default function TerminosYCondicionesPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#3E3B52] leading-relaxed">
        <div>
          <span className="text-xs font-bold text-[#8B7FD1] uppercase tracking-wider">
            Condiciones del Servicio Web
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight mt-1">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-xs text-[#3E3B52] mt-2">
            Centro Terapéutico Empiria · Bogotá, Colombia
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#F2EFFA] border border-[#D4C9EE] text-xs sm:text-sm flex items-start gap-3">
          <FileText size={20} className="text-[#8B7FD1] shrink-0 mt-0.5" />
          <p>
            <strong>Naturaleza de la información:</strong> El contenido divulgado en este sitio web es exclusivamente orientativo y psicoeducativo para padres y cuidadores. No constituye consulta médica, diagnóstico fonoaudiológico ni prescripción clínica.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">1. Objeto y Alcance del Sitio Web</h2>
          <p>
            El portal web de <strong>{contactData.name}</strong> tiene por objeto informar a la comunidad sobre los servicios de valoración e intervención fonoaudiológica infantil y facilitar canales de contacto directo para las familias interesadas en servicios particulares.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">2. Propiedad Intelectual e Identidad Visual</h2>
          <p>
            Todos los elementos distintivos de la marca Centro Terapéutico Empiria, incluidos el logotipo oficial, la identidad visual, los textos, la arquitectura de contenidos y las ilustraciones vectoriales, son propiedad de Centro Terapéutico Empiria y están protegidos por las leyes de propiedad intelectual de Colombia y tratados internacionales. Queda prohibida su reproducción o copia no autorizada.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">3. Limitación de Responsabilidad</h2>
          <p>
            Las decisiones respecto al desarrollo infantil de un menor deben sustentarse en una valoración presencial profesional individualizada. Centro Terapéutico Empiria no asume responsabilidad por interpretaciones erróneas o diagnósticos autoimpuestos derivados de la lectura de artículos o secciones informativas de esta web.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">4. Ley Aplicable y Jurisdicción</h2>
          <p>
            Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia será sometida a los jueces competentes de la ciudad de Bogotá D.C.
          </p>
        </section>

        <div className="pt-6 border-t border-[#E8E4F7] flex flex-wrap gap-4 text-xs font-semibold text-[#5B4B9E]">
          <Link href="/politica-de-privacidad" className="underline hover:text-[#5B8FD4]">
            Política de Privacidad
          </Link>
          <Link href="/politica-tratamiento-datos" className="underline hover:text-[#5B8FD4]">
            Política de Tratamiento de Datos
          </Link>
          <Link href="/politica-cookies" className="underline hover:text-[#5B8FD4]">
            Política de Cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
