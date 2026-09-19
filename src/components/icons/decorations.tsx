import React from "react";
import { IconProps } from "./types";

/**
 * Ramita botánica con hojas suaves inspirada en el logo y la galería de Empiria.
 */
export const BotanicalBranch: React.FC<IconProps & { flip?: boolean }> = ({
  size = 64,
  className = "",
  color = "#8B7FD1",
  flip = false,
  style,
  ...props
}) => {
  const numSize = typeof size === "number" ? size : parseInt(String(size), 10) || 64;
  return (
    <svg
      width={numSize}
      height={Math.round((numSize * 80) / 100)}
      viewBox="0 0 100 80"
      fill="none"
      style={{
        width: `${numSize}px`,
        height: `${Math.round((numSize * 80) / 100)}px`,
        maxWidth: "100%",
        maxHeight: `${Math.round((numSize * 80) / 100)}px`,
        flexShrink: 0,
        ...style,
      }}
      className={`inline-block shrink-0 ${className} ${flip ? "-scale-x-100" : ""}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M10 70C30 55 55 40 85 15"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M32 55C32 46 40 44 46 47C46 56 38 58 32 55Z"
        fill="#A8C5E8"
        opacity="0.9"
      />
      <path
        d="M50 42C48 33 55 30 62 33C64 42 57 45 50 42Z"
        fill={color}
        opacity="0.85"
      />
      <path
        d="M68 28C68 19 76 17 82 20C82 29 74 31 68 28Z"
        fill="#5B8FD4"
        opacity="0.85"
      />
      <path
        d="M85 15C85 8 91 6 96 9C96 16 90 17 85 15Z"
        fill="#C3B8E8"
        opacity="0.9"
      />
    </svg>
  );
};

/**
 * Hoja botánica suave individual con nervadura blanca.
 */
export const OrganicLeaf: React.FC<IconProps & { flip?: boolean }> = ({
  size = 28,
  className = "",
  color = "#8B7FD1",
  flip = false,
  style,
  ...props
}) => {
  const pixelSize = typeof size === "number" ? `${size}px` : size;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      style={{
        width: pixelSize,
        height: pixelSize,
        maxWidth: pixelSize,
        maxHeight: pixelSize,
        ...style,
      }}
      className={`inline-block shrink-0 ${className} ${flip ? "-scale-x-100" : ""}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 26C10 20 12 12 26 6C26 20 18 22 6 26Z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M9 23C13 18 17 14 23 9"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
};

/**
 * Estrella destello de 4 puntas redondeadas.
 */
export const SparkleStar: React.FC<IconProps> = ({
  size = 20,
  className = "",
  color = "#8B7FD1",
  style,
  ...props
}) => {
  const pixelSize = typeof size === "number" ? `${size}px` : size;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{
        width: pixelSize,
        height: pixelSize,
        maxWidth: pixelSize,
        maxHeight: pixelSize,
        ...style,
      }}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
    </svg>
  );
};

/**
 * Arcoíris infantil de 3 arcos concéntricos en tonos lavanda y pastel.
 */
export const SoftRainbow: React.FC<IconProps> = ({
  size = 48,
  className = "",
  style,
  ...props
}) => {
  const numSize = typeof size === "number" ? size : parseInt(String(size), 10) || 48;
  return (
    <svg
      width={numSize}
      height={Math.round((numSize * 36) / 48)}
      viewBox="0 0 48 36"
      fill="none"
      style={{
        width: `${numSize}px`,
        height: `${Math.round((numSize * 36) / 48)}px`,
        maxWidth: "100%",
        ...style,
      }}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6 32a18 18 0 0 1 36 0"
        stroke="#8B7FD1"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M12 32a12 12 0 0 1 24 0"
        stroke="#A8C5E8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M18 32a6 6 0 0 1 12 0"
        stroke="#D4C9EE"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

/**
 * Nube esponjosa suave.
 */
export const SoftCloud: React.FC<IconProps> = ({
  size = 40,
  className = "",
  color = "#E8E4F7",
  style,
  ...props
}) => {
  const numSize = typeof size === "number" ? size : parseInt(String(size), 10) || 40;
  return (
    <svg
      width={numSize}
      height={Math.round((numSize * 24) / 32)}
      viewBox="0 0 32 24"
      fill={color}
      style={{
        width: `${numSize}px`,
        height: `${Math.round((numSize * 24) / 32)}px`,
        maxWidth: "100%",
        ...style,
      }}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path d="M7 19h18a6 6 0 0 0 2-11.6 8 8 0 0 0-14.8-1.9A5.5 5.5 0 0 0 7 19z" />
    </svg>
  );
};

/**
 * Sol cálido y sutil con rayos redondeados.
 */
export const GentleSun: React.FC<IconProps> = ({
  size = 32,
  className = "",
  color = "#F6C878",
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
      strokeWidth="2"
      strokeLinecap="round"
      style={{
        width: pixelSize,
        height: pixelSize,
        maxWidth: pixelSize,
        maxHeight: pixelSize,
        ...style,
      }}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="4.5" fill={color} stroke="none" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </svg>
  );
};

/**
 * Flor de 5 pétalos redondeados.
 */
export const FivePetalFlower: React.FC<IconProps> = ({
  size = 28,
  className = "",
  color = "#8B7FD1",
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
      style={{
        width: pixelSize,
        height: pixelSize,
        maxWidth: pixelSize,
        maxHeight: pixelSize,
        ...style,
      }}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="2.5" fill="#F6C878" />
      <circle cx="12" cy="6.5" r="3" fill={color} opacity="0.85" />
      <circle cx="17.2" cy="10.2" r="3" fill={color} opacity="0.85" />
      <circle cx="15.2" cy="16.5" r="3" fill={color} opacity="0.85" />
      <circle cx="8.8" cy="16.5" r="3" fill={color} opacity="0.85" />
      <circle cx="6.8" cy="10.2" r="3" fill={color} opacity="0.85" />
    </svg>
  );
};

/**
 * Pequeño corazón manuscrito con dimensiones estrictas fijas.
 */
export const LittleHeartDoodle: React.FC<IconProps> = ({
  size = 18,
  className = "",
  color = "#8B7FD1",
  style,
  ...props
}) => {
  const pixelSize = typeof size === "number" ? `${size}px` : size;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
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
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

/**
 * Puntos decorativos en arco suave.
 */
export const CurvedDottedLine: React.FC<IconProps> = ({
  size = 48,
  className = "",
  color = "#8B7FD1",
  style,
  ...props
}) => {
  const numSize = typeof size === "number" ? size : parseInt(String(size), 10) || 48;
  return (
    <svg
      width={numSize}
      height={Math.round((numSize * 30) / 50)}
      viewBox="0 0 50 30"
      fill="none"
      style={{
        width: `${numSize}px`,
        height: `${Math.round((numSize * 30) / 50)}px`,
        maxWidth: "100%",
        ...style,
      }}
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M5 25C15 15 35 10 45 20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 6"
      />
    </svg>
  );
};
