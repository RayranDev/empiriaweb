import React from "react";
import { EmpiriaIcon } from "./EmpiriaIcon";
import { IconProps } from "./types";

/**
 * Data processing (tratamiento de datos) — official Empiria icon gallery artwork.
 * `color` and `strokeWidth` are accepted for API compatibility but have no
 * effect on this brand PNG (it is not redrawn or recolored).
 */
export const DataTreatmentIcon: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/seguridad/tratamiento-datos.png"
    width={228}
    height={260}
    size={size}
    className={className}
  />
);
