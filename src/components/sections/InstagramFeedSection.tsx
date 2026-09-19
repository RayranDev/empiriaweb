"use client";

import React from "react";
import { ExternalLink, Heart, MessageCircle, Sparkles } from "lucide-react";
import { contactData } from "@/data/contact";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { InstagramIcon } from "@/components/ui/Icons";

interface InstagramPostPreview {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  likes: string;
  comments: string;
  gradientBg: string;
}

const instagramPosts: InstagramPostPreview[] = [
  {
    id: "post-1",
    tag: "Estimulación en Casa",
    title: "5 momentos cotidianos para enriquecer el lenguaje",
    excerpt:
      "La hora del baño, el desayuno o el camino al colegio: cómo convertir pequeñas rutinas en oportunidades de conversación y escucha activa.",
    likes: "84",
    comments: "12",
    gradientBg: "from-[#5B8FD4]/15 via-[#E8E4F7]/40 to-white",
  },
  {
    id: "post-2",
    tag: "Habla y Pronunciación",
    title: "El sonido /r/ y /rr/: ¿cuándo consultar sin angustia?",
    excerpt:
      "Desmitificamos los tiempos de adquisición del fonema vibrante. Estrategias de modelado indirecto sin presiones ni regaños.",
    likes: "116",
    comments: "19",
    gradientBg: "from-[#8B7FD1]/15 via-[#F2EFFA]/50 to-white",
  },
  {
    id: "post-3",
    tag: "Lectoescritura",
    title: "¿Confusión de letras b y d? Te explicamos el porqué",
    excerpt:
      "Por qué las inversiones no siempre son señal de alarma en los primeros años escolares y cómo abordarlas desde la conciencia fonológica.",
    likes: "97",
    comments: "15",
    gradientBg: "from-[#5B4B9E]/10 via-[#E8E4F7]/40 to-white",
  },
  {
    id: "post-4",
    tag: "Nuestra Sede",
    title: "Un rincón seguro pensado para la infancia en Modelia",
    excerpt:
      "Así luce nuestro espacio de intervención: materiales sensoriales, libros ilustrados y un ambiente diseñado para que cada niño se sienta libre y feliz.",
    likes: "142",
    comments: "28",
    gradientBg: "from-[#A8C5E8]/20 via-[#F2EFFA]/40 to-white",
  },
];

export const InstagramFeedSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#F2EFFA]/40 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <Badge variant="lavender" icon={<InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />}>
                Comunidad en Instagram
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight">
              Acompáñanos en <span className="text-[#5B4B9E]">{contactData.social.instagram}</span>
            </h2>
            <p className="text-base text-[#3E3B52]">
              Consejos prácticos, reflexiones fonoaudiológicas y miradas respetuosas sobre el desarrollo infantil compartidas semanalmente.
            </p>
          </div>

          <div>
            <a
              href={contactData.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Seguir en Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Posts Preview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instagramPosts.map((post) => (
            <Card
              key={post.id}
              variant="default"
              className={`flex flex-col justify-between p-6 bg-gradient-to-br ${post.gradientBg} border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-sm transition-all duration-300`}
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-[#5B4B9E] uppercase tracking-wider text-[11px]">
                    {post.tag}
                  </span>
                  <InstagramIcon className="w-3.5 h-3.5 text-[#8B7FD1]" />
                </div>

                <h3 className="text-base font-bold text-[#2D2D3A] leading-snug">
                  {post.title}
                </h3>

                <p className="mt-2 text-xs text-[#3E3B52] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Engagement metrics & profile link */}
              <div className="mt-5 pt-3 border-t border-[#E8E4F7]/80 flex items-center justify-between text-xs text-[#3E3B52]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-semibold text-[#5B4B9E]">
                    <Heart className="w-3.5 h-3.5 text-[#E1306C] fill-[#E1306C]/20" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#8B7FD1]">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>

                <a
                  href={contactData.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#5B8FD4] hover:text-[#5B4B9E] transition-colors inline-flex items-center gap-1 text-[11px]"
                >
                  Ver post →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
