import React from "react";
import { IconProps } from "./types";

/**
 * Soporte: Burbuja de conversación con puntos de diálogo.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const SupportChatIcon: React.FC<IconProps> = ({
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
      <rect x="3" y="4" width="18" height="13" rx="3.5" />
      <path d="M7 17l-2 3.5v-3.5" />
      <circle cx="8" cy="10.5" r=".75" fill={color} stroke="none" />
      <circle cx="12" cy="10.5" r=".75" fill={color} stroke="none" />
      <circle cx="16" cy="10.5" r=".75" fill={color} stroke="none" />
    </svg>
  );
};
