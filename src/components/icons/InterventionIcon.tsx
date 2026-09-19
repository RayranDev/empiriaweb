import React from "react";
import { IconProps } from "./types";

/**
 * Intervención: Brote o pequeña planta con dos hojas en crecimiento.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const InterventionIcon: React.FC<IconProps> = ({
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
      {/* Central plant stem */}
      <path d="M12 21V9" />
      {/* Right curved leaf */}
      <path d="M12 13c3-3 7-2 8 3-4 1-7-1-8-3z" />
      {/* Left curved leaf */}
      <path d="M12 10C9 7 5 8 4 13c4 1 7-1 8-3z" />
    </svg>
  );
};
