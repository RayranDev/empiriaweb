import React from "react";
import { IconProps } from "./types";

/**
 * Articulación con el colegio: Escuela con campanario/bandera y entrada.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const SchoolCoordinationIcon: React.FC<IconProps> = ({
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
      {/* Belfry and flag at the top */}
      <path d="M12 2v3M12 2l3 1.5-3 1.5" />
      <path d="M10 5h4v3h-4z" />
      {/* School triangular pediment roof */}
      <path d="M3 10.5l9-4.5 9 4.5" />
      {/* School main walls */}
      <path d="M5 10.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9.5" />
      {/* Arched entrance door */}
      <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
      {/* Windows */}
      <path d="M7 13.5h2M15 13.5h2" />
    </svg>
  );
};
