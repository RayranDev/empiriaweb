import React from "react";
import { Heart, Sparkles } from "lucide-react";

export const EmotionalBreak: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-r from-[#F2EFFA] via-[#E8E4F7] to-[#F2EFFA] relative overflow-hidden text-center">
      {/* Organic background leaves and glow */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#D4C9EE]/50 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative leaf motifs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        {/* Subtle decorative emblem */}
        <div className="inline-flex p-3.5 rounded-full bg-white/80 shadow-sm border border-[#D4C9EE]/60 text-[#8B7FD1]">
          <Heart className="w-6 h-6 text-[#5B4B9E] fill-[#8B7FD1]/20" />
        </div>

        {/* The prominent emotional quote */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2D3A] tracking-tight leading-relaxed sm:leading-snug max-w-3xl mx-auto">
          “Más que un proceso clínico, para nosotras esto es la construcción de un vínculo:{" "}
          <span className="text-[#5B4B9E] underline decoration-[#8B7FD1]/40 underline-offset-8">
            entre la familia, el profesional y el niño
          </span>
          .”
        </blockquote>

        <p className="text-base sm:text-lg text-[#3E3B52] font-medium max-w-xl mx-auto pt-2">
          Creemos profundamente en el respeto al ritmo de cada infancia y en el valor de caminar juntos en cada logro.
        </p>

        {/* Small organic botanical vector */}
        <div className="pt-4 flex items-center justify-center gap-2 text-[#8B7FD1]">
          <span className="h-px w-12 bg-[#8B7FD1]/40" />
          <Sparkles className="w-4 h-4" />
          <span className="h-px w-12 bg-[#8B7FD1]/40" />
        </div>
      </div>
    </section>
  );
};
