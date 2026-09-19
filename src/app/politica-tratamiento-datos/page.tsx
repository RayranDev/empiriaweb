import { Metadata } from "next";
import Link from "next/link";
import { contactData } from "@/data/contact";
import { Scale, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Tratamiento de Datos Personales | Ley 1581 de 2012 | Empiria",
  description:
    "Manual y política para el tratamiento de datos personales conforme a la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.",
};

export default function PoliticaTratamientoDatosPage() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#3E3B52] leading-relaxed">
        <div>
          <span className="text-xs font-bold text-[#8B7FD1] uppercase tracking-wider">
            Marco Normativo Colombiano
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight mt-1">
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="text-xs text-[#3E3B52] mt-2">
            En cumplimiento de la Ley 1581 de 2012 y el Decreto Reglamentario 1377 de 2013
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#F2EFFA] border border-[#D4C9EE] text-xs sm:text-sm flex items-start gap-3">
          <Scale className="w-5 h-5 text-[#5B4B9E] shrink-0 mt-0.5" />
          <p>
            <strong>Aviso de cumplimiento:</strong> Este documento consagra las directrices que rigen la recolección, almacenamiento, uso y supresión de datos personales por parte de <strong>{contactData.name}</strong>, garantizando el derecho constitucional de Hábeas Data.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">1. Principios Rectores</h2>
          <p>
            El tratamiento de datos personales en Centro Terapéutico Empiria se regirá bajo los principios de legalidad, finalidad, libertad, veracidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">2. Tratamiento de Datos de Menores de Edad</h2>
          <p>
            El tratamiento de datos personales de niños, niñas y adolescentes responderá y respetará el interés superior de los menores y garantizará el respeto de sus derechos fundamentales. Cualquier tratamiento se realizará previo consentimiento explícito de sus padres o representantes legales.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">3. Procedimiento para el Ejercicio del Derecho de Hábeas Data</h2>
          <p>
            Los titulares de la información o sus representantes legales podrán formular consultas o reclamos mediante comunicación dirigida a:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li><strong>Correo:</strong> {contactData.email}</li>
            <li><strong>Sede Física:</strong> {contactData.address.full}</li>
            <li><strong>Asunto:</strong> Ejercicio Derechos Ley 1581 de 2012</li>
          </ul>
          <p className="text-sm">
            Las consultas serán atendidas en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo. Los reclamos para corrección, actualización o supresión se atenderán en un término máximo de quince (15) días hábiles.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">4. Vigencia de las Bases de Datos</h2>
          <p>
            Los datos de contacto inicial recolectados a través de canales web serán conservados durante el tiempo razonable y necesario para cumplir con las finalidades de orientación solicitadas por el usuario, o hasta que el titular revoque su autorización conforme a la ley.
          </p>
        </section>

        <div className="pt-6 border-t border-[#E8E4F7] flex flex-wrap gap-4 text-xs font-semibold text-[#5B4B9E]">
          <Link href="/politica-de-privacidad" className="underline hover:text-[#5B8FD4]">
            Política de Privacidad
          </Link>
          <Link href="/autorizacion-tratamiento-datos" className="underline hover:text-[#5B8FD4]">
            Modelo de Autorización Expresa
          </Link>
          <Link href="/terminos-y-condiciones" className="underline hover:text-[#5B8FD4]">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </div>
  );
}
