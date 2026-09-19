import React from "react";
import { EmpiriaIcon } from "./EmpiriaIcon";
import { IconProps } from "./types";

/**
 * Instagram — official Empiria icon gallery artwork.
 * `color` and `strokeWidth` are accepted for API compatibility but have no
 * effect on this brand PNG (it is not redrawn or recolored).
 *
 * Use this for content icons (cards, footer links, inline contact info).
 * For a white/monochrome glyph inside a solid-colored button (e.g. the
 * gradient "Seguir en Instagram" CTA), use `InstagramGlyph` instead.
 */
export const InstagramIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/contacto/instagram.png"
    width={256}
    height={256}
    size={size}
    className={className}
  />
);

/**
 * Monochrome Instagram glyph (rounded camera outline, lens and flash), inherits
 * `color` via `currentColor`. Kept as hand-drawn SVG so it can render solid white
 * inside filled colored buttons, where the full-color brand PNG would look wrong.
 */
export const InstagramGlyph: React.FC<IconProps> = ({
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
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill={color} stroke="none" />
    </svg>
  );
};
