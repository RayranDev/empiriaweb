import React from "react";
import { IconProps } from "./types";

/**
 * Confianza y seguridad: Escudo de protección con marca de verificación.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const TrustSafetyIcon: React.FC<IconProps> = ({
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
      {/* Curved protective shield */}
      <path d="M12 3s8 2 8 9c0 6-5 9.5-8 10.5C9 21.5 4 18 4 12c0-7 8-9 8-9z" />
      {/* Checkmark inside */}
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
};
