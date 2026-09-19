import React from "react";
import { IconProps } from "./types";

/**
 * Nuestro equipo: Grupo multidisciplinar de tres profesionales.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const OurTeamIcon: React.FC<IconProps> = ({
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
      {/* Central member */}
      <circle cx="12" cy="7" r="3" />
      <path d="M7 19.5a5 5 0 0 1 10 0" />
      {/* Left member */}
      <circle cx="6" cy="9.5" r="2.5" />
      <path d="M2 20a4.5 4.5 0 0 1 4.5-3" />
      {/* Right member */}
      <circle cx="18" cy="9.5" r="2.5" />
      <path d="M17.5 17a4.5 4.5 0 0 1 4.5 3" />
    </svg>
  );
};
