import React from "react";
import { EmpiriaIcon } from "./EmpiriaIcon";
import { IconProps } from "./types";

/**
 * Decorative branch with leaves — official Empiria icon gallery artwork
 * (decorativos/rama-hojas.png). `color` is accepted for API compatibility but
 * has no effect on this brand PNG: unlike the previous hand-drawn SVG, every
 * usage now renders the same fixed gallery colors instead of a per-instance tint.
 */
export const BotanicalBranch: React.FC<IconProps & { flip?: boolean }> = ({
  size = 64,
  className = "",
  flip = false,
}) => (
  <EmpiriaIcon
    src="/icons/empiria/decorativos/rama-hojas.png"
    width={320}
    height={360}
    size={size}
    className={`${className} ${flip ? "-scale-x-100" : ""}`}
  />
);

/**
 * Single sprout/leaf accent — official Empiria icon gallery artwork
 * (decorativos/brote.png). `color` is a no-op for the same reason as above.
 */
export const OrganicLeaf: React.FC<IconProps & { flip?: boolean }> = ({
  size = 28,
  className = "",
  flip = false,
}) => (
  <EmpiriaIcon
    src="/icons/empiria/decorativos/brote.png"
    width={284}
    height={348}
    size={size}
    className={`${className} ${flip ? "-scale-x-100" : ""}`}
  />
);

/**
 * Sparkle/star accent — official Empiria icon gallery artwork
 * (decorativos/estrella.png). `color` is a no-op, see BotanicalBranch.
 */
export const SparkleStar: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/decorativos/estrella.png"
    width={192}
    height={208}
    size={size}
    className={className}
  />
);

/**
 * Rainbow accent — official Empiria icon gallery artwork
 * (decorativos/arcoiris.png).
 */
export const SoftRainbow: React.FC<IconProps> = ({ size = 48, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/decorativos/arcoiris.png"
    width={452}
    height={276}
    size={size}
    className={className}
  />
);

/**
 * Cloud accent — official Empiria icon gallery artwork
 * (decorativos/nube.png). `color` is a no-op, see BotanicalBranch.
 */
export const SoftCloud: React.FC<IconProps> = ({ size = 40, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/decorativos/nube.png"
    width={384}
    height={284}
    size={size}
    className={className}
  />
);

/**
 * Sun accent — official Empiria icon gallery artwork
 * (decorativos/sol.png). `color` is a no-op, see BotanicalBranch.
 */
export const GentleSun: React.FC<IconProps> = ({ size = 32, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/decorativos/sol.png"
    width={280}
    height={288}
    size={size}
    className={className}
  />
);

/**
 * Five-petal flower accent — official Empiria icon gallery artwork
 * (decorativos/flor.png). `color` is a no-op, see BotanicalBranch.
 */
export const FivePetalFlower: React.FC<IconProps> = ({ size = 28, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/decorativos/flor.png"
    width={248}
    height={264}
    size={size}
    className={className}
  />
);

/**
 * Little heart doodle accent — official Empiria icon gallery artwork
 * (decorativos/corazon.png). `color` is a no-op, see BotanicalBranch.
 */
export const LittleHeartDoodle: React.FC<IconProps> = ({ size = 18, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/decorativos/corazon.png"
    width={212}
    height={204}
    size={size}
    className={className}
  />
);

/**
 * Curved dotted line accent — official Empiria icon gallery artwork
 * (decorativos/puntos.png). `color` is a no-op, see BotanicalBranch.
 */
export const CurvedDottedLine: React.FC<IconProps> = ({ size = 48, className = "" }) => (
  <EmpiriaIcon
    src="/icons/empiria/decorativos/puntos.png"
    width={240}
    height={244}
    size={size}
    className={className}
  />
);
