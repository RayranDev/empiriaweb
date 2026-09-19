"use client";

import React from "react";
import { GraduationCap, Award, Heart, CheckCircle2, ArrowRight } from "lucide-react";
import { teamData } from "@/data/team";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const TeamSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="lavender">Equipo Profesional</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            Conoce a nuestras fonoaudiólogas
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Profesionales comprometidas con la infancia, cuya práctica une formación rigurosa, vocación pedagógica y calidez humana.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {teamData.map((pro) => (
            <Card
              key={pro.id}
              variant="default"
              className="flex flex-col justify-between p-8 sm:p-10 bg-gradient-to-br from-white via-[#F2EFFA]/30 to-white border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-sm transition-all duration-300"
            >
              <div className="space-y-6">
                {/* Header: Avatar / Initials & Titles */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5B8FD4] to-[#8B7FD1] flex items-center justify-center text-white text-2xl font-black shadow-md border-2 border-white shrink-0">
                    {pro.photoPlaceholder}
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#2D2D3A]">
                      {pro.name}
                    </h3>
                    <p className="text-base font-bold text-[#5B4B9E] mt-0.5">
                      {pro.role}
                    </p>
                    {pro.specialty && (
                      <p className="text-xs sm:text-sm font-semibold text-[#8B7FD1] mt-0.5">
                        {pro.specialty}
                      </p>
                    )}
                  </div>
                </div>

                {/* Formación y Experiencia */}
                <div className="space-y-2 pt-2 border-t border-[#E8E4F7] text-xs sm:text-sm text-[#3E3B52]">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#5B8FD4] shrink-0 mt-0.5" />
                    <div>
                      {pro.education.map((edu, i) => (
                        <p key={i} className="font-medium text-[#2D2D3A]">
                          {edu}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <Award className="w-4 h-4 text-[#8B7FD1] shrink-0 mt-0.5" />
                    <p className="font-semibold text-[#5B4B9E]">{pro.experience}</p>
                  </div>
                </div>

                {/* Bio text (Exact statements) */}
                <div className="space-y-3 text-xs sm:text-sm text-[#3E3B52] leading-relaxed border-t border-[#F2EFFA] pt-4">
                  {pro.bio.map((paragraph, i) => (
                    <p key={i} className="italic text-[#3E3B52]/90">
                      “{paragraph}”
                    </p>
                  ))}
                </div>

                {/* Áreas de Interés */}
                <div className="pt-2 border-t border-[#E8E4F7]">
                  <p className="text-xs font-bold text-[#5B4B9E] uppercase tracking-wide mb-2.5">
                    Áreas de interés y abordaje:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pro.focusAreas.map((area, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#3E3B52]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8FD4] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-[#E8E4F7]">
                <Button
                  variant="outline"
                  size="sm"
                  href="#nosotros"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Conocer nuestro enfoque
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
