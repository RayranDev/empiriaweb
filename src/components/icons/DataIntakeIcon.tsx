import React from "react";
import { IconProps } from "./types";

/**
 * Toma de datos: Documento con lista y viñetas ordenadas.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const DataIntakeIcon: React.FC<IconProps> = ({
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
      {/* Sheet of paper */}
      <rect x="5" y="3" width="14" height="18" rx="3" />
      {/* Bullet 1 + line */}
      <circle cx="9" cy="8" r=".75" fill={color} stroke="none" />
      <path d="M12 8h4" />
      {/* Bullet 2 + line */}
      <circle cx="9" cy="12" r=".75" fill={color} stroke="none" />
      <path d="M12 12h4" />
      {/* Bullet 3 + line */}
      <circle cx="9" cy="16" r=".75" fill={color} stroke="none" />
      <path d="M12 16h4" />
    </svg>
  );
};
