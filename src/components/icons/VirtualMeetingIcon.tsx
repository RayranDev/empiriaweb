import React from "react";
import { EmpiriaIcon } from "./EmpiriaIcon";
import { IconProps } from "./types";

/**
 * Virtual meeting (reunión virtual) — official Empiria icon gallery artwork.
 * `color` and `strokeWidth` are accepted for API compatibility but have no
 * effect on this brand PNG (it is not redrawn or recolored).
 */
export const VirtualMeetingIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/proceso/reunion-virtual.png"
    width={344}
    height={280}
    size={size}
    className={className}
  />
);
