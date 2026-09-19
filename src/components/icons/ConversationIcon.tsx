import React from "react";
import { IconProps } from "./types";

/**
 * Conversación: Dos burbujas de diálogo en interacción.
 * Lenguaje visual oficial Galería de Iconos Empiria.
 */
export const ConversationIcon: React.FC<IconProps> = ({
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
      {/* Primary speech bubble */}
      <path d="M14 19l-3.5 1.5.5-2.5A7 7 0 1 1 18 10a7 7 0 0 1-4 6.2" />
      {/* Secondary speech bubble in background */}
      <path d="M6 14.5l-2.5 1 .5-2A5.5 5.5 0 0 1 10 5" />
    </svg>
  );
};
