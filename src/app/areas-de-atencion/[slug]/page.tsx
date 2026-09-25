import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle, Sparkles, Info } from "lucide-react";
import { servicesData } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/contact";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Área no encontrada" };

  return {
    title: `${service.title} | Fonoaudiología Infantil Bogotá`,
    description: `${service.shortDescription} Enfoque terapéutico personalizado en Centro Terapéutico Empiria.`,
    alternates: {
      canonical: `/areas-de-atencion/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-20 bg-gradient-to-b from-[#E8E4F7]/30 via-white/20 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/areas-de-atencion"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a todas las áreas de atención</span>
        </Link>

        {/* Title & Tagline */}
        <div className="space-y-4">
          <Badge variant="lavender">Área Fonoaudiológica</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            {service.title}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-[#5B4B9E] leading-relaxed">
            “{service.shortDescription}”
          </p>
        </div>

        {/* Overview */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E4F7] shadow-sm text-sm sm:text-base text-[#3E3B52] leading-relaxed space-y-4">
          <p>{service.fullDescription}</p>
        </div>

        {/* Pedagogical disclaimer callout */}
        <div className="mt-8 bg-[#F2EFFA] border border-[#D4C9EE] rounded-2xl p-5 flex items-start gap-3.5 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
          <Info className="w-5 h-5 text-[#8B7FD1] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#5B4B9E]">Nota orientativa para padres:</p>
            <p className="mt-0.5">{service.pedagogicalNote}</p>
          </div>
        </div>

        {/* Signs to consult section */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E4F7] shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D3A]">
            Señales que pueden sugerir una consulta oportuna
          </h2>
          <p className="text-xs sm:text-sm text-[#3E3B52]">
            Si observas con frecuencia alguna de las siguientes situaciones, una valoración individualizada puede aportar claridad y tranquilidad a la familia:
          </p>
          <ul className="space-y-3 pt-2">
            {service.signsToConsult.map((sign, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#3E3B52]">
                <CheckCircle2 className="w-4 h-4 text-[#5B8FD4] shrink-0 mt-0.5" />
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Therapeutic approach */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F2EFFA] to-[#E8E4F7]/60 border border-[#D4C9EE]/60 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#5B4B9E] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#8B7FD1]" />
            Nuestro enfoque en el área de {service.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
            {service.therapeuticApproach}
          </p>
        </div>

        {/* Direct CTA */}
        <div className="mt-12 text-center space-y-4 bg-white p-8 rounded-3xl border border-[#E8E4F7] shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-[#2D2D3A]">
            ¿Deseas orientación sobre el área de {service.title}?
          </h3>
          <p className="text-sm text-[#3E3B52] max-w-md mx-auto">
            Conversemos directamente por WhatsApp para resolver tus preguntas y guiarte sobre los primeros pasos.
          </p>
          <div className="pt-2">
            <Button
              variant="whatsapp"
              size="lg"
              href={getWhatsAppLink(`Hola, quisiera recibir información sobre el área de ${service.title} en Centro Terapéutico Empiria.`)}
              isExternal
              leftIcon={<MessageCircle className="w-5 h-5" />}
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
