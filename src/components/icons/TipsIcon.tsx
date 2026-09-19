import React from "react";
import { IconProps } from "./types";

/**
 * Consejos: Bombillo de ideas con filamento y base roscada.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const TipsIcon: React.FC<IconProps> = ({
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
      {/* Bulb body */}
      <path d="M9 18h6M10 21h4" />
      <path d="M15 14.5c1.5-1.2 3-3.2 3-5.5a6 6 0 0 0-12 0c0 2.3 1.5 4.3 3 5.5.5.5.8 1.5.8 2.5h6.4c0-1 .3-2 .8-2.5z" />
      {/* Filament */}
      <path d="M10 9.5a2 2 0 0 1 4 0" />
    </svg>
  );
};
