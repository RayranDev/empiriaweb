import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Heart,
  ShieldAlert,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, XIcon } from "@/components/ui/Icons";
import { EmpiriaLogo } from "@/components/logo/EmpiriaLogo";
import { contactData, getWhatsAppLink } from "@/data/contact";

export const Footer: React.FC = () => {
  const navigationLinks = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Áreas de atención", href: "/areas-de-atencion" },
    { label: "Nuestro proceso", href: "/nuestro-proceso" },
    { label: "Para familias", href: "/para-familias" },
    { label: "Recursos y Artículos", href: "/recursos" },
    { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { label: "Contacto", href: "/contacto" },
  ];

  const serviceLinks = [
    { label: "Habla e Inteligibilidad", href: "/areas-de-atencion/habla" },
    { label: "Desarrollo del Lenguaje", href: "/areas-de-atencion/lenguaje" },
    { label: "Comunicación e Interacción", href: "/areas-de-atencion/comunicacion" },
    { label: "Lectoescritura Infantil", href: "/areas-de-atencion/lectoescritura" },
    { label: "Procesos de Aprendizaje", href: "/areas-de-atencion/aprendizaje" },
  ];

  const legalLinks = [
    { label: "Política de Privacidad", href: "/politica-de-privacidad" },
    { label: "Tratamiento de Datos Personales", href: "/politica-tratamiento-datos" },
    { label: "Autorización de Tratamiento de Datos", href: "/autorizacion-tratamiento-datos" },
    { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
    { label: "Política de Cookies", href: "/politica-cookies" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#F2EFFA]/60 via-[#E8E4F7]/40 to-[#E8E4F7]/80 text-[#2D2D3A] border-t border-[#E8E4F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        {/* Brand Quote Card matching mockup */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E4F7] shadow-xs text-center flex flex-col items-center justify-center space-y-3">
          <EmpiriaLogo size="sm" />
          <p className="font-script text-xl sm:text-2xl font-bold text-[#5B4B9E] max-w-xl">
            “Cada niño tiene una manera única de aprender, comunicarse y crecer.”
          </p>
          <div className="pt-2 flex items-center gap-4 text-[#8B7FD1]">
            <a
              href={contactData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#F2EFFA] hover:bg-[#E8E4F7] hover:text-[#E1306C] transition-colors"
              aria-label="Instagram de Empiria"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#F2EFFA] hover:bg-[#E8E4F7] hover:text-[#1877F2] transition-colors"
              aria-label="Facebook de Empiria"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#F2EFFA] hover:bg-[#E8E4F7] hover:text-[#2D2D3A] transition-colors"
              aria-label="X (Twitter) de Empiria"
            >
              <XIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#D4C9EE]/60">
          {/* Column 1: Brand & Emotional statement */}
          <div className="lg:col-span-2 space-y-4">
            <EmpiriaLogo size="md" />
            <p className="text-sm sm:text-base text-[#3E3B52] leading-relaxed max-w-sm pt-2">
              Fonoaudiología infantil con un enfoque humano, personalizado y profesional en Bogotá. Acompañamos a tu hijo a descubrir y potenciar su voz y su aprendizaje.
            </p>
            <div className="p-3.5 rounded-2xl bg-white/80 border border-[#E8E4F7] text-xs text-[#3E3B52] space-y-1">
              <p className="font-bold text-[#5B4B9E] flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#8B7FD1]" />
                Enfoque centrado en la familia
              </p>
              <p>
                Cada sesión es individual y diseñada respetando los ritmos singulares de cada niño o niña.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#5B4B9E]">
              Explorar
            </h3>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#3E3B52] hover:text-[#5B4B9E] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#5B4B9E]">
              Áreas de Atención
            </h3>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-[#3E3B52] hover:text-[#5B4B9E] transition-colors inline-block py-0.5"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#5B4B9E]">
              Contacto y Sede
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#3E3B52]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5B8FD4] shrink-0 mt-0.5" />
                <span>
                  {contactData.address.street}
                  <br />
                  {contactData.address.neighborhood}, {contactData.address.city}
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5B4B9E] font-medium transition-colors"
                >
                  {contactData.phoneFormatted}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#8B7FD1] shrink-0" />
                <a
                  href={`mailto:${contactData.email}`}
                  className="hover:text-[#5B4B9E] transition-colors break-all"
                >
                  {contactData.email}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#E1306C] shrink-0" />
                <a
                  href={contactData.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5B4B9E] transition-colors font-medium"
                >
                  {contactData.social.instagram}
                </a>
              </li>

              <li className="pt-2 border-t border-[#E8E4F7]">
                <div className="flex items-start gap-2 text-xs text-[#3E3B52]">
                  <Clock className="w-3.5 h-3.5 text-[#5B4B9E] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#2D2D3A]">Horarios de atención:</p>
                    <p>{contactData.schedule.weekdays}</p>
                    <p>{contactData.schedule.saturdays}</p>
                    <p className="text-gray-500">{contactData.schedule.sundays}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal and Disclaimer Notice */}
        <div className="py-6 border-b border-[#D4C9EE]/60 text-xs text-[#3E3B52] leading-relaxed flex flex-col md:flex-row items-start md:items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-[#8B7FD1] shrink-0" />
          <p>
            <strong>Aviso de orientación fonoaudiológica:</strong> Los contenidos educativos y descriptivos de este sitio web tienen carácter informativo y orientativo para padres y cuidadores. No constituyen diagnósticos clínicos automáticos, los cuales requieren una valoración fonoaudiológica individual y presencial. Tratamiento de datos de menores regulado conforme a la Ley 1581 de 2012 de Colombia.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#3E3B52]">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Centro Terapéutico Empiria. Todos los derechos reservados. Bogotá, Colombia.
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {legalLinks.map((legal) => (
              <Link
                key={legal.href}
                href={legal.href}
                className="hover:text-[#5B4B9E] transition-colors underline-offset-4 hover:underline"
              >
                {legal.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
