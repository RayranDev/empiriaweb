import React from "react";
import { EmpiriaIcon } from "./EmpiriaIcon";
import { IconProps } from "./types";

/**
 * WhatsApp — official Empiria icon gallery artwork.
 * `color` and `strokeWidth` are accepted for API compatibility but have no
 * effect on this brand PNG (it is not redrawn or recolored).
 *
 * Use this for content icons (cards, feature lists, inline contact info).
 * For a white/monochrome glyph inside a solid-colored button (e.g. the
 * green "Escríbenos por WhatsApp" CTA), use `WhatsAppGlyph` instead.
 */
export const WhatsAppIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/contacto/whatsapp.png"
    width={260}
    height={268}
    size={size}
    className={className}
  />
);

/**
 * Monochrome WhatsApp glyph (speech bubble with handset), inherits `color` via
 * `currentColor`. Kept as hand-drawn SVG so it can render solid white inside
 * filled colored buttons, where the full-color brand PNG would look wrong.
 */
export const WhatsAppGlyph: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {/* Speech bubble contour with left-bottom pointer */}
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.7 7.4L3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 20.5 11.8z" />
      {/* Curved telephone handset inside */}
      <path d="M9.5 8.5c-.3-.7-.6-.7-.9-.7s-.6 0-.9.3c-.3.3-1.2 1.2-1.2 2.9s1.3 3.3 1.4 3.5c.2.2 2.4 3.8 6 5.2 3 .9 3.6.6 4.2.5.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5s-2.2-1.1-2.5-1.2-.6-.2-.8.2-.9 1.2-1.1 1.4-.4.2-.8 0a10.1 10.1 0 0 1-3.1-1.9 11.2 11.2 0 0 1-2.1-2.7c-.2-.4 0-.6.2-.8s.4-.4.6-.6c.2-.2.3-.4.4-.6s0-.4-.1-.6c-.1-.2-.8-2-1.1-2.6z" />
    </svg>
  );
};
