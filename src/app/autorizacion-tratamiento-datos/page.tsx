import { Metadata } from "next";
import Link from "next/link";
import { contactData } from "@/data/contact";
import { CheckSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Autorización de Tratamiento de Datos",
  description:
    "Texto informativo y términos de la autorización previa, expresa e informada para el tratamiento de datos de representantes legales y menores.",
  alternates: {
    canonical: "/autorizacion-tratamiento-datos",
  },
};

export default function AutorizacionTratamientoDatosPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#3E3B52] leading-relaxed">
        <div>
          <span className="text-xs font-bold text-[#8B7FD1] uppercase tracking-wider">
            Consentimiento Informado del Representante Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight mt-1">
            Autorización para el Tratamiento de Datos Personales
          </h1>
          <p className="text-xs text-[#3E3B52] mt-2">
            Centro Terapéutico Empiria · Bogotá, Colombia
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-[#F2EFFA] border border-[#D4C9EE] space-y-4 text-xs sm:text-sm">
          <p className="font-bold text-[#5B4B9E] flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-[#5B8FD4]" />
            Términos del Consentimiento Otorgado en Formularios Web
          </p>
          <p>
            Al diligenciar y enviar el formulario de contacto o iniciar comunicación voluntaria mediante canales oficiales, el usuario declara, bajo la gravedad de juramento, que actúa como representante legal del menor de edad o en nombre propio con plena facultad jurídica, y que:
          </p>
          <ul className="list-decimal pl-5 space-y-2">
            <li>
              Autoriza de manera previa, expresa, explícita e informada a <strong>{contactData.name}</strong> para que recolecte, almacene y use sus datos de contacto con el fin exclusivo de orientar, resolver consultas fonoaudiológicas y gestionar citas de acercamiento o valoración.
            </li>
            <li>
              Ha sido informado sobre el carácter facultativo de responder preguntas sobre datos sensibles o de menores de edad en el canal público.
            </li>
            <li>
              Conoce que puede revocar esta autorización o solicitar la rectificación o supresión de sus datos mediante solicitud dirigida a <strong>{contactData.email}</strong>.
            </li>
          </ul>
        </div>

        <div className="pt-6 border-t border-[#E8E4F7] flex flex-wrap gap-4 text-xs font-semibold text-[#5B4B9E]">
          <Link href="/politica-de-privacidad" className="underline hover:text-[#5B8FD4]">
            Política de Privacidad
          </Link>
          <Link href="/politica-tratamiento-datos" className="underline hover:text-[#5B8FD4]">
            Política de Tratamiento de Datos (Ley 1581)
          </Link>
          <Link href="/contacto" className="underline hover:text-[#5B8FD4]">
            Ir a Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
