import React from "react";
import { IconProps } from "./types";

/**
 * Correo electrónico: Sobre clásico con solapa triangular.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const EmailIcon: React.FC<IconProps> = ({
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
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3 7l8.2 5.8a1.5 1.5 0 0 0 1.6 0L21 7" />
    </svg>
  );
};
