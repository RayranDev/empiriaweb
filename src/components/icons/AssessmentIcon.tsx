import React from "react";
import { IconProps } from "./types";

/**
 * Valoración presencial: Portapapeles con clip y marca de verificación.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const AssessmentIcon: React.FC<IconProps> = ({
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
      {/* Clipboard board */}
      <rect x="5" y="4" width="14" height="17" rx="3" />
      {/* Top clamp */}
      <path d="M9 4.5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5" />
      {/* Prominent Checkmark */}
      <path d="M9 13.5l2 2 4.5-4.5" />
    </svg>
  );
};
