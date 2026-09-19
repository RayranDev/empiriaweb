"use client";

import React from "react";
import Link from "next/link";
import { Home, BookOpen, HelpCircle, Send, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";

export const FeatureHubCards: React.FC = () => {
  const hubs = [
    {
      title: "Para familias",
      description: "Recursos y orientación para acompañar en casa.",
      href: "/para-familias",
      icon: <Home className="w-6 h-6 text-[#5B8FD4]" />,
      bgIcon: "bg-[#A8C5E8]/25",
    },
    {
      title: "Empiria en casa",
      description: "Artículos y recursos educativos.",
      href: "/recursos",
      icon: <BookOpen className="w-6 h-6 text-[#8B7FD1]" />,
      bgIcon: "bg-[#E8E4F7]",
    },
    {
      title: "Preguntas frecuentes",
      description: "Resuelve tus dudas más comunes.",
      href: "/preguntas-frecuentes",
      icon: <HelpCircle className="w-6 h-6 text-[#5B4B9E]" />,
      bgIcon: "bg-[#B4C4EA]/30",
    },
    {
      title: "Contáctanos",
      description: "Estamos para acompañarte.",
      href: "/contacto",
      icon: <Send className="w-6 h-6 text-[#5B8FD4]" />,
      bgIcon: "bg-[#D4C9EE]/40",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F2EFFA]/30 border-y border-[#E8E4F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {hubs.map((hub, idx) => (
            <Card
              key={idx}
              variant="default"
              className="flex flex-col justify-between p-6 bg-white border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-xs hover:shadow-md transition-all duration-300 rounded-3xl group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl ${hub.bgIcon} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}
                >
                  {hub.icon}
                </div>

                <h3 className="text-lg font-extrabold text-[#2D2D3A] group-hover:text-[#5B4B9E] transition-colors">
                  {hub.title}
                </h3>

                <p className="mt-1.5 text-xs sm:text-sm text-[#3E3B52] leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F2EFFA]">
                <Link
                  href={hub.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Ver más</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
