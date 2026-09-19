import React from "react";
import { IconProps } from "./types";

/**
 * Acompañamiento a la familia: Casa acogedora con corazón / familia en su interior.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const FamilySupportIcon: React.FC<IconProps> = ({
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
      {/* House outline with rounded apex and corners */}
      <path d="M3 10.5l8.3-6.6a1 1 0 0 1 1.4 0l8.3 6.6A1 1 0 0 1 21 11.3V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.7a1 1 0 0 1 0-.8z" />
      {/* Heart inside the house */}
      <path d="M12 16.5l-2.5-2.5a1.8 1.8 0 0 1 2.5-2.5l0 0a1.8 1.8 0 0 1 2.5 2.5z" />
    </svg>
  );
};
