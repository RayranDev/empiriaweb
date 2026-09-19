import React from "react";
import { IconProps } from "./types";

/**
 * Cookies: Galleta horneada con mordisco y chispas de chocolate.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const CookieIcon: React.FC<IconProps> = ({
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
      {/* Cookie perimeter with circular bite on top right */}
      <path d="M12 2a10 10 0 1 0 10 10c0-.8-.1-1.5-.3-2.3a3.5 3.5 0 0 1-4.4-4.4A9.8 9.8 0 0 0 12 2z" />
      {/* Chocolate chips */}
      <circle cx="8.5" cy="8.5" r=".75" fill={color} stroke="none" />
      <circle cx="12" cy="13" r=".75" fill={color} stroke="none" />
      <circle cx="8" cy="15" r=".75" fill={color} stroke="none" />
      <circle cx="15.5" cy="15.5" r=".75" fill={color} stroke="none" />
    </svg>
  );
};
