import React from "react";
import { IconProps } from "./types";

/**
 * Niños y niñas: Rostro infantil sonriente y feliz.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const ChildrenIcon: React.FC<IconProps> = ({
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
      <circle cx="12" cy="12" r="8" />
      {/* Friendly hair curve */}
      <path d="M5.5 10c2-2.5 4.5-3.5 6.5-3.5s4.5 1 6.5 3.5" />
      {/* Eyes */}
      <circle cx="9" cy="12.5" r=".75" fill={color} stroke="none" />
      <circle cx="15" cy="12.5" r=".75" fill={color} stroke="none" />
      {/* Cheerful smile */}
      <path d="M9.5 15.5c.8 1 4.2 1 5 0" />
    </svg>
  );
};
