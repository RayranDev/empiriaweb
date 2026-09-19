import React from "react";
import { IconProps } from "./types";

/**
 * Videos: Botón de reproducción de video en pantalla redondeada.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const VideoIcon: React.FC<IconProps> = ({
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
      {/* Screen rectangle */}
      <rect x="2.5" y="4.5" width="19" height="15" rx="4" />
      {/* Play triangle */}
      <polygon points="10 9 16 12 10 15 10 9" />
    </svg>
  );
};
