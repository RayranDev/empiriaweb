import React from "react";

export const SparkleStar: React.FC<{ className?: string; color?: string }> = ({
  className = "w-4 h-4",
  color = "#8B7FD1",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ color }}
    aria-hidden="true"
  >
    <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
  </svg>
);

export const PlusSparkle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-3.5 h-3.5",
  color = "#B4C4EA",
}) => (
  <span
    className={`font-bold inline-block select-none pointer-events-none ${className}`}
    style={{ color }}
    aria-hidden="true"
  >
    +
  </span>
);

export const SoftLeaf: React.FC<{ className?: string; color?: string; flip?: boolean }> = ({
  className = "w-6 h-6",
  color = "#8B7FD1",
  flip = false,
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flip ? "-scale-x-100" : ""}`}
    aria-hidden="true"
  >
    <path
      d="M6 26C10 20 12 12 26 6C26 20 18 22 6 26Z"
      fill={color}
      opacity="0.85"
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

export const LeafBranch: React.FC<{ className?: string }> = ({ className = "w-20 h-auto" }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 70C30 55 55 40 85 15"
      stroke="#8B7FD1"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Leaves attached to branch */}
    <path
      d="M32 55C32 46 40 44 46 47C46 56 38 58 32 55Z"
      fill="#A8C5E8"
      opacity="0.9"
    />
    <path
      d="M50 42C48 33 55 30 62 33C64 42 57 45 50 42Z"
      fill="#8B7FD1"
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

export const LittleHeartDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-4 h-4",
  color = "#8B7FD1",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ color }}
    aria-hidden="true"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);
