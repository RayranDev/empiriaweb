import React from "react";
import { IconProps } from "./types";

/**
 * Primera infancia (0-3 años): Rostro tierno de bebé con rizo y sonrisa.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const InfancyIcon: React.FC<IconProps> = ({
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
      {/* Baby head */}
      <circle cx="12" cy="13" r="7.5" />
      {/* Tender curl of hair on top */}
      <path d="M12 5.5c-1-1.5 0-3 1.5-2.5 1 .3.8 1.5.5 2.5" />
      {/* Left and right tiny ears */}
      <path d="M4.5 13c0-1-.8-1.5-1.5-.8-.7.7-.3 1.8.5 1.8M19.5 13c0-1 .8-1.5 1.5-.8.7.7.3 1.8-.5 1.8" />
      {/* Smiling eyes */}
      <path d="M9.5 12a1 1 0 0 0 1-1M13.5 11a1 1 0 0 1 1 1" />
      {/* Sweet smile */}
      <path d="M10 15.5c.8.8 3.2.8 4 0" />
    </svg>
  );
};
