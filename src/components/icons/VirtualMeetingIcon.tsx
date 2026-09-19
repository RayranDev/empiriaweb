import React from "react";
import { IconProps } from "./types";

/**
 * Reunión virtual: Laptop con pantalla abierta y cámara.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const VirtualMeetingIcon: React.FC<IconProps> = ({
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
      {/* Laptop screen */}
      <rect x="4" y="4" width="16" height="11" rx="2" />
      {/* Webcam dot */}
      <circle cx="12" cy="6.5" r=".5" fill={color} stroke="none" />
      {/* Laptop base */}
      <path d="M2 18.5h20a1 1 0 0 0 .5-.9c0-.6-.5-1.1-1.1-1.1H2.6c-.6 0-1.1.5-1.1 1.1 0 .5.2.9.5.9z" />
    </svg>
  );
};
