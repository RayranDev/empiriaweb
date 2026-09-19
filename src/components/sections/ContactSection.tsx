"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Heart,
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { contactData, getWhatsAppLink } from "@/data/contact";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childAge: "",
    generalReason: "",
    preferredContact: "whatsapp",
    acceptPolicy: false,
    authorizeTreatment: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.parentName.trim()) {
      setErrorMessage("Por favor, ingresa el nombre del padre, madre o cuidador.");
      return;
    }
    if (!formData.phone.trim() && !formData.email.trim()) {
      setErrorMessage("Por favor, ingresa al menos un teléfono o correo electrónico de contacto.");
      return;
    }
    if (!formData.acceptPolicy) {
      setErrorMessage("Debes aceptar la Política de Tratamiento de Datos Personales para continuar.");
      return;
    }
    if (!formData.authorizeTreatment) {
      setErrorMessage("Debes autorizar el tratamiento de tus datos para poder responderte.");
      return;
    }

    // In production, this can send to a server action or API route.
    // Here we provide instant feedback and offer direct WhatsApp follow-up.
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emotional closure quote before contact cards */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="lavender" icon={<Heart className="w-3.5 h-3.5 text-[#8B7FD1]" />}>
            Cada pequeño avance cuenta
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            ¿Quieres conversar sobre el proceso de tu hijo o hija?
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Escríbenos. Estamos aquí para acompañarte a comprender sus necesidades y construir juntos un camino pensado para él o ella.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Details & Sede Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#F2EFFA] p-6 sm:p-8 border border-[#E8E4F7] space-y-6">
              <h3 className="text-xl font-bold text-[#5B4B9E]">
                Canales de Atención Directa
              </h3>

              {/* Contact Item: WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider">
                    WhatsApp Principal
                  </p>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-[#2D2D3A] hover:text-[#5B8FD4] transition-colors"
                  >
                    {contactData.phoneFormatted}
                  </a>
                  <p className="text-xs text-[#3E3B52] mt-0.5">
                    Respuesta rápida y orientación preliminar.
                  </p>
                </div>
              </div>

              {/* Contact Item: Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#5B8FD4] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider">
                    Correo Electrónico
                  </p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-sm sm:text-base font-semibold text-[#2D2D3A] hover:text-[#5B8FD4] transition-colors break-all"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              {/* Contact Item: Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#8B7FD1] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider">
                    Sede Presencial
                  </p>
                  <p className="text-sm font-semibold text-[#2D2D3A]">
                    {contactData.address.street}
                  </p>
                  <p className="text-xs text-[#3E3B52]">
                    {contactData.address.neighborhood}, {contactData.address.city}, Colombia
                  </p>
                </div>
              </div>

              {/* Contact Item: Schedule */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#5B4B9E] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider">
                    Horarios de Atención
                  </p>
                  <div className="text-xs text-[#3E3B52] space-y-0.5 mt-0.5">
                    <p className="font-semibold text-[#2D2D3A]">{contactData.schedule.weekdays}</p>
                    <p>{contactData.schedule.saturdays}</p>
                    <p className="text-gray-500">{contactData.schedule.sundays}</p>
                  </div>
                </div>
              </div>

              {/* Contact Item: Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E1306C] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wider">
                    Instagram Oficial
                  </p>
                  <a
                    href={contactData.social.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#2D2D3A] hover:text-[#5B4B9E] transition-colors"
                  >
                    {contactData.social.instagram}
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy notice badge */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8E4F7] text-xs text-[#3E3B52] space-y-1">
              <p className="font-bold text-[#5B4B9E] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5B8FD4]" />
                Privacidad protegida (Privacy by Design)
              </p>
              <p>
                No solicitamos historias clínicas, diagnósticos ni información médica sensible en este formulario público. Tus datos se tratan bajo la Ley 1581 de 2012 de Colombia.
              </p>
            </div>
          </div>

          {/* Right Column: Secure Public Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-10 border border-[#E8E4F7] shadow-lg">
              <h3 className="text-2xl font-extrabold text-[#2D2D3A]">
                Déjanos tus datos de contacto
              </h3>
              <p className="text-sm text-[#3E3B52] mt-1 mb-6">
                Te contactaremos para resolver dudas y explicarte cómo agendar el primer encuentro.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F2EFFA] border border-[#D4C9EE] text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#5B8FD4] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#5B4B9E]">
                    ¡Mensaje recibido con éxito!
                  </h4>
                  <p className="text-sm text-[#3E3B52] max-w-md mx-auto">
                    Gracias por escribirnos, <strong>{formData.parentName}</strong>. Nos comunicaremos contigo muy pronto mediante tu medio de contacto preferido.
                  </p>
                  <div className="pt-3">
                    <Button
                      variant="whatsapp"
                      size="md"
                      href={getWhatsAppLink(`Hola, completé el formulario en la web de Empiria a nombre de ${formData.parentName}. Quisiera agilizar la consulta.`)}
                      isExternal
                      leftIcon={<MessageCircle className="w-4 h-4" />}
                    >
                      Escribir también por WhatsApp
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Nombre del padre/madre/cuidador */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs sm:text-sm font-bold text-[#2D2D3A] mb-1.5"
                    >
                      Nombre del padre, madre o cuidador *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      required
                      placeholder="Ej: Camila Restrepo"
                      value={formData.parentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:border-[#5B8FD4] focus:ring-2 focus:ring-[#5B8FD4]/20 transition-all bg-[#F2EFFA]/30"
                    />
                  </div>

                  {/* Teléfono y Correo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs sm:text-sm font-bold text-[#2D2D3A] mb-1.5"
                      >
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Ej: 312 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:border-[#5B8FD4] focus:ring-2 focus:ring-[#5B8FD4]/20 transition-all bg-[#F2EFFA]/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-bold text-[#2D2D3A] mb-1.5"
                      >
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:border-[#5B8FD4] focus:ring-2 focus:ring-[#5B8FD4]/20 transition-all bg-[#F2EFFA]/30"
                      />
                    </div>
                  </div>

                  {/* Edad aproximada del niño y Medio de contacto preferido */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="childAge"
                        className="block text-xs sm:text-sm font-bold text-[#2D2D3A] mb-1.5"
                      >
                        Edad aproximada del niño/a
                      </label>
                      <select
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:border-[#5B8FD4] focus:ring-2 focus:ring-[#5B8FD4]/20 transition-all bg-[#F2EFFA]/30"
                      >
                        <option value="">Selecciona un rango...</option>
                        <option value="0-2">0 a 2 años (Primeras palabras / Lenguaje)</option>
                        <option value="3-5">3 a 5 años (Habla / Lenguaje infantil)</option>
                        <option value="6-8">6 a 8 años (Lectoescritura / Escolar)</option>
                        <option value="9-12">9 a 12 años (Comprensión / Aprendizaje)</option>
                        <option value="mayor-12">Mayor de 12 años</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="preferredContact"
                        className="block text-xs sm:text-sm font-bold text-[#2D2D3A] mb-1.5"
                      >
                        Medio preferido de contacto
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:border-[#5B8FD4] focus:ring-2 focus:ring-[#5B8FD4]/20 transition-all bg-[#F2EFFA]/30"
                      >
                        <option value="whatsapp">WhatsApp</option>
                        <option value="llamada">Llamada telefónica</option>
                        <option value="correo">Correo electrónico</option>
                      </select>
                    </div>
                  </div>

                  {/* Motivo general de consulta */}
                  <div>
                    <label
                      htmlFor="generalReason"
                      className="block text-xs sm:text-sm font-bold text-[#2D2D3A] mb-1.5"
                    >
                      Motivo general de consulta (breve)
                    </label>
                    <textarea
                      id="generalReason"
                      name="generalReason"
                      rows={3}
                      placeholder="Ej: Nos gustaría orientación sobre pronunciación de algunos sonidos y sugerencias para casa."
                      value={formData.generalReason}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E4F7] text-sm text-[#2D2D3A] focus:outline-none focus:border-[#5B8FD4] focus:ring-2 focus:ring-[#5B8FD4]/20 transition-all bg-[#F2EFFA]/30 resize-none"
                    />
                    <p className="text-[11px] text-[#3E3B52] mt-1">
                      * Por seguridad y privacidad, no incluyas diagnósticos médicos ni datos sensibles.
                    </p>
                  </div>

                  {/* Mandatory Legal Checkboxes (Privacy by Design & Colombian Law) */}
                  <div className="pt-3 space-y-3 border-t border-[#E8E4F7]">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="acceptPolicy"
                        checked={formData.acceptPolicy}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded text-[#5B8FD4] focus:ring-[#5B8FD4] border-gray-300 shrink-0"
                      />
                      <span className="text-xs text-[#3E3B52] leading-relaxed">
                        He leído y acepto la{" "}
                        <Link
                          href="/politica-tratamiento-datos"
                          target="_blank"
                          className="font-bold text-[#5B4B9E] underline hover:text-[#5B8FD4]"
                        >
                          Política de Tratamiento de Datos Personales
                        </Link>{" "}
                        de Centro Terapéutico Empiria. *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="authorizeTreatment"
                        checked={formData.authorizeTreatment}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded text-[#5B8FD4] focus:ring-[#5B8FD4] border-gray-300 shrink-0"
                      />
                      <span className="text-xs text-[#3E3B52] leading-relaxed">
                        Como representante legal, autorizo de manera libre y expresa el tratamiento de mis datos personales para la gestión de mi solicitud de orientación o valoración. *
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Enviar datos de contacto
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
