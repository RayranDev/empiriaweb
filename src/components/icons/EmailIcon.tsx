import React from "react";
import { EmpiriaIcon } from "./EmpiriaIcon";
import { IconProps } from "./types";

/**
 * Email (correo) — official Empiria icon gallery artwork.
 * `color` and `strokeWidth` are accepted for API compatibility but have no
 * effect on this brand PNG (it is not redrawn or recolored).
 */
export const EmailIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/contacto/correo.png"
    width={252}
    height={216}
    size={size}
    className={className}
  />
);
