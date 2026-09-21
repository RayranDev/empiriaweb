import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { resourcesData } from "@/data/resources";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Recursos y Artículos | Empiria en Casa",
  description:
    "Artículos educativos sobre fonoaudiología infantil, estimulación del lenguaje, pautas para el habla y lectoescritura sin frustración en Bogotá.",
};

export default function RecursosPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="lavender">Biblioteca Fonoaudiológica</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            Empiria en Casa
          </h1>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Información rigurosa, pautas de estimulación temprana y reflexiones escritas por fonoaudiólogas para acompañar a tu hijo con serenidad y afecto.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.map((article) => (
            <Card
              key={article.slug}
              variant="default"
              className="flex flex-col justify-between p-6 sm:p-7 bg-white border-[#E8E4F7] hover:border-[#8B7FD1]/40 shadow-sm transition-all duration-300 rounded-3xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="lavender">{article.category}</Badge>
                  <span className="text-xs text-[#3E3B52] flex items-center gap-1.5 font-medium">
                    <Clock size={14} className="text-[#8B7FD1]" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#2D2D3A] hover:text-[#5B4B9E] transition-colors leading-snug">
                  <Link href={`/recursos/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm text-[#3E3B52] leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EFFA] flex items-center justify-between">
                <span className="text-xs text-[#3E3B52] font-semibold">
                  Por {article.author}
                </span>
                <Link
                  href={`/recursos/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors"
                >
                  <span>Leer artículo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
