import React from "react";
import { EmpiriaIcon } from "./EmpiriaIcon";
import { IconProps } from "./types";

/**
 * Guides (guías) — official Empiria icon gallery artwork.
 * `color` and `strokeWidth` are accepted for API compatibility but have no
 * effect on this brand PNG (it is not redrawn or recolored).
 */
export const GuidesIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/recursos/guias.png"
    width={228}
    height={272}
    size={size}
    className={className}
  />
);
