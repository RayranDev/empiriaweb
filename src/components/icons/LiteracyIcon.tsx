import React from "react";
import { IconProps } from "./types";

export const LiteracyIcon: React.FC<IconProps> = ({
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
      <path d="M12 7v13" />
      <path d="M12 7C9.5 5 5 5 3 6v12c2.5-1 7-1 9 1" />
      <path d="M12 7c2.5-1.8 7-1.8 9-1v12c-2.5-1-7-1-9 1" />
      <path d="M6 9.5c1.5-.5 3.5-.5 4.5 0M6 13c1.5-.5 3.5-.5 4.5 0" />
      <path d="M13.5 9.5c1-.5 3-.5 4.5 0M13.5 13c1-.5 3-.5 4.5 0" />
    </svg>
  );
};
