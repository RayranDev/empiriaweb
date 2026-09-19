import React from "react";
import { IconProps } from "./types";

/**
 * Mayores de 10 años: Grupo de jóvenes / personas.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const YouthGroupIcon: React.FC<IconProps> = ({
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
      {/* Central taller youth */}
      <circle cx="12" cy="7" r="3" />
      <path d="M7.5 19.5a4.5 4.5 0 0 1 9 0" />
      {/* Left youth */}
      <circle cx="6" cy="9.5" r="2.5" />
      <path d="M2 20a4 4 0 0 1 5-2.5" />
      {/* Right youth */}
      <circle cx="18" cy="9.5" r="2.5" />
      <path d="M17 17.5a4 4 0 0 1 5 2.5" />
    </svg>
  );
};
