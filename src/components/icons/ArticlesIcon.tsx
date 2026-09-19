import React from "react";
import { IconProps } from "./types";

/**
 * Artículos: Libro abierto de lectura y conocimiento.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const ArticlesIcon: React.FC<IconProps> = ({
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
      <path d="M12 7v13" />
      <path d="M12 7C9 5.5 5.5 5.5 3 6.5v12C5.5 17.5 9 17.5 12 19" />
      <path d="M12 7c3-1.5 6.5-1.5 9-.5v12c-2.5-1-6-1-9 .5" />
    </svg>
  );
};
