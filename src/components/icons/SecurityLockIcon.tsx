import React from "react";
import { IconProps } from "./types";

/**
 * Seguridad: Candado de protección con cerradura.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const SecurityLockIcon: React.FC<IconProps> = ({
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
      <rect x="4" y="11" width="16" height="10" rx="3" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      <circle cx="12" cy="15.5" r="1" />
      <path d="M12 16.5v2" />
    </svg>
  );
};
