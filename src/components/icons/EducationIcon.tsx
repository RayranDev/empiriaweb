import React from "react";
import { IconProps } from "./types";

/**
 * Recursos educativos: Birrete de graduación / aprendizaje con borla.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const EducationIcon: React.FC<IconProps> = ({
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
      {/* Cap mortarboard top diamond */}
      <path d="M12 3L2 8l10 5 10-5-10-5z" />
      {/* Cap under skullcap */}
      <path d="M6 10.5v5c0 2.5 3 4.5 6 4.5s6-2 6-4.5v-5" />
      {/* Dangling tassel */}
      <path d="M22 8.5v7" />
      <circle cx="22" cy="16.5" r=".75" fill={color} stroke="none" />
    </svg>
  );
};
