import React from "react";
import { IconProps } from "./types";

export const CommunicationIcon: React.FC<IconProps> = ({
  size = 24,
  className = "",
  color = "currentColor",
  strokeWidth = 2,
  style,
  ...props
}) => {
  const pixelSize = typeof size === "number" ? `${size}px` : size;
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
      style={{
        width: pixelSize,
        height: pixelSize,
        maxWidth: pixelSize,
        maxHeight: pixelSize,
        flexShrink: 0,
        ...style,
      }}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <circle cx="8" cy="7" r="3.5" />
      <path d="M2.5 19.5a5.5 5.5 0 0 1 11 0" />
      <circle cx="16" cy="9" r="3" />
      <path d="M15 14.5a5 5 0 0 1 6.5 5" />
    </svg>
  );
};
