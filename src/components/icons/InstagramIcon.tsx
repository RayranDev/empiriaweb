import React from "react";
import { IconProps } from "./types";

/**
 * Instagram: Icono oficial de Instagram (cámara cuadrada redondeada, lente y flash).
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const InstagramIcon: React.FC<IconProps> = ({
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
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill={color} stroke="none" />
    </svg>
  );
};
