import React from "react";
import { IconProps } from "./types";

/**
 * Desarrollo infantil (4-6 años): Rostro de niño con flequillo alegre y sonrisa.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const ChildDevelopmentIcon: React.FC<IconProps> = ({
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
      {/* Head contour */}
      <path d="M4.5 13a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0z" />
      {/* Side-swept child bangs hair */}
      <path d="M5.5 10c2-3 5-4.5 9-4.5 2 0 3.5.5 4.5 1.5-2.5 1-4.5 2.5-6 4-1.5-1-4.5-1.5-7.5-1z" />
      {/* Ears */}
      <path d="M4.5 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5M19.5 13.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5" />
      {/* Eyes */}
      <circle cx="9.5" cy="13" r=".75" fill={color} stroke="none" />
      <circle cx="14.5" cy="13" r=".75" fill={color} stroke="none" />
      {/* Warm smile */}
      <path d="M9.5 16c.8 1 4.2 1 5 0" />
    </svg>
  );
};
