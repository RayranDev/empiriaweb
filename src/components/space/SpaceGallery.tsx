"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { SpaceLightbox, type SpaceLightboxImage } from "./SpaceLightbox";

interface SpaceGalleryProps {
  /**
   * The real photos of the office. The first one is treated as the wide
   * banner shot and shown full-width at its own natural aspect ratio — it
   * is not forced into a grid cell, which is what made a panoramic photo
   * look badly cropped. The rest render below as equal square tiles with
   * rounded corners.
   */
  photos: SpaceLightboxImage[];
  /**
   * Number of "coming soon" placeholder tiles to render for gallery slots
   * not yet filled with real photos. These are NOT clickable — there is
   * nothing to zoom into on a placeholder. Defaults to 0.
   */
  placeholderCount?: number;
}

const PLACEHOLDER_LABEL = "Foto próximamente";

export const SpaceGallery: React.FC<SpaceGalleryProps> = ({
  photos,
  placeholderCount = 0,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const [banner, ...rest] = photos;

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Wide banner photo, full width, natural aspect ratio — no crop */}
      {banner && (
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="group relative block w-full overflow-hidden rounded-[28px] border border-[#E8E4F7] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8FD4] focus-visible:ring-offset-2"
          aria-label={`Ampliar imagen: ${banner.alt}`}
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            width={banner.width}
            height={banner.height}
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
        </button>
      )}

      {/* Remaining photos: equal square tiles with rounded corners */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {rest.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => openLightbox(index + 1)}
              className="group relative block w-full aspect-square overflow-hidden rounded-[28px] border border-[#E8E4F7] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8FD4] focus-visible:ring-offset-2"
              aria-label={`Ampliar imagen: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      )}

      {/* Placeholder tiles: gallery slots not yet filled with real photos */}
      {placeholderCount > 0 && (
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
      )}

      <SpaceLightbox
        images={photos}
        initialIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
};
