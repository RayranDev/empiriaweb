import React from "react";
import { IconProps } from "./types";

/**
 * Familia: Núcleo familiar (cuidadores y niño/a).
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const FamilyIcon: React.FC<IconProps> = ({
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
      {/* Adult left */}
      <circle cx="7" cy="7" r="3" />
      <path d="M2.5 19.5a4.5 4.5 0 0 1 9 0" />
      {/* Adult right */}
      <circle cx="17" cy="7" r="3" />
      <path d="M12.5 19.5a4.5 4.5 0 0 1 9 0" />
      {/* Child in center front */}
      <circle cx="12" cy="12.5" r="2" />
      <path d="M9.5 21a2.5 2.5 0 0 1 5 0" />
    </svg>
  );
};
