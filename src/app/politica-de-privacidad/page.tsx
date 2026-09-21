import { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";
import { contactData } from "@/data/contact";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo protegemos y gestionamos la información de las familias bajo principios de Privacy by Design y la Ley 1581 de 2012 en Colombia.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#3E3B52] leading-relaxed">
        <div>
          <span className="text-xs font-bold text-[#8B7FD1] uppercase tracking-wider">
            Compromiso con la Confianza Familiar
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight mt-1">
            Política de Privacidad
          </h1>
          <p className="text-xs text-[#3E3B52] mt-2">
            Última actualización: Septiembre 2026 · Centro Terapéutico Empiria (Bogotá, Colombia)
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#F2EFFA] border border-[#D4C9EE] text-xs sm:text-sm flex items-start gap-3">
          <Shield size={20} className="text-[#5B4B9E] shrink-0 mt-0.5" />
          <p>
            <strong>Principio de Minimización (Privacy by Design):</strong> Este sitio web público no recolecta historias clínicas, diagnósticos médicos detallados ni datos de salud sensibles sin las garantías técnicas, presenciales y legales correspondientes.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">1. Responsable del Tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos recolectados a través de este portal web es <strong>{contactData.name}</strong>, con domicilio en {contactData.address.full}. Correo electrónico de contacto para temas de privacidad y protección de datos: <a href={`mailto:${contactData.email}`} className="text-[#5B4B9E] underline">{contactData.email}</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">2. Datos que Recopilamos en el Sitio Web</h2>
          <p>
            A través de nuestro formulario de contacto público únicamente recopilamos los datos estrictamente necesarios para responder inquietudes de orientación y coordinar citas preliminares:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Nombre y apellidos del padre, madre o representante legal.</li>
            <li>Correo electrónico y número telefónico o de WhatsApp.</li>
            <li>Rango de edad aproximado del menor (a título orientativo, no diagnóstico).</li>
            <li>Motivo general de consulta expresado libremente por el cuidador.</li>
            <li>Medio preferido de contacto.</li>
          </ul>
          <p className="text-xs italic bg-white p-3 rounded-xl border border-[#E8E4F7]">
            <strong>Importante:</strong> Solicitamos expresamente a las familias no enviar diagnósticos psiquiátricos, historias clínicas previas ni fotografías de menores a través de este formulario público.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">3. Finalidades del Tratamiento</h2>
          <p>
            Los datos personales suministrados serán tratados para:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Atender la solicitud de información o resolver inquietudes enviadas por la familia.</li>
            <li>Agendar el primer encuentro virtual de acercamiento o la valoración presencial en nuestra sede.</li>
            <li>Establecer contacto a través del canal elegido (WhatsApp, teléfono o correo).</li>
            <li>Cumplir con las obligaciones normativas aplicables en Colombia.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">4. Protección Reforzada de Datos de Niños, Niñas y Adolescentes (NNA)</h2>
          <p>
            En cumplimiento del artículo 7 de la Ley 1581 de 2012 y el artículo 12 del Decreto 1377 de 2013 de la República de Colombia, Centro Terapéutico Empiria reconoce el carácter de protección constitucional reforzada de los derechos de los niños y niñas. Todo dato suministrado respecto de un menor de edad requiere la autorización previa, libre y expresa de su representante legal (madre, padre o tutor debidamente acreditado).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">5. Derechos del Titular (Habeas Data)</h2>
          <p>
            Como titular de los datos personales (o en representación de su hijo menor), usted tiene derecho a:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Conocer, actualizar y rectificar sus datos personales.</li>
            <li>Solicitar prueba de la autorización otorgada.</li>
            <li>Ser informado sobre el uso que se le ha dado a sus datos.</li>
            <li>Revocar la autorización o solicitar la supresión de sus datos cuando proceda legalmente.</li>
            <li>Acceder de forma gratuita a sus datos personales objeto de tratamiento.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, envíe una comunicación escrita al correo <strong>{contactData.email}</strong> indicando su nombre completo, documento de identidad y la solicitud respectiva.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-[#2D2D3A]">6. Seguridad de la Información</h2>
          <p>
            Aplicamos medidas de seguridad técnicas y organizativas para proteger la información contra pérdida, uso indebido, acceso no autorizado o divulgación. No comercializamos ni transferimos bases de datos a terceros con fines publicitarios.
          </p>
        </section>

        <div className="pt-6 border-t border-[#E8E4F7] flex flex-wrap gap-4 text-xs font-semibold text-[#5B4B9E]">
          <Link href="/politica-tratamiento-datos" className="underline hover:text-[#5B8FD4]">
            Política de Tratamiento de Datos (Ley 1581)
          </Link>
          <Link href="/autorizacion-tratamiento-datos" className="underline hover:text-[#5B8FD4]">
            Autorización de Tratamiento
          </Link>
          <Link href="/politica-cookies" className="underline hover:text-[#5B8FD4]">
            Política de Cookies
          </Link>
        </div>
      </div>
    </div>
  );
}
