import React from "react";
import { IconProps } from "./types";

/**
 * Términos y condiciones: Documento con sello de verificación.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const TermsConditionsIcon: React.FC<IconProps> = ({
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="12" x2="12" y2="12" />
      <line x1="8" y1="16" x2="11" y2="16" />
      {/* Check badge at bottom right */}
      <circle cx="17.5" cy="17.5" r="4" />
      <path d="M16 17.5l1 1 2-2" />
    </svg>
  );
};
