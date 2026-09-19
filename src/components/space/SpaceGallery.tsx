"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { SpaceLightbox, type SpaceLightboxImage } from "./SpaceLightbox";

interface SpaceGalleryProps {
  /** The one real photo of the office currently available. */
  photo: SpaceLightboxImage;
  /**
   * Number of "coming soon" placeholder tiles to render for gallery slots
   * not yet filled with real photos. These are NOT clickable — there is
   * nothing to zoom into on a placeholder.
   */
  placeholderCount?: number;
}

const PLACEHOLDER_LABEL = "Foto próximamente";

export const SpaceGallery: React.FC<SpaceGalleryProps> = ({
  photo,
  placeholderCount = 3,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* The real photo — the only clickable tile, opens the lightbox */}
      <button
        type="button"
        onClick={() => setIsLightboxOpen(true)}
        className="group relative block w-full overflow-hidden rounded-[28px] border border-[#E8E4F7] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8FD4] focus-visible:ring-offset-2"
        aria-label={`Ampliar imagen: ${photo.alt}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority
        />
      </button>

      {/* Placeholder tiles: gallery slots not yet filled with real photos */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 rounded-[24px] border-2 border-dashed border-[#C3B8E8] bg-[#F2EFFA]/60 p-6 aspect-[4/3] text-center"
          >
            <Camera size={28} className="text-[#8B7FD1]" strokeWidth={1.75} aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-[#5B4B9E]">
              {PLACEHOLDER_LABEL}
            </span>
          </div>
        ))}
      </div>

      <SpaceLightbox
        images={[photo]}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
};
