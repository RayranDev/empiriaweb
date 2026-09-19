import React from "react";
import { IconProps } from "./types";

export const LearningIcon: React.FC<IconProps> = ({
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
      <path d="M4 10.5a2.5 2.5 0 0 0 2-2.4c0-1.4-1.1-2.6-2.5-2.6H3.5v-1A1.5 1.5 0 0 1 5 3h4.5a2.5 2.5 0 0 1 2.4 2c1.4 0 2.6-1.1 2.6-2.5V2a1.5 1.5 0 0 1 1.5 1.5V8a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 1 2.5 2.5v4.5a1.5 1.5 0 0 1-1.5 1.5h-4.5a2.5 2.5 0 0 1-2.4-2 2.5 2.5 0 0 0-2.6 2V21a1.5 1.5 0 0 1-1.5-1.5V15a2.5 2.5 0 0 0-2.5-2.5A2.5 2.5 0 0 1 3.5 10v.5z" />
    </svg>
  );
};
