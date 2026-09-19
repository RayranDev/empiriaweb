import React from "react";
import { IconProps } from "./types";

/**
 * Enfoque humano y profesional: Hoja botánica orgánica con nervadura central.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const HumanApproachIcon: React.FC<IconProps> = ({
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
      {/* Botanical leaf contour */}
      <path d="M4 20C7 15 8.5 9 20 4c0 11.5-6 13-16 16z" />
      {/* Central leaf vein */}
      <path d="M4 20c4-4 8-8 12-11" />
    </svg>
  );
};
