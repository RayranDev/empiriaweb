import { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Contacto y Sede en Bogotá",
  description:
    "Contáctanos para valorar a tu hijo en Bogotá. Ubicados en Avenida Calle 24 #74-55, Barrio Modelia. WhatsApp: +57 312 736 6606.",
};

export default function ContactoPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center max-w-3xl">
        <Badge variant="lavender">Canales de Contacto</Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] mt-4 tracking-tight">
          Estamos aquí para escucharte
        </h1>
        <p className="text-base sm:text-lg text-[#3E3B52] mt-4 leading-relaxed">
          Ponte en contacto con nuestro equipo por WhatsApp, correo o formulario web. Respondemos con calidez y prontitud.
        </p>
      </div>

      <ContactSection />
    </div>
  );
}
