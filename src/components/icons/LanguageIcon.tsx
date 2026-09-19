import React from "react";
import { IconProps } from "./types";

export const LanguageIcon: React.FC<IconProps> = ({
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
      <path d="M12 4.5v15" />
      <path d="M12 4.5c-2-1.5-5-1-6.5.5a3.8 3.8 0 0 0-.5 4.5 3.5 3.5 0 0 0 .5 5 4 4 0 0 0 1.5 4 4.5 4.5 0 0 0 5 1" />
      <path d="M12 4.5c2-1.5 5-1 6.5.5a3.8 3.8 0 0 1 .5 4.5 3.5 3.5 0 0 1-.5 5 4 4 0 0 1-1.5 4 4.5 4.5 0 0 1-5 1" />
      <path d="M8.5 8.5c1 .5 2 0 2-1M6.5 13c1.5 0 2.5.5 3 2" />
      <path d="M15.5 8.5c-1 .5-2 0-2-1M17.5 13c-1.5 0-2.5.5-3 2" />
    </svg>
  );
};
