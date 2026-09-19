import React from "react";
import { IconProps } from "./types";

/**
 * Agendamiento: Calendario con anillas y cuadrícula de fechas.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const CalendarIcon: React.FC<IconProps> = ({
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
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      {/* Date dots */}
      <circle cx="8" cy="13.5" r=".75" fill={color} stroke="none" />
      <circle cx="12" cy="13.5" r=".75" fill={color} stroke="none" />
      <circle cx="16" cy="13.5" r=".75" fill={color} stroke="none" />
      <circle cx="8" cy="17" r=".75" fill={color} stroke="none" />
      <circle cx="12" cy="17" r=".75" fill={color} stroke="none" />
      <circle cx="16" cy="17" r=".75" fill={color} stroke="none" />
    </svg>
  );
};
