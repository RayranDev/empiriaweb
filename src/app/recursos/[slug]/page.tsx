import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, MessageCircle, CheckCircle2, Info, Sparkles } from "lucide-react";
import { resourcesData } from "@/data/resources";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/contact";

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resourcesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = resourcesData.find((a) => a.slug === slug);
  if (!article) return { title: "Artículo no encontrado" };

  return {
    title: `${article.title} | Empiria en Casa`,
    description: article.summary,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
    },
  };
}

export default async function ResourceDetailPage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const article = resourcesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="py-12 sm:py-20 bg-gradient-to-b from-[#F2EFFA]/40 via-white to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/recursos"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a todos los artículos</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="lavender">{article.category}</Badge>
            <span className="text-xs text-[#3E3B52] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#8B7FD1]" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs sm:text-sm text-[#3E3B52] border-b border-[#E8E4F7] pb-6">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#5B8FD4] to-[#8B7FD1] flex items-center justify-center text-white font-bold text-xs">
              {article.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <p className="font-bold text-[#2D2D3A]">{article.author}</p>
              <p className="text-[11px] text-[#5B4B9E]">{article.authorRole} · {article.date}</p>
            </div>
          </div>
        </header>

        {/* Article Summary Lead */}
        <div className="mt-8 p-6 rounded-2xl bg-[#F2EFFA] border border-[#D4C9EE] text-sm sm:text-base font-medium text-[#5B4B9E] leading-relaxed">
          {article.summary}
        </div>

        {/* Content Paragraphs */}
        <div className="mt-8 space-y-6 text-base text-[#3E3B52] leading-relaxed">
          {article.contentParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Key Recommendations Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E4F7] shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-[#2D2D3A] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#5B8FD4]" />
            Recomendaciones clave para acompañar en casa
          </h2>
          <ul className="space-y-2.5 pt-2">
            {article.keyRecommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#3E3B52]">
                <CheckCircle2 className="w-4 h-4 text-[#8B7FD1] shrink-0 mt-0.5" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Non-diagnostic disclaimer */}
        <div className="mt-8 bg-[#F2EFFA] border border-[#D4C9EE] rounded-2xl p-4 flex items-start gap-3 text-xs text-[#3E3B52] leading-relaxed">
          <Info className="w-4 h-4 text-[#8B7FD1] shrink-0 mt-0.5" />
          <p>
            <strong>Aviso importante:</strong> Este artículo tiene fines informativos y orientativos para familias. No reemplaza una valoración clínica individual. Si tienes dudas persistentes sobre el desarrollo de tu hijo, te recomendamos consultar con una profesional.
          </p>
        </div>

        {/* FAQ inside article */}
        {article.faq && article.faq.length > 0 && (
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E4F7] shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-[#2D2D3A]">
              Pregunta frecuente sobre este tema
            </h2>
            {article.faq.map((item, idx) => (
              <div key={idx} className="space-y-1.5 pt-2 border-t border-[#F2EFFA]">
                <p className="font-bold text-sm text-[#5B4B9E]">{item.question}</p>
                <p className="text-xs sm:text-sm text-[#3E3B52] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        )}

        {/* Post-article WhatsApp CTA */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-r from-[#F2EFFA] via-[#E8E4F7]/70 to-[#F2EFFA] border border-[#D4C9EE] space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#5B4B9E]">
            ¿Te identificas con alguna de estas situaciones?
          </h3>
          <p className="text-sm text-[#3E3B52] max-w-md mx-auto">
            Podemos conversar sobre el caso específico de tu hijo o hija y orientarte sobre los siguientes pasos.
          </p>
          <div className="pt-2">
            <Button
              variant="whatsapp"
              size="lg"
              href={getWhatsAppLink(`Hola, leí el artículo "${article.title}" en la web de Empiria y quisiera recibir orientación.`)}
              isExternal
              leftIcon={<MessageCircle className="w-5 h-5" />}
            >
              Consultar con una fonoaudióloga
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
