import React from "react";
import { IconProps } from "./types";

/**
 * Tratamiento de datos: Documento con escudo protector.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const DataTreatmentIcon: React.FC<IconProps> = ({
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
      {/* Document */}
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="12" x2="12" y2="12" />
      <line x1="8" y1="16" x2="11" y2="16" />
      {/* Shield at bottom right */}
      <path d="M18 13s4 1 4 4.5c0 3-2.5 5-4 5.5-1.5-.5-4-2.5-4-5.5 0-3.5 4-4.5 4-4.5z" />
    </svg>
  );
};
