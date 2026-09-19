import React from "react";
import { IconProps } from "./types";

/**
 * Etapa escolar (7-10 años): Rostro infantil de edad escolar.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const SchoolStageIcon: React.FC<IconProps> = ({
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
      {/* Head contour */}
      <circle cx="12" cy="13" r="7.5" />
      {/* School styled hair with center-parted curved bangs */}
      <path d="M5.5 11c1-3 3.5-5.5 6.5-5.5s5.5 2.5 6.5 5.5c-2.5-1-4-2-6.5-1-2.5-1-4 0-6.5 1z" />
      {/* Ears */}
      <path d="M4.5 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5M19.5 13.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5" />
      {/* Eyes */}
      <circle cx="9.5" cy="13.5" r=".75" fill={color} stroke="none" />
      <circle cx="14.5" cy="13.5" r=".75" fill={color} stroke="none" />
      {/* Smile */}
      <path d="M9.5 16.5c.8 1 4.2 1 5 0" />
    </svg>
  );
};
