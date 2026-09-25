"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SpaceLightbox } from "@/components/space/SpaceLightbox";
import { OrganicLeaf, SparkleStar } from "@/components/icons";

const spacePhoto = {
  src: "/images/space/consultorio-banner.png",
  alt: "Espacio de atención y sala de espera del Centro Terapéutico Empiria en Bogotá.",
  width: 1942,
  height: 809,
};

export const SpaceSection: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white/30 relative overflow-hidden">
      <div className="absolute top-10 left-8 pointer-events-none opacity-70">
        <OrganicLeaf size={44} color="#5B8FD4" />
      </div>
      <div className="absolute bottom-8 right-10 pointer-events-none opacity-70">
        <SparkleStar size={20} color="#8B7FD1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight">
            Nuestro Espacio
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#3E3B52]">
            Un consultorio pensado para que niños y familias se sientan cómodos desde el primer
            momento, en Bogotá.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="group relative block w-full overflow-hidden rounded-[28px] border border-[#E8E4F7] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8FD4] focus-visible:ring-offset-2"
            aria-label={`Ampliar imagen: ${spacePhoto.alt}`}
          >
            <Image
              src={spacePhoto.src}
              alt={spacePhoto.alt}
              width={spacePhoto.width}
              height={spacePhoto.height}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>

          <div className="mt-6 text-center">
            <Link
              href="/nuestro-espacio"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors"
            >
              <span>Conocer más</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <SpaceLightbox
        images={[spacePhoto]}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
};
