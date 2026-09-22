"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface SpaceLightboxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SpaceLightboxProps {
  /**
   * The gallery this lightbox can page through. Prev/next controls only
   * render when there is more than one image (see `hasMultiple` below).
   */
  images: SpaceLightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

const FADE_DURATION_MS = 200;

export const SpaceLightbox: React.FC<SpaceLightboxProps> = ({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(isOpen);
  const [visible, setVisible] = useState(false);
  // Tracks the previous `isOpen` so we can react to the transition during
  // render (React-recommended "adjusting state when a prop changes" pattern)
  // instead of syncing it in an effect, which would just copy a prop to state.
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setActiveIndex(initialIndex);
      setMounted(true);
    } else {
      setVisible(false);
    }
  }

  // Flip to visible on the next frame so the opacity transition actually
  // plays (mounting at opacity 0 then immediately at opacity 100 would not).
  useEffect(() => {
    if (!isOpen) return;
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  // Unmount after the fade-out finishes. Reduced-motion users skip the wait.
  useEffect(() => {
    if (isOpen || !mounted) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timeout = setTimeout(
      () => setMounted(false),
      prefersReducedMotion ? 0 : FADE_DURATION_MS
    );
    return () => clearTimeout(timeout);
  }, [isOpen, mounted]);

  // Focus management: move focus into the dialog on open, return it to the
  // trigger element on close.
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      previouslyFocusedRef.current?.focus();
      previouslyFocusedRef.current = null;
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape closes the dialog; Tab/Shift+Tab is trapped inside it while open.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || images.length === 0) return null;

  const activeImage = images[activeIndex];
  const hasMultiple = images.length > 1;

  const goToPrevious = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const goToNext = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-[#2D2D3A]/80 backdrop-blur-sm p-4 sm:p-8 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Imagen ampliada: ${activeImage.alt}`}
        className="relative w-full max-w-4xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar imagen ampliada"
          className="absolute -top-11 right-0 sm:-top-3 sm:-right-3 rounded-full p-2 text-white sm:text-[#2D2D3A] sm:bg-white sm:shadow-md hover:text-[#5B4B9E] transition-colors z-10"
        >
          <X className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2.5 text-[#2D2D3A] hover:text-[#5B4B9E] shadow-sm transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Siguiente imagen"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2.5 text-[#2D2D3A] hover:text-[#5B4B9E] shadow-sm transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="relative w-full rounded-[24px] overflow-hidden bg-white shadow-2xl">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            width={activeImage.width}
            height={activeImage.height}
            sizes="(max-width: 768px) 100vw, 900px"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};
