import React from "react";
import { IconProps } from "./types";

/**
 * Información: Círculo con letra informativa 'i'.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const InfoIcon: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth={strokeWidth + 1} />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  );
};
